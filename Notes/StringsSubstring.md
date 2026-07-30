Awesome! 🎉

You've been very consistent, so let's continue.

---

# Module 3 — Strings

# Topic 7 — `substring()`

> **Important:** This is one of the most confusing topics for beginners because it looks very similar to `slice()`. By the end of this lesson, you'll know exactly **when to use `slice()` and when to use `substring()`**.

---

# Lesson Flow

1. What is `substring()`?
2. Why do we need it?
3. Syntax
4. How it works
5. Difference between `slice()` and `substring()`
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

# 1. What is `substring()`?

## Definition

`substring()` is a **string method** used to **extract part of a string between two indexes**.

It returns a **new string** and **does not modify the original string**.

---

# Why was `substring()` created?

Imagine you have:

```text
John Doe
```

You want only:

```text
John
```

Or:

```text
SpiderMan
```

You want:

```text
Spider
```

Instead of manually extracting characters one by one, JavaScript provides `substring()`.

---

# 2. Syntax

```javascript
string.substring(startIndex, endIndex);
```

* **startIndex** → Included
* **endIndex** → Excluded

Exactly like `slice()`.

---

# 3. Basic Example

```javascript
let name = "JavaScript";

console.log(name.substring(0,4));
```

Output

```text
Java
```

---

# Example 2

```javascript
let city = "New Delhi";

console.log(city.substring(4));
```

Output

```text
Delhi
```

If the second parameter is omitted, it extracts until the end.

---

# Example 3

```javascript
let movie = "SpiderMan";

console.log(movie.substring(0,6));
```

Output

```text
Spider
```

---

# 4. The Biggest Difference

## `slice()` supports negative indexes.

```javascript
let text = "JavaScript";

console.log(text.slice(-6));
```

Output

```text
Script
```

---

## `substring()` DOES NOT support negative indexes.

```javascript
let text = "JavaScript";

console.log(text.substring(-6));
```

Output

```text
JavaScript
```

Why?

Because **negative values are treated as `0`**.

So JavaScript internally changes:

```javascript
text.substring(-6)
```

to

```javascript
text.substring(0)
```

which returns the whole string.

---

# 5. Another Difference

Suppose we write:

```javascript
let text = "JavaScript";

console.log(text.slice(6,2));
```

Output

```text
```

(empty string)

Because the start index is greater than the end index.

---

Now try:

```javascript
console.log(text.substring(6,2));
```

Output

```text
vaSc
```

Why?

Because `substring()` **automatically swaps the indexes**.

JavaScript changes:

```javascript
substring(6,2)
```

to

```javascript
substring(2,6)
```

Let's visualize:

```text
J  a  v  a  S  c  r  i  p  t
0  1  2  3  4  5  6  7  8  9
```

Indexes:

```text
2 → v
3 → a
4 → S
5 → c
```

Output:

```text
vaSc
```

This is one of the biggest interview differences.

---

# 6. `slice()` vs `substring()`

| Feature                       | `slice()` | `substring()` |
| ----------------------------- | --------- | ------------- |
| Returns new string            | ✅         | ✅             |
| Modifies original string      | ❌         | ❌             |
| Supports negative indexes     | ✅         | ❌             |
| Swaps start/end automatically | ❌         | ✅             |

---

# 7. Real-Life Examples

## Login

Extract first username.

```javascript
let username = "john_doe";

console.log(username.substring(0,4));
```

Output

```text
john
```

---

## Shopping Website

```javascript
let product = "LAPTOP-2025";

console.log(product.substring(0,6));
```

Output

```text
LAPTOP
```

---

## Hospital

```javascript
let patient = "PAT458921";

console.log(patient.substring(0,3));
```

Output

```text
PAT
```

---

## Employee Portal

```javascript
let employee = "EMP10025";

console.log(employee.substring(0,3));
```

Output

```text
EMP
```

---

## Email

```javascript
let email = "john@gmail.com";

console.log(email.substring(5));
```

Output

```text
gmail.com
```

---

## City

```javascript
let city = "New Delhi";

console.log(city.substring(4));
```

Output

```text
Delhi
```

---

# 8. Strings are Immutable

Wrong

```javascript
let name = "JavaScript";

name.substring(0,4);

console.log(name);
```

Output

```text
JavaScript
```

---

Correct

```javascript
let name = "JavaScript";

let shortName = name.substring(0,4);

console.log(shortName);
```

Output

```text
Java
```

---

# 9. Common Mistakes

### Mistake 1

```javascript
text.substring(-4)
```

Returns:

```text
JavaScript
```

Not the last four characters.

