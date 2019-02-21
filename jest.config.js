module.exports = {
    verbose: false,
    globals: {},
    collectCoverage: true,
    collectCoverageFrom: [
        "src/js/**/*.js",
        "!<rootDir>/node_modules/",
    ],
    reporters: [
        'default',
        [
            'jest-junit',
            { output: 'reports/junit.xml' },
        ],
    ],
    coverageDirectory: '<rootDir>/reports/',
    coverageReporters: [
        'text-summary',
        'lcov',
    ],
    moduleDirectories: [
        'node_modules',
        'src',
        'test',
    ],
    transform: {
        "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.svg$": "jest-svg-transformer",
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$",
        "^.+\\.module\\.(css|sass|scss|less)$",
    ],
    moduleNameMapper: {
        "\\.(css|less|png)$": "<rootDir>/test/__mocks__/styleMock.js",
        "mlb-media-player": "<rootDir>/test/__mocks__/mlb-media-player.js",
    },
    moduleFileExtensions: ['js'],
    setupTestFrameworkScriptFile: '<rootDir>/test/setup-tests.js',
    snapshotSerializers: ['enzyme-to-json/serializer'],
};
