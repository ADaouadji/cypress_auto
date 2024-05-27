// Cypres -spec

/// <reference types="Cypress" />

describe('My First Test suite', () => {
  it('first test case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //cy.get('.search-keyword').type('cu');
  })
})