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

Excellent work! 🎉 I checked your screenshot, and everything is working correctly.

## ✅ Output Verification

Your terminal shows:

```text
Shagun
34
Hyderabad
Shagun
MERN Stack
11
2
```

✔ Node.js executed your `variables.js` file successfully.

---

## One Small Observation 👀

Earlier, your assignment said:

```javascript
let age = 35;
```

But your output shows:

```text
34
```

This is **not a mistake**. It simply means you changed your age to **34** in the code, and that's perfectly fine. The important thing is that the program works.

---

# What You've Learned So Far

Today, you've learned that:

* ✅ A variable is a **named box** that stores data.
* ✅ `let` is used to create variables.
* ✅ `console.log()` prints values to the terminal.
* ✅ Variables make applications **dynamic**.
* ✅ Node.js executes JavaScript files.

These are the building blocks of every JavaScript and MERN application.

---

# 🎉 Your GitHub Progress

You should now have:

```
MERN-Bootcamp
│
└── 01-JavaScript
      ├── app.js
      └── variables.js
```

By the end of this bootcamp, you'll be able to look back at these first files and appreciate how far you've come.

---

# 🧠 Part 2 – How Variables Are Stored in Computer Memory

This is one of the most important programming concepts. Don't worry if it feels new—we'll build it step by step.

## Imagine Your Computer Has Thousands of Small Storage Boxes

Think of your computer's memory (RAM) like this:

```text
Memory (RAM)

+-------+-------+-------+-------+-------+
| Box 1 | Box 2 | Box 3 | Box 4 | Box 5 |
+-------+-------+-------+-------+-------+
```

These boxes are empty at first.

---

## Now You Write

```javascript
let age = 34;
```

JavaScript asks the computer:

> "Please give me one empty box."

The computer finds one.

```text
Memory (RAM)

+-------+-------+-------+-------+-------+
| Empty |  34   | Empty | Empty | Empty |
+-------+-------+-------+-------+-------+
            ▲
         Variable "age"
```

Notice something important:

The **computer stores only the value (`34`) in memory**.

The **variable name (`age`) is how your program refers to that memory location**.

So you can imagine it like this:

```text
age
 │
 ▼
+------+
| 34   |
+------+
```

When you later write:

```javascript
console.log(age);
```

JavaScript thinks like this:

1. Find the variable named `age`.
2. Look at the value stored in its memory.
3. Print that value.

Output:

```text
34
```

---

## Another Example

```javascript
let city = "Hyderabad";
```

Memory:

```text
city
 │
 ▼
+-------------+
| Hyderabad   |
+-------------+
```

When you write:

```javascript
console.log(city);
```

JavaScript finds the value `"Hyderabad"` and prints it.

---

## Think Like a Bank

Imagine a bank locker.

```
Locker Number → 101
Contents      → Gold
```

You don't carry the gold everywhere—you just remember the **locker number**.

Programming is similar.

* Variable name = Locker number
* Value = Gold inside the locker

---

## Mini Quiz (Don't Run the Code Yet)

### Q1

```javascript
let name = "Shagun";
```

What is the **variable name**?

a) `"Shagun"`

b) `name`

c) `let`

---

### Q2

What value is stored in memory?

```javascript
let marks = 95;
```

a) `marks`

b) `95`

c) `let`

---

### Q3

```javascript
let city = "Delhi";

console.log(city);
```

What happens first?

a) JavaScript prints `"city"`.

b) JavaScript looks for the variable `city`, gets its value, and prints it.

c) JavaScript creates a new variable.

---

### Q4

Draw the memory diagram for:

```javascript
let course = "MERN";
```

---

### Q5 (Thinking Question)

If you write:

```javascript
let age = 34;
console.log(age);
console.log(age);
console.log(age);
```

Does JavaScript create **three different boxes** in memory or **one box that is used three times**? Explain why.

---

Take your time answering these. Understanding how memory works will make variables, objects, arrays, and functions much easier to learn later.
