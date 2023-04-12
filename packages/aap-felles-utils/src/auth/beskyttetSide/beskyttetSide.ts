import { GetServerSidePropsResult, NextPageContext } from 'next';

import { isMock } from '../../environments';
import { logger } from '../../logger';
import { getAccessToken } from '../lib/accessToken';
import { verifyIdportenAccessToken } from '../lib/verifyIdPortenAccessToken';

type PageHandler = (context: NextPageContext) => void | Promise<GetServerSidePropsResult<{}>>;

const wonderwallRedirect = {
  redirect: {
    destination: process.env.WONDERWALL_REDIRECT_DESTINATION ?? '',
    permanent: false,
  },
};

export function beskyttetSide(handler: PageHandler) {
  return async function withBearerTokenHandler(context: NextPageContext): Promise<ReturnType<typeof handler>> {
    if (isMock()) {
      return handler(context);
    }

    if (!process.env.WONDERWALL_REDIRECT_DESTINATION) {
      throw new TypeError('Miljøvariabelen "WONDERWALL_REDIRECT_DESTINATION må være satt');
    }
    const bearerToken = getAccessToken(context);

    if (!bearerToken) {
      return wonderwallRedirect;
    }

    try {
      await verifyIdportenAccessToken(bearerToken);
    } catch (e) {
      logger.warn({
        message: 'kunne ikke validere idportentoken i beskyttetSide',
        error: e?.toString(),
      });
      return wonderwallRedirect;
    }
    return handler(context);
  };
}

export const beskyttetSideUtenProps = beskyttetSide(async (): Promise<GetServerSidePropsResult<{}>> => {
  return {
    props: {},
  };
});
