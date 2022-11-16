export default ({ config }) => ({
  ...config,
  ...(process.env.IS_DEV !== 'true' && {
    jsEngine: 'hermes',
  }),
  name: process.env.APP_NAME,
  ios: {
    ...config.ios,
    bundleIdentifier: process.env.IOS_BUNDLE_ID,
  },
  android: {
    ...config.android,
    package: process.env.ANDROID_PACKAGE_NAME,
    ...(Boolean(process.env.GOOGLE_SERVICES_FILE_PATH) && {
      googleServicesFile: process.env.GOOGLE_SERVICES_FILE_PATH,
    }),
  },
});
