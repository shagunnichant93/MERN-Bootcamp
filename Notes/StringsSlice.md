Awesome! 🎉 You're doing a great job staying consistent.

# Module 3 — Strings

## Topic 6 — `slice()`

This is one of the **most commonly used string methods** in JavaScript. You'll use it frequently in **React, Node.js, APIs, login systems, banking applications, and e-commerce websites**.

---

# Lesson Flow

1. What is `slice()`?
2. Why do we need it?
3. Syntax
4. How indexing works
5. Positive indexing
6. Negative indexing
7. Real-life examples
8. Code examples
9. Common mistakes
10. Coding assignments
11. Mini Project
12. Interview Questions
13. MCQs
14. Notes
15. Git Practice

---

# 1. What is `slice()`?

## Definition

`slice()` is a **string method** used to **extract a part of a string** and return it as a **new string**.

It **does not change the original string**.

---

# Why was `slice()` created?

Imagine these situations:

* A bank wants to show only the **last 4 digits** of an account number.
* A website wants to display the **file extension** from a filename.
* A shopping site wants to extract a **product code**.
* A user wants the **first name** from a full name.

Instead of manually copying characters, JavaScript provides `slice()`.

---

# 2. Syntax

```javascript
string.slice(startIndex, endIndex);
```

* **startIndex** → Starting position (included)
* **endIndex** → Ending position (not included)

---

# 3. Understanding Indexing

```text
J   A   V   A   S   C   R   I   P   T
0   1   2   3   4   5   6   7   8   9
```

String:

```javascript
let word = "JAVASCRIPT";
```

---

# 4. Basic Example

```javascript
let word = "JavaScript";

console.log(word.slice(0,4));
```

Output

```text
Java
```

Explanation:

* Start from index **0**
* Stop before index **4**

Characters:

```
J a v a
```

---

# Example 2

```javascript
let city = "New Delhi";

console.log(city.slice(4));
```

Output

```text
Delhi
```

If you don't provide the second parameter, `slice()` extracts everything until the end.

---

# Example 3

```javascript
let language = "JavaScript";

console.log(language.slice(4,10));
```

Output

```text
Script
```

---

# 5. Negative Indexing

One of the biggest advantages of `slice()`.

```javascript
let bank = "HDFC BANK";

console.log(bank.slice(-4));
```

Output

```text
BANK
```

Explanation:

Negative indexing starts counting **from the end**.

```
H D F C   B A N K
          -4-3-2-1
```

---

# Example

```javascript
let movie = "Inception";

console.log(movie.slice(-5));
```

Output

```text
ption
```

---

# 6. Real-Life Examples

## Login System

Extract first 4 characters of username.

```javascript
let username = "john_doe";

console.log(username.slice(0,4));
```

Output

```text
john
```

---

## Bank

Show only last 4 digits.

```javascript
let account = "123456789012";

console.log(account.slice(-4));
```

Output

```text
9012
```

---

## Shopping Website

Extract product code.

```javascript
let product = "IPHONE-14-PRO";

console.log(product.slice(0,6));
```

Output

```text
IPHONE
```

---

## Hospital

Extract patient ID.

```javascript
let patient = "PAT123456";

console.log(patient.slice(0,3));
```

Output

```text
PAT
```

---

## Employee Portal

```javascript
let employee = "EMP10025";

console.log(employee.slice(0,3));
```

Output

```text
EMP
```

---

## File Extension

```javascript
let file = "resume.pdf";

console.log(file.slice(-3));
```

Output

```text
pdf
```

---

## Email

```javascript
let email = "john@gmail.com";

console.log(email.slice(5));
```

Output

```text
gmail.com
```

---

# 7. Strings are Immutable

Wrong

```javascript
let name = "JavaScript";

name.slice(0,4);

console.log(name);
```

Output

```text
JavaScript
```

Correct

```javascript
let name = "JavaScript";

let shortName = name.slice(0,4);

console.log(shortName);
```

Output

```text
Java
```

---

# 8. Common Mistakes

### Mistake 1

```javascript
word.slice(4,0)
```

Output

```text
```

Empty string.

Because start index is greater than end index.

---

### Mistake 2

```javascript
word.slice(0,100)
```

No error.

