1. Readme
2. TC for system testing

## 1. Readme

1. Description
2. Tech stack or requirements
3. Installation
4. How to run

Example for project file structure:  
```
    📁  
    ├── 📁 build
    ├── 📁 docs     # Documentation files 
    ├── 📁 src      # Source files
    ├── 📁 test     # Automated tests 
    ├── 📁 tools    # Tools and utilities
    ├── .env        # configuration file
    ├── LICENSE
    └── README.md
```


https://github.com/othneildrew/Best-README-Template  
https://github.com/dotnet/eShop  
https://github.com/aregtech/areg-sdk#readme  

AI prompt:  
I want to make a cypress portfolio project for E2E testing application. Pleas give me a nice readme.me template what need to be written up.

## 2. TC for system testing

TS_01 Login
TC_1.1 Login with valid data:
    Prerequisites: 
        available active account
        base url: http://localhost:3011

    Steps:
        1. POST /v1/login
        2. request body:
            {
                "username": "enter_user_name",
                "password": "enter_user_password" 
            }


    Expected:
        Response code: 200
        Response body according attached file api_response.json id #k564asdf9
        Response body:
            {
                "message": "some message",
                "token": "some_generated_token" 
            }    

