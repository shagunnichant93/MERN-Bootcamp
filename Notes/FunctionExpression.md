Perfect! Let's begin **Module 2** properly.

---

# 🚀 Module 2 – Advanced Functions

# 📅 Day 1 – Function Expressions

> **Duration:** 60–90 minutes

---

# 📚 Learning Objectives

By the end of today's lesson, you'll understand:

* What is a Function Expression?
* Function Declaration vs Function Expression
* Why Function Expressions exist
* Real-life examples
* Memory diagrams
* Advantages & disadvantages
* Common beginner mistakes
* Practice exercises
* Assignment
* Quiz
* Interview questions

---

# 🧠 Recap

Previously, we learned this:

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

This is called a **Function Declaration**.

You write the function using the `function` keyword and give it a name.

---

# 🤔 But Why Learn Another Way?

Imagine your manager says:

> "Store this function inside a variable."

Can we do that?

Yes!

JavaScript treats functions like values.

Just like:

```javascript
let name = "Shagun";
```

stores a string,

```javascript
let age = 24;
```

stores a number,

you can also store a function.

---

# 📖 Definition

## What is a Function Expression?

A **Function Expression** is a function that is **stored inside a variable**.

Instead of declaring it directly, we assign the function to a variable.

---

# 🌍 Real-Life Analogy

Imagine you buy a TV.

Normally:

```text
TV
```

But now imagine you put it inside a box.

```text
📦
└── TV
```

The TV hasn't changed.

It's simply stored inside a container.

Similarly,

```javascript
function greet() {}
```

becomes

```javascript
let greet = function() {};
```

The function is now stored inside the variable `greet`.

---

# 🧠 Memory Diagram

```
Variable

greet
   │
   ▼
┌──────────────────────┐
│ function() {         │
│ console.log("Hello") │
│ }                    │
└──────────────────────┘
```

The variable points to the function.

---

# Syntax

```javascript
let variableName = function () {

    // code

};
```

Notice:

* We use `=`
* Function has **no name** (for now)
* Semicolon at the end because it's a variable assignment

---

# Example 1

Create:

```
functionExpression1.js
```

```javascript
let greet = function () {
    console.log("Hello MERN");
};

greet();
```

Output

```
Hello MERN
```

---

# Let's Compare

### Function Declaration

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

---

### Function Expression

```javascript
let greet = function () {
    console.log("Hello");
};

greet();
```

Both produce the same output.

The difference is **how they are created**.

---

# Example 2

Create:

```
calculator.js
```

```javascript
let add = function () {
    console.log(10 + 20);
};

let subtract = function () {
    console.log(20 - 5);
};

add();
subtract();
```

Output

```
30
15
```

---

# Example 3

Create:

```
student.js
```

```javascript
let showStudent = function () {
    console.log("Name: Shagun");
    console.log("Age: 24");
    console.log("City: Delhi");
};

showStudent();
```

Output

```
Name: Shagun
Age: 24
City: Delhi
```

---

# Example 4

Functions can also take parameters.

```javascript
let greet = function (name) {
    console.log("Hello " + name);
};

greet("Shagun");
greet("Rahul");
greet("Priya");
```

Output

```
Hello Shagun
Hello Rahul
Hello Priya
```

Notice that everything we learned about parameters still works.

---

# Example 5

Return values also work.

```javascript
let add = function (a, b) {
    return a + b;
};

let answer = add(50, 25);

console.log(answer);
```

Output

```
75
```

---

# Why Use Function Expressions?

In modern JavaScript:

* React uses them.
* Node.js uses them.
* Express uses them.
* Callbacks use them.
* Event listeners use them.

You'll see them everywhere.

---

# Function Declaration vs Function Expression

