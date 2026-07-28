Excellent. This is exactly how we'll learn from now on. I'll make **Hoisting** so clear that you'll never forget it.

---

# Module 2 - Topic 3: Hoisting

---

# 1. Theory

## What is Hoisting?

**Definition:**

Hoisting is JavaScript's behavior of **processing declarations before executing the code.**

A simple definition:

> **Before JavaScript starts running your program, it first scans the entire file and registers variables and functions.**

Notice:

It **does NOT move your code physically**.

JavaScript simply remembers that these variables/functions exist.

---

## Why does Hoisting exist?

Imagine JavaScript as a teacher checking attendance.

Before class starts,

the teacher first prepares the attendance sheet.

Only after that does she start calling student names.

JavaScript does the same.

It first checks

* Variables
* Functions

Then it starts executing line by line.

This preparation phase is called **Hoisting**.

---

## How JavaScript Executes Code

JavaScript works in **2 phases**.

### Phase 1 – Memory Creation Phase

JavaScript scans the entire file.

It stores

* Variables
* Functions

inside memory.

No code runs here.

---

### Phase 2 – Execution Phase

Now JavaScript executes code line by line.

Assignments happen.

Functions are called.

Calculations happen.

---

Example

```javascript
console.log(name);

var name = "Shagun";

console.log(name);
```

---

### Memory Phase

JavaScript stores

```text
name = undefined
```

---

### Execution Phase

Line 1

```javascript
console.log(name);
```

Output

```text
undefined
```

---

Next

```javascript
name = "Shagun";
```

Memory becomes

```text
name = "Shagun"
```

Now

```javascript
console.log(name);
```

Output

```text
Shagun
```

---

# Why undefined?

Many students think

"Variable is moved to the top."

❌ Wrong.

Actually,

JavaScript already knows

```javascript
var name;
```

exists.

But value isn't assigned yet.

So it stores

```text
undefined
```

---

## var Hoisting

Example

```javascript
console.log(city);

var city = "Delhi";
```

Output

```text
undefined
```

Because

Memory Phase

```text
city = undefined
```

Execution Phase

```text
city = "Delhi"
```

---

## let Hoisting

Example

```javascript
console.log(age);

let age = 24;
```

Output

```text
ReferenceError
```

---

Question

Is let hoisted?

**YES!**

Many people think it isn't.

That's incorrect.

`let` **is hoisted**, but it stays in a special area called the **Temporal Dead Zone (TDZ)** until its declaration is reached.

Trying to use it before then causes a `ReferenceError`.

For now, remember:

> `let` is hoisted, but you cannot use it before its declaration.

We'll study the TDZ in more detail later.

---

## const Hoisting

```javascript
console.log(pi);

const pi = 3.14;
```

Output

```text
ReferenceError
```

Exactly like `let`.

---

## Function Declaration Hoisting

Functions are fully stored in memory.

Example

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output

```text
Hello
```

Because the entire function is available before execution starts.

---

## Function Expression Hoisting

```javascript
greet();

const greet = function () {
    console.log("Hello");
}
```

Output

```text
ReferenceError
```

Because `greet` is a `const` variable.

The function is assigned later.

---

# Summary Table

| Type                 | Hoisted              | Can Use Before Declaration? |
| -------------------- | -------------------- | --------------------------- |
| var                  | Yes                  | Yes (undefined)             |
| let                  | Yes                  | No (ReferenceError)         |
| const                | Yes                  | No (ReferenceError)         |
| Function Declaration | Yes                  | Yes                         |
| Function Expression  | Variable rules apply | No (if let/const)           |

---

# 2. Real-Life Examples

## Example 1 – School Attendance

Before class begins:

Teacher prepares attendance register.

Then students arrive.

Preparation = Memory Phase

Calling names = Execution Phase

---

## Example 2 – Bank

Morning

Bank opens customer accounts list.

Customers haven't deposited money yet.

Account exists.

Balance

```text
undefined
```

Deposit later.

---

## Example 3 – Hospital

Morning

Hospital registers patients.

Treatment starts later.

Registration

↓

Execution

---

## Example 4 – Restaurant

Chef prepares order list.

Cooking starts later.

Preparation

↓

Cooking

---

## Example 5 – Shopping Website

Amazon loads product list.

Customer buys later.

Products registered

↓

Purchases happen later.

---

## Example 6 – Movie Booking

Seats created first.

Booking happens later.

---

## Example 7 – Login System

User account exists.

Login happens later.

---

## Example 8 – Employee Database

Employee records exist.

Salary credited later.

---

# 3. Code Examples

## Example 1 – var

```javascript
console.log(city);

var city = "Delhi";
```

Output

```text
undefined
```

---

## Example 2 – let

```javascript
console.log(age);

let age = 24;
```

Output

```text
ReferenceError
```

---

## Example 3 – const

```javascript
console.log(pi);

const pi = 3.14;
```

Output

```text
ReferenceError
```

---

## Example 4 – Function Declaration

```javascript
greet();

function greet() {
    console.log("Welcome");
}
```

Output

```text
Welcome
```

---

## Example 5 – Function Expression

```javascript
greet();

const greet = function () {
    console.log("Hello");
}
```

Output

