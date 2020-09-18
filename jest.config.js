module.exports = {
  verbose: true,
  roots: ['<rootDir>/__tests__'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {"^.+\\.[jt]sx?$": "babel-jest"},
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'css', 'json', 'node'],
  collectCoverage: true,
};

