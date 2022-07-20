import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "nedwsApp",
  viewportHeight: 1000,
  viewportWidth: 1280,

  retries: {
    runMode: 2,
    openMode: 1,
  },

  env: {
    apiUrl: "http://localhost:8000",
    mobileViewportWidthBreakpoint: 414,
    coverage: false,
    codeCoverage: {
      url: "http://localhost:3000/__coverage__",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000/",
  },
});
