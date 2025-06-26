1. Repeat and check homework
2. Test plan
3. Checklist
4. Smoke testing

## 1. Repeat and check homework

TS 1. Navigation bar
TS 2. Add to cart / Menu page
TS 3. Total count
TS 4. Cart
TS 5. Discount
TS 6. Payment
TS 7. UI/UX

## 2. Test plan

PTP - project testing plan

Project and product software development companies.

[TP templates strongqa](https://strongqa.com/qa-portal/testing-docs-templates/test-plan)  
[TP templates aws pdf](https://strongqa-production-assets.s3.amazonaws.com/uploads/document/doc/61/test-plan-template-05.pdf)  
[TP template qatestlab](https://qatestlab.com/assets/Uploads/QATestLab-Testplan-Project-Name.pdf)  

### Teams, roles, responsibilities
### Environments
Development env  (developing process) 
Testing/QA env  
Production env (not included into PTP)  

QA env issukiai: 
    laikas, lesos ir pinigai, serveriai ir klientines masinos, 
    negalima naudoti legaliu (konfidencialiu) duomenu, 
    api (sistemu integracijos, kurios gali kainuoti).
### Requirements
### Scope and out of scope
### TS, TC
### Severities
defectu prioritetai/lygiai
### Exit criteria
ready to go/ not ready to go
### Mitigation plan
### processes, reporting, etc.


## 3. Checklist

📋 Kam jis naudojamas?
* Suprastintas TC formatas, nieko nepamirštum testavimo metu,
* Užtikrintum, kad visi esminiai aspektai buvo patikrinti,
* Pagreitintum testavimą – ypač kai testavimo procesas kartojasi (pvz., kiekvienas sprintas, kiekvienas build’as),

📦 Kada dažniausiai naudojama?
* Smoke testing
* Regression testing
* Prieš release’ą
* Priėmimo (acceptance) testuose

<br>

### 🧪 Palyginimas su kitais testais:
| Testo tipas            | Tikslas                                                  | Kada naudojamas                            |
| ---------------------- | -------------------------------------------------------- | ------------------------------------------ |
| **Smoke testing**      | Ar pagrindinės funkcijos veikia?                         | Po naujos versijos diegimo                 |
| **Sanity testing**     | Ar konkretus pakeitimas nesugadino pagrindinių funkcijų? | Po klaidų pataisymo ar nedidelio pakeitimo |
| **Regression testing** | Ar niekas nesugedo po visų pakeitimų?                    | Prieš leidžiant versiją į gamybą           |
