/// <reference types="cypress" />

describe('template spec', () => {
  // it('passes', () => {
  //   cy.visit('https://example.cypress.io')
  // })

  it('Saucedemo login page', ()=>{
    cy.visit('/');

    cy.contains('Swag Labs');
    // cy.contains('script'); // do not works as looking for text
    cy.get('script');
    cy.get('div');
    cy.contains('div', 'Swag Labs').should('be.visible');
    cy.contains('h4', 'Accepted usernames').should('be.visible');
  });

  it('Login with valid data [STANDARD USER]', ()=>{
    cy.visit('/');
    // cy.get('input[data-test="username"]').type('standard_user')
    cy.get('#user-name').type('standard_user')
    cy.get('input[data-test="password"]').type('secret_sauce')
    cy.get('input[data-test="login-button"]').click()

    cy.get('span[data-test="title"]').contains('Products').should('be.visible')
  })

  it('Login with valid data [PERFORMANCE GLITCH]', ()=>{
    cy.visit('/');
    cy.get('input[data-test="username"]').type('performance_glitch_user')
    cy.get('input[data-test="password"]').type('secret_sauce')
    cy.get('input[data-test="login-button"]',{timeout: 1000}).click()

    cy.get('span[data-test="title"]', {timeout: 8000}).contains('Products').should('be.visible')
  })
})