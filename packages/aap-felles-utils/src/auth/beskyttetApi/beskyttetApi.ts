import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { isMock } from '../../environments';
import { logger } from '../../logger';
import { ErrorMedStatus } from '../lib/ErrorMedStatus';
import { verifyIdportenAccessToken } from '../lib/verifyIdPortenAccessToken';

export function beskyttetApi(handler: NextApiHandler): unknown | Promise<unknown> {
  return async function withBearerTokenHandler(req: NextApiRequest, res: NextApiResponse) {
    function send401() {
      return res.status(401).json({ message: 'Access denied' });
    }
    function send500() {
      return res.status(500).json({ message: 'NextJS internal server error' });
    }

    try {
      if (isMock()) {
        logger.warn('handling request for mocked environment, should not happen in production');
        return handler(req, res);
      }
      const bearerToken: string | null | undefined = req.headers['authorization'];
      if (!bearerToken) {
        logger.warn({ message: 'ingen bearer token', path: req?.url });
        return send401();
      }
      try {
        await verifyIdportenAccessToken(bearerToken);
      } catch (e) {
        logger.warn({
          message: 'kunne ikke validere idportentoken i beskyttetApi',
          error: e?.toString(),
        });
        return send401();
      }
      return handler(req, res);
    } catch (e) {
      if (e instanceof ErrorMedStatus) {
        logger.info(`sending error with status ${e.status} and message ${e.message}`);
        return res.status(e.status).json({ message: e.message });
      } else {
        logger.error({
          message: 'handling error in beskyttetApi',
          error: e?.toString(),
        });
      }
      return send500();
    }
  };
}
