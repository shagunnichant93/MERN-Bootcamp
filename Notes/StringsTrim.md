Awesome! 🎉

You've now completed:

* ✅ Introduction to Strings
* ✅ `length`
* ✅ `toUpperCase()`
* ✅ `toLowerCase()`

Today we'll learn one of the **most important string methods** used in almost every web application.

# Module 3 – Strings

# Topic 5 – `trim()`

---

# Lesson Flow

1. What is `trim()`?
2. Why do we need it?
3. Real-life examples
4. Syntax
5. Code examples
6. Common mistakes
7. Coding assignments
8. Mini Project
9. Interview Questions
10. MCQs
11. Notes
12. Git Practice

---

# 1. What is `trim()`?

## Definition

`trim()` is a **string method** that removes **extra spaces from the beginning and the end** of a string.

It **does not remove spaces between words**.

---

# Why was `trim()` created?

Imagine a login page.

User 1 enters

```text
john
```

User 2 enters

```text
 john
```

User 3 enters

```text
john
```

(with extra spaces at the end)

Although all users typed the same username, JavaScript sees them as different strings.

Without `trim()`:

```javascript
"john" !== " john "
```

So login would fail.

To solve this problem, JavaScript provides `trim()`.

---

# Real-Life Example 1 – Login System

User types:

```text
   shagun
```

System automatically converts it to:

```text
shagun
```

Now login succeeds.

---

# Real-Life Example 2 – Registration Form

User enters:

```text
   Rahul Sharma
```

Store as:

```text
Rahul Sharma
```

---

# Real-Life Example 3 – Search Box

Customer searches:

```text
   Laptop
```

System trims it to:

```text
Laptop
```

Search works correctly.

---

# Real-Life Example 4 – Email

User enters:

```text
   abc@gmail.com
```

Store:

```text
abc@gmail.com
```

---

# Real-Life Example 5 – OTP

User copies:

```text
 123456
```

Trim becomes

```text
123456
```

OTP validation succeeds.

---

# 2. Syntax

```javascript
string.trim();
```

Example

```javascript
let name = "   Shagun   ";

console.log(name.trim());
```

Output

```text
Shagun
```

---

# 3. Important Rule

`trim()` removes spaces only from:

* ✅ Beginning
* ✅ End

It **does not** remove spaces in the middle.

Example

```javascript
let city = "New Delhi";

console.log(city.trim());
```

Output

```text
New Delhi
```

Notice the space between **New** and **Delhi** is still there.

---

# 4. Code Examples

## Example 1

```javascript
let name = "   Rahul   ";

console.log(name.trim());
```

Output

```text
Rahul
```

---

## Example 2

```javascript
let city = "   Delhi";

console.log(city.trim());
```

Output

```text
Delhi
```

---

## Example 3

```javascript
let company = "Infosys   ";

console.log(company.trim());
```

Output

```text
Infosys
```

---

## Example 4

```javascript
let email = "   abc@gmail.com   ";

console.log(email.trim());
```

Output

```text
abc@gmail.com
```

---

## Example 5

```javascript
let movie = "   Inception   ";

console.log(movie.trim());
```

Output

```text
Inception
```

---

## Example 6

```javascript
let bank = "   Axis Bank   ";

console.log(bank.trim());
```

Output

```text
Axis Bank
```

Notice:

The space between **Axis** and **Bank** remains.

---

## Example 7

```javascript
let otp = "   123456   ";

console.log(otp.trim());
```

Output

```text
123456
```

---

## Example 8

```javascript
let hospital = "   Apollo Hospital   ";

console.log(hospital.trim());
```

Output

```text
Apollo Hospital
```

---

## Example 9

```javascript
let username = "   john_doe   ";

console.log(username.trim());
```

Output

```text
john_doe
```

---

## Example 10

```javascript
let product = "   Laptop   ";

console.log(product.trim());
```

Output

```text
Laptop
```

---

# 5. Strings are Immutable

This is a very important concept.

Wrong:

```javascript
let name = "   Rahul   ";

name.trim();

console.log(name);
```

Output

```text
   Rahul   
```

Why?

Because `trim()` returns a **new string**.

Correct:

```javascript
let name = "   Rahul   ";

name = name.trim();

console.log(name);
```

Output

```text
Rahul
```

---

# 6. Real Project

## Login Validation

```javascript
let username = "   shagun   ";

username = username.trim();

console.log(username);
```

