Awesome! 🎉

You're doing really well. Before we start, here's something motivating:

📊 **You've completed 8 out of 13 string topics (about 62%)**. The remaining topics are easier than the ones you've already learned. Once you finish Module 3, you'll have a very strong foundation for React and Node.js.

---

# Module 3 — Strings

# Topic 9 — `split()`

> ⭐ **One of the most important JavaScript string methods**

You will use `split()` almost daily in:

* React forms
* Node.js APIs
* CSV files
* Excel imports
* Login systems
* Email processing
* Data parsing

---

# Lesson Flow

1. What is `split()`?
2. Why do we need it?
3. Syntax
4. How `split()` works
5. Common separators
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

# 1. What is `split()`?

## Definition

`split()` is a **string method** used to **split a string into an array based on a separator**.

It **returns a new array** and **does not modify the original string**.

---

# Why do we need `split()`?

Imagine a user enters:

```text
John Doe
```

Sometimes we need:

```text
John
```

and

```text
Doe
```

Instead of extracting them manually, JavaScript can split the string.

---

# 2. Syntax

```javascript
string.split(separator);
```

or

```javascript
string.split(separator, limit);
```

### Parameters

* **separator** → Character or text used to split the string.
* **limit** *(optional)* → Maximum number of elements in the resulting array.

---

# 3. Basic Example

```javascript
let fruits = "Apple,Mango,Banana";

console.log(fruits.split(","));
```

Output

```javascript
["Apple", "Mango", "Banana"]
```

Notice:

* Before → String
* After → Array

---

# Example 2 — Space

```javascript
let name = "John Doe";

console.log(name.split(" "));
```

Output

```javascript
["John", "Doe"]
```

---

# Example 3 — Hyphen

```javascript
let product = "Laptop-2025";

console.log(product.split("-"));
```

Output

```javascript
["Laptop", "2025"]
```

---

# Example 4 — Slash

```javascript
let date = "01/08/2026";

console.log(date.split("/"));
```

Output

```javascript
["01", "08", "2026"]
```

---

# Example 5 — Email

```javascript
let email = "john@gmail.com";

console.log(email.split("@"));
```

Output

```javascript
["john", "gmail.com"]
```

---

# Example 6 — CSV File

```javascript
let students = "John,Rahul,Shagun,Priya";

console.log(students.split(","));
```

Output

```javascript
["John", "Rahul", "Shagun", "Priya"]
```

This is exactly how many applications process CSV data.

---

# 4. Using `limit`

```javascript
let text = "Apple,Mango,Banana,Orange";

console.log(text.split(",", 2));
```

Output

```javascript
["Apple", "Mango"]
```

Only the first **2** items are returned.

---

# 5. Common Separators

| Separator | Example                                 | Result                |
| --------- | --------------------------------------- | --------------------- |
| `" "`     | John Doe                                | First name, Last name |
| `","`     | Apple,Mango                             | Array of fruits       |
| `"-"`     | Laptop-2025                             | Product + Year        |
| `"@"`     | [john@gmail.com](mailto:john@gmail.com) | Username + Domain     |
| `"/"`     | 01/08/2026                              | Day, Month, Year      |
| `"."`     | resume.pdf                              | File name + Extension |

---

# 6. Real-Life Examples

## Login System

```javascript
let email = "john@gmail.com";

let parts = email.split("@");

console.log(parts);
```

Output

```javascript
["john", "gmail.com"]
```

---

## Hospital

```javascript
let patient = "PAT-458921";

console.log(patient.split("-"));
```

Output

```javascript
["PAT", "458921"]
```

---

## Banking

```javascript
let account = "ACC-123456";

console.log(account.split("-"));
```

Output

```javascript
["ACC", "123456"]
```

---

## Food Ordering

```javascript
let order = "Pizza,Burger,Pasta";

console.log(order.split(","));
```

Output

```javascript
["Pizza", "Burger", "Pasta"]
```

---

## Employee

```javascript
let employee = "EMP-10025";

console.log(employee.split("-"));
```

Output

```javascript
["EMP", "10025"]
```

---

# 7. Accessing Individual Values

```javascript
let name = "John Doe";

let parts = name.split(" ");

console.log(parts[0]);
```

Output

```text
John
```

---

```javascript
console.log(parts[1]);
```

Output

```text
Doe
```

---

# 8. Strings are Immutable

```javascript
let city = "New Delhi";

city.split(" ");

console.log(city);
```

Output

```text
New Delhi
```

The original string remains unchanged.

---

# 9. Common Mistakes

### Mistake 1

Using the wrong separator.

