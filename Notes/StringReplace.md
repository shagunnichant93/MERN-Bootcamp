Awesome! 🎉

You're doing really well. So far, you've mastered:

* ✅ `length`
* ✅ `toUpperCase()`
* ✅ `toLowerCase()`
* ✅ `trim()`
* ✅ `slice()`
* ✅ `substring()`

Today we'll learn another **very important** string method.

---

# Module 3 — Strings

# Topic 8 — `replace()`

> **Real-world importance:** This method is used extensively in **React, Node.js, APIs, banking applications, search functionality, data cleaning, and form validation**.

---

# Lesson Flow

1. What is `replace()`?
2. Why do we need it?
3. Syntax
4. How `replace()` works
5. Replace vs Replace All
6. Real-life examples
7. Code examples
8. Common mistakes
9. Coding assignments
10. Mini Project
11. Interview Questions
12. MCQs
13. Notes
14. Git Practice

---

# 1. What is `replace()`?

## Definition

`replace()` is a **string method** used to **replace a specified part of a string with another value**.

It **returns a new string** and **does not modify the original string**.

---

# Why was `replace()` created?

Imagine these situations:

* A company changes its name from **Facebook** to **Meta**.
* A bank changes **HDFC Bank** to **HDFC Financial Services**.
* A website replaces inappropriate words with `****`.
* A file path changes from `.txt` to `.pdf`.

Instead of rebuilding the string manually, JavaScript provides `replace()`.

---

# 2. Syntax

```javascript
string.replace(searchValue, replaceValue);
```

* **searchValue** → Text to find.
* **replaceValue** → New text.

---

# 3. Basic Example

```javascript
let company = "Facebook";

console.log(company.replace("Facebook", "Meta"));
```

Output

```text
Meta
```

---

# Example 2

```javascript
let city = "New Delhi";

console.log(city.replace("Delhi", "Mumbai"));
```

Output

```text
New Mumbai
```

---

# Example 3

```javascript
let movie = "SpiderMan";

console.log(movie.replace("Man", "Woman"));
```

Output

```text
SpiderWoman
```

---

# Example 4

```javascript
let file = "resume.txt";

console.log(file.replace(".txt", ".pdf"));
```

Output

```text
resume.pdf
```

---

# Example 5

```javascript
let email = "john@gmail.com";

console.log(email.replace("john", "rahul"));
```

Output

```text
rahul@gmail.com
```

---

# 4. Strings are Immutable

Wrong

```javascript
let name = "John";

name.replace("John", "Rahul");

console.log(name);
```

Output

```text
John
```

Nothing changed.

---

Correct

```javascript
let name = "John";

name = name.replace("John", "Rahul");

console.log(name);
```

Output

```text
Rahul
```

---

# 5. Important Rule

`replace()` replaces **only the first occurrence** by default.

Example

```javascript
let text = "apple apple apple";

console.log(text.replace("apple", "orange"));
```

Output

```text
orange apple apple
```

Only the **first** `"apple"` is replaced.

We'll learn how to replace **all** occurrences later.

---

# 6. Real-Life Examples

## Login System

```javascript
let username = "john123";

console.log(username.replace("123", ""));
```

Output

```text
john
```

---

## Banking

```javascript
let account = "ACC12345";

console.log(account.replace("ACC", ""));
```

Output

```text
12345
```

---

## Hospital

```javascript
let patient = "PAT458921";

console.log(patient.replace("PAT", ""));
```

Output

```text
458921
```

---

## Shopping

```javascript
let product = "Laptop-Old";

console.log(product.replace("Old", "New"));
```

Output

```text
Laptop-New
```

---

## Food Ordering

```javascript
let order = "Pending";

console.log(order.replace("Pending", "Delivered"));
```

Output

```text
Delivered
```

---

## Employee Portal

```javascript
let employee = "EMP10025";

console.log(employee.replace("EMP", ""));
```

Output

```text
10025
```

---

# 7. Method Chaining

```javascript
let email = "   JOHN@GMAIL.COM   ";

email = email.trim().toLowerCase().replace("john", "rahul");

console.log(email);
```

Output

```text
rahul@gmail.com
```

Notice how multiple methods work together.

---

# 8. Common Mistakes

### Mistake 1

Thinking it changes the original string.

❌ Wrong

```javascript
name.replace("John", "Rahul");
```

✔ Correct

```javascript
name = name.replace("John", "Rahul");
```

