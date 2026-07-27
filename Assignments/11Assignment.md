Excellent work! 🎉

You're steadily building a strong foundation. I also noticed something important in your screenshot:

> `Cannot find module 'loginSystem.js.'`

Then you ran:

```bash
node loginSystem.js
```

and it worked.

### Why did the error happen?

The first time you accidentally typed:

```bash
node loginSystem.js.
```

Notice the **extra `.` at the end**.

Node looked for a file literally named:

```
loginSystem.js.
```

which doesn't exist.

Then you removed the extra dot:

```bash
node loginSystem.js
```

and it worked perfectly.

This is a very common beginner mistake. 👍

---

# Quiz Review

### Q1. AND means if any one condition is false it returns false.

✅ Correct.

Another way to remember:

```
true  && true  = true
true  && false = false
false && true  = false
false && false = false
```

Think of AND as:

> "Everything must be true."

---

### Q2. OR means if any one condition is true it returns true.

✅ Correct.

```
true || true = true
true || false = true
false || true = true
false || false = false
```

Think of OR as:

> "At least one must be true."

---

### Q3.

Answer: **false**

✅ Correct.

---

### Q4.

Answer: **true**

✅ Correct.

---

### Q5.

> because all conditions must satisfy for valid login otherwise strict access will not be there

✅ Excellent explanation.

Real websites do something like:

```javascript
if(email === savedEmail && password === savedPassword){
    console.log("Login Successful");
}
else{
    console.log("Invalid Credentials");
}
```

Both conditions must be true.

---

# Score

⭐ **5 / 5**

Excellent!

---

# Day 6 — if...else if...else

So far you've learned:

```
if
```

But what if there are **many conditions**?

Example:

```
Marks = 95
```

Should we print:

```
A Grade
```

or

```
B Grade
```

or

```
C Grade
```

or

```
Fail
```

Using only `if` becomes messy.

Instead we use:

```javascript
if(condition1){

}
else if(condition2){

}
else if(condition3){

}
else{

}
```

Only **one block** executes.

---

## Real-life Example

Marks:

```
95
```

Logic:

```
90+  -> Grade A

80+  -> Grade B

70+  -> Grade C

60+  -> Grade D

Below 60 -> Fail
```

---

## Code

Create:

```
grades.js
```

```javascript
let marks = 92;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80) {
    console.log("Grade B");
}
else if (marks >= 70) {
    console.log("Grade C");
}
else if (marks >= 60) {
    console.log("Grade D");
}
else {
    console.log("Fail");
}
```

Output

```
Grade A
```

---

## Example 2

```javascript
let temperature = 38;

if (temperature >= 40) {
    console.log("Very Hot");
}
else if (temperature >= 30) {
    console.log("Hot");
}
else if (temperature >= 20) {
    console.log("Pleasant");
}
else {
    console.log("Cold");
}
```

Output

```
Hot
```

---

## Example 3

Create

```
trafficLight.js
```

```javascript
let color = "yellow";

if (color === "red") {
    console.log("Stop");
}
else if (color === "yellow") {
    console.log("Get Ready");
}
else if (color === "green") {
    console.log("Go");
}
else {
    console.log("Invalid Color");
}
```

Output

```
Get Ready
```

---

## Memory Flow

```
marks = 75
        │
        ▼
Is marks >= 90 ?
        │
      No
        │
        ▼
Is marks >= 80 ?
        │
      No
        │
        ▼
Is marks >= 70 ?
        │
      Yes
        │
        ▼
Print Grade C
```

As soon as JavaScript finds a `true` condition, it **stops checking the remaining conditions**.

---

# Practice

Create these files:

### 1. grades.js

Check grades based on marks.

---

### 2. weather.js

```
temperature = 18

>=35 → Very Hot

>=25 → Warm

>=15 → Pleasant

Else → Cold
```

---

### 3. ageCategory.js

```
0–12  → Child

13–19 → Teenager

20–59 → Adult

60+   → Senior Citizen
```

---

### 4. salaryBonus.js

```
salary = 60000

>=100000 → 20% Bonus

>=50000 → 10% Bonus

Else → 5% Bonus
```

Just print the bonus percentage.

---

# Mini Assignment

Create:

```
movieRating.js
```

Rules:

```
Age < 13
Kids Movie

13–17
Teen Movie

18+
Adult Movie
```

---

# Interview Questions

1. What is the difference between `if` and `else if`?
2. Does JavaScript check every `else if` condition?
3. Which block executes in an `if...else if...else` chain?
4. What is the purpose of the `else` block?
5. Why is `else if` useful in real-world applications?

---

### After you finish:

1. Run all five files with `node`.
2. Send me the terminal output.
3. Answer the five interview questions.

Then we'll commit everything to GitHub with a **Day 6** commit and move on to **switch statements**. 🚀
Excellent work! 🎉

I checked your screenshot, and **everything is working correctly.** Every program printed the expected output.

Also, you caught your own mistake:

```
node loginSystem.js.
```

❌ Wrong (extra `.` at the end)

```
node loginSystem.js
```

✅ Correct

That is exactly how developers learn—by reading the error and fixing it.

---

# Quiz Results

