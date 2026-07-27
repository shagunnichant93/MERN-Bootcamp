# 🚀 Day 6 – JavaScript Logical Operators (`&&`, `||`, `!`)

Welcome to **Day 6**! 🎉

Yesterday, you learned how to make decisions using `if`, `else`, and `else if`.

Today, you'll learn how to **combine multiple conditions**.

This is one of the most frequently used concepts in JavaScript and MERN development.

Examples:

* Login (username **AND** password must be correct)
* Scholarship eligibility
* ATM withdrawal
* Online shopping discounts
* Admin access
* Driving license eligibility

---

# What are Logical Operators?

Logical operators combine two or more conditions.

JavaScript has **3 logical operators**:

| Operator | Name | Meaning                      |    |                                     |
| -------- | ---- | ---------------------------- | -- | ----------------------------------- |
| `&&`     | AND  | Both conditions must be true |    |                                     |
| `        |      | `                            | OR | At least one condition must be true |
| `!`      | NOT  | Reverses true/false          |    |                                     |

---

# 1. AND Operator (`&&`)

### Rule

Both conditions must be **true**.

Example:

```javascript
let age = 22;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive.");
}
```

Output

```text
You can drive.
```

---

### Memory Diagram

```
Condition 1 → TRUE

AND (&&)

Condition 2 → TRUE

↓

Execute code
```

---

### Example 2

```javascript
let age = 16;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive.");
}
else {
    console.log("Not allowed.");
}
```

Output

```
Not allowed.
```

Why?

```
Age >=18 ❌

License ✔

FALSE && TRUE = FALSE
```

---

## Truth Table for AND

| A | B | Result  |
| - | - | ------- |
| T | T | ✅ True  |
| T | F | ❌ False |
| F | T | ❌ False |
| F | F | ❌ False |

Remember:

> **AND is strict. Everything must be true.**

---

# Real-life Example

Login System

```
Username Correct?

        AND

Password Correct?

↓

Login Success
```

If even one is wrong:

```
Login Failed
```

---

# 2. OR Operator (`||`)

OR means:

**At least one condition should be true.**

Example

```javascript
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("No Office");
}
```

Output

```
No Office
```

Because one condition is true.

---

Another example

```javascript
let isWeekend = false;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("No Office");
}
else {
    console.log("Go to Office");
}
```

Output

```
Go to Office
```

---

## Truth Table

| A | B | Result  |
| - | - | ------- |
| T | T | ✅ True  |
| T | F | ✅ True  |
| F | T | ✅ True  |
| F | F | ❌ False |

Remember:

> **OR is flexible. Only one condition needs to be true.**

---

# Real-life Example

Movie Discount

```
Student?

OR

Senior Citizen?

↓

Discount Available
```

---

# 3. NOT Operator (`!`)

NOT reverses the value.

```
true

↓

false
```

```
false

↓

true
```

---

Example

```javascript
let isLoggedIn = false;

console.log(!isLoggedIn);
```

Output

```
true
```

---

Another example

```javascript
let isLoggedIn = true;

if (!isLoggedIn) {
    console.log("Please Login");
}
else {
    console.log("Welcome");
}
```

Output

```
Welcome
```

---

# Summary

| Operator | Meaning               |   |                           |
| -------- | --------------------- | - | ------------------------- |
| `&&`     | Both must be true     |   |                           |
| `        |                       | ` | At least one must be true |
| `!`      | Opposite of the value |   |                           |

---

# Practice Program 1

Create **logicalOperators.js**

```javascript
let age = 22;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Eligible to Drive");
}
else {
    console.log("Not Eligible");
}

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Enjoy your holiday!");
}
else {
    console.log("Go to Office");
}

let loggedIn = false;

if (!loggedIn) {
    console.log("Please Login");
}
```

Run:

```bash
node logicalOperators.js
```

---

# Practice Program 2

Create **bank.js**

```javascript
let balance = 10000;
let withdrawal = 3000;

if (balance >= withdrawal) {
    console.log("Transaction Successful");
}
else {
    console.log("Insufficient Balance");
}
```

Run:

```bash
node bank.js
```

---

# Practice Program 3

Create **movieTicket.js**

```javascript
let age = 65;

if (age < 12 || age >= 60) {
    console.log("Discount Available");
}
else {
    console.log("Regular Ticket");
}
```

Run:

```bash
node movieTicket.js
```

---

# Assignment

Create **loginSystem.js**

```javascript
let username = "Shagun";
let password = "mern123";
let otpVerified = true;
```

Rules:

If:

* username is `"Shagun"`
* password is `"mern123"`
* otpVerified is `true`

Print

```
Login Successful
```

Otherwise print

```
Access Denied
```

💡 Hint:

```javascript
if (
    username === "Shagun" &&
    password === "mern123" &&
    otpVerified
) {
    console.log("Login Successful");
}
else {
    console.log("Access Denied");
}
```

---

# Mini Challenge (Try Yourself)

Create **scholarship.js**

Rules:

```javascript
marks = 92
income = 180000
```

Scholarship is given only if:

* Marks are **90 or above**
* Income is **less than 300000**

Expected output:

```
Scholarship Approved
```

Otherwise:

```
Scholarship Rejected
```

---

# Interview Questions

Answer these without running the code.

### Q1

Which operator means **AND**?

---

### Q2

Which operator means **OR**?

---

### Q3

Output?

```javascript
console.log(true && false);
```

---

### Q4

Output?

```javascript
console.log(false || true);
```

---

### Q5

Why do login systems use `&&` instead of `||`?

---

# 📋 Your Tasks

1. Create `logicalOperators.js` and run it.
2. Create `bank.js` and run it.
3. Create `movieTicket.js` and run it.
4. Complete `loginSystem.js`.
5. Complete the bonus `scholarship.js`.
6. Answer the five interview questions.
7. Share:

   * A screenshot of your terminal output.
   * Your answers to the interview questions.

I'll review everything, point out any mistakes, and then we'll commit **Day 6** to GitHub together. You're building a great foundation for the rest of the MERN stack!
