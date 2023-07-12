import { Config } from "jest";

const config: Config = {
	collectCoverageFrom: [
		"src/data/hooks/*.tsx",
		"src/pages/**/*.tsx",
		"src/ui/components/**/*.tsx",
		"!src/data/hooks/index.tsx",
	],
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageReporters: ["text-summary", "lcov"],
	moduleFileExtensions: ["tsx", "ts", "js", "json"],
	preset: "jest-expo",
	roots: ["<rootDir>/src"],
	setupFilesAfterEnv: [
		// '<rootDir>/jest.setup.ts',
	],
	testMatch: ["<rootDir>/src/__tests__/**/*.spec.{ts,tsx}"],
	transformIgnorePatterns: ["<rootDir>/node_modules/"],
};

export default config;
