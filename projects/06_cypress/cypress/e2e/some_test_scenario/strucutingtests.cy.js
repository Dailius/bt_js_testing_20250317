describe('TS01 test scenario', () => {
    it('TC01.01 Load page example.cyperss.io', () => {
        cy.visit('https://example.cypress.io')
        cy.contains("h1","Kitchen Sink").should('be.visible')
    })

    it('TC01.02 some test name', () => {
        cy.log("TC01.02 some test name");
    })

    it('TC01.03 some test name', () => {
        cy.log("TC01.03 some test name");
    })
})


describe('TS02 test scenario', () => {
    it('TC02.01 Load page examplw.cyperss.io', () => {
        cy.visit('https://example.cypress.io')
        cy.contains("h1","Kitchen Sink").should('be.visible')
    })

    it('TC02.02 some test name', () => {
        cy.log("TC02.02 some test name");
    })

    it('TC02.03 some test name', () => {
        cy.log("TC02.03 some test name");
    })
})


describe('TS03 test scenario / test case', () => {

    before(() => {
    // root-level hook
    // runs once before all tests
    })

    beforeEach(() => {
    // root-level hook
    // runs before every test block
    })

    describe('TS03.1 test scenario / test case', () => {

        before(() => {
        // root-level hook
        // runs once before all tests
        })

        beforeEach(() => {
        // root-level hook
        // runs before every test block
        })

        it('TC03.01.01 Load page example.cyperss.io', () => {
            cy.log("TC03.01.01 some test name");
        })
    
        it('TC03.01.02 some test name', () => {
            cy.log("TC03.01.02 some test name");
        })
    
        it('TC03.01.03 some test name', () => {
            cy.log("TC03.01.02 some test name");
        })
    })

    describe('TS03.2 test scenario / test case', () => {
        it('TC03.02.01 Load page examplw.cyperss.io', () => {
            cy.log("TC03.02.01 some test name");
        })
    
        it('TC03.02.02 some test name', () => {
            cy.log("TC03.02.02 some test name");
        })
    
        it('TC03.02.03 some test name', () => {
            cy.log("TC03.02.02 some test name");
        })
    })


    afterEach(() => {
    // runs after each test block
    })

    after(() => {
    // runs once all tests are done
    })
})