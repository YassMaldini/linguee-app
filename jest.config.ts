import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  verbose: true,
});
