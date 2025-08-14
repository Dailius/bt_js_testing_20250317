// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("clickOnProductsOfNavigationMenu", () => {
  cy.get('a[href="/products"]').click();
});

Cypress.Commands.add("addProductToCart", (productId) => {
  cy.get(`div[class="overlay-content"] a[data-product-id="${productId}"]`)
    .invoke("show")
    .click({ force: true });
});

Cypress.Commands.add("clickOnContinueShopping", () => {
  cy.get('div[class="modal-content"] button[data-dismiss="modal"]').click();
});

Cypress.Commands.add("clickOnViewCart", () => {
  cy.get('div[class="modal-content"] a[href="/view_cart"]').click();
});

Cypress.Commands.add("getProductPrice", (productId) =>
  cy.get(`tr[id="product-${productId}"] > td[class="cart_price"]`)
);
