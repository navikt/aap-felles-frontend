module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  modulePathIgnorePatterns: ['cjs', 'esm'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/setUpJest.ts'],
};
