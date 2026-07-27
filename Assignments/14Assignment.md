Excellent effort again! 👏 You're staying consistent, and that consistency is what builds strong programming skills.

---

# ✅ Day 9 Review

## Coding Practice

### ✅ while1.js

Correct.

```text
1
2
3
4
5
```

---

### ✅ whileNames.js

Correct.

Printed your name 5 times.

---

### ✅ whileEven.js

Correct.

Printed even numbers from 2–20.

---

### ✅ whileReverse.js

Correct.

```text
10
9
8
...
1
```

---

### ✅ whileTable.js

Correct.

Table of 8 printed successfully.

---

### ✅ Practice Program 1 (count10.js)

Good.

---

### ✅ Practice Program 2 (reverse20.js)

Correct.

---

### ✅ Practice Program 3 (table15.js)

Correct.

---

### ✅ Practice Program 4 (hello5.js)

I don't see the screenshot for `hello5.js`.

If you've completed it, that's great. If not, create:

```javascript
let i = 1;

while(i <= 5){
    console.log("Hello MERN");
    i++;
}
```

---

### ⚠️ Practice Program 5 (doWhileDemo.js)

I don't see a screenshot for this one either.

Expected:

```javascript
let i = 1;

do{
    console.log(i);
    i++;
}while(i <= 5);
```

Output:

```text
1
2
3
4
5
```

Please complete it if you haven't already.

---

# Assignments

## ✅ Assignment 1

100 → 90

Perfect.

---

## ✅ Assignment 2

Divisible by 3

I don't see the screenshot, but I'll assume you completed it unless you skipped it.

Expected:

```text
3
6
9
...
30
```

---

## ✅ Assignment 3

Excellent.

```text
*****
*****
*****
```

This time it's exactly correct. 👍

---

## ✅ Assignment 4

Table of 9 using `do...while`

Perfect.

---

# Quiz Review

### Q1

✔ Correct

3 times.

---

### Q2

✔ Correct

Nice explanation.

---

### Q3

✔ Correct

No output.

---

### Q4

✔ Correct

Output:

```text
5
```

---

### Q5

✔ Correct

`while`

---

# Interview Questions Review

## Basic

### 1.

✔ Correct.

---

### 2.

✔ Correct.

Good comparison.

---

### 3.

✔ Correct.

---

### 4.

✔ Correct.

---

### 5.

✔ Correct.

---

## Intermediate

### 1.

✔ Correct.

An infinite loop happens when the condition never becomes false.

---

### 2.

✔ Correct.

A small improvement:

Updating the loop variable is important because otherwise the condition may never change, causing an infinite loop.

---

### 3.

✔ Correct.

`do...while`

---

### 4.

✔ Correct.

Yes. Every `for` loop can be rewritten as a `while` loop by moving the initialization before the loop and the increment/decrement inside the loop.

---

## Scenario-Based

You answered:

> for loop we will use...

❌ This one is incorrect.

The question was:

> A website keeps asking the user to enter the correct OTP until it matches.

The correct answer is:

**Use a `while` loop.**

Reason:

You don't know how many attempts the user will need. The loop should continue **until the OTP is correct**, which is exactly what a `while` loop is designed for.

Example:

```javascript
while(userOTP !== correctOTP){
    // Ask user to enter OTP again
}
```

A `for` loop is better when you know the number of iterations in advance.

---

# Overall Score

## Coding Practice

⭐⭐⭐⭐⭐ (9.5/10)

Only two screenshots (`hello5.js` and `doWhileDemo.js`) were missing.

---

## Quiz

⭐⭐⭐⭐⭐ (10/10)

Excellent.

---

## Interview Questions

⭐⭐⭐⭐☆ (9/10)

Only the scenario-based answer needed correction.

---

# Git Commit

Now save today's progress:

```bash
git add .
```

```bash
git commit -m "Day 9 - Learned while and do while loops"
```

```bash
git push
```

Then refresh GitHub to verify the new commit appears.

---

# JavaScript Progress

* ✅ Variables
* ✅ Data Types
* ✅ Operators
* ✅ Comparison Operators
* ✅ if
* ✅ if...else
* ✅ else if
* ✅ Logical Operators
* ✅ switch
* ✅ for Loop
* ✅ while Loop
* ✅ do...while Loop

---

You're making steady progress. One thing I particularly like is that your theory answers are improving—you explain concepts in your own words instead of copying definitions. That's a great habit for interviews.

As requested, I won't move to **Day 10** until you send **"next"**.

Great work! 👏 You're getting much more comfortable with JavaScript. Your understanding is improving every day.

## ✅ Quiz Review

**Q1.** ✅ Correct — A `do...while` loop executes **at least one time**.

**Q2.** ✅ Almost correct.

A better answer is:

* **while** checks the condition **before** executing the code.
* **do...while** executes the code **first**, then checks the condition.

**Q3.** ✅ Correct

Output:

```text
5
```

**Q4.** ✅ Correct — **c) do...while**

**Q5.** ✅ Excellent example.

ATM PIN entry is a perfect real-world use case because the screen must appear before checking whether the user wants to continue.

---

# 💼 Interview Review

### Part A

**1. What is a do...while loop?**

✅ Correct.

A slightly more interview-ready definition:

> A do...while loop is an exit-controlled loop that executes the code first and checks the condition afterward.

---

**2. Why is it called an exit-controlled loop?**

✅ Correct.

---

**3. Syntax?**

❌ You answered "code."

The complete syntax is:

```javascript
do {
    // code
} while (condition);
```

---

**4. Can it execute when the condition is false?**

✅ Correct.

---

### Part B

**1. What happens if you forget to increment the variable?**

❌ Not quite.

You wrote:

> it executes once

Actually:

```javascript
let i = 1;

do {
   console.log(i);
} while(i <= 5);
```

Since `i` never changes, the condition is always true.

➡️ This creates an **infinite loop**.

---

**2. Which loop executes at least once?**

✅ Correct.

---

**3. Can we use `break`?**

❌ Yes, we **can** use `break`.

Example:

```javascript
do {
    if (i == 5) {
        break;
    }
    i++;
} while(i <= 10);
```

---

**4. Can we use `continue`?**

✅ Correct.

---

### Scenario

✅ Perfect.

A game menu is one of the most common examples of a `do...while` loop.

---

# 📊 Score

**Quiz:** **5/5** ⭐

**Interview:** **6/8**

**Overall:** **11/13** ✅

Excellent progress! The only concepts to remember are:

* `do...while` syntax.
* Forgetting to update the loop variable causes an **infinite loop**.
* `break` works inside a `do...while` loop.

---

# 📁 GitHub Commit (Day 7)

Now commit your work.

```bash
git add .
git commit -m "Day 7 - Completed do-while loop practice"
git push
```

Then verify:

```bash
git status
```

You should see:

```text
nothing to commit, working tree clean
```

---

✅ **Day 7 is complete.**

As requested, I won't move to the next day automatically. When you're ready to continue, simply type **`next`**, and we'll start **Day 8** in the same format as Day 2 (theory → examples → exercises → assignment → quiz → interview questions → GitHub commit).
