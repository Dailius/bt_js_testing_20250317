/// <reference types="cypress" />

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("TS_01 Start game", () => {
    it("TC_1.1. First player's move", () => {
      cy.playersTurn(5);
      cy.selectedTurnSquare(5).should('have.text', 'X')
    });

    it("TC_1.2. Second player's move", () => {});
  });

  describe("TS_02 Restart game", () => {
    it("TC_2.1. Restart game with click on 'Go to game start'", () => {});

    it("TC_2.2. Restart game with reloading page", () => {});
  });

  describe("TS_03 Calculate winner", () => {
    it("TC_3.1. Winner is X", () => {});

    it("TC_3.2. Winner is 0", () => {});

    it("TC_3.3. Even results", () => {});
  });

  describe("TS_04 Action history", () => {
    it("TC_4.1. Edit actions (Remove)", () => {});

    it("TC_4.2. Few action history", () => {});

    it("TC_4.3. Back to previous action/s", () => {});
  });
});
