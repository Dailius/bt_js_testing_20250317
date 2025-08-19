1. Repeat and check homework
2. xpath selector
3. Intro to CI/CD
4. Virtual machines
5. Cypress run


## 1. Repeat and check homework

## 2. xpath selector

DevTools -> Elements open xpath selector search input -> CTRL + F

```
search in whole body:
//

search in whole body any tag:
//*

//tag_name
//a
//div

//*[@id]
//tr[@id]
//tr[@id='product-1']

//body//@*[contains(name(),'data-testid')]
//*[@data-testid]

//div[@data-testid]
(//div[@data-testid])[126]
(//div[@data-testid])[1]

Functions:
text() -> between tag pair
contains() -> text or name sniped
name() -> //@*[contains(name(),'data-testid')]

contains(arg1, arg2)
arg1 -> function (text, name), attribute name (@id, @href, @class)
arg2 -> relevant text sniped

//*[text()='full correct text']
```

https://www.cypress.io/blog/understanding-selectors-in-testing

Deprecated package:  
https://www.npmjs.com/package/cypress-xpath  

eslint-plugin-cypress supported:  
https://www.npmjs.com/package/eslint-plugin-cypress  


https://www.w3schools.com/xml/xpath_syntax.asp  


## 3. Intro to CI/CD
![](/pictures/cicd.png)

CI/CD - continuos integration / continuos delivery 


## 4. Virtual machines

![](/pictures/virtualisation.png)  


![](/pictures/saas.png) 

* IaaS - Infrastructure as a Service  
* PaaS - Platform as a Service  
* SaaS - Software as a Service 

Cloud service -> azure, aws, google could, hostinger ...

## 5. Cypress run

Cypress browser: 
https://docs.cypress.io/app/references/launching-browsers  

https://docs.cypress.io/app/references/command-line  

Cypress configuration:  
https://docs.cypress.io/app/references/configuration