### Q1: What does AND (`&&`) do?

Your answer:

> AND means if any one condition is false it returns false

✅ Correct.

---

### Q2: What does OR (`||`) do?

Your answer:

> if any one condition is true it returns true

✅ Correct.

---

### Q3

Question:

```javascript
true && false
```

Your answer:

> false

✅ Correct.

---

### Q4

Question:

```javascript
true || false
```

Your answer:

> true

✅ Correct.

---

### Q5

Your answer:

> because all conditions must satisfy for valid login otherwise strict access will not be there

✅ Excellent.

Real companies use exactly this logic.

Example:

```javascript
if(usernameCorrect && passwordCorrect){
   Login Success
}
```

If even one condition fails:

```
Access Denied
```

---

# Score

⭐ **5/5**

You're understanding the logic, not just memorizing syntax. That's the goal.

---

# Git Commit (Day 5)

Now save today's work.

```bash
git add .
```

Then

```bash
git commit -m "Day 5 - Learned Logical Operators"
```

Then

```bash
git push
```

---

# Day 6 — if...else if...else Ladder

Today we used simple `if`.

Now we'll learn how to check **multiple conditions**.

Example:

Without `else if`:

```javascript
Marks = 82
```

We need to decide:

```
90+  → Grade A

80+  → Grade B

70+  → Grade C

60+  → Grade D

Below 60 → Fail
```

One `if` isn't enough.

We use an **if...else if...else ladder**.

Think of it like climbing stairs:

```
if
 │
 ├── else if
 │
 ├── else if
 │
 ├── else if
 │
 └── else
```

The computer checks from top to bottom and stops as soon as it finds the first true condition.

---

## Example

```javascript
let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80) {
    console.log("Grade B");
}
else if (marks >= 70) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
```

### How the computer thinks

```
marks = 85

Is 85 >= 90?
❌ No

↓

Is 85 >= 80?
✅ Yes

↓

Print Grade B

↓

Stop checking
```

---

## Real-Life Examples

### Student Grades

```javascript
let marks = 72;
```

Output:

```
Grade C
```

---

### Temperature

```javascript
let temp = 18;
```

Rules:

```
35+ → Very Hot

25+ → Hot

15+ → Pleasant

Else → Cold
```

---

### Salary Bonus

```javascript
salary = 90000
```

```
100000+ → 20%

70000+ → 15%

50000+ → 10%

Else → 5%
```

---

### Traffic Signal

```
Green → Go

Yellow → Slow

Red → Stop

Else → Invalid Signal
```

---

# Assignment

Create these files inside `01-JavaScript`:

1. `gradeSystem.js`
2. `weatherChecker.js`
3. `salaryBonus.js`
4. `trafficSignal.js`
5. `movieCategory.js`

Run each one using:

```bash
node filename.js
```

Take a screenshot after all five run successfully.

---

# Interview Questions

Answer these before we continue:

**Q1.** What is the difference between `if` and `else if`?

**Q2.** If one condition becomes `true`, does JavaScript check the remaining `else if` conditions?

**Q3.** What will this print?

```javascript
let marks = 95;

if (marks >= 90) {
    console.log("A");
}
else if (marks >= 80) {
    console.log("B");
}
else {
    console.log("C");
}
```

**Q4.** Which block always runs if all other conditions are false?

**Q5.** Give one real-life example where `if...else if...else` would be useful (different from grades or weather).

You're making steady progress. In just a few sessions you've gone from writing your first `console.log()` to building small decision-making programs with variables, data types, operators, comparisons, and logical conditions. That's a solid foundation for the JavaScript you'll use throughout the MERN stack.
Great job! You're getting much more comfortable with JavaScript. I also checked your screenshot.

Screenshot Review ✅

Everything that is visible is working correctly:

✅ trafficLight.js → Get Ready
✅ salaryBonus.js → Bonus: 10% and Bonus: 15%
✅ weatherChecker.js → Pleasant
✅ gradeSystem.js → Grade C

I don't see movieCategory.js in the screenshot, but if it runs successfully too, then you've completed the assignment.

Quiz Review
Q1. Difference between if and else if

Your answer:

if is executed first and always while else if is when if is not satisfies

✅ Correct idea.

A slightly clearer way to say it is:

if is checked first.
else if is checked only if the previous if (or previous else if) was false.
Q2. If one condition is true, does JavaScript check the remaining else if conditions?

Your answer:

no

✅ Correct.

JavaScript stops checking after it finds the first true condition.

Example:

let marks = 95;

if (marks >= 90) {
    console.log("A");
}
else if (marks >= 80) {
    console.log("B");
}

Output:

A

It never checks marks >= 80.

Q3

Your answer:

A

✅ Correct.

Q4

Your answer:

else

✅ Correct.

The else block runs only when every previous condition is false.

Q5

Your answer:

Login system

✅ Excellent.

For example:

if (admin) {
    console.log("Admin Dashboard");
}
else if (user) {
    console.log("User Dashboard");
}
else {
    console.log("Access Denied");
}

This is exactly how many websites decide what to show after a user logs in.

Score

🏆 5/5

You're understanding the concepts instead of just memorizing them, which is exactly what you need for MERN development.