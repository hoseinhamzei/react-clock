module.exports = {
  "preset": "ts-jest/presets/js-with-ts",
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "moduleNameMapper": {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/dist/",
    "/lib/"
  ]
}