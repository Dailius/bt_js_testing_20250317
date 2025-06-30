1. Repeat and check homework
2. Bug lifecycle
3. Bug registration
4. Jira

## 1. Repeat and check homework


## 2. Bug lifecycle

![](/pictures/bug_lifecycle.png)

## 3. Bug registration

### 1. Title

    Turi būti aiškus, koncentruotas,  perskaičius antraštę turi būti aišku kokia problema rasta.
    Pavadinimas turi atsakyti į sekančius klausymus:
        * kas atsitiko
        * kurioje vietoje
        * prie kurių aplinkybių

    pvz.E2E: 
        "Amount of 'followers' is missing on the Account page when user logged in." 

    pvz.API:
        Standartinė situacija, kuri neturi specialių aplinkybiu.
        Nors galima pažymėti, kad "when token is present" arba "when user logged in"
        "Internal Server Error with 200 upon sending GET /admin/users"

### 2. Description: steps, expected and actual results

    Aiškūs, konkretūs, apgalvoti, optimizuoti.  
    Pridėti klaidos paveikslėlį, logus ar kitą susietą informaciją, kuri padėtu išanalizuoti defektą.  

    Pre-requisites. Pvz.: existing account with followers
    pvz.E2E:
        1st stp. Navigate to Account page
        2nd stp. Observe amount of followers

        Expected: Amount(count) of followers is visible
        Actual: Amount of followers is not visible
    
    Pre-requisites. Pvz.: existing few users
    pvz.API:
        1st stp. Send GET request to /admin/users
        2nd stp. Observe response

        Expected: response code 200, list of users
        Actual: message 'internal server error'  with response code 200

### 3. Environment
    Nurodome sistemos parametrus, versijas, OS ir pan.

    PVZ.
        OS: Windows 
        browser: Chrome

        OS: Android 
        Browser: Chrome

        OS: Windows 11
        Tools: Postman
        QA environment

### 4. Build version
    Nurodome kurioje produkto versijoje buvo rasta problema

### 5. Severity
    Viena problema = vienas uzregistruotas defektas
    I viena defekta galime registuori labai smulkius UI/UX defektus.

## 4. Jira
