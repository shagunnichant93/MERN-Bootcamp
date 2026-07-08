Awesome! 🎉

Welcome to **Day 2** of your MERN journey.

# 📚 Day 2 – JavaScript Variables (From Absolute Beginner)

Today we'll learn:

1. What is a variable?
2. Why do we need variables?
3. How computers store variables (memory concept)
4. `let`, `const`, and `var`
5. Naming rules
6. Practice questions
7. Assignment
8. GitHub Commit

As promised, we will move **slowly** and **one concept at a time**.

---

# Part 1: What is a Variable?

Imagine you have three boxes.

```
📦 Box 1
📦 Box 2
📦 Box 3
```

Suppose you put different things inside them.

```
📦 Box 1 → Apple 🍎
📦 Box 2 → Book 📚
📦 Box 3 → Laptop 💻
```

Now imagine someone asks,

> "Can you give me the Apple?"

You'll first have to remember **which box contains the apple**.

That becomes difficult if you have 1000 boxes.

---

## So what do we do?

We write names on the boxes.

```
📦 Fruits → Apple

📦 Study → Book

📦 Work → Laptop
```

Now finding things is easy.

---

# Variables work exactly the same way.

A variable is simply a **named box** that stores data.

```
Name → Shagun

Age → 35

City → Hyderabad
```

Here,

```
Name
Age
City
```

are the variable names.

---

# In JavaScript

```javascript
let name = "Shagun";
```

Read it like English:

> Create a box called **name**.

Put

```
Shagun
```

inside it.

---

# Visual Representation

```
Variable

name
 │
 ▼
+-----------+
| "Shagun"  |
+-----------+
```

---

Another example:

```javascript
let age = 35;
```

Memory:

```
age
 │
 ▼
+------+
| 35   |
+------+
```

---

Another example:

```javascript
let city = "Hyderabad";
```

Memory

```
city
 │
 ▼
+-------------+
| Hyderabad   |
+-------------+
```

---

# Real-Life Example

Think of a school.

Every student has

* Name
* Roll Number
* Class

Example

```
Name = Rahul

Roll = 25

Class = 10
```

These are just variables.

---

# In C# (You Already Know This)

```csharp
string name = "Shagun";

int age = 35;
```

In JavaScript

```javascript
let name = "Shagun";

let age = 35;
```

Notice something?

JavaScript **doesn't require you to specify the data type** (`string`, `int`) before the variable. It automatically figures it out.

---

# Why Do We Need Variables?

Imagine building Amazon.

A customer logs in.

```
Name = Amit

City = Delhi

Balance = 4500
```

Can Amazon hardcode these values?

```javascript
"Amit"
"Delhi"
4500
```

No.

Tomorrow another customer logs in.

```
Name = Priya

City = Mumbai

Balance = 8000
```

The values keep changing.

Variables make this possible.

---

# Example

```javascript
let customerName = "Amit";

console.log(customerName);
```

Output

```
Amit
```

Now change it.

```javascript
let customerName = "Priya";

console.log(customerName);
```

Output

```
Priya
```

The variable name is the same.

Only the value changes.

---

# Think Like a MERN Developer

Imagine you're building a food delivery app.

```
Restaurant Name

Order Amount

Delivery Address

Payment Status
```

These will all be variables.

```javascript
let restaurant = "Domino's";

let amount = 450;

let address = "Hyderabad";

let paid = true;
```

Everything that can change in an application is usually stored in variables.

---

# Your First Program

Create a new file inside **01-JavaScript**.

**File name:**

```
variables.js
```

Write this code:

```javascript
let name = "Shagun";
let age = 35;
let city = "Hyderabad";

console.log(name);
console.log(age);
console.log(city);
```

Run it:

```bash
node variables.js
```

Expected output:

```
Shagun
35
Hyderabad
```

---

# 📝 Practice Questions

Answer these before we move to the next part.

### Q1

What is a variable?

a) A function

b) A named storage box for data

c) A loop

---

### Q2

What keyword did we use today?

a) print

b) let

c) console

---

### Q3

What will this print?

```javascript
let city = "Delhi";

console.log(city);
```

---

### Q4

Draw the memory diagram for:

```javascript
let age = 35;
```

---

### Q5 (Thinking Question)

Why do websites like Amazon, Flipkart, and Swiggy need variables instead of hardcoded values?

---

## 🎯 Today's Small Assignment

Create a file named `variables.js` and declare these variables:

```javascript
let studentName = "Shagun";
let course = "MERN Stack";
let experience = 11;
let completedDay = 2;
```

Print all four values using `console.log()`.

Take a screenshot of:

1. The code in VS Code.
2. The terminal output.

We'll review it together.

---

## 📌 No Git Commit Yet

We'll make the Git commit **after** we complete the remaining parts of Day 2 (`const`, `var`, naming rules, and practice). This way, your commit will represent the complete work for the day.

Answer the five questions and complete the assignment. Then we'll continue with **Part 2: How variables are stored in computer memory**.
