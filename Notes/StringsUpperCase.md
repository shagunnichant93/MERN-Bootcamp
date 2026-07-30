Perfect! Let's continue exactly in the same format.

# Module 3 — Strings

# Topic 3: `toUpperCase()`

---

# What is `toUpperCase()`?

`toUpperCase()` is a **string method** that converts **all lowercase letters into uppercase letters**.

It **does not change the original string**. Instead, it returns a **new string**.

---

# Why do we use `toUpperCase()`?

We use it when we want text to look consistent.

Examples:

* Login systems
* Employee names
* Product codes
* Bank account verification
* Search functionality
* Comparing two strings without worrying about lowercase/uppercase

---

# Real-Life Example 1 — Login System

User enters

```text
shagun
```

System converts it to

```text
SHAGUN
```

Now comparison becomes easier.

---

# Real-Life Example 2 — Employee ID

Input

```text
emp123
```

Display

```text
EMP123
```

---

# Real-Life Example 3 — Airport Code

User enters

```text
del
```

System stores

```text
DEL
```

---

# Real-Life Example 4 — Product Code

Customer types

```text
ab123
```

Stored as

```text
AB123
```

---

# Real-Life Example 5 — Bank IFSC

User types

```text
sbin0001234
```

Convert to

```text
SBIN0001234
```

---

# Syntax

```javascript
let variable = string.toUpperCase();
```

---

# Example 1

```javascript
let name = "shagun";

console.log(name.toUpperCase());
```

Output

```text
SHAGUN
```

---

# Example 2

```javascript
let city = "delhi";

console.log(city.toUpperCase());
```

Output

```text
DELHI
```

---

# Example 3

```javascript
let movie = "inception";

console.log(movie.toUpperCase());
```

Output

```text
INCEPTION
```

---

# Example 4

```javascript
let hospital = "apollo";

console.log(hospital.toUpperCase());
```

Output

```text
APOLLO
```

---

# Example 5

```javascript
let bank = "axis bank";

console.log(bank.toUpperCase());
```

Output

```text
AXIS BANK
```

---

# Example 6

```javascript
let restaurant = "pizza hut";

console.log(restaurant.toUpperCase());
```

Output

```text
PIZZA HUT
```

---

# Example 7

```javascript
let shopping = "laptop";

console.log(shopping.toUpperCase());
```

Output

```text
LAPTOP
```

---

# Example 8

```javascript
let disease = "fever";

console.log(disease.toUpperCase());
```

Output

```text
FEVER
```

---

# Example 9

```javascript
let subject = "javascript";

console.log(subject.toUpperCase());
```

Output

```text
JAVASCRIPT
```

---

# Example 10

```javascript
let email = "shagun@gmail.com";

console.log(email.toUpperCase());
```

Output

```text
SHAGUN@GMAIL.COM
```

---

# Important Note

```javascript
let name = "shagun";

name.toUpperCase();

console.log(name);
```

Output

```text
shagun
```

Why?

Because strings are **immutable**.

`toUpperCase()` returns a **new string**.

---

Correct way:

```javascript
let name = "shagun";

name = name.toUpperCase();

console.log(name);
```

Output

```text
SHAGUN
```

---

# Visual Flow

```text
"hello"

     |

toUpperCase()

     |

"HELLO"
```

---

# Real-Life Uses

### Banking

```text
ifsc

↓

IFSC
```

---

### Shopping

```text
laptop

↓

LAPTOP
```

---

### Login

```text
shagun

↓

SHAGUN
```

---

### Employee

```text
john

↓

JOHN
```

---

### Hospital

```text
apollo

↓

APOLLO
```

---

# Notes

✅ `toUpperCase()` is a **method**.

✅ Returns a **new string**.

✅ Original string remains unchanged unless reassigned.

✅ Converts **all lowercase letters** to uppercase.

✅ Numbers remain unchanged.

Example

```javascript
"abc123".toUpperCase()
```

Output

```text
ABC123
```

---

# Code Assignments (Create separate files)

### 1.

**employeeUpper.js**