JavaScript simply returns everything available.

---

### Mistake 3

```javascript
word.slice(-50)
```

No error.

It returns the complete string.

---

# 9. Coding Assignments (10)

Create these files inside **01-JavaScript**.

### 1. firstName.js

Extract the first name from:

```text
John Doe
```

---

### 2. lastFourDigits.js

Display only the last 4 digits of:

```text
987654321234
```

---

### 3. productCode.js

Extract:

```text
LAPTOP
```

from

```text
LAPTOP-2025
```

---

### 4. emailDomain.js

Extract:

```text
gmail.com
```

from

```text
john@gmail.com
```

---

### 5. movieName.js

Extract

```text
Spider
```

from

```text
SpiderMan
```

---

### 6. hospitalId.js

Extract

```text
PAT
```

from

```text
PAT458921
```

---

### 7. employeeId.js

Extract

```text
EMP
```

from

```text
EMP10025
```

---

### 8. cityName.js

Extract

```text
Delhi
```

from

```text
New Delhi
```

---

### 9. bankName.js

Extract

```text
BANK
```

from

```text
HDFC BANK
```

(Use negative indexing.)

---

### 10. fileExtension.js

Extract

```text
pdf
```

from

```text
resume.pdf
```

---

# 10. Mini Project

## Bank Account Masking

Store:

```text
1234567898765432
```

Display:

```text
****5432
```

Hint:

Use:

```javascript
slice(-4)
```

---

# 11. Interview Questions

### Beginner

1. What is `slice()`?
2. Is `slice()` a method or property?
3. Does `slice()` modify the original string?
4. What does `slice(0,4)` mean?
5. What happens if the second parameter is omitted?

### Intermediate

6. What is the output?

```javascript
console.log("JavaScript".slice(4));
```

7. Output?

```javascript
console.log("JavaScript".slice(0,4));
```

8. What is negative indexing?
9. What does `slice(-4)` do?
10. Why is `slice()` useful in banking applications?

### Advanced

11. Explain the difference between positive and negative indexing.
12. Why is `slice()` considered a non-mutating method?
13. What happens if the start index is greater than the end index?
14. What happens if the end index is greater than the string length?
15. Can `slice()` be chained with other methods? Give an example.

### Scenario-Based

16. How would you display only the last four digits of an account number?
17. How would you extract the domain from an email?
18. How would you extract a product code from `LAPTOP-2025`?
19. Name four real-world uses of `slice()`.
20. Where would you use `slice()` in a food-ordering application?

---

# 12. MCQs

### Q1.

`slice()` is:

A) Property

B) Method

C) Variable

D) Object

---

### Q2.

Output?

```javascript
console.log("JavaScript".slice(0,4));
```

A)

```text
Java
```

B)

```text
Script
```

C)

```text
JavaScript
```

D)

```text
Error
```

---

### Q3.

Output?

```javascript
console.log("JavaScript".slice(-6));
```

A)

```text
Script
```

B)

```text
Java
```

C)

```text
ipt
```

D)

```text
Error
```

---

### Q4.

Does `slice()` modify the original string?

A) Yes

B) No

---

### Q5.

Which code extracts the last 4 characters?

A)

```javascript
text.slice(4)
```

B)

```javascript
text.slice(-4)
```

C)

```javascript
text.slice(0,4)
```

D)

```javascript
text.substring(-4)
```

---

# 13. Notes (`Strings.md`)

Add:

```md
## slice()

- Used to extract part of a string.
- Returns a new string.
- Does not modify the original string.
- Supports positive and negative indexing.
- Start index is included.
- End index is excluded.
- Common uses:
  - Account masking
  - Email domain extraction
  - Product codes
  - File extensions
```

---

# 14. Git Practice

```bash
git status
git add .
git commit -m "Completed JavaScript slice() method"
git push
```

---

## 🎯 Real-World MERN Example

Suppose your backend returns an account number:

```text
1234567898765432
```

In React, you don't want to show the entire number.

You can safely display:

```javascript
const account = "1234567898765432";

console.log(`****${account.slice(-4)}`);
```

Output:

```text
****5432
```

This kind of masking is used in banking apps, payment gateways, e-commerce sites, and wallet applications.

---
