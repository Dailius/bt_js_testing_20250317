1. Repeat and check homework
2. Regression, Smoke, Exploratory, Ad-hoc testing
3. TC management systems (Testomat)

## 1. Repeat and check homework

devtools  
https://developer.chrome.com/docs/devtools/overview  

## 2. Regression, Smoke, Exploratory, Ad-hoc testing

### Regression test:
Regression - naujas kodas sugadino sena koda.  
Atlikame daznai, po kiekvieno pataisymo, pakeitimo, naujo 'build'.  

Tai testavimas, kurio tikslas įsitikinti, kad nauji pakeitimai programoje nesugadino jau anksčiau veikusių funkcijų. Kitaip tariant, po kodo pakeitimų (pvz., naujos funkcijos, klaidų pataisymų, refaktoringo) testuojama, ar visa likusi sistema vis dar veikia kaip turėtų.

### Smoke test:  

Tai pagrindinių funkcijų patikrinimas, ar sistema apskritai „įsijungia“ ir veikia minimaliai taip, kaip tikimasi. Tai paviršinis, greitas testavimas, dažnai atliekamas po naujo programos „build’o“, kad įsitikintum, jog ji verta tolimesnio (gilesnio) testavimo.

Positive testing -> happy path.  
Core functionalities -> pagrindines funkcijos.  
Do not testing secondary functionalities -> salutines funkcijos.  

1.New ToDo  
2.Edit ToDo  
3.Delete ToDo  
4.Filter ToDo  
5.Count  
6.Change status  
7.UI  
 
1.New ToDo  
2.Delete ToDo  
3.Change status  

### Exploratory testing:  
tai testavimo metodas, kai testuotojas aktyviai tyrinėja sistemą be iš anksto paruoštų testų scenarijų, remdamasis savo patirtimi, intuicija ir supratimu apie sistemą.  
Visus dokumentus pasirašo vėliau pats testuotojas.  

### Ad-hoc testing:  
tai neformalus, neplanuotas testavimas, kai testuotojas testuoja sistemą be jokių dokumentuotų testų atvejų, remdamasis tik savo patirtimi, supratimu ir kūrybiškumu.  
Vėliau jokios dokumentacijos neruošia.   

## 3. TC management systems (Testomat)
https://testomat.io/  

