# 📘 Day 8: JavaScript Loops (`for` Loop)

Welcome to one of the most important topics in JavaScript.

Almost every real-world JavaScript program uses loops. Once you understand loops well, learning arrays, objects, functions, React, and Node.js becomes much easier.

---

# 1️⃣ Introduction

## What is a Loop?

A **loop** is a programming structure that repeats a block of code multiple times.

Instead of writing the same code repeatedly, we let JavaScript do the repetition for us.

---

## Without Loop

Imagine printing your name 5 times.

```javascript
console.log("Shagun");
console.log("Shagun");
console.log("Shagun");
console.log("Shagun");
console.log("Shagun");
```

Works...

But what if you want to print it **1000 times?**

Impossible to write manually.

---

## With Loop

```javascript
for(let i = 1; i <= 5; i++){
    console.log("Shagun");
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

Only **3 lines of code** instead of writing 5, 100, or 1000 lines.

---

# Why do we need loops?

Imagine these applications:

### Amazon

Display 100 products.

Without loops:

```
Product 1
Product 2
Product 3
...
Product 100
```

---

### Instagram

Show 500 posts.

---

### WhatsApp

Display all messages.

---

### Bank

Process thousands of transactions.

---

### Student Management System

Print marks of every student.

---

### Attendance System

Check attendance of every employee.

---

Every one of these uses loops.

---

# Real-Life Analogy

Imagine your teacher says:

> Write your name 100 times.

You have two options.

### Option 1

Write manually.

```
Shagun
Shagun
Shagun
...
100 times
```

Very boring.

---

### Option 2

Tell a robot

> Write "Shagun" 100 times.

That robot is the **loop**.

---

# 2️⃣ Theory

The most commonly used loop is

# `for` Loop

Syntax

```javascript
for(initialization; condition; update){
    // code
}
```

Looks confusing...

Let's break it into pieces.

---

## Part 1

Initialization

```javascript
let i = 1;
```

This creates a variable.

Think of it as a counter.

```
i

↓

1
```

This runs **only once**.

---

## Part 2

Condition

```javascript
i <= 5
```

JavaScript asks

> Should I continue?

If

```
true
```

Loop continues.

If

```
false
```

Loop stops.

---

## Part 3

Update

```javascript
i++
```

Means

```
i = i + 1
```

Example

```
1

↓

2

↓

3

↓

4

↓

5

↓

6
```

---

# Memory Diagram

Initially

```
i

↓

1
```

Iteration 1

```
Condition

1 <= 5

True

↓

Print

↓

Increment

↓

2
```

Iteration 2

```
2 <= 5

True

↓

Print

↓

Increment

↓

3
```

Iteration 3

```
3 <= 5

↓

Print

↓

4
```

Iteration 4

```
4 <= 5

↓

Print

↓

5
```

Iteration 5

```
5 <= 5

↓

Print

↓

6
```

Now

```
6 <= 5

False

STOP
```

---

# Dry Run

```javascript
for(let i=1;i<=3;i++){
    console.log(i);
}
```

Step 1

```
i = 1

1<=3

True

Print 1
```

---

Step 2

```
i++

2

2<=3

Print 2
```

---

Step 3

```
i++

3

3<=3

Print 3
```

---

Step 4

```
i++

4

4<=3

False

Stop
```

Output

```
1
2
3
```

---

# Infinite Loop

Never do this

```javascript
for(let i=1;i<=5;){
    console.log(i);
}
```

Why?

Because

```
i

never changes
```

It stays

```
1

↓

1

↓

1

↓

1

↓

