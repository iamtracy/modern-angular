const rootMain = require('../../../../.storybook/main')


module.exports = {
  ...rootMain,
  core: {
    ...rootMain.core,
    builder: 'webpack5',
  },
  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.ts',
  ],
  addons: [
    ...rootMain.addons,
    '@storybook/addon-actions',
    '@storybook/addon-controls',
  ],
  webpackFinal: async (config, { configType }) => {
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType })
    }
    return config
  },
};
