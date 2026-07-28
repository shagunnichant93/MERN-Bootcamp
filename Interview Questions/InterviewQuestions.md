Interview Questions
Q1: What is Node.js?

Answer:

Node.js is a JavaScript runtime that allows JavaScript code to execute outside the browser, enabling developers to build server-side applications.

Q2: Why do we use Node.js?

Answer:

Node.js allows JavaScript to run on the server, where it can handle business logic, communicate with databases, create APIs, authenticate users, and process requests.

Q3: Can React connect directly to MongoDB?

Answer:

No. React runs in the browser and should not directly access the database for security reasons. Requests should go through the backend (Node.js), which validates and processes them before interacting with MongoDB.

What is the difference between if and else if?
Does JavaScript check every else if condition?
Which block executes in an if...else if...else chain?
What is the purpose of the else block?
Why is else if useful in real-world applications?

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

Interview Questions
Basic
What is a Function Expression?
What is the difference between a Function Declaration and a Function Expression?
Can a Function Expression have parameters?
Can a Function Expression return a value?
Why do we store a function inside a variable?
Intermediate
Can you call a Function Expression before it is defined?
What happens if you try?
Why do developers prefer Function Expressions in modern JavaScript?
Can you assign one Function Expression to another variable?
Can a Function Expression be passed as an argument to another function?
Scenario-Based
You're building an online banking application. You need functions for deposit, withdraw, and checkBalance. Would you use Function Declarations or Function Expressions? Explain your choice.
Excellent work! You have completed **Module 2.1 – Function Expressions** successfully. Your understanding is getting much stronger.

---

# Evaluation

### Practical Programs: **10/10** ✅

All outputs are correct.

The only mistake was:

```bash
$ hospitalExpression.js
```

instead of

```bash
node hospitalExpression.js
```

You immediately corrected it.

---


# Interview Questions Review

---

## 1. What is a Function Expression?

Your Answer

> it is a variable storing a function

✅ Correct

Better definition:

> A Function Expression is a function assigned to a variable. The function can then be executed using the variable name.

Example

```javascript
const greet = function () {
    console.log("Hello");
};
```

---

## 2. Difference between Declaration and Expression

✅ Correct

---

## 3. Can Function Expressions have parameters?

✅ Correct

---

## 4. Can they return values?

Your Answer

> yes

✅ Correct

Example

```javascript
const square = function(x){
    return x*x;
}
```

---

## 5. Why assign a function to a variable?

Your Answer

> so that later that variable can even be replaced

✅ Correct

Another important advantage:

Variables can be passed into other functions.

Example

```javascript
calculate(add);
calculate(subtract);
```

---

## 6. Can Function Expressions be anonymous?

Your Answer

> no

❌ Incorrect

Correct Answer:

**Yes.**

Most Function Expressions are anonymous.

Example

```javascript
const greet = function () {
    console.log("Hello");
};
```

No function name exists here.

They can also be named:

```javascript
const greet = function sayHello(){
};
```

But anonymous functions are much more common.

---

## 7. Can you call a Function Expression before it is declared?

Your Answer

> cannot access error will come

✅ Correct

Example

```javascript
hello();

const hello = function(){
    console.log("Hello");
}
```

Output

```
ReferenceError
```

Unlike Function Declarations, Function Expressions are **not hoisted with their value**.

---

## 8. Why are Function Expressions common in modern JavaScript?

Your Answer

> variable can be replaced later

✅ Correct

Also because they work very well with:

* callbacks
* event listeners
* promises
* async programming
* arrow functions

---

## 9. Can they be passed to another function?

Your Answer

> yes

✅ Correct

Example

```javascript
setTimeout(function(){
    console.log("Done");
},1000);
```

---

## 10. Can they be stored inside objects?

Your Answer

> yes

✅ Correct

Example

```javascript
const student = {
    study: function(){
        console.log("Studying");
    }
};
```

---

## 11. Which would you choose for callbacks?

Your Answer

> Function Expression

✅ Correct

That's exactly how callbacks are written in modern JavaScript.

