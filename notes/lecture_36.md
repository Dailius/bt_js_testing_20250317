1. Hooks
2. Combinator selectors
3. Readme
4. xpath **selector**

## 1. Hooks

[Hooks link](https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests#Hooks)

```js
    before(() => {
    // root-level hook
    // runs once before all tests
    })

    beforeEach(() => {
    // root-level hook
    // runs before every test block
    })

    afterEach(() => {
    // runs after each test block
    })

    after(() => {
    // runs once all tests are done
    })
```

## 2. Combinator selectors

Cypress selectors (including xpath):  
https://www.cypress.io/blog/understanding-selectors-in-testing  

1. Child Selector:  
   `cy.get('#myDiv > p');`  
   Selects only direct `<p>` children of `<div id="myDiv">`

2. Descendant Selector (Space ):  
   `cy.get('#myDiv p');`  
   Selects all `<p>` elements inside `<div id="myDiv">`

3. Adjacent Sibling Selector (+):  
   `cy.get('#myDiv + p');`  
   Selects the first `<p>` that comes immediately after `<div id="myDiv">`

4. General Sibling Selector (~):   
   `cy.get('#myDiv ~ p');`  
   Selects all `<p>` siblings that come after `<div id="myDiv">`

5. Combining Multiple Combinators:  
   `cy.get('#myDiv > ul > li + li');`  
   Selects the second `<li>` inside `<ul>` that is a direct child of #myDiv
