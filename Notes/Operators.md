# 🚀 MERN Bootcamp - Day 4

# Topic: JavaScript Operators (From Absolute Zero)

Welcome to **Day 4**! 🎉

Today we'll learn something that every JavaScript programmer uses **hundreds of times every day**.

Don't worry if you've never heard the word **operator** before.

We'll start from the very beginning.

---

# First, What is an Operator?

Imagine this.

You have two numbers.

```
10
20
```

How do you add them?

You need a symbol.

```
10 + 20
```

That **+** is called an **Operator**.

### Definition

> An operator is a symbol that performs an operation on values.

Think of operators like **buttons on a calculator**.

Calculator buttons:

```
+
-
*
/
=
```

JavaScript also has these buttons.

---

# Real Life Example

Imagine you have ₹500.

Your friend gives you ₹200.

```
500 + 200
```

Result:

```
700
```

The **+** operator did the work.

Without the operator,

```
500 200
```

JavaScript won't know what to do.

---

# Types of Operators (We'll Learn One by One)

```
Operators

│
├── Arithmetic Operators
├── Assignment Operators
├── Comparison Operators
├── Logical Operators
└── Increment / Decrement
```

Today we'll learn the **first two**.

The rest will come in upcoming lessons.

---

# Part 1: Arithmetic Operators

These are the same as your school maths.

| Operator | Meaning   |
| -------- | --------- |
| +        | Add       |
| -        | Subtract  |
| *        | Multiply  |
| /        | Divide    |
| %        | Remainder |
| **       | Power     |

---

## 1. Addition (+)

Example

```javascript
let a = 10;
let b = 20;

console.log(a + b);
```

Output

```
30
```

Memory

```
a
↓

10

b
↓

20

a+b

↓

30
```

---

## 2. Subtraction (-)

```javascript
let a = 30;
let b = 10;

console.log(a - b);
```

Output

```
20
```

---

## 3. Multiplication (*)

```javascript
let a = 5;
let b = 4;

console.log(a * b);
```

Output

```
20
```

---

## 4. Division (/)

```javascript
let a = 20;
let b = 5;

console.log(a / b);
```

Output

```
4
```

---

## 5. Modulus (%)

This confuses beginners.

Let's make it easy.

Modulus means:

> **Whatever is left after division.**

Example

```
10 ÷ 3

3 × 3 = 9

Remaining = 1
```

So

```javascript
console.log(10 % 3);
```

Output

```
1
```

Another

```
20 ÷ 5

Nothing remains

Answer

0
```

```javascript
console.log(20 % 5);
```

Output

```
0
```

Remember

```
% = remainder
```

---

## 6. Power (**)

Example

```javascript
console.log(2 ** 3);
```

Means

```
2 × 2 × 2
```

Output

```
8
```

---

# Part 2: Assignment Operator

You've already used it without realizing.

```
=
```

Example

```javascript
let name = "Shagun";
```

Does it mean equal?

❌ No.

It means

> Store the value inside the variable.

Memory

```
name

↓

Shagun
```

---

Example

```javascript
let age = 24;
```

Memory

```
age

↓

24
```

---

# Shortcut Assignment Operators

Instead of

```javascript
let marks = 80;

marks = marks + 5;
```

We can write

```javascript
marks += 5;
```

Both mean exactly the same.

---

Example

```javascript
let money = 500;

money += 200;

console.log(money);
```

Output

```
700
```

---

Similarly

Subtract

```javascript
money -= 100;
```

Multiply

```javascript
money *= 2;
```

Divide

```javascript
money /= 5;
```

---

# Let's Practice

Create a new file.

```
operators.js
```

Inside **01-JavaScript**

---

Write this code exactly:

```javascript
let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);

let salary = 50000;

salary += 5000;
console.log("Salary after increment:", salary);

salary -= 2000;
console.log("Salary after deduction:", salary);
```

Run it:

```bash
node operators.js
```

---

# Mini Exercise (Do Yourself)

Create another file:

```
calculator.js
```

Write this:

```javascript
let num1 = 50;
let num2 = 10;
```

Print

* Addition
* Subtraction
* Multiplication
* Division
* Modulus

using `console.log()`.

Try without looking back at the notes first.

---

# Assignment

Create a file:

```
shopping.js
```

Imagine:

```
Wallet = ₹1000
```

You bought:

```
Shoes = ₹700
```

Use operators to calculate:

1. Remaining money
2. Add ₹500 from your father
3. Spend ₹200
4. Print final wallet amount

---

# Interview Questions (Write Answers Yourself)

### Q1

Which operator is used for addition?

---

### Q2

What does `%` (modulus) return?

---

### Q3

What is the output?

```javascript
console.log(15 % 4);
```

---

### Q4

What does `+=` do?

---

### Q5 (Thinking Question)

Why do banking apps use `+` and `-` operators thousands of times every day?

---

# Today's GitHub Commit (Don't do it yet)

After I check your work, we'll commit with:

```bash
git add .
git commit -m "Day 4 - Learned JavaScript Operators"
git push
```

⛔ **Don't commit yet.**

---

# 📚 Today's Goal

By the end of Day 4, you should understand:

* ✅ What an operator is
* ✅ Addition (`+`)
* ✅ Subtraction (`-`)
* ✅ Multiplication (`*`)
* ✅ Division (`/`)
* ✅ Modulus (`%`)
* ✅ Power (`**`)
* ✅ Assignment (`=`)
* ✅ Shortcut assignments (`+=`, `-=`, `*=`, `/=`)

---

### Your task now

Complete these in order:

1. Run `operators.js` and share the output (screenshot is fine).
2. Run `calculator.js` and share the output.
3. Run `shopping.js` and share the output.
4. Answer **Q1–Q5**.

I'll check everything, correct any mistakes, and only then we'll make your **Day 4 GitHub commit**.
