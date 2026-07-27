Excellent work! 🎉 I checked your screenshots, and you've completed **both the practice exercises and the assignment** correctly.

## ✅ Review

### Practice Exercises

✔ `hello.js` – Correct (printed "Hello JavaScript" 3 times)

✔ `studentDetails.js` – Correct

✔ `bankFunc.js` – Correct

✔ `movieFunc.js` – Correct

✔ `school.js` – Correct

---

### Assignment

✔ `hospital.js`

✔ `shoppingFunc.js`

✔ `employee.js`

✔ `restaurant.js`

✔ `mobile.js`

Everything is working as expected.

One small observation: I noticed you still have your old **shopping.js** (wallet program) from a previous day, along with the new **shoppingFunc.js**. That's perfectly fine, but keeping descriptive names like `shoppingFunctions.js` can make your project easier to navigate later.

Overall: **10/10** ✅

---

# 🧠 Let's Test Your Understanding

## Quiz (5 Marks)

### Q1.

What is a function?

**a)** A variable

**b)** A reusable block of code that performs a specific task

**c)** A loop

**d)** An operator

---

### Q2.

Which keyword is used to create a function?

---

### Q3.

What is the difference between **creating a function** and **calling a function**?

Explain in your own words.

---

### Q4.

Look at the code.

```javascript
function greet() {
    console.log("Hello");
}

greet();
greet();
```

How many times will **Hello** be printed?

---

### Q5.

Why are functions considered one of the most important concepts in programming?

Give one real-life example.

---






# 💼 Interview Questions

## Basic

### 1.

What is a function in JavaScript?

---

### 2.

Why do we use functions?

---

### 3.

What is the syntax of a function declaration?

---

### 4.

Can a function be called multiple times?

---

### 5.

What happens if you create a function but never call it?

---

## Intermediate

### 6.

What is the difference between a **function declaration** and a **function call**?

---

### 7.

Can two functions have the same name in the same JavaScript file?

Why or why not?

---

### 8.

Can one function call another function?

---

### 9.

Is JavaScript case-sensitive for function names?

Example:

```javascript
greet()
Greet()
```

Are they the same?

---

## Advanced

### 10.

Explain **DRY (Don't Repeat Yourself)** and how functions help follow this principle.

---

### 11.

Suppose you have the same login code written on 50 pages.

Your manager asks you to change one line.

How do functions make this easier?

---

## Scenario-Based

### 12.

You are building an online food delivery app.

Which features would you make into separate functions?

For example:

* Login
* Search Food
* Add to Cart
* Payment

Explain why.

---

Answer these in your own words. Don't worry about perfect wording—I want to see your understanding. After reviewing your answers, we'll cover **Function Parameters & Arguments (Part 2)** with return values, multiple parameters, and more real-world examples before committing Day 8 to GitHub.
Excellent! 👏 I can clearly see that you're understanding concepts instead of memorizing them, which is exactly what we want.

Let's review your answers.

---

# ✅ Quiz Review

## Q1. What is a function?

✔ Your Answer: **b)**

✅ Correct.

A function is a **reusable block of code that performs a specific task.**

---

## Q2. Which keyword is used to create a function?

✔ Your Answer:

```javascript
function
```

✅ Correct.

---

## Q3. Difference between creating and calling a function?

Your answer:

> Creating a function is just writing it and calling means we are executing the function written.

✅ Excellent.

I especially liked your explanation:

> "if we won't call it then it won't print hello"

That is exactly how functions work.

---

## Q4. Output?

```javascript
function greet() {
    console.log("Hello");
}

greet();
greet();
```

Your answer:

> 2 times

✅ Correct.

Output

```text
Hello
Hello
```

---

## Q5. Why are functions important?

Your answer:

> It provides reusability and code is easier to maintain.

✅ Excellent.

Your pizza example is also correct.

One pizza recipe can make hundreds of pizzas.

One function can be called hundreds of times.

Exactly the same idea.

---

# Quiz Score

⭐ **5 / 5**

Excellent.

---

# 💼 Interview Review

## 1. What is a function?

Your answer

> Function is a reusable code which can be called directly

✅ Correct.

A slightly more professional interview answer would be:

> A function is a reusable block of code designed to perform a specific task. It executes only when it is called.

---

## 2. Why do we use functions?

Your answer

> to make code easier to maintain and read

✅ Correct.

Also mention:

* Code Reusability
* Less duplication
* Easier debugging
* Better organization

---

## 3. Syntax

You wrote

```javascript
function functionName(parameter)
```

⚠ Almost correct.

Complete syntax is

```javascript
function functionName(parameter) {

    // code

}
```

Always remember the curly braces.

---

## 4.

You skipped this.

**Question was:**

> Can a function be called multiple times?

Answer:

✅ Yes.

Example

```javascript
greet();
greet();
greet();
```

---

## 5.

You answered

> It won't give output.

✅ Correct.

Because JavaScript only stores the function.

It doesn't execute it until you call it.

---

## 6.

Difference between declaration and calling.

✅ Correct.

