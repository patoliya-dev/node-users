
import { defaults as tsjPreset } from 'ts-jest/presets'

module.exports = {
    transform: { ...tsjPreset.transform },
    testEnvironment: 'node',
    testPathIgnorePatterns: ['.d.ts', '.js'],
    setupFilesAfterEnv: ['./test/jest.setup.ts'],
    verbose: true,
    // testSequencer: './test/testSequencer.ts',
    coverageDirectory: './test/testResult/coverage/',
    coverageReporters: ['html', 'text'],
    // coverageThreshold: {
    //   global: {
    //     branches: 100,
    //     functions: 100,
    //     lines: 100,
    //     statements: 100
    //   }
    // }
  }
