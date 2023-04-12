import ecsFormat from '@elastic/ecs-pino-format';
import pino, { Logger, LoggerOptions } from 'pino';

const myEcsFormat = (format: LoggerOptions) => format;

export const logger: Logger<LoggerOptions> = pino({
  ...myEcsFormat(ecsFormat()),
  formatters: {
    level: (label) => {
      return { level: label };
    },
  },
});