Good explanation.

---

## 7.

Your answer

> No because while calling it will be confused which output to give.

✅ Correct idea.

A slightly more technical explanation:

If two functions have the same name in the same scope, the latest one **overwrites** the previous one.

Example:

```javascript
function greet() {
    console.log("Hello");
}

function greet() {
    console.log("Hi");
}

greet();
```

Output

```text
Hi
```

The second function replaces the first one.

---

You still have these remaining interview questions to answer:

### 8.

Can one function call another function?

---

### 9.

Is JavaScript case-sensitive?

```javascript
greet();

Greet();
```

Same or different?

Explain.

---

### 10.

Explain the **DRY Principle (Don't Repeat Yourself).**

---

### 11.

Suppose a login function is used on **50 pages**.

Your manager wants to change the welcome message.

How do functions help?

---

### 12. Scenario

You're building **Swiggy/Zomato**.

Which parts would you make into functions?

Example:

* Login
* Search Food
* Add to Cart
* Payment
* Logout

Why?

---

# 📊 Overall Progress

I also want to point out something I've noticed over the last few days.

At the beginning of the bootcamp, your answers were mostly one-liners.

Now you're naturally giving explanations with examples (like the pizza example today).

That's exactly how strong conceptual understanding develops. Keep answering in your own words rather than trying to memorize textbook definitions.

Once you answer Questions **8–12**, we'll move to **Day 8 – Part 2 (Parameters, Arguments, Return Values)** before doing the GitHub commit for Day 8.

Very good! You're understanding the core ideas. Let's refine a few answers to make them interview-ready.

---

# Interview Review

## Q8. Can one function call another function?

Your Answer:

> Yes

✅ Correct.

A complete interview answer would be:

> Yes. One function can call another function. This helps divide large programs into smaller, reusable pieces of code.

Example:

```javascript
function greet() {
    console.log("Hello");
}

function welcome() {
    greet();
    console.log("Welcome!");
}

welcome();
```

Output:

```
Hello
Welcome!
```

---

## Q9. Is JavaScript case-sensitive?

Your Answer:

> Yes

✅ Correct, but there was one more part.

Example:

```javascript
greet();
Greet();
```

These are **different** because JavaScript is **case-sensitive**.

Example:

```javascript
function greet() {
    console.log("Hello");
}

greet();   // ✅ Works
Greet();   // ❌ Error (unless another function named Greet exists)
```

---

## Q10. Explain DRY (Don't Repeat Yourself)

Your Answer:

> this means functions should not repeat their names

❌ Not quite.

### Correct Explanation

**DRY (Don't Repeat Yourself)** means:

> Do not write the same code again and again. Write it once and reuse it.

### Real-life Example

Instead of writing the login code on 50 different pages:

```javascript
// login code
// login code
// login code
// login code
```

Create one function:

```javascript
function login() {
    // login code
}
```

Now call it wherever needed:

```javascript
login();
login();
login();
```

This saves time, reduces bugs, and makes maintenance easier.

---

## Q11. Manager changes login message

Your Answer:

> Instead of writing 50 times we can create one function and call it whenever required and if we have to change it then we can change in the method.

✅ Excellent!

This is exactly the purpose of functions.

Instead of editing 50 files, you edit **one function**.

This is how large software projects are maintained.

---

## Q12. Swiggy/Zomato Scenario

Your Answer:

```
login()
searchFood()
addToCart()
payment()
```

✅ Correct.

To make it interview-ready, explain **why**:

* `login()` – Authenticates the user.
* `searchFood()` – Searches restaurants or dishes.
* `addToCart()` – Adds selected items to the cart.
* `payment()` – Processes the payment securely.
* `placeOrder()` – Confirms the order.
* `trackOrder()` – Shows delivery status.

Each feature is a separate function because each performs one specific task. This keeps the code modular, reusable, and easier to maintain.

---

# Interview Score

**Basic:** ⭐⭐⭐⭐⭐ (5/5)

**Intermediate:** ⭐⭐⭐⭐☆ (4/5)

**Advanced:** ⭐⭐⭐⭐☆ (4/5)

**Overall:** **13/15** 🎉

The only concept that needed correction was **DRY**, which is a very common interview question.

---

# 📈 Progress Update

You've now completed:

* ✅ Variables
* ✅ Data Types
* ✅ Operators
* ✅ Comparison Operators
* ✅ if / else
* ✅ Logical Operators
* ✅ else if
* ✅ switch
* ✅ for Loop
* ✅ while Loop
* ✅ do...while Loop
* ✅ Functions (Basics)

You're building a strong JavaScript foundation. I also noticed your explanations are becoming more natural and example-driven compared to the beginning of the bootcamp—that's a good sign that you're understanding the concepts instead of just memorizing them.

We'll stop here as requested. **I won't move to the next lesson until you send "next."** When you're ready, we'll continue with **Day 8 – Part 2: Function Parameters, Arguments, and Return Values**, following the same detailed format with explanations, real-life examples, practice exercises, assignments, GitHub commit, notes, and interview questions.