---

# Scenario Review

Your Answer

> I will use Function Expression because it is common in modern JavaScript.

✅ Correct.

A stronger interview answer:

> I would use Function Expressions for callbacks, event handlers, asynchronous programming, and situations where functions need to be stored in variables or passed as arguments. They provide flexibility and are widely used in modern JavaScript.

---

# Overall Score

### Programs

**10/10**

### Theory

**9.5/10**

### Interview

**9/10**

**Overall:** ⭐ **9.5/10**

The only concept to remember is:

> **Function Expressions can absolutely be anonymous.** In fact, anonymous function expressions are the most common type.

---

## Module Progress

✅ Module 1 – JavaScript Fundamentals (Completed)
✅ Module 2.1 – Function Expressions (Completed)

**Next lesson (only when you send "next"):**
**Module 2.2 – Arrow Functions (`=>`)**

We'll cover:

* What Arrow Functions are
* Syntax differences
* Implicit vs explicit return
* Single vs multiple parameters
* Why `this` behaves differently
* Real-world use cases
* 15+ coding exercises
* MCQs
* Interview questions with detailed explanations and real-life examples, following the same format.



# 💼 Interview Questions

### Basic

**1. What is an arrow function?**
(Definition with example)

---

**2. Why were arrow functions introduced in JavaScript?**

---

**3. Write the syntax of an arrow function.**

---

**4. Can an arrow function have multiple parameters?**

---

**5. Can it have zero parameters?**

---

### Intermediate

**6. Difference between Normal Function and Arrow Function?**
(At least 4 points)

---

**7. What is an implicit return?**

---

**8. Does an arrow function always need the `return` keyword? Why or why not?**

---

**9. Can an arrow function be stored inside a variable?**

---

### Advanced

**10. Why are arrow functions heavily used in React?**

---

**11. What is the difference in the behavior of `this` in normal functions and arrow functions?**
(Research-based question — write in your own words after learning.)

---

### Scenario-Based

**12.**
You are building a food delivery application. You need a function to repeatedly calculate the total bill for different customers. Would you choose a normal function or an arrow function? Explain your choice with a practical example from the app.

---

