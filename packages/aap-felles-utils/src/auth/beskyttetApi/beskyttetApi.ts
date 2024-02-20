import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { isMock } from '../../environments';
import { logError, logWarning, logInfo } from '../../logger';
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
        logWarning('handling request for mocked environment, should not happen in production');
        return handler(req, res);
      }
      const bearerToken: string | null | undefined = req.headers['authorization'];
      if (!bearerToken) {
        logWarning(`beskyttetApi: ingen bearer token ${req?.url}` );
        return send401();
      }
      try {
        await verifyIdportenAccessToken(bearerToken);
      } catch (e) {
        logWarning(
          'kunne ikke validere idportentoken i beskyttetApi',
          e
        );
        return send401();
      }
      return handler(req, res);
    } catch (e) {
      if (e instanceof ErrorMedStatus) {
        logInfo(`sending error with status ${e.status} and message ${e.message}`);
        return res.status(e.status).json({ message: e.message });
      } else {
        logError('handling error in beskyttetApi', e);
      }
      return send500();
    }
  };
}