Forever
```

Program never stops.

---

# 3️⃣ Code Examples

## Example 1

Print numbers 1–5

**numbers.js**

```javascript
for(let i=1;i<=5;i++){
    console.log(i);
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

---

## Example 2

Print your name 10 times

**nameLoop.js**

```javascript
for(let i=1;i<=10;i++){
    console.log("Shagun");
}
```

---

## Example 3

Print even numbers

**even.js**

```javascript
for(let i=2;i<=10;i+=2){
    console.log(i);
}
```

Output

```
2
4
6
8
10
```

---

## Example 4

Print odd numbers

**odd.js**

```javascript
for(let i=1;i<=9;i+=2){
    console.log(i);
}
```

---

## Example 5

Countdown

**countdown.js**

```javascript
for(let i=5;i>=1;i--){
    console.log(i);
}
```

Output

```
5
4
3
2
1
```

---

## Example 6

Multiplication Table of 5

**table5.js**

```javascript
for(let i=1;i<=10;i++){
    console.log("5 x " + i + " = " + (5*i));
}
```

Output

```
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

---

# 4️⃣ Visual Explanation

Example

```javascript
for(let i=1;i<=3;i++){
    console.log("Hello");
}
```

Flow

```
Start

↓

i=1

↓

1<=3 ?

↓

Yes

↓

Print Hello

↓

i++

↓

2<=3 ?

↓

Yes

↓

Print Hello

↓

i++

↓

3<=3 ?

↓

Yes

↓

Print Hello

↓

i++

↓

4<=3 ?

↓

No

↓

End
```

---

# 5️⃣ Practice Quiz (Q1–Q5)

Answer these without running code.

### Q1

How many times will this execute?

```javascript
for(let i=1;i<=5;i++){
    console.log("Hi");
}
```

---

### Q2

What will be printed?

```javascript
for(let i=3;i<=5;i++){
    console.log(i);
}
```

---

### Q3

Which part of a `for` loop runs only once?

a) Condition

b) Update

c) Initialization

d) Body

---

### Q4

What is the value of `i` after this loop finishes?

```javascript
for(let i=1;i<=3;i++){}
```

---

### Q5

Why are loops useful in applications like Amazon or Instagram?

(Answer in your own words.)

---

# 6️⃣ Coding Practice

Create these files inside **01-JavaScript**.

### 1. numbers.js

Print

```
1
2
3
4
5
```

---

### 2. names.js

Print your name **10 times**.

---

### 3. evenNumbers.js

Print even numbers from **2 to 20**.

---

### 4. oddNumbers.js

Print odd numbers from **1 to 19**.

---

### 5. reverse.js

Print

```
10
9
8
7
6
5
4
3
2
1
```

---

### 6. table7.js

Print the multiplication table of 7.

---

After running all files, send me **one screenshot** of the terminal.

I'll review every output.

---

# 7️⃣ Assignment

Create these programs on your own.

### Assignment 1

Print numbers from **50 to 60**.

---

### Assignment 2

Print numbers divisible by **5** from **1–50**.

---

### Assignment 3

Print

```
*****
```

five times.

(Hint: use a loop that prints the string `"*****"`.)

---

### Assignment 4

Print the multiplication table of **12**.

---

### Assignment 5

Count backwards from **20 to 10**.

---

# 8️⃣ 🎯 Interview Questions

Try answering these after today's lesson.

### Basic

1. What is a loop?
2. Why do we use loops?
3. What are the three parts of a `for` loop?
4. Which part executes only once?
5. Which part decides whether the loop continues?

---

### Intermediate

1. What causes an infinite loop?
2. What is the difference between `i++` and `i += 2`?
3. Can a `for` loop count backwards? How?
4. What happens if the condition is false on the very first check?

---

### Scenario-Based

Suppose you have **10,000 products** in an online shopping website.

Would you write:

```javascript
console.log(product1);
console.log(product2);
...
```

or use a loop?

Explain **why**.

---

# 9️⃣ Git & GitHub

**Don't commit yet.**

We'll commit only after:

* ✅ Your quiz answers
* ✅ Coding practice
* ✅ Assignment
* ✅ Interview questions (if you choose to answer them)

---

# 🔟 Notes (For Your `Notes/` Folder)

**Topic:** `for` Loop

* A loop repeats code.
* `for` loop has three parts:

  * Initialization
  * Condition
  * Update
* Initialization runs once.
* Condition is checked before each iteration.
* Update changes the counter.
* Loops reduce repetitive code.
* Forgetting to update the counter can create an infinite loop.
* `i++` increases by 1.
* `i += 2` increases by 2.

---

# 1️⃣1️⃣ Progress

### JavaScript Progress

* ✅ Variables
* ✅ Data Types
* ✅ Operators
* ✅ Comparison Operators
* ✅ if
* ✅ if...else
* ✅ else if
* ✅ Logical Operators
* ✅ switch
* ✅ **for Loop (Current Lesson)**

---

Take your time. Complete the **Quiz**, **Coding Practice**, and **Assignment**, then send:

1. Your quiz answers.
2. A screenshot of your terminal output.
3. Any doubts you have.

I’ll review everything before we move on.
