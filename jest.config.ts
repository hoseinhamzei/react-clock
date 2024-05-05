module.exports = {
  "preset": "ts-jest/presets/js-with-ts",
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "moduleNameMapper": {
    "\\.(s?css|less)$": "identity-obj-proxy",
    '\\.(png|jpg|webp|ttf|woff|woff2|svg|mp4)$': '<rootDir>/__mocks__/fileMock.ts'
  },
  "testEnvironment": "jsdom",
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/dist/",
    "/lib/"
  ]
}