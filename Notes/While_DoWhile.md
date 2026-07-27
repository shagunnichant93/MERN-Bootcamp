Awesome! 🎉 Welcome to **Day 9**.

As requested, we'll continue with the **same format as Day 2 onwards**:

* 📖 Theory
* 🧠 Easy explanation
* 💻 Coding examples
* ✍️ Assignments
* ❓ Quiz
* 💼 Interview Questions (Basic + Intermediate + Scenario)
* ✅ GitHub commit at the end

---

# 🚀 Day 9 — While Loop & Do...While Loop

---

# 📖 What You'll Learn Today

* What is a `while` loop?
* Syntax of `while`
* Real-life examples
* What is `do...while`?
* Difference between `for`, `while`, and `do...while`
* Coding practice
* Assignments
* Interview questions

---

# 1️⃣ Why Do We Need a While Loop?

Suppose you want to print:

```
Welcome
```

10 times.

Without a loop:

```javascript
console.log("Welcome");
console.log("Welcome");
console.log("Welcome");
...
```

This is repetitive.

A `while` loop keeps executing **as long as a condition is true**.

---

# Real-Life Example

Imagine filling water into a bucket.

```
While bucket is NOT full
    Keep pouring water
```

When the bucket becomes full,

Stop.

That is exactly how a `while` loop works.

---

# Syntax

```javascript
while(condition){
    // code
}
```

It keeps checking the condition.

If true → execute.

If false → stop.

---

# Memory Diagram

```
i = 1

↓

Is i <= 5 ?

↓

YES

↓

Print i

↓

Increase i

↓

Again check condition
```

---

# Example 1

Create

**while1.js**

```javascript
let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}
```

Output

```
1
2
3
4
5
```

Run:

```bash
node while1.js
```

---

# Example 2

Create

**whileNames.js**

```javascript
let count = 1;

while(count <= 5){
    console.log("Shagun");
    count++;
}
```

Output

```
Shagun
Shagun
Shagun
Shagun
Shagun
```

---

# Example 3

Print Even Numbers

Create

**whileEven.js**

```javascript
let number = 2;

while(number <= 20){
    console.log(number);
    number += 2;
}
```

Output

```
2
4
6
...
20
```

---

# Example 4

Print Reverse

Create

**whileReverse.js**

```javascript
let i = 10;

while(i >= 1){
    console.log(i);
    i--;
}
```

Output

```
10
9
8
...
1
```

---

# Example 5

Multiplication Table

Create

**whileTable.js**

```javascript
let i = 1;

while(i <= 10){
    console.log("8 x " + i + " = " + (8 * i));
    i++;
}
```

Output

```
8 x 1 = 8
...
8 x 10 = 80
```

---

# ⚠ Infinite Loop

Bad code:

```javascript
let i = 1;

while(i <= 5){
    console.log(i);
}
```

Output

```
1
1
1
1
1
...
```

Never ends.

Why?

Because

```
i++
```

is missing.

Always update the variable.

---

# 2️⃣ Do...While Loop

Difference:

A `while` loop checks the condition **before** executing.

A `do...while` loop executes **once first**, then checks the condition.

---

# Syntax

```javascript
do{

    // code

}while(condition);
```

Notice the semicolon after `while(condition);`.

---

# Example 1

Create

**doWhile1.js**

```javascript
let i = 1;

do{
    console.log(i);
    i++;
}while(i <= 5);
```

Output

```
1
2
3
4
5
```

---

# Example 2

Condition False

```javascript
let i = 10;

do{
    console.log(i);
}while(i < 5);
```

Output

```
10
```

Why?

Because `do` executes first.

---

# Comparison

### For Loop

Use when you know how many times the loop should run.

Example:

```
Print numbers 1–100
```

---

### While Loop

Use when you don't know how many times it will run.

Example:

```
ATM asks for PIN until correct PIN is entered.
```

---

### Do While

Use when the task must run at least once.

Example:

```
Display menu first,
then ask whether the user wants to continue.
```

---

# Practice Programs

---

## Program 1

Create

**count10.js**

Print numbers 1–10 using `while`.

---

## Program 2

Create

**reverse20.js**

Print 20 to 1.

---

## Program 3

Create

**table15.js**

Print table of 15 using `while`.

---

## Program 4

Create

**hello5.js**

Print

```
Hello MERN
```

5 times.

---

## Program 5

Create

**doWhileDemo.js**

Print numbers 1–5 using `do...while`.

---

# 📝 Assignments

---

### Assignment 1

Print

```
100
99
98
...
90
```

using `while`.

---

### Assignment 2

Print all numbers divisible by 3 from 3 to 30 using `while`.

---

### Assignment 3

Print

```
*****
*****
*****
```

using a `while` loop.

(Hint: Print `"*****"` three times.)

---

### Assignment 4

Print the table of 9 using a `do...while` loop.

---

# 🧠 Quiz

Answer without running the code.

---

### Q1

How many times will this run?

```javascript
let i = 1;

while(i <= 3){
    console.log(i);
    i++;
}
```

---

### Q2

What is the biggest difference between `while` and `do...while`?

---

### Q3

Output?

```javascript
let i = 5;

while(i < 5){
    console.log(i);
}
```

---

### Q4

Output?

```javascript
let i = 5;

do{
    console.log(i);
}while(i < 5);
```

---

### Q5

Which loop is better for asking a user to enter a password until it's correct?

a) for

b) while

c) switch

---

# 💼 Interview Questions

## Basic

### 1. What is a `while` loop?

---

### 2. When should we use a `while` loop instead of a `for` loop?

---

### 3. What is the syntax of a `do...while` loop?

---

### 4. What is the main difference between `while` and `do...while`?

---

### 5. Can a `do...while` loop execute even if the condition is false?

---

## Intermediate

### 1. What causes an infinite `while` loop?

---

### 2. Why is updating the loop variable important?

---

### 3. Which loop guarantees at least one execution?

---

### 4. Can every `for` loop be rewritten as a `while` loop? Explain.

---

## Scenario-Based

**A website keeps asking the user to enter the correct OTP until it matches.**

Which loop would you use and why?

---

# 📁 Notes

Create:

```
Notes/Day09.md
```

Include:

* while loop
* do...while loop
* syntax
* differences
* examples
* infinite loop
* use cases

---

# 🎯 Today's Goal

By the end of Day 9, you'll be able to:

* ✅ Write `while` loops confidently
* ✅ Use `do...while` correctly
* ✅ Know when to choose `for`, `while`, or `do...while`
* ✅ Avoid infinite loops
* ✅ Explain loop selection in interviews

---

When you've:

1. Run all practice programs,
2. Completed the assignments,
3. Answered the quiz and interview questions,
4. Taken screenshots,

send them to me exactly as before, and I'll review everything before we do the Git commit and push.
