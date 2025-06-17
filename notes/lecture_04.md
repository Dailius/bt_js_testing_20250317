1. Repeat and check homework
2. Test Scenarios (TS) and Test Cases (TC)

## 1. Repeat and check homework


## 2. Test Scenarios (TS) and Test Cases (TC)

TS = 1 functionality

TS 1. Registracija
TS 2. Prisijungimas
TS 3. perkiu katalogas (pagarindinis langas)
TS 4. prekiu filtrai
TS 5. krepselis
TS 6. okejimo formavimas
TS 7. mokejimo vikdymas

TS 1. Registracija -> prikejas -> pardavejas -> fiz. -> jur.


TS 1. Registracija
TC - testavimo atvejai

TC requirements:
1. ID
2. title (name)
3. steps (data for input)
4. status (PASS/FAIL/BLOCK)
5. expected result
6. actual result
7. description/notes/summary



TC 1.1. Registration with valid data with mandatory fields only
Steps:
1. Open registration page: www.shop.lt/registration
2. Input username: <valid user name>
3. Input email: <valid email>
4. New password: <valid password>
5. Reenter password: <valid password as previously>
6. Click on button Register

Expected result: Open new page with message "Registered successfully"
Actual result: 

Status: 

Comments: 

TC 1.2. Registration with valid data with all fields
Steps:
1. Open registration page: www.shop.lt/registration
2. Input username: <valid user name>
3. Input email: <valid email>
4. New password: <valid password>
5. Reenter password: <valid password as previously>
6. Input age: <age to input>
7. Click on button Register

Expected result: Open new page with message "Registered successfully"
Actual result: 

Status: 

Comments: 


TC 1.3. Negative registration with all empty fields
Steps:
1. Open registration page: www.shop.lt/registration
2. Input username: leave empty
3. Input email: leave empty
4. New password: leave empty
5. Reenter password: leave empty
6. Click on button Register

Expected result: Some error message appear "Require input for mandatory fields"
Actual result: 

Status: 

Comments: 


TC 1.4. Negative registration with empty username
Steps:
1. Open registration page: www.shop.lt/registration
2. Input username: leave empty
3. Input email: <valid email>
4. New password: <valid password>
5. Reenter password: <valid password as previously>
6. Input age: <age to input>
7. Click on button Register

Expected result: Open new page with message "Registered successfully"
Actual result: 

Status: 

Comments: 

TC 1.5. Negative registration with invalid username
Steps:
1. Open registration page: www.shop.lt/registration
2. Input username: some#ame
3. Input email: <valid email>
4. New password: <valid password>
5. Reenter password: <valid password as previously>
6. Input age: <age to input>
7. Click on button Register

Expected result: Some error message appear "invalid user name"
Actual result: 

Status: 

Comments: 