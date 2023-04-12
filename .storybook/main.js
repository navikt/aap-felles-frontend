module.exports = {
  stories: [
    "../packages/aap-felles-react/**/*.stories.mdx",
    "../packages/aap-felles-react/**/*.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
    builder: "webpack5",
  },
};
