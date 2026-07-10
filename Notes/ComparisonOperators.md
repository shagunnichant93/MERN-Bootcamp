# 🚀 Day 5 — JavaScript Comparison Operators & Conditional Statements (`if`, `else`, `else if`)

Welcome to **Day 5**!

Today you'll learn how a program **makes decisions**.

Without conditions, every program would execute every line one after another. Real-world apps need to decide what to do based on different situations.

Examples:

* Login successful or failed
* ATM allows or denies withdrawal
* Student passed or failed
* User is adult or minor
* Product is in stock or out of stock

Everything starts with **comparison operators**.

---

# Part 1: Comparison Operators

Comparison operators compare two values.

They always return:

* `true`
* `false`

Example:

```javascript
10 > 5
```

Result:

```javascript
true
```

Because 10 is greater than 5.

---

## 1. Equal To (`==`)

Checks if values are equal.

```javascript
console.log(10 == 10);
```

Output

```text
true
```

Another example

```javascript
console.log(5 == 8);
```

Output

```text
false
```

---

## 2. Strict Equal (`===`)

This is the one you'll use most in JavaScript.

It checks:

* value
* data type

Example

```javascript
console.log(10 === 10);
```

Output

```text
true
```

Now

```javascript
console.log(10 === "10");
```

Output

```text
false
```

Why?

Number is not the same as String.

---

## Difference

```javascript
10 == "10"
```

Result

```text
true
```

because `==` converts types.

But

```javascript
10 === "10"
```

Result

```text
false
```

because `===` checks type also.

👉 **Rule for MERN development:** Always prefer `===` unless you specifically need type coercion.

---

## 3. Not Equal (`!=`)

```javascript
console.log(10 != 5);
```

Output

```text
true
```

---

## 4. Strict Not Equal (`!==`)

```javascript
console.log(10 !== "10");
```

Output

```text
true
```

---

## 5. Greater Than (`>`)

```javascript
console.log(20 > 15);
```

Output

```text
true
```

---

## 6. Less Than (`<`)

```javascript
console.log(5 < 2);
```

Output

```text
false
```

---

## 7. Greater Than or Equal (`>=`)

```javascript
console.log(18 >= 18);
```

Output

```text
true
```

---

## 8. Less Than or Equal (`<=`)

```javascript
console.log(10 <= 8);
```

Output

```text
false
```

---

# Summary Table

| Operator | Meaning               |
| -------- | --------------------- |
| `==`     | Equal                 |
| `===`    | Strict Equal          |
| `!=`     | Not Equal             |
| `!==`    | Strict Not Equal      |
| `>`      | Greater Than          |
| `<`      | Less Than             |
| `>=`     | Greater Than or Equal |
| `<=`     | Less Than or Equal    |

---

# Part 2: if Statement

Syntax

```javascript
if (condition) {
    // code
}
```

Think of it like:

> **If the condition is true, execute the code.**

Example

```javascript
let age = 20;

if (age >= 18) {
    console.log("You can vote.");
}
```

Output

```text
You can vote.
```

Because

```text
20 >= 18
```

is true.

---

Another example

```javascript
let age = 15;

if (age >= 18) {
    console.log("You can vote.");
}
```

Output

Nothing.

Because the condition is false.

---

# Real-Life Diagram

Imagine a security guard.

```
Age = 22

        |
        v

Is age >=18 ?

      YES
       |
       v

Allow Entry
```

If No:

```
Age = 15

Is age >=18 ?

NO

Stop
```

---

# Part 3: if...else

Sometimes we want both possibilities.

Example

```javascript
let age = 15;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

Output

```text
Minor
```

---

Example 2

```javascript
let marks = 80;

if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

Output

```text
Pass
```

---

# Flow Diagram

```
Condition?

      |
  True? ---- No
   |          |
Adult      Minor
```

---

# Part 4: else if

Sometimes there are more than two choices.

Example

```javascript
let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
```

Output

```text
Grade B
```

---

How JavaScript checks:

```
82 >= 90 ?

No

↓

82 >=75 ?

Yes

↓

Print Grade B

↓

Stop
```

---

# Practice Program 1

Create a file named **comparison.js**

```javascript
console.log(20 > 10);
console.log(20 < 10);
console.log(10 == "10");
console.log(10 === "10");
console.log(15 != 20);
console.log(15 !== "15");
console.log(30 >= 25);
console.log(8 <= 5);
```

Run:

```bash
node comparison.js
```

---

# Practice Program 2

Create **ageChecker.js**

```javascript
let age = 22;

if (age >= 18) {
    console.log("Eligible to Vote");
}
else {
    console.log("Not Eligible");
}
```

Run:

```bash
node ageChecker.js
```

---

# Practice Program 3

Create **studentResult.js**

```javascript
let marks = 67;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
```

Run:

```bash
node studentResult.js
```

---

# Mini Assignment

Create **login.js**

```javascript
let username = "Shagun";
let password = "mern123";
```

If:

* username is `"Shagun"`
* password is `"mern123"`

Print

```text
Login Successful
```

Otherwise

```text
Invalid Credentials
```

💡 Hint: You'll need the **AND (`&&`)** operator. Here's how it works:

```javascript
if (username === "Shagun" && password === "mern123") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}
```

For now, remember that `&&` means **both conditions must be true**. We'll study logical operators in more detail soon.

---

# Interview Questions

Answer these without running the code.

### Q1

What does `===` check?

---

### Q2

Which operator checks "not equal"?

---

### Q3

Output?

```javascript
console.log(15 > 20);
```

---

### Q4

What will this print?

```javascript
let age = 16;

if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}
```

---

### Q5

Why are `if` statements important in web applications? Give one real-life example.

---

## 📋 Your Tasks

1. Create `comparison.js` and run it.
2. Create `ageChecker.js` and run it.
3. Create `studentResult.js` and run it.
4. Complete `login.js`.
5. Answer the five interview questions.
6. Share a screenshot of your terminal output and your answers here.

I'll review everything, explain any mistakes, and then we'll commit **Day 5** to GitHub together.
