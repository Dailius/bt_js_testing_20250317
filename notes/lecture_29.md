1. `pg` lib
2. injection attacks
3. JWT (`bcryptjs`, `jsonwebtoken` libs)
4. Attacks


## 2. injection attacks

https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/injection-attack/

## 3. JWT (`bcryptjs`, `jsonwebtoken` libs)

Hashing -> password encryption.

abcd
Abcd1234
Abcd$1234

SALT (Dk&$12Ed):
abcd + Dk&$12Ed -> abcdDk&$12Ed
Abcd1234 + Dk&$12Ed -> Abcd1234Dk&$12Ed
Abcd$1234 + Dk&$12Ed -> Abcd$1234Dk&$12Ed 


Compare passwords -> compared hashed passwords
Hash coalition 
https://auth0.com/blog/hashing-passwords-one-way-road-to-security/ 


## 4. Attacks

1. Sniffing
2. Injection
3. Dictionary