```javascript
let text = "Apple,Mango";

console.log(text.split("-"));
```

Output

```javascript
["Apple,Mango"]
```

Nothing gets split because `-` doesn't exist.

---

### Mistake 2

Thinking `split()` returns a string.

It returns an **array**.

---

### Mistake 3

Forgetting array indexing.

```javascript
let email = "john@gmail.com";

let parts = email.split("@");

console.log(parts[0]);
```

Output

```text
john
```

```javascript
console.log(parts[1]);
```

Output

```text
gmail.com
```

---

# 10. Coding Assignments (10)

Create these files inside **01-JavaScript**.

### 1. nameSplit.js

Split:

```text
John Doe
```

Display the array.

---

### 2. emailSplit.js

Split:

```text
john@gmail.com
```

Display:

* Username
* Domain

---

### 3. productSplit.js

Split:

```text
Laptop-2025
```

Display:

* Product
* Year

---

### 4. dateSplit.js

Split:

```text
01/08/2026
```

Display:

* Day
* Month
* Year

---

### 5. fileSplit.js

Split:

```text
resume.pdf
```

Display:

* File Name
* Extension

---

### 6. employeeSplit.js

Split:

```text
EMP-10025
```

Display:

* Prefix
* Employee Number

---

### 7. patientSplit.js

Split:

```text
PAT-458921
```

Display:

* Prefix
* Patient Number

---

### 8. bankSplit.js

Split:

```text
ACC-123456
```

Display:

* Account Type
* Account Number

---

### 9. fruitsSplit.js

Split:

```text
Apple,Mango,Banana,Orange
```

Display the array.

---

### 10. studentsSplit.js

Split:

```text
John,Rahul,Shagun,Priya
```

Display the array.

---

# 11. Mini Project

## Email Analyzer

Store:

```text
john@gmail.com
```

Display:

```text
Username: john
Domain: gmail.com
```

Hint:

```javascript
let parts = email.split("@");
```

---

# 12. Interview Questions

## Beginner

1. What is `split()`?
2. Is `split()` a method or a property?
3. Does `split()` modify the original string?
4. What does `split()` return?
5. What is the syntax of `split()`?

---

## Intermediate

6. Output?

```javascript
console.log("John Doe".split(" "));
```

7. Output?

```javascript
console.log("Apple,Mango".split(","));
```

8. What happens if the separator is not found?
9. Can `split()` return only a limited number of elements?
10. Which parameter controls the number of returned elements?

---

## Advanced

11. Why is `split()` useful in JavaScript?
12. Explain the difference between a string and the array returned by `split()`.
13. Why is `split()` considered a non-mutating method?
14. Can `split()` be chained with other methods? Give an example.
15. What is the output?

```javascript
console.log("A-B-C-D".split("-", 2));
```

---

## Scenario-Based

16. How would you extract the username from `"john@gmail.com"`?
17. How would you extract the file extension from `"resume.pdf"`?
18. Name four real-world uses of `split()`.
19. Where is `split()` used in banking applications?
20. Where is `split()` useful in a hospital management system?

---

# 13. MCQs

### Q1

`split()` returns a:

A) String

B) Array

C) Number

D) Boolean

---

### Q2

`split()` is a:

A) Property

B) Method

C) Variable

D) Object

---

### Q3

Output?

```javascript
console.log("John Doe".split(" "));
```

A)

```text
John Doe
```

B)

```javascript
["John", "Doe"]
```

C)

```text
John
```

D)

```text
Doe
```

---

### Q4

Does `split()` modify the original string?

A) Yes

B) No

---

### Q5

Which separator is used to split an email?

A) `.`

B) `@`

C) `-`

D) `,`

---

# 14. Notes (`Strings.md`)

Add:

```md
## split()

- Used to split a string into an array.
- Returns a new array.
- Does not modify the original string.
- Uses a separator to determine where to split.
- Supports an optional limit parameter.

### Common Uses

- Email parsing
- CSV data
- File extensions
- Product codes
- Dates
- Employee IDs
```

---

# 15. Git Practice

```bash
git status
git add .
git commit -m "Completed JavaScript split() method"
git push
```

---

# 💡 Interview Tip

Many beginners confuse **`split()`** and **`slice()`**.

Remember this:

* **`slice()`** ➜ Returns **part of a string**.
* **`split()`** ➜ Converts **one string into an array**.

### Example

```javascript
let text = "John Doe";

console.log(text.slice(0, 4)); // "John"
console.log(text.split(" "));  // ["John", "Doe"]
```

This difference is frequently asked in JavaScript interviews.

---
