module.exports = {
  cache: true, // From module 1
  presets: [
    "babel-preset-expo", // From module 1
    "module:metro-react-native-babel-preset", // From module 2
  ],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ], // From module 2
  ],
};
