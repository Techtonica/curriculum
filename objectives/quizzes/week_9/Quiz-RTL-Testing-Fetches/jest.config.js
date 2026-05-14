module.exports = {
    // The root directory that Jest should scan for tests and modules
    rootDir: ".",
  
    // The test environment that will be used for testing
    testEnvironment: "jsdom",
  
    // A list of paths to directories that Jest should use to search for files in
    roots: ["<rootDir>/src"],
  
    // File extensions Jest will look for
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  
    // Module name mapper to handle imports without extensions
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
  
    // Setup files after environment is set up
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  
    // Transform files with babel-jest
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
  
    // IMPORTANT: This line tells Jest to transform certain node_modules
    // By default, node_modules are not transformed
    transformIgnorePatterns: ["node_modules/(?!(prismjs|@testing-library|react-dom|scheduler)/)"],
  
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
  }
  
  