---

### Mistake 2

Thinking it replaces every occurrence.

```javascript
let text = "cat cat cat";

console.log(text.replace("cat", "dog"));
```

Output

```text
dog cat cat
```

Only the first one changes.

---

### Mistake 3

Searching for text that doesn't exist.

```javascript
let city = "Delhi";

console.log(city.replace("Mumbai", "Pune"));
```

Output

```text
Delhi
```

No error. Nothing changes.

---

# 9. Coding Assignments (10)

Create these files inside **01-JavaScript**.

### 1. companyReplace.js

Replace:

```text
Facebook
```

with

```text
Meta
```

---

### 2. cityReplace.js

Replace:

```text
Delhi
```

with

```text
Mumbai
```

---

### 3. movieReplace.js

Replace:

```text
Man
```

with

```text
Woman
```

in

```text
SpiderMan
```

---

### 4. fileReplace.js

Replace:

```text
.txt
```

with

```text
.pdf
```

---

### 5. emailReplace.js

Replace:

```text
john
```

with

```text
rahul
```

---

### 6. patientReplace.js

Remove:

```text
PAT
```

from

```text
PAT458921
```

---

### 7. employeeReplace.js

Remove:

```text
EMP
```

from

```text
EMP10025
```

---

### 8. bankReplace.js

Replace:

```text
HDFC
```

with

```text
ICICI
```

---

### 9. orderStatus.js

Replace:

```text
Pending
```

with

```text
Delivered
```

---

### 10. productReplace.js

Replace:

```text
Old
```

with

```text
New
```

---

# 10. Mini Project

## Employee ID Formatter

Store:

```text
EMP10025
```

Display

```text
Employee Number: 10025
```

Use:

```javascript
replace("EMP","")
```

---

# 11. Interview Questions

## Beginner

1. What is `replace()`?
2. Is `replace()` a method or a property?
3. Does `replace()` modify the original string?
4. What is the syntax of `replace()`?
5. What happens if the search value is not found?

---

## Intermediate

6. Output?

```javascript
console.log("SpiderMan".replace("Man","Woman"));
```

7. Output?

```javascript
console.log("resume.txt".replace(".txt",".pdf"));
```

8. Does `replace()` replace all occurrences?
9. Why?
10. How do you permanently replace text in a string?

---

## Advanced

11. Why is `replace()` called a non-mutating method?
12. Can `replace()` be chained with other methods? Give an example.
13. What happens if the replacement string is empty (`""`)?
14. Explain why `replace()` is useful in data cleaning.
15. What is the output?

```javascript
console.log("apple apple".replace("apple","orange"));
```

---

## Scenario-Based

16. How would you remove `"EMP"` from `"EMP10025"`?
17. How would you change `"Pending"` to `"Delivered"`?
18. Name four real-world uses of `replace()`.
19. Why is `replace()` useful in file handling?
20. In a banking application, where could `replace()` be useful?

---

# 12. MCQs

### Q1

`replace()` is a:

A) Property

B) Method

C) Variable

D) Object

---

### Q2

Output?

```javascript
console.log("SpiderMan".replace("Man","Woman"));
```

A)

```text
SpiderMan
```

B)

```text
SpiderWoman
```

C)

```text
WomanSpider
```

D)

```text
Error
```

---

### Q3

Does `replace()` modify the original string?

A) Yes

B) No

---

### Q4

How many occurrences does `replace()` replace by default?

A) All

B) First occurrence only

C) Last occurrence only

D) None

---

### Q5

Which code permanently updates the string?

A)

```javascript
name.replace("John","Rahul");
```

B)

```javascript
name = name.replace("John","Rahul");
```

---

# 13. Notes (`Strings.md`)

Add:

```md
## replace()

- Used to replace part of a string.
- Returns a new string.
- Does not modify the original string.
- Replaces only the first occurrence by default.

### Common Uses

- Employee IDs
- File extensions
- Status updates
- Company names
- Data cleaning
```

---

# 14. Git Practice

```bash
git status
git add .
git commit -m "Completed JavaScript replace() method"
git push
```

---

# 🎯 Interview Tip

A common interview question is:

> **What is the difference between `replace()` and `replaceAll()`?**

For now, remember:

* ✅ `replace()` replaces **only the first occurrence**.
* ⏳ We'll learn `replaceAll()` later, which replaces **every occurrence**.

---