---

### Mistake 2

Thinking `substring()` supports negative indexing.

It doesn't.

---

### Mistake 3

Thinking it modifies the original string.

It doesn't.

---

# 10. Coding Assignments (10)

Create these files inside **01-JavaScript**.

### 1. firstNameSubstring.js

Extract:

```text
John
```

from

```text
John Doe
```

---

### 2. productSubstring.js

Extract:

```text
LAPTOP
```

from

```text
LAPTOP-2025
```

---

### 3. patientSubstring.js

Extract:

```text
PAT
```

from

```text
PAT458921
```

---

### 4. employeeSubstring.js

Extract:

```text
EMP
```

from

```text
EMP10025
```

---

### 5. citySubstring.js

Extract:

```text
Delhi
```

from

```text
New Delhi
```

---

### 6. emailSubstring.js

Extract:

```text
gmail.com
```

from

```text
john@gmail.com
```

---

### 7. movieSubstring.js

Extract:

```text
Spider
```

from

```text
SpiderMan
```

---

### 8. bankSubstring.js

Extract:

```text
BANK
```

from

```text
HDFC BANK
```

---

### 9. fileSubstring.js

Extract:

```text
pdf
```

from

```text
resume.pdf
```

---

### 10. compareSliceSubstring.js

Write a program showing:

```javascript
slice(-4)
```

and

```javascript
substring(-4)
```

on the same string.

Observe the difference.

---

# 11. Mini Project

## Student ID Extractor

Store:

```text
STU2025001
```

Display:

```text
Student Prefix: STU
```

Use:

```javascript
substring(0,3)
```

---

# 12. Interview Questions

## Beginner

1. What is `substring()`?
2. Is it a method or property?
3. Does it modify the original string?
4. What is the syntax of `substring()`?
5. What happens if the second parameter is omitted?

---

## Intermediate

6. Output?

```javascript
console.log("JavaScript".substring(0,4));
```

7. Output?

```javascript
console.log("New Delhi".substring(4));
```

8. Does `substring()` support negative indexing?
9. What happens if a negative index is passed?
10. Why doesn't `substring(-4)` return the last four characters?

---

## Advanced

11. What happens if the start index is greater than the end index?
12. Explain the biggest differences between `slice()` and `substring()`.
13. Why is `substring()` considered non-mutating?
14. Can `substring()` be chained with other methods? Give an example.
15. What is the output?

```javascript
console.log("JavaScript".substring(6,2));
```

---

## Scenario-Based

16. How would you extract the first name from `"John Doe"`?
17. How would you extract the domain from `"john@gmail.com"`?
18. Where would you use `substring()` in a hospital management system?
19. Name four real-world uses of `substring()`.
20. In an employee management system, where could `substring()` be useful?

---

# 13. MCQs

### Q1

`substring()` is:

A) Variable

B) Method

C) Property

D) Object

---

### Q2

Output?

```javascript
console.log("JavaScript".substring(0,4));
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

### Q3

Does `substring()` support negative indexes?

A) Yes

B) No

---

### Q4

What happens if the start index is greater than the end index?

A) Error

B) Returns empty string

C) Swaps the indexes automatically

D) Returns `undefined`

---

### Q5

Which method supports negative indexing?

A) `substring()`

B) `slice()`

C) Both

D) Neither

---

# 14. Notes (`Strings.md`)

Add:

```md
## substring()

- Used to extract part of a string.
- Returns a new string.
- Does not modify the original string.
- Does not support negative indexes.
- Negative indexes are treated as 0.
- Automatically swaps start and end indexes if start > end.

### Common Uses

- Extract first name
- Product code
- Employee ID
- Patient ID
- Email domain
```

---

# 15. Git Practice

```bash
git status
git add .
git commit -m "Completed JavaScript substring() method"
git push
```

---

# 🎯 Important Interview Tip

Many interviewers ask this directly:

> **What is the difference between `slice()` and `substring()`?**

Remember these **two golden rules**:

1. ✅ `slice()` supports **negative indexing**; `substring()` does **not**.
2. ✅ `substring()` automatically **swaps the indexes** if `start > end`; `slice()` returns an empty string.

If you remember just these two differences, you'll answer 90% of interview questions on this topic correctly.

---

### Your Task

Complete:

* ✅ 10 Coding Assignments
* ✅ 1 Mini Project
* ✅ 20 Interview Questions
* ✅ 5 MCQs

Then send me:

1. Your interview answers
2. MCQ answers
3. Terminal output for the coding assignments and mini project

We'll review everything together before moving to **`replace()`**.
