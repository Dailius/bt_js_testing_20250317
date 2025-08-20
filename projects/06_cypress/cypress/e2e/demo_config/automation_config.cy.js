/// <reference types="cypress" />

describe('Some group of tests',()=>{
    beforeEach(()=>{
        Cypress.config({
            defaultCommandTimeout: 5000,
            baseUrl: 'https://automationexercise.com'
        });
    });

    it('Open page: login', ()=>{
        cy.visit(Cypress.env('endpoint_login'));

        cy.viewport('iphone-6');
        cy.wait(2000);

        cy.viewport('ipad-mini');
        cy.wait(2000);

        cy.viewport('samsung-note9');
        cy.wait(2000);

        cy.viewport('macbook-15');
        cy.wait(2000);
    });
    
    it('Open page: products', ()=>{
        cy.visit(Cypress.env('endpoint_products'));
    });
    
    it('Open page: view cart', ()=>{
        cy.visit(Cypress.env('endpoint_view_cart'));
    });
})