## 🧪 Unit Testing Exercise Instructions (for Students)
### 📂 Files to Test
You are provided with the following JavaScript modules:
* math.js
* stringUtils.js
* arrayHelpers.js
* userService.js

### Your task is to write unit tests for each module using Jest.

#### ✅ Exercise 1: math.js

Functions to test:
* add(a, b)
* divide(a, b)

Write test cases to cover:
- Correct sum of two numbers
- Negative number addition
- Division of two numbers
- Division by zero (should throw an error)

#### ✅ Exercise 2: stringUtils.js

Functions to test:
* capitalize(str)
* containsSubstring(str, sub)

Write test cases to cover:
- Capitalize lowercase word
- Capitalize already-capitalized word
- Empty string input
- String that contains a substring
- Case where substring is not found

#### ✅ Exercise 3: arrayHelpers.js

Functions to test:
* findMax(arr)
* removeDuplicates(arr)

Write test cases to cover:
- Maximum value in positive numbers
- Maximum value in mixed positive/negative numbers
- Empty array (should return null)
- Removing duplicates from array
- Array with no duplicates (should return same array)

#### ✅ Exercise 4: userService.js

Functions to test:
* isAdult(user)
* getFullName(user)

Wite test cases to cover:
- User with age ≥ 18
- User with age < 18
- Full name construction (basic)
- User with empty first/last name