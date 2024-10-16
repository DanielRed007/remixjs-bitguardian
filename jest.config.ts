export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    // For static assets like CSS files or images, if you want to mock them
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // This will be used to set up jest-dom
  testPathIgnorePatterns: ["/node_modules/", "/build/"], // Avoid testing node_modules and build output
};
