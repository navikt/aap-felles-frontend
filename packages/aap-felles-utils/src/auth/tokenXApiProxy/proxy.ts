import axios from 'axios';
import { randomUUID } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next/dist/shared/lib/utils';
import pino from 'pino';
import { Counter, Histogram } from 'prom-client';

import { logWarning, logInfo, logError } from '../../logger';
import { getTokenX } from '../getTokenX';
import { ErrorMedStatus } from '../lib/ErrorMedStatus';

import Logger = pino.Logger;

const NAV_CALLID = 'Nav-CallId';

interface Opts {
  url: string;
  prometheusPath: string;
  audience: string;
  method: 'GET' | 'POST' | 'DELETE';
  data?: string;
  req?: NextApiRequest;
  contentType?: string;
  rawResonse?: boolean;
  noResponse?: boolean;
  bearerToken?: string;
  metricsTimer?: Histogram;
  metricsStatusCodeCounter?: Counter;
  logger?: Logger<string>;
}

export const tokenXApiProxy = async (opts: Opts) => {
  logInfo(`${opts.req?.method} ${opts.url}`);

  const idportenToken = opts.bearerToken!.split(' ')[1];
  let tokenxToken;
  try {
    tokenxToken = await getTokenX(idportenToken, opts.audience);
  } catch (err: any) {
    logError('getTokenXError', err );
  }

  const stopTimer = opts.metricsTimer ? opts.metricsTimer.startTimer({ path: opts.prometheusPath }) : () => {};
  const requestId = randomUUID();
  const response = await fetch(opts.url, {
    method: opts.method,
    body: opts.data,
    headers: {
      Authorization: `Bearer ${tokenxToken}`,
      'Content-Type': opts.contentType ?? 'application/json',
      [NAV_CALLID]: requestId,
    },
  });
  stopTimer();
  opts.metricsStatusCodeCounter &&
    opts.metricsStatusCodeCounter.inc({
      path: opts.prometheusPath,
      status: response.status,
    });

  if (response.status < 200 || response.status > 300) {
    const headers = response.headers.get('content-type');
    const isJson = headers?.includes('application/json') || headers?.includes('application/problem+json');
    let data;
    try {
      data = isJson ? await response.json() : response.text();
    } catch (err: any) {
      logError(`unable to parse data from ${opts.url}`, err);
    }
    const message = `tokenXProxy: status for ${opts.url} er ${response.status}: ${response.statusText}.`;
    if (response.status >= 500 || response.status === 400) {
      logError(message, undefined, data?.[NAV_CALLID]);
    } else if (response.status !== 404) {
      logWarning(message, undefined, data?.[NAV_CALLID]);
    }
    throw new ErrorMedStatus(
      `tokenXProxy: status for ${opts.url} er ${response.status}.`,
      response.status,
      data?.[NAV_CALLID]
    );
  }
  logInfo(`${opts.req?.method} ${opts.url}. Status: ${response.status}`);
  if (opts.noResponse) {
    return undefined;
  }
  if (opts.rawResonse) {
    return response;
  }
  if (response.status === 204) {
    return undefined;
  }
  return await response.json();
};

interface AxiosOpts {
  url: string;
  prometheusPath: string;
  audience: string;
  req: NextApiRequest;
  res: NextApiResponse;
  bearerToken?: string;
  metricsTimer?: Histogram;
  metricsStatusCodeCounter?: Counter;
  logger?: Logger<string>;
}

export const tokenXApiStreamProxy = async (opts: AxiosOpts) => {
  const idportenToken = opts.bearerToken!.split(' ')[1];
  const tokenxToken = await getTokenX(idportenToken, opts.audience);

  logInfo(`Filopplasting ${opts.url}, content-type: ${opts.req?.headers['content-type']}`);
  const requestId = randomUUID();
  try {
    const stopTimer = opts.metricsTimer ? opts.metricsTimer.startTimer({ path: opts.prometheusPath }) : () => {};
    const { data } = await axios.post(opts.url, opts.req, {
      responseType: 'stream',
      headers: {
        'Content-Type': opts.req?.headers['content-type'] ?? '', // which is multipart/form-data with boundary included
        Authorization: `Bearer ${tokenxToken}`,
        [NAV_CALLID]: requestId,
      },
    });
    stopTimer();
    opts.metricsStatusCodeCounter &&
      opts.metricsStatusCodeCounter.inc({
        path: opts.prometheusPath,
        status: data.status,
      });
    logInfo(`Filopplasting ${opts.url} OK`);
    return data.pipe(opts.res);
  } catch (e: any) {
    if (e?.response?.status) {
      e.response.data?.pipe(opts.res);
      opts.metricsStatusCodeCounter &&
        opts.metricsStatusCodeCounter.inc({
          path: opts.prometheusPath,
          status: e.response.status,
        });
      return opts.res.status(e.response.status);
    }
    logError(`tokenXAxiosError`, e, e?.request?.headers?.[NAV_CALLID]);
    return opts.res.status(500).json('tokenXAxiosProxy server error');
  }
};