```text
ReferenceError
```

---

## Example 6 – Bank

```javascript
console.log(balance);

var balance = 5000;

console.log(balance);
```

Output

```text
undefined
5000
```

---

## Example 7 – Hospital

```javascript
showPatient();

function showPatient() {
    console.log("Patient Registered");
}
```

Output

```text
Patient Registered
```

---

## Example 8 – Shopping

```javascript
console.log(product);

var product = "Laptop";
```

Output

```text
undefined
```

---

## Example 9 – Employee

```javascript
console.log(employee);

let employee = "Shagun";
```

Output

```text
ReferenceError
```

---

## Example 10 – Login

```javascript
login();

function login() {
    console.log("Login Successful");
}
```

Output

```text
Login Successful
```

---

# 4. Coding Assignments

Create these files in `01-JavaScript`.

### Assignment 1

`schoolHoisting.js`

* Use `var` before declaration.
* Print before and after assignment.

---

### Assignment 2

`bankHoisting.js`

* Print balance before declaration using `var`.

---

### Assignment 3

`hospitalHoisting.js`

* Call a function declaration before it is defined.

---

### Assignment 4

`shoppingHoisting.js`

* Use `let` before declaration and observe the error.

---

### Assignment 5

`restaurantHoisting.js`

* Use `const` before declaration and observe the error.

---

### Assignment 6

`employeeHoisting.js`

* Call a function expression before its assignment.

---

### Assignment 7

`movieHoisting.js`

* Call a function declaration before its definition.

---

### Assignment 8

`loginHoisting.js`

* Print a `var` variable before and after assignment.

---

### Assignment 9

`paymentHoisting.js`

* Compare `var` and `let` behavior in one file.

---

### Assignment 10

`otpHoisting.js`

* Compare a function declaration and a function expression.

---

# 5. Notes (`Notes/Hoisting.md`)

```md
# Hoisting Notes

## Definition
JavaScript registers declarations before execution.

## JavaScript Phases
1. Memory Creation Phase
2. Execution Phase

## var
- Hoisted
- Initialized with undefined
- Can be accessed before declaration (prints undefined)

## let
- Hoisted
- Not accessible before declaration
- ReferenceError due to TDZ

## const
- Hoisted
- Not accessible before declaration
- ReferenceError due to TDZ

## Function Declaration
- Fully hoisted
- Can be called before declaration

## Function Expression
- Follows the variable's hoisting rules
```

---

# 6. Interview Questions

### Beginner

1. What is hoisting?
2. Does JavaScript move code to the top?
3. How many execution phases are there?
4. What happens to a `var` variable during the memory phase?
5. What happens if you access a `var` before declaration?
6. Is `let` hoisted?
7. Is `const` hoisted?
8. Why do `let` and `const` throw a `ReferenceError` before declaration?
9. Are function declarations hoisted?
10. Are function expressions hoisted?

### Intermediate

11. Why does `var` print `undefined` instead of throwing an error?
12. Explain the Memory Creation Phase.
13. Explain the Execution Phase.
14. Compare hoisting behavior of `var`, `let`, and `const`.
15. Explain hoisting of a function declaration versus a function expression.

### Scenario-Based

16. Why would a function declaration work before its definition while a function expression fails?
17. What kind of bug can occur if you rely on `var` hoisting?
18. In a banking application, why is using `let` or `const` generally safer than `var`?
19. What would happen if you call an arrow function before its declaration?
20. Why do modern JavaScript projects usually prefer `let` and `const`?

> Notice that every interview question above is based only on concepts we've covered.

---

# 7. MCQs

**Q1.** What does hoisting do?

* A) Moves code physically
* B) Registers declarations before execution
* C) Deletes variables
* D) Compiles HTML

**Q2.** Accessing a `var` before assignment prints:

* A) `null`
* B) `undefined`
* C) `0`
* D) Error

**Q3.** Accessing a `let` before declaration results in:

* A) `undefined`
* B) `null`
* C) `ReferenceError`
* D) `false`

**Q4.** Which can be called before its definition?

* A) Function Expression
* B) Function Declaration
* C) Arrow Function assigned to `const`
* D) None

**Q5.** JavaScript executes code in:

* A) One phase
* B) Two phases
* C) Three phases
* D) Four phases

---

# 8. Industry Usage

⭐ **Importance: 5/5**

Hoisting is fundamental because it helps you understand why some code works and some code fails.

You'll encounter it in:

* Node.js applications
* Express.js route handlers
* React components
* JavaScript debugging
* Technical interviews

Understanding hoisting helps you avoid subtle bugs and write predictable code.

---

# 9. Git

After completing the assignments and notes:

```bash
git status
git add .
git commit -m "Completed JavaScript Hoisting"
git push
```

---

# 10. One-Page Revision

* Hoisting = JavaScript registers declarations before execution.
* JavaScript has two phases: Memory Creation and Execution.
* `var` → hoisted, initialized to `undefined`.
* `let` and `const` → hoisted but cannot be used before declaration (TDZ).
* Function declarations are fully hoisted.
* Function expressions follow the hoisting behavior of the variable they are assigned to.
* Prefer `let` and `const` in modern JavaScript to avoid hoisting-related bugs.