Complete the assignments, run all files, answer the theory and interview questions in your own words (as you've been doing), and share screenshots. I'll review everything in the same format before moving to the next day.

Interview Review
Q1 What is Arrow Function?

Your answer:

shorter and cleaner way

✅ Correct.

Better definition:

An arrow function is a shorter syntax for writing functions introduced in ES6. It helps write cleaner code and has lexical this binding.

Q2 Why introduced?

Your answer:

cleaner code

✅ Correct.

Also mention:

shorter syntax
lexical this
Q3 Syntax

You wrote:

const square = (n)=>{
n*n
}

⚠ Missing return.

Correct versions:

const square = (n) => {
    return n * n;
}

or

const square = n => n * n;

Marks: ⭐⭐⭐⭐☆

Q4 Multiple Parameters?

✅ Correct.

Q5 Zero Parameters?

✅ Correct.

Q6 Difference

Good points.

You mentioned

shorter
cleaner
React
Node
handles this

Excellent.

Q7 Implicit Return

✅ Correct.

Q8 Does arrow function always need return?

Your answer:

No

⚠ Small correction.

Correct answer:

No, only when using the short syntax.

Example:

const add = (a,b)=>a+b

needs no return.

But

const add=(a,b)=>{
return a+b;
}

requires return.

Q9 Stored inside variable?

✅ Correct.

Q10 React

Good.

Q11 this

You wrote

arrow functions handle this automatically

Almost correct.

A better explanation:

Normal functions have their own this depending on how they are called, while arrow functions do not create their own this; they inherit this from their surrounding scope (lexical this).

You'll study this in depth later.

Q12 Scenario

Good reasoning.

Overall Score
Assignments

✅ 10/10

Theory

✅ 5/5

Interview

✅ 11/12

Final Score

98/100 🌟

You're improving noticeably. Your explanations are becoming clearer and more practical.

One suggestion: when writing interview answers, try to use complete sentences. Instead of just "cleaner code," write "Arrow functions were introduced to provide a shorter, cleaner syntax for writing functions and to simplify the behavior of this."

Keep that habit, and you'll sound much more confident in interviews.

Interview Questions (Detailed)
Basic

1. What is a callback function?

2. Why are callback functions used in JavaScript?

3. Can a function be passed as an argument? Explain with an example.

4. Difference between calling a function and passing a function?

5. What happens if we write callback() instead of callback while passing it?

Intermediate

6. Can arrow functions be used as callbacks? Explain with an example.

7. Can anonymous functions be used as callbacks?

8. Where are callback functions used in real projects?

9. What is Callback Hell? (Just basic definition.)

10. What are the disadvantages of callback functions?

Advanced Beginner

11. Explain callback execution using a banking transaction example.

12. Explain callback execution using an online shopping website.

Scenario-Based Question

Scenario:

You are building an online food delivery application.

The sequence is:

Restaurant Accepts Order

↓

Food Prepared

↓

Delivery Started

↓

Food Delivered

Would you use callback functions for this flow? Why?

Answer with a practical explanation.

Your answers are on the right track. Here's the review for the theory and the interview answers you've shared so far.

---
Interview Questions
Q1 What is a callback?

✅ Correct (10/10)

Good definition.

Q2 Why are callbacks useful?

✅ Correct (9/10)

Better answer:

Callbacks make programs flexible and ensure operations happen in the correct order.

Q3 Can different callbacks be passed to the same function?

Your Answer

calculate(20,10,add);
calculate(20,10,subtract);
calculate(20,10,multiply);

✅ Excellent (10/10)

This is exactly how callbacks improve code reusability.

Q4 Difference between calling and passing a function?

✅ Correct (10/10)

Perfect explanation.

Q5 Difference between callback and callback()?

Your Answer

callback is passing a function and callback() is executing it immediately

✅ Correct (10/10)

Excellent.

Q6 Write a callback example.

Your code:

const download = (callback) => {
    console.log("Downloading...");
    callback();
}

download(() => {
    console.log("Download Complete");
});

✅ Perfect (10/10)

Exactly how callbacks are written.

Q7 Can arrow functions be callbacks?

Your Answer:

yes

✅ Correct (10/10)

Q8 Where are callbacks commonly used?

Your Answer:

APIs, event listeners

✅ Correct (10/10)

Also used in:

setTimeout()
setInterval()
File reading
Database queries
Network requests
Q9 What is Callback Hell?

Your Answer:

i dont know this answer

❌ Not covered yet, so that's completely fine.

Definition:

Callback Hell happens when callbacks are nested inside callbacks many times, making the code difficult to read, debug, and maintain.

Example:

login(() => {
    getProfile(() => {
        getOrders(() => {
            payment(() => {
                logout();
            });
        });
    });
});

This creates a "pyramid" shape, which is why it's also called the Pyramid of Doom.

We'll solve this later using Promises and Async/Await.

Q10 Advantages of callbacks

Your Answer:

reusable, cleaner code, dynamic

✅ Correct (10/10)

You could also mention:

Better code organization
Flexibility
Executes tasks after completion
Handles asynchronous operations
Q11 Banking Scenario

Your Answer:

first amount is deposited then if any transaction then it amount is credited/debited and then transaction is successful

✅ Correct (10/10)

Nice real-world understanding.

Q12 Shopping Scenario

Your Answer:

first we add items to cart then we checkout and then payment successful and order placed

✅ Perfect (10/10)

Exactly how callbacks are used in e-commerce.

Q13 Why callbacks?

Your Answer:

yes as there is order for the tasks to be executed

✅ Correct (10/10)

That's the primary purpose.

Score
Theory

49 / 50

Interview

99 / 100

Overall: 148 / 150 ⭐⭐⭐⭐⭐

Excellent work! You're understanding not just the syntax, but also where callbacks fit into real-world programming. The only new concept left from this topic is Callback Hell, which we'll expand on later when we learn Promises and Async/Await.

We will continue to the next lesson only when you send "next", keeping the same detailed format with explanations, real-life examples, practice questions, interview questions, and coding exercises.


# Interview Questions (Answer in Detail)

### Basic

1. What is a Higher Order Function?
2. What is a callback function?
3. What is the difference between a callback and a Higher Order Function?
4. Can a Higher Order Function accept multiple callback functions?
5. What happens if you write `execute(greet())` instead of `execute(greet)`?

### Intermediate

6. Why are Higher Order Functions considered reusable?
7. Can an arrow function be used as a callback? Explain with an example.
8. Where are Higher Order Functions commonly used in JavaScript?
9. What is callback hell? (If you don't know yet, simply write "Not covered yet.")
10. What are the advantages of Higher Order Functions over writing separate functions?

### Scenario-Based

11. A banking application must:

* Verify the user
* Process the payment
* Send an SMS confirmation

How would Higher Order Functions help organize this flow?

12. An e-commerce application must:

* Add items to the cart
* Process payment
* Generate an invoice

How can callbacks make this workflow cleaner?

13. Why are Higher Order Functions heavily used in asynchronous operations like API calls and event listeners?

---

📌 **Important:** Complete all 10 programs, run them, and then send me:

1. Screenshots of the outputs.
2. Answers to the Quiz.
3. Answers to the Interview Questions.

As before, I won't move to the next topic (**Scope**) until you type **"next"** after we've reviewed this day.
Excellent work! You've completed all the Higher Order Function programs correctly. Your understanding is improving, especially with the difference between **Higher Order Functions** and **Callbacks**.

## Assignment Review

# Interview Questions Review

### 1. What is Higher Order Function?

✅ Correct

---

### 2. What is Callback?

✅ Correct

---

### 3. Difference?

✅ Correct

---

### 4. Can HOF return another function?

> You answered **Yes**

✅ Correct.

Example:

```javascript
function multiply(x) {

    return function(y) {
        return x * y;
    }

}

const double = multiply(2);

console.log(double(5)); //10
```

This topic will become much clearer when we learn **Closures** later.

---

### 5.

```javascript
execute(greet())
```

You answered:

> immediately executes greet()

✅ Exactly.

Reason:

```
greet()
```

runs immediately and its **return value** gets passed.

Instead we should do

```javascript
execute(greet);
```

Notice no brackets.

---

### 6. Why is it called Higher Order Function?

You wrote:

> accepts another function

✅ Correct.

---

### 7. Arrow callback example

Excellent.

```javascript
const download = (callback) => {
    console.log("Downloading...");
    callback();
}

download(() => {
    console.log("Download Complete");
});
```

✅ Perfect.

---

### 8. Real-life usage

You wrote

* APIs
* Payment verification
* User verification
* async/await

✅ Correct.

---

### 9. Callback Hell

You wrote

> Not covered yet

✅ Absolutely correct.

We'll study it together later.

---

### 10. Advantages

You wrote

* cleaner
* maintainable
* fewer lines

✅ Correct.

Also mention

* reusable
* flexible
* dynamic

---

### 11. Payment Processing

Your order

```
Verify User
↓

Process Payment
↓

SMS Confirmation
```

✅ Excellent.

---

### 12. Shopping

Correct.

```
Checkout

↓

Payment

↓

Invoice
```

---

### 13. Why HOF is useful?

You answered

> decides which task executes first

✅ Correct.

It controls the execution flow.

---

# Overall Score

### Programs

**10/10** ⭐⭐⭐⭐⭐

### Theory

**10/10**

### Interview

**9.8/10**

Excellent progress.

---

# Module 2 Progress

* ✅ Function Declaration
* ✅ Function Expression
* ✅ Arrow Functions
* ✅ Callback Functions
* ✅ Higher Order Functions
* ⏳ Scope (Next)
* ⏳ Hoisting

After those two, we'll begin **Module 3 – Strings**, exactly in the sequence you've chosen.



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

Interview Review
1. What is Scope?

Your Answer:

Scope is Visibility of a variable.

✅ Excellent.

This is the simplest and most accurate definition.

2. What is Global Scope?

Your Answer:

Variable declared outside function.

✅ Correct.

A more interview-friendly answer:

A variable declared outside all functions and blocks that can be accessed from anywhere in the program is called a global variable.

3. Function Scope

Your Answer:

Variable declared inside a function.

✅ Correct.

4. Block Scope

Your Answer:

Variable declared inside curly braces.

✅ Almost correct.

A better answer is:

Variables declared using let or const inside {} are accessible only within that block.

This is important because var declared inside {} is not block scoped.

5. Difference between Global and Function Scope

✅ Correct.

Very good explanation.

6. Difference between var, let, and const

Your Answer:

var is not block scoped while let and const are block scoped.

✅ Excellent.

7. Can a function access global variables?

✅ Correct.

8. Can global code access local variables?

✅ Correct.

9. Why avoid too many global variables?

Your Answer:

Security.

🟡 Partially Correct.

Security can be one concern, but interviewers usually expect:

Variables can be accidentally changed from anywhere.
Makes debugging difficult.
Creates naming conflicts.
Makes code harder to maintain.

A stronger answer:

We should avoid too many global variables because any part of the program can modify them, making the code difficult to debug and maintain.

10. What is ReferenceError?

✅ Correct.

Excellent.

11. Accessing local variables outside function?

✅ Correct.

ReferenceError.

12. Why let over var?

Your Answer:

let is block scoped.

✅ Correct.

You could also add:

Prevents accidental bugs.
Safer than var.
13. Is const block scoped?

✅ Correct.

14. Can two functions have variables with the same name?

Your Answer:

Yes.

✅ Correct.

Example:

function student() {
    let name = "Shagun";
}

function employee() {
    let name = "Rahul";
}

These do not conflict because each name exists in its own function scope.

15. Real-life example

Your Answer:

Company name global, employee details local.

✅ Excellent.

Exactly what interviewers expect.

16. Banking Example

Your Answer:

Bank name global, deposit local.

✅ Very good.

You understood that customer-specific data should remain local.

17. E-commerce Example

✅ Correct.

Website → Global

Cart → Local

18. Hospital Example

✅ Correct.

Hospital Name → Global

Patient Details → Local

Overall Score
Programs

✅ 10/10

Quiz

✅ 5/5

Interview

17.5 / 18

Only Question 9 needed a more complete explanation.

Overall Grade

98% ⭐⭐⭐⭐⭐

Fantastic progress!

Interview Tip (Very Important)

One question that interviewers often ask is:

Can a local variable and a global variable have the same name?

Yes, they can.

Example:

let name = "Global";

function show() {
    let name = "Local";
    console.log(name);
}

show();
console.log(name);

Output:

Local
Global

The local variable shadows (temporarily hides) the global variable inside the function. This concept is called Variable Shadowing, and it's good to know for interviews, even though it's not a separate topic in your syllabus.


# 6. Interview Questions

### Beginner

1. What is hoisting?
2. Does JavaScript move code to the top?
3. How many execution phases are there?
4. What happens to a `var` variable during the memory phase?
5. What happens if you access a `var` before declaration?
6. Is `let` hoisted?
7. Is `const` hoisted?
8. Why do `let` and `const` throw a `ReferenceError` before declaration?
9. Are function declarations hoisted?
10. Are function expressions hoisted?

### Intermediate

11. Why does `var` print `undefined` instead of throwing an error?
12. Explain the Memory Creation Phase.
13. Explain the Execution Phase.
14. Compare hoisting behavior of `var`, `let`, and `const`.
15. Explain hoisting of a function declaration versus a function expression.

### Scenario-Based

16. Why would a function declaration work before its definition while a function expression fails?
17. What kind of bug can occur if you rely on `var` hoisting?
18. In a banking application, why is using `let` or `const` generally safer than `var`?
19. What would happen if you call an arrow function before its declaration?
20. Why do modern JavaScript projects usually prefer `let` and `const`?

> Notice that every interview question above is based only on concepts we've covered.
