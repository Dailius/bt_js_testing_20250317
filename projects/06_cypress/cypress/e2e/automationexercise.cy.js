/// <reference types="cypress" />


describe("automationexercise.com automated tests", () => {
  const listOfProductsInCart = 'table[id="cart_info_table"] tbody tr'

  beforeEach(() => {
    cy.visit("https://automationexercise.com");
  });

  it("Test Case 12: Add Products in Cart", () => {
    cy.clickOnProductsOfNavigationMenu();

    cy.addProductToCart(1);
    cy.clickOnContinueShopping();
    
    cy.addProductToCart(2);
    cy.clickOnViewCart();

    cy.get(listOfProductsInCart).should("have.length", 2);

    cy.getProductPrice(1)
      .should("be.visible")
      .then(($tag) => {
        expect($tag.text().trim()).equal("Rs. 500")
      });

    cy.get('tr[id="product-1"] > td[class="cart_quantity"]')
      .contains("1")
      .should("be.visible");
    cy.get('tr[id="product-1"] > td[class="cart_total"]')
      .contains("5")
      .should("be.visible");
      
    cy.get('tr[id="product-2"] > td[class="cart_price"]')
      .contains("400")
      .should("be.visible");
    cy.get('tr[id="product-2"] > td[class="cart_quantity"]')
      .contains("1")
      .should("be.visible");
    cy.get('tr[id="product-2"] > td[class="cart_total"]')
      .contains("400")
      .should("be.visible");
  });
});
