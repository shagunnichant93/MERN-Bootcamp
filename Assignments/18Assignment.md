Quiz
Q1.

What is a Function Expression?

a) A loop

b) A function stored inside a variable

c) An object

d) An array

Q2.

Which operator is used to assign a function to a variable?

Q3.

Write one difference between a Function Declaration and a Function Expression.

Q4.

Can a Function Expression take parameters?

Q5.

Why are Function Expressions commonly used in modern JavaScript frameworks like React?

# Theory Answers Review

### Q1. What keyword is used to store a function expression?

Your Answer:

> b)

✅ Correct

```javascript
let greet = function() {};
```

---

### Q2. Which operator is used?

Your Answer:

> =

✅ Correct

A function expression is assigned to a variable using the assignment operator (`=`).

---

### Q3. Difference between Function Declaration and Function Expression

Your Answer:

> Function Declaration is written directly and Function Expression is stored inside a variable.

✅ Correct.

A more complete definition:

**Function Declaration**

* Declared using the `function` keyword.
* Exists independently.
* Can be called before its declaration because of hoisting.

Example:

```javascript
function greet() {
    console.log("Hello");
}
```

---

**Function Expression**

* A function stored inside a variable.
* Can be anonymous or named.
* Cannot be used before the assignment.

Example

```javascript
const greet = function () {
    console.log("Hello");
};
```

---

### Q4. Can function expressions have parameters?

Your Answer

> Yes

✅ Correct

Example

```javascript
const add = function(a, b){
    return a+b;
}
```

---

### Q5. Why store a function inside a variable?

Your Answer

> Later that variable can even be replaced with another function.

✅ Correct

Also,

* variables can be passed as arguments
* stored inside objects
* returned from functions
* reassigned

This is one reason JavaScript is called a **first-class function language**.

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
Excellent work! You're getting much more comfortable with functions. Your programs are correct, your screenshots look good, and your theory answers are improving.

✅ Assignment Review

Programs: ✅ 12/12 Completed

Everything executed correctly.

Minor observation:

In shoppingArrow.js, the assignment asked to return the final amount, but you printed the item name and price. Your program is still correct, but next time try to exactly match the assignment requirements.
Theory Review
Q1. Which symbol is used in an arrow function?

✅ Your Answer: b) =>

Correct.

Marks: ⭐⭐⭐⭐⭐

Q2. Arrow functions were introduced in?

✅ Your Answer: ES6

Correct.

Marks: ⭐⭐⭐⭐⭐

Q3. Biggest advantage?

Your Answer:

cleaner and maintainable code

✅ Correct.

A slightly stronger answer would be:

Arrow functions make code shorter, cleaner, and easier to read. They also have lexical this, which is very useful in modern JavaScript frameworks like React.

Marks: ⭐⭐⭐⭐☆

Q4. Can arrow functions return values?

✅ Yes

Correct.

Q5. Implicit Return

Your Answer:

returns automatically without writing return.

✅ Correct.

Example:

const square = n => n * n;

Excellent.