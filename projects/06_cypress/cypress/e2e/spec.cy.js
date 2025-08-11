/// <reference types="cypress" />

describe('template spec', () => {
  // it('passes', () => {
  //   cy.visit('https://example.cypress.io')
  // })

  it('Saucedemo login page', ()=>{
    cy.visit('https://www.saucedemo.com/');

    cy.contains('Swag Labs');
    // cy.contains('script'); // do not works as looking for text
    cy.get('script');
    cy.get('div');
    cy.contains('div', 'Swag Labs').should('be.visible');
    cy.contains('h4', 'Accepted usernames').should('be.visible');


  });
})