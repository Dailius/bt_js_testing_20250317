/// <reference types="cypress" />

describe("Demo file", () => {
  it("My first test", () => {
    cy.visit("http://localhost:8086/demo.html");
  });

  it("Demo", () => {
    cy.visit("http://localhost:8086/demo.html");

    cy.get("h1").should("be.visible");
    cy.get("h1").first().should("be.visible");
    cy.get("h1").eq(0).should("be.visible");
    cy.get("h1").eq(1).should("be.visible");

    cy.get(".some-class-a").should("be.visible");
    cy.get(".some-class-b").should("be.visible");

    cy.get(".some-class-a.some-class-b").should("be.visible");

    cy.get('p[class="some-class-a"]').should("be.visible");
    cy.get('p[class="some-class-a some-class-b"]').should("be.visible");

    cy.get("#some_id").should("be.visible");
    cy.get("p[id=some_id]").should("be.visible");
    cy.get("span[id=some_id]").should("be.visible");

    cy.log(`---- LOOP ----`);

    cy.get('p[class="mrg"]')
      .eq(2)
      .then(($tag) => {
        cy.log(`Text from 3rd element: ${$tag.text().trim()}`);
      });

    cy.get('p[class="mrg"]').each(($elem, index) => {
      cy.log(`Index:${index} / ${$elem.text().trim()}`);
      // $elem.should() // don't do this way
      // cy.wrap($elem).should('be.visible');
      expect($elem, `Message tag no: ${index + 1}`).to.be.visible;
    });

    cy.log("**********");
    cy.log("***** COMBINATOR SELECTORS *****");
    cy.log("**********");
    cy.log("**** Child selector [>] ******");

    cy.get('[data-qa="comb_slc"] > p');
    cy.get('[data-qa="comb_slc"] > span');
    cy.get('[data-qa="comb_slc"] > span > p');

    cy.log("**** Descendant selector [space] ******");
    cy.get('[data-qa="comb_slc"] p');

    cy.log("**** Sibling selector [+] ******");
    cy.get('[data-qa="comb_slc"] + div');
    cy.get('[data-qa="comb_slc"] + + p');
    cy.get('[data-qa="comb_slc"] + + + p');

    cy.get('[data-qa="sib_slc"] + p');
    cy.get('[data-qa="sib_slc"] + + p');

    cy.log("**** General Sibling selector [~] ******");
    cy.get('[data-qa="comb_slc"] ~ p');
    cy.get('[data-qa="sib_slc"] ~ p');

    cy.log("**** Multiple combinator ******");
    cy.get("#comb_slc_comb > ul");
    cy.get("#comb_slc_comb > ul li");
    cy.get("#comb_slc_comb > ul > li + + li");
    cy.get("#comb_slc_comb > ul > li + li");
  });

  it("within() example", () => {
    cy.visit("http://localhost:8086/demo.html");

    cy.get("#comb_slc_comb").within(() => {
      cy.get("li").eq(0).should("be.visible");
      cy.get("li").eq(1).should("be.visible");
      cy.get("li").eq(2).should("be.visible");
    });
  });

  it("Example click on hovered button", () => {
    cy.visit("http://localhost:8086/demo.html");

    // cy.get('button[class="hover-button"]')
    // .click({force: true});

    // cy.get(".hover-box")
    //   .trigger("mouseover", { force: true })
    //   .find('button[class="hover-button"]')
    //   .invoke("show")
    //   .click();

    cy.get('button[class="hover-button"]').invoke("show").click();

    cy.get(".hidden-text")
      .contains("You clicked the button")
      .should("be.visible");
  });
});
