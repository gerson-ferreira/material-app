module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/src/test.ts',
  ],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@env': '<rootDir>/src/environments/environment',
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  collectCoverageFrom: ['src/app/**/*.ts'],
  coveragePathIgnorePatterns: [
    'src/app/*-routing.module.ts',
    'src/app/*.module.ts',
    'src/app/*.array.ts',
    'src/app/shared/models/',
    'src/app/shared/interfaces/',
  ],
};
