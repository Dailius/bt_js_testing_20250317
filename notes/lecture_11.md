1. Repeat and check homework
2. Boundary values
3. Pesticide paradox
4. Exercise to register bugs into Jira

## 1. Repeat and check homework


## 2. Boundary values

[0,10] -> 1,2,3,4,5,6,7,8,9,10
taiko rybines reiksmes => min, max ir visas reiksmes salia
min  =  0, -1 -> input laukelis nepriima reiksmes, t.y. ismeta klaida
min  =  0, 0 -> input laukelis arba dropdown list renkames min reiksme.
min  =  0, 1 -> input laukelis arba dropdown list renkames min reiksme.

max = 10, 9 -> input laukelis arba dropdown list renkames min reiksme
max = 10, 10 -> input laukelis arba dropdown list renkames min reiksme
max = 10, 11 -> input laukelis nepriima reiksmes, t.y. ismeta klaida

registruotis asm nuo 18m.

<18 message: negalima resgistruotis.
>=18 message: uzregistruota

amziu: 17  -> message: negalima resgistruotis.
amziu: 18  -> uzregistruota

3 coffee regular price
4 coffee discount price

TS gives coffee with discount:
1. add 3 coffee with regular price
2. Add 1 coffee with discount 
Expected: 1 coffee with discount listed in total amount

TS removes coffee with discount:
1. add 3 coffee with regular price
2. Add 1 coffee with discount 
3. Remove 1 coffee with regular price

Expected: 1 coffee with discount is not listed in total amount


## 3. Pesticide paradox
https://bugbug.io/blog/software-testing/pesticide-paradox/   

The Pesticide Paradox in software testing is a principle stating that if the same set of test cases is executed repeatedly, they will eventually fail to detect new defects.  

This concept, introduced by Boris Beizer in Software Testing Techniques, draws an analogy to how insects develop resistance to pesticides when the same chemicals are used repeatedly.

#### Implications of the Pesticide Paradox
1. Diminishing Effectiveness – Running the same test cases repeatedly only finds the defects they are designed to catch, missing newly introduced bugs.  
   
2. Need for Test Case Evolution – Test cases must be regularly reviewed, modified, and expanded to remain effective.

3. Importance of Exploratory Testing – In addition to automated and scripted tests, exploratory testing can help uncover new defects.

4. Regression Testing Challenges – Automated regression tests should be updated as the application evolves to ensure they remain relevant.

#### How to Overcome the Pesticide Paradox
Review and update test cases to cover new functionalities and edge cases.  

Use different testing techniques such as boundary value analysis, equivalence partitioning, and risk-based testing.  

Incorporate exploratory testing alongside automated and manual testing.  

Leverage AI/ML-based test automation to adapt and generate new test cases dynamically.  

This paradox underscores the importance of continuous test improvement to maintain high software quality.


## 4. Exercise to register bugs into Jira
https://academybugs.com/find-bugs/

Register and download Postman:  
https://www.postman.com/downloads/

