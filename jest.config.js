module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": "babel-jest",
  },
  testRegex: "\\.test\\.js$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