| Function Declaration                                            | Function Expression            |
| --------------------------------------------------------------- | ------------------------------ |
| Written directly                                                | Stored inside a variable       |
| Has a function name                                             | Usually anonymous              |
| Can be called before declaration (hoisting - we'll learn later) | Must be defined before calling |
| Common in basic programs                                        | Common in modern JavaScript    |

---

# Real-Life Example

Imagine an online shopping website.

Instead of writing:

```javascript
function calculateTotal() {}
```

Developers often write:

```javascript
let calculateTotal = function () {};
```

Later, that variable can even be replaced with another function if needed.

---

# Common Beginner Mistakes

## ❌ Forgetting the semicolon

```javascript
let greet = function () {
    console.log("Hello");
}
```

This often still works because of JavaScript's automatic semicolon insertion, but the recommended style is:

```javascript
let greet = function () {
    console.log("Hello");
};
```

---

## ❌ Forgetting to call the function

```javascript
let greet = function () {
    console.log("Hello");
};
```

Output?

Nothing.

Because you didn't call:

```javascript
greet();
```

---

## ❌ Writing parentheses in the wrong place

Wrong

```javascript
let greet() = function {};
```

Correct

```javascript
let greet = function () {};
```

---

# Memory Comparison

Function Declaration

```
greet()

↓

function greet(){

}
```

---

Function Expression

```
greet

↓

Variable

↓

Function
```

---

# Practice Exercises

Create these files.

## 1.

`helloExpression.js`

Create a function expression that prints

```
Hello JavaScript
```

Call it twice.

---

## 2.

`studentExpression.js`

Store a function in a variable that prints

```
Name

Age

City
```

---

## 3.

`calculatorExpression.js`

Create:

* add()
* subtract()
* multiply()

using function expressions.

---

## 4.

`employeeExpression.js`

Create a function expression with parameters.

```javascript
employee(name, salary)
```

Call it for three employees.

---

## 5.

`squareExpression.js`

Return the square of a number.

Example

```javascript
let square = function (num) {
    return num * num;
};

console.log(square(8));
```

Output

```
64
```

---

# Assignment

Create the following:

### 1.

`bankExpression.js`

Functions:

* deposit(balance, amount)
* withdraw(balance, amount)

Return updated balance.

---

### 2.

`restaurantExpression.js`

Functions:

* orderFood(food)
* cancelOrder(food)

---

### 3.

`movieExpression.js`

Functions:

* bookTicket(movie)
* cancelTicket(movie)

---

### 4.

`shoppingExpression.js`

Create

```javascript
total(price, quantity)
```

Return total bill.

---

### 5.

`hospitalExpression.js`

Create

```javascript
patient(name, disease)
```

Print patient details.

---

# Quiz

### Q1.

What is a Function Expression?

a) A loop

b) A function stored inside a variable

c) An object

d) An array

---

### Q2.

Which operator is used to assign a function to a variable?

---

### Q3.

Write one difference between a Function Declaration and a Function Expression.

---

### Q4.

Can a Function Expression take parameters?

---

### Q5.

Why are Function Expressions commonly used in modern JavaScript frameworks like React?

---

# 💼 Interview Questions

## Basic

1. What is a Function Expression?
2. What is the difference between a Function Declaration and a Function Expression?
3. Can a Function Expression have parameters?
4. Can a Function Expression return a value?
5. Why do we store a function inside a variable?

---

## Intermediate

6. Can you call a Function Expression before it is defined?
7. What happens if you try?
8. Why do developers prefer Function Expressions in modern JavaScript?
9. Can you assign one Function Expression to another variable?
10. Can a Function Expression be passed as an argument to another function?

---

## Scenario-Based

11. You're building an online banking application. You need functions for `deposit`, `withdraw`, and `checkBalance`. Would you use Function Declarations or Function Expressions? Explain your choice.

---

### 📒 Notes (`Notes/Day14-FunctionExpressions.md`)

After completing today's work, write these key points:

* A Function Expression stores a function inside a variable.
* It can have parameters and return values just like a Function Declaration.
* It is created using the `=` operator.
* It is widely used in React, Node.js, and modern JavaScript.
* A Function Expression must be defined before it is called.

---

Complete the practice exercises and assignment, run them with Node.js, and send me the screenshots. Then we'll review everything, do the quiz and interview review, and finally commit this lesson to GitHub.
