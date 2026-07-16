import { dirname, join } from "path";
module.exports = {
  stories: [],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {

    }
  },

  core: {
    // 👈 Disables telemetry
    disableTelemetry: true
  },

  docs: {
    autodocs: true
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