Output

```text
shagun
```

---

# 7. Chaining Methods

This is very common in MERN.

```javascript
let email = "   ABC@GMAIL.COM   ";

email = email.trim().toLowerCase();

console.log(email);
```

Output

```text
abc@gmail.com
```

Notice what happened:

1. `trim()` removed extra spaces.
2. `toLowerCase()` converted the email to lowercase.

This is called **method chaining**.

---

# 8. Coding Assignments (10)

Create these files in **01-JavaScript**.

### 1. studentTrim.js

Remove spaces from student name.

---

### 2. employeeTrim.js

Remove spaces from employee name.

---

### 3. hospitalTrim.js

Remove spaces from hospital name.

---

### 4. bankTrim.js

Remove spaces from bank name.

---

### 5. restaurantTrim.js

Remove spaces from restaurant name.

---

### 6. shoppingTrim.js

Remove spaces from product name.

---

### 7. cityTrim.js

Remove spaces from city name.

---

### 8. emailTrim.js

Remove spaces from email.

---

### 9. usernameTrim.js

Remove spaces from username.

---

### 10. otpTrim.js

Remove spaces from OTP.

---

# 9. Mini Project

## User Registration Form

Requirements:

Store:

```text
Name: "   John Doe   "
Email: "   JOHN@GMAIL.COM   "
City: "   New York   "
```

Output:

```text
Name: John Doe
Email: john@gmail.com
City: New York
```

**Hint:** Use both `trim()` and `toLowerCase()` where appropriate.

---

# 10. Interview Questions

Answer after completing the assignments.

### Beginner

1. What is `trim()`?
2. Is `trim()` a method or a property?
3. What does `trim()` remove?
4. Does `trim()` remove spaces from the middle of a string?
5. Does `trim()` change the original string?

### Intermediate

6. What is the output?

```javascript
console.log("   Hello   ".trim());
```

7. What is the output?

```javascript
console.log("New Delhi".trim());
```

8. Why doesn't `trim()` remove the space in `"New Delhi"`?
9. Why is `trim()` important in login systems?
10. Why is `trim()` useful in search functionality?

### Advanced

11. Can `trim()` be chained with other methods?
12. Give an example of method chaining using `trim()`.
13. Why are strings immutable?
14. How do you permanently remove spaces using `trim()`?
15. What is wrong with this code?

```javascript
let name = "   Rahul   ";

name.trim();

console.log(name);
```

### Scenario-Based

16. Why should registration forms use `trim()`?
17. Why should OTP validation use `trim()`?
18. Why should email validation use `trim()`?
19. Name four real-world applications where `trim()` is used.
20. In a banking application, where would you use `trim()`?

---

# 11. MCQs

### Q1.

`trim()` removes:

A) All spaces

B) Spaces only from beginning and end

C) Middle spaces

D) Numbers

---

### Q2.

Output?

```javascript
console.log("   Hello".trim());
```

A)

```text
Hello
```

B)

```text
   Hello
```

C)

```text
Hello   
```

D)

```text
Error
```

---

### Q3.

Strings are:

A) Mutable

B) Immutable

---

### Q4.

Can `trim()` be chained?

A) No

B) Yes

---

### Q5.

Which code is correct?

A)

```javascript
name.trim();
```

B)

```javascript
name = name.trim();
```

(When you want to permanently remove spaces.)

---

# 12. Notes (`Strings.md`)

Add these notes:

```md
## trim()

- trim() removes spaces from the beginning and end of a string.
- It does not remove spaces between words.
- It returns a new string.
- Strings are immutable.
- It is commonly used in:
  - Login forms
  - Registration forms
  - Search boxes
  - Email validation
  - OTP validation
```

---

# 13. Git

```bash
git status
git add .
git commit -m "Completed JavaScript trim() method"
git push
```

---

# 💡 Real-World Tip

In professional MERN applications, you'll often see code like this:

```javascript
const email = userInput.trim().toLowerCase();
```

This ensures that:

* `"   JOHN@GMAIL.COM   "`
* `"john@gmail.com"`
* `" John@gmail.com "`

are all treated consistently as:

```text
john@gmail.com
```

This is exactly the kind of code you'll write in React forms and Node.js APIs.

---

### Your Task

Complete:

* ✅ 10 Coding Assignments
* ✅ 1 Mini Project
* ✅ 20 Interview Questions
* ✅ 5 MCQs