# **Module 2: Advanced Functions**

## **Day 2 – Arrow Functions (`=>`)**

Today you'll learn one of the most important ES6 features. Arrow functions are used extensively in React, Node.js, Express, callbacks, promises, array methods (`map`, `filter`, `reduce`) and modern JavaScript.

---

# 📘 Notes (Day02.md)

## What is an Arrow Function?

An **Arrow Function** is a shorter and cleaner way to write functions introduced in **ES6 (ECMAScript 2015).**

Instead of writing:

```javascript
function greet() {
    console.log("Hello");
}
```

we can write

```javascript
const greet = () => {
    console.log("Hello");
};
```

Both perform the same task.

---

## Why Arrow Functions?

They make code

* Shorter
* Cleaner
* Easier to read
* Widely used in React and Node.js
* Automatically handle `this` differently (covered later)

---

## Syntax

### Normal Function

```javascript
function add(a, b) {
    return a + b;
}
```

Arrow Function

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

## Arrow Function with No Parameters

```javascript
const hello = () => {
    console.log("Hello MERN");
};

hello();
```

Output

```
Hello MERN
```

---

## Arrow Function with One Parameter

```javascript
const square = (num) => {
    console.log(num * num);
};

square(5);
```

Output

```
25
```

---

## Arrow Function with Multiple Parameters

```javascript
const add = (a, b) => {
    console.log(a + b);
};

add(10,20);
```

Output

```
30
```

---

## Arrow Function Returning Value

```javascript
const multiply = (a,b)=>{
    return a*b;
}

let result = multiply(5,8);

console.log(result);
```

Output

```
40
```

---

## Short Return (Implicit Return)

If there is only one statement, braces and `return` can be omitted.

Instead of

```javascript
const square = (n)=>{
    return n*n;
}
```

write

```javascript
const square = n => n*n;

console.log(square(6));
```

Output

```
36
```

---

## Real-Life Example

### Food Delivery App

```javascript
const placeOrder = (food)=>{
    console.log("Order placed for " + food);
}

placeOrder("Pizza");
```

Output

```
Order placed for Pizza
```

---

### ATM

```javascript
const checkBalance = balance=>{
    console.log("Balance is",balance);
}

checkBalance(15000);
```

---

### Movie Booking

```javascript
const bookTicket = movie=>{
    console.log("Ticket booked for",movie);
}

bookTicket("Avengers");
```

---

### Employee Salary

```javascript
const bonus = salary=>{
    return salary+5000;
}

console.log(bonus(40000));
```

Output

```
45000
```

---

# 📝 Assignments (Day 2)

Create these files.

---

### 1. helloArrow.js

Print

```
Hello JavaScript
```

using an arrow function.

---

### 2. squareArrow.js

Pass a number and print its square.

Example

```
Input : 9

Output

81
```

---

### 3. addArrow.js

Pass two numbers.

Output

```
60
```

---

### 4. multiplyArrow.js

Return multiplication.

Example

```
6 9

54
```

---

### 5. studentArrow.js

Accept

```
Name
Age
City
```

Print all.

---

### 6. employeeArrow.js

Pass employee name and salary.

Print

```
Employee :
Salary :
```

Call function 3 times.

---

### 7. hospitalArrow.js

Pass

```
Patient Name
Disease
```

Print both.

Call twice.

---

### 8. restaurantArrow.js

Pass food name.

Output

```
Preparing Pizza
Preparing Burger
Preparing Pasta
```

---

### 9. shoppingArrow.js

Pass item price.

Return final amount.

Print

```
500
700
900
```

---

### 10. calculatorArrow.js

Create four arrow functions

* add
* subtract
* multiply
* divide

Print all results.

---

### 11. bankArrow.js

Deposit

Withdraw

Check Balance

using arrow functions.

---

### 12. movieArrow.js

Pass movie name.

Print

```
Booking ticket for Avengers
Booking ticket for Batman
```

---

# 📚 Theory Questions

**Q1.** Which symbol is used in an arrow function?

a) `->`

b) `=>`

c) `==`

d) `=`

---

**Q2.** Arrow functions were introduced in which JavaScript version?

a) ES5

b) ES6

c) ES3

d) ES7

---

**Q3.** What is the biggest advantage of arrow functions over normal functions?

---

**Q4.** Can an arrow function return a value?

(Yes/No)

---

**Q5.** What is an implicit return?

Explain with your own words and one example.

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

Complete the assignments, run all files, answer the theory and interview questions in your own words (as you've been doing), and share screenshots. I'll review everything in the same format before moving to the next day.
