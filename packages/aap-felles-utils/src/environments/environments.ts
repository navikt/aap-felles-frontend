const MOCK_ENVIRONMENTS = ['localhost', 'labs'];

export const isMock = () => MOCK_ENVIRONMENTS.includes(process.env.NEXT_PUBLIC_ENVIRONMENT ?? '');

export const test = () => console.log('test');

export const isLocal = () => {
  return process.env.NEXT_PUBLIC_ENVIRONMENT === 'localhost';
};

export const isDev = () => {
  return process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev';
};
