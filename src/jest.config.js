module.exports = {
    preset: 'jest-preset-angular',
    roots: ['<rootDir>/src/'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    transform: {
      '^.+\\.(ts|html)$': 'jest-preset-angular',
    },
    moduleNameMapper: {
      'src/(.*)': '<rootDir>/src/$1',
      '@core/(.*)': '<rootDir>/src/app/core/$1',
      '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    },
    transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
    snapshotSerializers: [
      'jest-preset-angular/build/AngularSnapshotSerializer.js',
      'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
    collectCoverage: true,
    coverageReporters: ['html'],
    coverageDirectory: 'coverage/',
  };
  