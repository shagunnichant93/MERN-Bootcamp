Perfect! 👏 Welcome to the next topic.

# Module 2 – Advanced Functions

# Day 2 – Scope (Global, Function & Block Scope)

> **Goal:** By the end of this lesson, you'll understand **where variables can be accessed** and why scope is one of the most common interview questions in JavaScript.

---

# What is Scope?

## Definition

**Scope determines where a variable can be accessed in a program.**

Simply put,

> **Scope = Visibility of a variable.**

Think of it as answering this question:

> **"From where can I use this variable?"**

---

# Real-Life Example 1 – Your House 🏠

Imagine your house.

There is

* Your Bedroom
* Kitchen
* Living Room

Suppose you keep your laptop in your bedroom.

Who can access it?

Only someone inside your bedroom.

People in the kitchen cannot access it.

This is exactly how **Function Scope** works.

---

# Real-Life Example 2 – Office 🏢

An office has

* Reception
* HR Room
* Manager Cabin

A visitor can enter Reception.

But cannot directly enter the Manager's Cabin.

Why?

Because access is limited.

Variables behave exactly like this.

---

# Types of Scope

There are mainly **3 types**.

1. Global Scope
2. Function Scope
3. Block Scope

We'll learn one by one.

---

# 1. Global Scope

## Definition

A variable declared **outside every function** is called a **Global Variable**.

It can be accessed from anywhere.

### Example

```javascript
let company = "Infosys";

function employee() {
    console.log(company);
}

employee();

console.log(company);
```

Output

```
Infosys
Infosys
```

Why?

Because `company` is global.

Everyone can access it.

---

## Real-Life Example

Imagine Wi-Fi in your house.

Every room can use it.

Bedroom ✔

Kitchen ✔

Hall ✔

Guest Room ✔

Global Variable is exactly like Home Wi-Fi.

---

# Example 2

```javascript
let country = "India";

function showCountry() {
    console.log(country);
}

showCountry();
```

Output

```
India
```

---

# 2. Function Scope

## Definition

A variable declared **inside a function** can only be used inside that function.

Nobody outside can access it.

---

### Example

```javascript
function student() {

    let marks = 95;

    console.log(marks);

}

student();
```

Output

```
95
```

Works perfectly.

---

Now try this.

```javascript
function student() {

    let marks = 95;

}

console.log(marks);
```

Output

```
ReferenceError: marks is not defined
```

Why?

Because `marks` lives only inside `student()`.

---

## Real-Life Example

Imagine your bedroom.

Your wallet is inside your bedroom.

Can your neighbour access it?

No.

Exactly like Function Scope.

---

# Example

```javascript
function bank() {

    let balance = 5000;

    console.log(balance);

}

bank();
```

Output

```
5000
```

---

Outside

```javascript
console.log(balance);
```

Error.

---

# 3. Block Scope

Block means

```javascript
{

}
```

Variables declared using

```javascript
let
```

or

```javascript
const
```

inside a block stay inside that block.

---

Example

```javascript
if(true){

    let age = 24;

    console.log(age);

}
```

Output

```
24
```

Outside

```javascript
console.log(age);
```

Output

```
ReferenceError
```

---

## Real-Life Example

Imagine a school examination hall.

Only students inside the hall can write the exam.

People outside cannot.

That is Block Scope.

---

# var vs let

One of the most asked interview questions.

Example

```javascript
if(true){

    var city = "Delhi";

}

console.log(city);
```

Output

```
Delhi
```

Why?

Because `var` ignores block scope.

---

Now

```javascript
if(true){

    let city = "Delhi";

}

console.log(city);
```

Output

```
ReferenceError
```

---

### Interview Trick

`var`

❌ Not Block Scoped

`let`

✅ Block Scoped

`const`

✅ Block Scoped

---

# Global vs Function Scope

```javascript
let school = "ABC School";

function student(){

    let name = "Shagun";

    console.log(name);

    console.log(school);

}

student();

console.log(school);
```

Output

```
Shagun
ABC School
ABC School
```

Question

Can the function access global variables?

