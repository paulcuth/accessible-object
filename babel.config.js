module.exports = (api) => {
  api.cache(() => process.env.NODE_ENV === "production");

  return {
    presets: ["@babel/react", "@babel/preset-env"],
    plugins: ["@babel/transform-runtime"],
  };
};
