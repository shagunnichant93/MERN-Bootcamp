Awesome! 🎉 Let's continue with **Module 3 - Strings**.

---

# Module 3 — Strings

## Topic 4 — `toLowerCase()`

This lesson follows the same format we've been using.

---

# 1. What is `toLowerCase()`?

`toLowerCase()` converts **all uppercase letters** in a string into **lowercase letters**.

Example:

```javascript
let name = "JOHN DOE";

console.log(name.toLowerCase());
```

Output

```text
john doe
```

---

# 2. Syntax

```javascript
string.toLowerCase();
```

Example

```javascript
let city = "NEW YORK";

console.log(city.toLowerCase());
```

Output

```text
new york
```

---

# 3. Is it a Method or Property?

It is a **method**.

Example

```javascript
email.toLowerCase();
```

---

# 4. Does it Change the Original String?

❌ No.

Strings are **immutable**.

Example

```javascript
let name = "JOHN";

name.toLowerCase();

console.log(name);
```

Output

```text
JOHN
```

Correct way

```javascript
let name = "JOHN";

name = name.toLowerCase();

console.log(name);
```

Output

```text
john
```

---

# 5. Why do We Use `toLowerCase()`?

To make text consistent.

Example:

A user may type

```
SHAGUN@GMAIL.COM
```

or

```
Shagun@gmail.com
```

or

```
shagun@gmail.com
```

All should be treated as the same email.

So we convert everything to lowercase.

---

# Real-Life Example 1 — Login System

User enters

```text
ADMIN
```

System stores

```text
admin
```

Convert input

```javascript
let username = "ADMIN";

console.log(username.toLowerCase());
```

Output

```text
admin
```

---

# Real-Life Example 2 — Email Validation

```javascript
let email = "ABC@GMAIL.COM";

console.log(email.toLowerCase());
```

Output

```text
abc@gmail.com
```

---

# Real-Life Example 3 — Employee Portal

```javascript
let employee = "JOHN DOE";

console.log(employee.toLowerCase());
```

Output

```text
john doe
```

---

# Real-Life Example 4 — Hospital

```javascript
let disease = "FEVER";

console.log(disease.toLowerCase());
```

Output

```text
fever
```

---

# Real-Life Example 5 — Shopping Website

```javascript
let product = "LAPTOP";

console.log(product.toLowerCase());
```

Output

```text
laptop
```

---

# Real-Life Example 6 — Bank

```javascript
let bank = "STATE BANK OF INDIA";

console.log(bank.toLowerCase());
```

Output

```text
state bank of india
```

---

# Real-Life Example 7 — Movie Website

```javascript
let movie = "AVENGERS ENDGAME";

console.log(movie.toLowerCase());
```

Output

```text
avengers endgame
```

---

# Real-Life Example 8 — Student Portal

```javascript
let student = "RAHUL SHARMA";

console.log(student.toLowerCase());
```

Output

```text
rahul sharma
```

---

# Common Mistakes

### Wrong

```javascript
let city = "DELHI";

city.toLowerCase();

console.log(city);
```

Output

```text
DELHI
```

---

### Correct

```javascript
city = city.toLowerCase();

console.log(city);
```

Output

```text
delhi
```

---

# Interview Questions

### Q1. What does `toLowerCase()` do?

---

### Q2. Is it a method or property?

---

### Q3. Does it change the original string?

---

### Q4. What is the output?

```javascript
console.log("HELLO".toLowerCase());
```

---

### Q5. Output?

```javascript
console.log("JAVASCRIPT".toLowerCase());
```

---

### Q6. Output?

```javascript
console.log("ABC123".toLowerCase());
```

---

### Q7. Does it affect numbers?

---

### Q8. Why is `toLowerCase()` useful?

---

### Q9. Give three real-world examples where `toLowerCase()` is used.

---

### Q10. Why do websites convert emails to lowercase?

---

### Q11. What will this print?

```javascript
let name = "JOHN";

name.toLowerCase();

console.log(name);
```

---

### Q12. How do you permanently convert a string to lowercase?

---

### Q13. Does `toLowerCase()` affect special characters?

---

### Q14. Can it be chained with other string methods?

Example:

```javascript
name.trim().toLowerCase();
```

Yes or No?

---

### Q15. What does `toLowerCase()` return?

---

### Q16. Convert

```
NEW DELHI
```

to lowercase.

---

### Q17. Which method converts a string to lowercase?

A)

```javascript
lower()
```

B)

```javascript
toLowerCase()
```

C)

```javascript
lowerCase()
```

D)

```javascript
Lower()
```

---

### Q18. Can `toLowerCase()` be used for login validation?

---

### Q19. Convert

```
PIZZA HUT
```

to lowercase.

---

### Q20. Give four real-world uses of `toLowerCase()`.

---

# MCQs

### 1.

`toLowerCase()` is a:

A) Property

B) Variable

C) Method

D) Function

---

### 2.

Output?

```javascript
console.log("HELLO".toLowerCase());
```

A)

```
HELLO
```

B)

```
hello
```

C)

```
Hello
```

D)

```
Error
```

---

### 3.

Strings in JavaScript are:

A) Mutable

B) Immutable

C) Arrays

D) Objects

---

### 4.

Which method converts text to lowercase?

A)

```
lower()
```

B)

```
Lower()
```

C)

```
toLowerCase()
```

D)

```
toLower()
```

---

### 5.

Can `toLowerCase()` be used for email validation?

A) No

B) Yes

C) Only in Node.js

D) Only in React

---

# Coding Assignments (10)

Create these files inside **01-JavaScript**.

### 1. employeeLower.js

Convert employee name to lowercase.

---

### 2. bankLower.js

Convert bank name to lowercase.

---

### 3. hospitalLower.js

Convert hospital name to lowercase.

---

### 4. studentLower.js

Convert student name to lowercase.

---

### 5. restaurantLower.js

Convert restaurant name to lowercase.

---

### 6. shoppingLower.js

Convert product name to lowercase.

---

### 7. loginLower.js

Convert username to lowercase.

---

### 8. emailLower.js

Convert an email address to lowercase.

---

### 9. movieLower.js

Convert a movie name to lowercase.

---

### 10. cityLower.js

Convert a city name to lowercase.

---

# Mini Project

Create **loginValidation.js**

### Requirements

* Store a username in uppercase.
* Convert it to lowercase before displaying it.
* Store an email in uppercase.
* Convert it to lowercase before displaying it.

### Expected Output

```text
Username: john_doe
Email: john@gmail.com
```

---

# Git Commands

After completing the assignments:

```bash
git status
git add .
git commit -m "Completed toLowerCase() method"
git push origin main
```

---

### Your Task

Complete:

* ✅ 20 Interview Questions
* ✅ 5 MCQs
* ✅ 10 Coding Assignments
* ✅ 1 Mini Project
* ✅ Share the terminal output screenshots

Once you're done, we'll review everything together before moving to **`trim()`**.