Convert employee name to uppercase.

---

### 2.

**bankUpper.js**

Convert bank name to uppercase.

---

### 3.

**hospitalUpper.js**

Convert hospital name.

---

### 4.

**movieUpper.js**

Convert movie name.

---

### 5.

**restaurantUpper.js**

Convert restaurant name.

---

### 6.

**shoppingUpper.js**

Convert product name.

---

### 7.

**studentUpper.js**

Convert student name.

---

### 8.

**countryUpper.js**

Convert country name.

---

### 9.

**cityUpper.js**

Convert city name.

---

### 10.

**emailUpper.js**

Convert email to uppercase.

---

### 11.

**loginUpper.js**

Convert username before displaying.

---

### 12.

**passportUpper.js**

Convert passport holder's name.

---

# Mini Project

## Employee Portal

Input

```text
Employee Name:
john doe
```

Output

```text
JOHN DOE
```

---

# Assignment

Create all **12 files**.

Run every file using:

```bash
node filename.js
```

Take screenshots of the output.

---

# Interview Questions

Answer these after completing the assignments.

### Q1. What does `toUpperCase()` do?

### Q2. Is `toUpperCase()` a property or a method?

### Q3. Does it change the original string?

### Q4. What does this print?

```javascript
let name = "hello";
console.log(name.toUpperCase());
```

### Q5. Output?

```javascript
console.log("javascript".toUpperCase());
```

### Q6. Output?

```javascript
console.log("abc123".toUpperCase());
```

### Q7. Will numbers change?

### Q8. Why is `toUpperCase()` useful in login systems?

### Q9. Name three real-world uses of `toUpperCase()`.

### Q10. Why do banks convert IFSC codes to uppercase?

### Q11. What is wrong with this code?

```javascript
let name = "john";

name.toUpperCase();

console.log(name);
```

### Q12. How do you permanently change a string to uppercase?

### Q13. Can spaces be converted to uppercase?

### Q14. Is `"hello world"` converted into `"HELLO WORLD"`?

### Q15. Can emails also be converted using `toUpperCase()`?

### Q16. What is the output?

```javascript
let city = "delhi";
city = city.toUpperCase();
console.log(city);
```

### Q17. Which is correct?

A)

```javascript
name.upperCase();
```

B)

```javascript
name.toUpperCase();
```

### Q18. Does `toUpperCase()` return a new string?

### Q19. What is the output?

```javascript
console.log("Pizza Hut".toUpperCase());
```

### Q20. Give four real-life examples where `toUpperCase()` is used.

---

# MCQs

### 1. `toUpperCase()` is a:

A) Property

B) Method

C) Variable

D) Function declaration

---

### 2. What is the output?

```javascript
"bank".toUpperCase()
```

A) bank

B) BANK

C) Bank

D) Error

---

### 3. Which is correct?

A)

```javascript
text.upperCase()
```

B)

```javascript
text.toUpperCase()
```

C)

```javascript
text.upper()
```

D)

```javascript
text.uppercase()
```

---

### 4. `toUpperCase()` changes:

A) Numbers

B) Lowercase letters

C) Spaces

D) Symbols

---

### 5. Which statement is true?

A) It changes the original string automatically.

B) It returns a new uppercase string.

C) It deletes spaces.

D) It removes numbers.

---

Definition

toUpperCase() converts every lowercase letter in a string into uppercase letters.

Syntax
string.toUpperCase();
Returns

A new string in uppercase.

Important

Strings are immutable.

This doesn't work:

let city = "delhi";

city.toUpperCase();

console.log(city);

Output

delhi

Correct

city = city.toUpperCase();

console.log(city);

Output

DELHI
Real-life Examples
Employee Portal
let employee = "john doe";

console.log(employee.toUpperCase());

Output

JOHN DOE
Login
let username = "shagun";

console.log(username.toUpperCase());
Bank
let bank = "axis bank";

console.log(bank.toUpperCase());
Hospital
let hospital = "city hospital";

console.log(hospital.toUpperCase());
Student
let student = "rahul";

console.log(student.toUpperCase());