const nextJest = require('next/jest');

const createJestConfig = nextJest({dir: './'});

const jestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper : {
        '^@/(.*)$': '<rootDir>/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(jestConfig);