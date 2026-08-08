# 🚀 Module 3 — Arrays

## Topic 15: `map()`

You've completed `forEach()`. Now we're moving to the **most important array method for React**: `map()`.

As before, **don't move to the next topic until you say `next`**.

---

# 📘 1. What is `map()`?

`map()` is an **array method used to create a new array by applying a function to every element of the original array.**

### Simple example

```javascript
let numbers = [1, 2, 3, 4];

let doubled = numbers.map((num) => {
    return num * 2;
});

console.log(doubled);
```

Output:

```text
[2, 4, 6, 8]
```

Notice something important:

**Original array:**

```text
[1, 2, 3, 4]
```

**New array:**

```text
[2, 4, 6, 8]
```

---

# 🧠 2. The biggest difference from `forEach()`

### `forEach()`

Used mainly when you want to **perform an action** for every element.

```javascript
let numbers = [1, 2, 3];

numbers.forEach((num) => {
    console.log(num * 2);
});
```

Output:

```text
2
4
6
```

It returns:

```text
undefined
```

---

### `map()`

Used when you want to **transform every element and create a new array**.

```javascript
let numbers = [1, 2, 3];

let result = numbers.map((num) => {
    return num * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6]
```

### Remember this:

> **forEach → do something**
> **map → transform and return a new array**

---

# 📌 3. Syntax

```javascript
array.map(function(element) {
    return newValue;
});
```

Arrow function:

```javascript
array.map((element) => {
    return newValue;
});
```

---

# 📌 4. What does `map()` return?

`map()` returns a **new array**.

Example:

```javascript
let fruits = ["Apple", "Banana", "Mango"];

let result = fruits.map((fruit) => {
    return fruit.toUpperCase();
});

console.log(result);
```

Output:

```text
["APPLE", "BANANA", "MANGO"]
```

---

# 📌 5. Does `map()` modify the original array?

Generally, **no**.

```javascript
let numbers = [1, 2, 3];

let result = numbers.map((num) => num * 10);

console.log(numbers);
console.log(result);
```

Output:

```text
[1, 2, 3]
[10, 20, 30]
```

Original array remains unchanged.

---

# 📌 6. `map()` with index

Just like `forEach()`, `map()` can also provide the index.

```javascript
let students = ["John", "Rahul", "Priya"];

let result = students.map((student, index) => {
    return `${index + 1}. ${student}`;
});

console.log(result);
```

Output:

```text
[
  "1. John",
  "2. Rahul",
  "3. Priya"
]
```

---

# 🏢 7. Real-world example — Products

Suppose an online shopping application has:

```javascript
let products = ["Laptop", "Mouse", "Keyboard"];
```

We want to add `"Product: "` before every product.

```javascript
let result = products.map((product) => {
    return `Product: ${product}`;
});

console.log(result);
```

Output:

```text
[
  "Product: Laptop",
  "Product: Mouse",
  "Product: Keyboard"
]
```

---

# 🏥 8. Hospital Example

```javascript
let patients = ["Rahul", "Amit", "Priya"];

let result = patients.map((patient, index) => {
    return `Patient ${index + 1}: ${patient}`;
});

console.log(result);
```

Output:

```text
[
  "Patient 1: Rahul",
  "Patient 2: Amit",
  "Patient 3: Priya"
]
```

---

# 💰 9. Banking Example

Suppose we have account balances:

```javascript
let balances = [10000, 25000, 50000];
```

We want to add ₹1,000 interest to each balance:

```javascript
let updatedBalances = balances.map((balance) => {
    return balance + 1000;
});

console.log(updatedBalances);
```

Output:

```text
[11000, 26000, 51000]
```

The original balances remain:

```text
[10000, 25000, 50000]
```

---

# ⚛️ 10. Why `map()` is VERY important in React

Later, when you learn React, you'll frequently have data like:

```javascript
let products = ["Laptop", "Mouse", "Keyboard"];
```

and need to display each product.

You can use:

```javascript
products.map((product) => {
    return <li>{product}</li>;
});
```

This is one of the most common uses of `map()` in React.

So remember:

> **Array data → `map()` → UI elements**

We'll learn the React side properly when we reach React.

---

# ⚠️ 11. Important rule

When using `map()`, normally you need to **return something**.

```javascript
let numbers = [1, 2, 3];

let result = numbers.map((num) => {
    return num * 2;
});
```

If you forget `return`:

```javascript
let result = numbers.map((num) => {
    num * 2;
});
```

you'll get:

```text
[undefined, undefined, undefined]
```

---

# 🧠 Quick Memory Trick

| Method      | Main purpose       | Returns               |
| ----------- | ------------------ | --------------------- |
| `forEach()` | Perform an action  | `undefined`           |
| `map()`     | Transform elements | **New array**         |
| `slice()`   | Copy/extract       | New array             |
| `splice()`  | Add/remove/replace | Removed elements      |
| `filter()`  | Select elements    | New array             |
| `find()`    | Find one element   | Element / `undefined` |

We'll cover `filter()`, `find()` and `reduce()` after `map()`.

---

# 🎯 Your Interview Questions — `map()`

Answer these **20 questions** in your own words, just like you've been doing.

### Basic

**1. What is `map()` in JavaScript?**

**2. Is `map()` a method or property?**

**3. What does `map()` return?**

**4. What is the basic syntax of `map()`?**

**5. What is the purpose of `return` inside `map()`?**

### Understanding

**6. Does `map()` modify the original array?**

**7. Does `map()` execute the callback for every element?**

**8. What happens if you don't return a value from the callback?**

**9. Can `map()` receive an index?**

**10. What is the difference between `map()` and `forEach()`?**

### Comparison

**11. Compare `map()` and `forEach()`.**

**12. Why is `map()` commonly used in React?**

**13. Can we use conditions inside `map()`?**

**14. Can we transform numbers using `map()`?**

**15. Can we transform strings using `map()`?**

### Real-world

**16. Give one real-world shopping example where `map()` can be used.**

**17. Give one hospital-management example.**

**18. Give one banking example.**

**19. How can `map()` be useful in a React application?**

**20. Explain `map()` in simple words as if you were answering an interviewer.**

---

# 📝 MCQ

**1. What does `map()` return?**

a) String
b) New array
c) Boolean
d) Number

**2. Does `map()` normally modify the original array?**

a) Yes
b) No
c) Sometimes always
d) Only for strings

**3. Which method is mainly used to transform every element into a new array?**

a) `forEach()`
b) `map()`
c) `pop()`
d) `shift()`

**4. What does this return?**

```javascript
let numbers = [1, 2, 3];

let result = numbers.map((num) => {
    return num * 2;
});
```

a) `[1, 2, 3]`
b) `[2, 4, 6]`
c) `undefined`
d) `6`

**5. Which is commonly used in React to render a list from an array?**

a) `pop()`
b) `shift()`
c) `map()`
d) `reverse()`

---

### 💻 Your practice

Create these two files:

```text
exampleMap.js
shoppingCartMap.js
```

In `exampleMap.js`, practice `map()` with:

* Fruits
* Students
* Cities
* Products
* Patients
* Bank accounts
* Numbers

In `shoppingCartMap.js`, create a shopping cart and produce output like:

```text
Shopping Cart
-----------------
Item 1: Laptop
Item 2: Mouse
Item 3: Keyboard
Item 4: Monitor
-----------------
```

**Send me your 20 answers + MCQs + terminal output when you're done.**