Yes.

Can global code access function variables?

No.

---

# Visual Diagram

```
Global Scope

company

↓

Function

employee

↓

salary
```

Who can access `company`?

Everyone.

Who can access `salary`?

Only employee().

---

# Real-Life Examples

## Bank

```javascript
let bankName = "SBI";

function customer(){

    let balance = 5000;

    console.log(bankName);

    console.log(balance);

}

customer();
```

---

## Hospital

```javascript
let hospital = "Apollo";

function patient(){

    let disease = "Fever";

    console.log(hospital);

    console.log(disease);

}

patient();
```

---

## Restaurant

```javascript
let restaurant = "Dominos";

function chef(){

    let pizza = "Farmhouse";

    console.log(restaurant);

    console.log(pizza);

}

chef();
```

---

## Login

```javascript
let appName = "Instagram";

function login(){

    let password = "12345";

    console.log(appName);

    console.log(password);

}

login();
```

---

## Shopping

```javascript
let website = "Amazon";

function order(){

    let item = "Laptop";

    console.log(website);

    console.log(item);

}

order();
```

---

# Practice Programs

Create these files.

### Program 1

**globalSchool.js**

Global variable

School Name

Function prints it.

---

### Program 2

**bankScope.js**

Global

Bank Name

Inside function

Balance

Print both.

---

### Program 3

**restaurantScope.js**

Global

Restaurant Name

Inside function

Food Name

Print both.

---

### Program 4

**hospitalScope.js**

Global

Hospital Name

Inside function

Disease

Print both.

---

### Program 5

**movieScope.js**

Global

Movie Name

Inside function

Ticket Price

Print both.

---

### Program 6

**shoppingScope.js**

Global

Website

Inside function

Product Name

Print both.

---

### Program 7

**employeeScope.js**

Global

Company Name

Inside function

Employee Salary

Print both.

---

### Program 8

**blockScope.js**

Create

```javascript
if(true){

let age = 24;

console.log(age);

}
```

Now try

```javascript
console.log(age);
```

Observe the error.

---

### Program 9

**varScope.js**

Create

```javascript
if(true){

var city="Delhi";

}

console.log(city);
```

Observe the output.

---

### Program 10

**loginScope.js**

Global

App Name

Inside function

Username

Password

Print all.

---

# Quick Quiz

### Q1

A variable declared outside every function is called

A) Local Variable

B) Global Variable

C) Block Variable

D) Function Variable

---

### Q2

Can a function access global variables?

Yes / No

---

### Q3

Can global code access a function variable?

Yes / No

---

### Q4

Which keyword is block scoped?

A) var

B) let

C) goto

---

### Q5

What will be printed?

```javascript
let city = "Delhi";

function test(){

console.log(city);

}

test();
```

A) Delhi

B) Error

---

# Interview Questions

## Basic

1. What is Scope in JavaScript?
2. What is Global Scope?
3. What is Function Scope?
4. What is Block Scope?
5. Difference between Global Scope and Function Scope?
6. Difference between `var`, `let`, and `const` regarding scope?
7. Can a function access global variables?
8. Can global code access local variables?
9. Why should we avoid using too many global variables?
10. What is a `ReferenceError`?

---

## Intermediate

11. What happens if you try to access a function variable outside the function?
12. Why is `let` preferred over `var` in modern JavaScript?
13. Is `const` block scoped?
14. Can two different functions have variables with the same name?
15. Explain variable visibility using a real-life example.

---

## Scenario-Based

16. In a Banking Application, which data should be global and which should be local? Why?

17. In an E-commerce application, where would you keep the website name and where would you keep the customer's cart items?

18. In a Hospital Management System, explain global and local variables using a real-world example.

---

### 📌 Your Tasks

1. Create all **10 programs**.
2. Run each one and share screenshots.
3. Answer **Q1–Q5**.
4. Answer **Interview Questions 1–18**.

As before, **don't ask for the next lesson until you've completed these**. I'll review every answer, explain any mistakes, and only then we'll move to **Hoisting**, the final topic of Module 2.
