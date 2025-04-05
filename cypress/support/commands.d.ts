/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      saveLocalStorage(): void;
      restoreLocalStorage(): void;
    }
  }
}

export {}; // Ensures this file is treated as a module
