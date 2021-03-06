module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/*.{js}", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      branches: 100,
      funtions: 100,
      lines: 100,
      statements: 100
    }
  }
};
