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

# 6. Interview Questions

### Beginner

1. What is a string?
2. Why do we use strings?
3. Name three ways to create a string.
4. Can a string contain numbers?
5. Is `"12345"` a number or a string?
6. Can a string contain spaces?
7. Can a string contain special characters like `@` or `#`?
8. Why are emails stored as strings?
9. Why is an OTP often stored as a string?
10. Give five real-life examples of string data.

### Intermediate

11. What happens if you don't use quotes around text?
12. What happens if opening and closing quotes don't match?
13. When would you choose backticks over single or double quotes?
14. Can a string be empty? Give an example.
15. Explain the difference between text and numeric data with examples.

### Scenario-Based

16. Which fields in a banking application would be strings?
17. Which fields in a hospital management system would be strings?
18. Why is a phone number usually stored as a string?
19. Why is a PIN or ZIP code often stored as a string?
20. In an e-commerce app, list five values that should be strings.



Answer these after completing the programs.

1. What is `length` in JavaScript?
2. Is `length` a method or a property?
3. What does `"Hello".length` return?
4. Does `length` count spaces?
5. What is the length of `"Java Script"`?
6. What is the length of an empty string `""`?
7. Can we use `length` on numbers?
8. Why is `"12345".length` equal to 5?
9. Where is `length` used in real projects?
10. Why is `length` useful for password validation?
11. How is `length` used for OTP validation?
12. How is `length` used in username validation?
13. What will `" ".length` return? (A string containing one space.)
14. What will `"ABC".length` return?
15. What will `"A B C".length` return?
16. Why does `"Axis Bank".length` include the space?
17. Give three real-world examples where `length` is used.
18. Can `length` be used to check if user input is empty?
19. Which is better for password validation: checking `length` or checking exact text? Why?
20. In a MERN application, name four places where you would use `length`.
Remember this wording because interviewers often ask it exactly like this:

What is the difference between a property and a method?

Answer:

Property stores information about an object.
Method performs an action.

Example:

let name = "Shagun";

console.log(name.length);      // Property
console.log(name.toUpperCase()); // Method

Notice:

length        ❌ no ()
toUpperCase() ✅ ()

This distinction comes up frequently in JavaScript interviews.

Interview Questions

Answer these after completing the assignments.

Q1. What does toUpperCase() do?
Q2. Is toUpperCase() a property or a method?
Q3. Does it change the original string?
Q4. What does this print?
let name = "hello";
console.log(name.toUpperCase());
Q5. Output?
console.log("javascript".toUpperCase());
Q6. Output?
console.log("abc123".toUpperCase());
Q7. Will numbers change?
Q8. Why is toUpperCase() useful in login systems?
Q9. Name three real-world uses of toUpperCase().
Q10. Why do banks convert IFSC codes to uppercase?
Q11. What is wrong with this code?
let name = "john";

name.toUpperCase();

console.log(name);
Q12. How do you permanently change a string to uppercase?
Q13. Can spaces be converted to uppercase?
Q14. Is "hello world" converted into "HELLO WORLD"?
Q15. Can emails also be converted using toUpperCase()?
Q16. What is the output?
let city = "delhi";
city = city.toUpperCase();
console.log(city);
Q17. Which is correct?

A)

name.upperCase();

B)

name.toUpperCase();
Q18. Does toUpperCase() return a new string?
Q19. What is the output?
console.log("Pizza Hut".toUpperCase());
Q20. Give four real-life examples where toUpperCase() is used



# Interview Questions

### Q1. What does `toLowerCase()` do?

---

### Q2. Is it a method or property?

---

### Q3. Does it change the original string?

---

### Q4. What is the output?

```javascript
console.log("HELLO".toLowerCase());
```

---

### Q5. Output?

```javascript
console.log("JAVASCRIPT".toLowerCase());
```

---

### Q6. Output?

```javascript
console.log("ABC123".toLowerCase());
```

---

### Q7. Does it affect numbers?

---

### Q8. Why is `toLowerCase()` useful?

---

### Q9. Give three real-world examples where `toLowerCase()` is used.

---

### Q10. Why do websites convert emails to lowercase?

---

### Q11. What will this print?

```javascript
let name = "JOHN";

name.toLowerCase();

console.log(name);
```

---

### Q12. How do you permanently convert a string to lowercase?

---

### Q13. Does `toLowerCase()` affect special characters?

---

### Q14. Can it be chained with other string methods?

Example:

```javascript
name.trim().toLowerCase();
```

Yes or No?

---

### Q15. What does `toLowerCase()` return?

---

### Q16. Convert

```
NEW DELHI
```

to lowercase.

---

### Q17. Which method converts a string to lowercase?

A)

```javascript
lower()
```

B)

```javascript
toLowerCase()
```

C)

```javascript
lowerCase()
```

D)

```javascript
Lower()
```

---

### Q18. Can `toLowerCase()` be used for login validation?

---

### Q19. Convert

```
PIZZA HUT
```

to lowercase.

---

### Q20. Give four real-world uses of `toLowerCase()`.