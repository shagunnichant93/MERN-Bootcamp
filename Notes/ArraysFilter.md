# 🚀 Module 3 — Arrays

## Topic 16: `filter()`

Great. You completed `map()`. Now we move to **`filter()`**.

Keep this simple distinction in mind:

> **`map()` → transform every element**
> **`filter()` → select elements that satisfy a condition**

---

# 📘 1. What is `filter()`?

`filter()` is an **array method used to create a new array containing only the elements that satisfy a specified condition.**

### Example

```javascript
let numbers = [10, 20, 30, 40, 50];

let result = numbers.filter((num) => {
    return num > 25;
});

console.log(result);
```

Output:

```text
[30, 40, 50]
```

Only the numbers greater than `25` are selected.

---

# 🧠 2. How does `filter()` work?

Think of it like a security checkpoint:

```text
10 → ❌
20 → ❌
30 → ✅
40 → ✅
50 → ✅
```

The elements that satisfy the condition go into the **new array**.

---

# 📌 3. Syntax

```javascript
array.filter((element) => {
    return condition;
});
```

Example:

```javascript
let ages = [15, 18, 21, 14, 25];

let adults = ages.filter((age) => {
    return age >= 18;
});

console.log(adults);
```

Output:

```text
[18, 21, 25]
```

---

# 📌 4. What does `filter()` return?

`filter()` returns a **new array**.

```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let result = fruits.filter((fruit) => {
    return fruit.length > 5;
});

console.log(result);
```

Output:

```text
["Banana", "Orange"]
```

---

# 📌 5. What does the callback return?

The callback should return a condition that evaluates to:

```text
true
```

or

```text
false
```

### `true`

The element is included.

### `false`

The element is excluded.

Example:

```javascript
let numbers = [10, 15, 20, 25];

let result = numbers.filter((num) => {
    return num > 15;
});
```

Internally:

```text
10 → false → ❌
15 → false → ❌
20 → true  → ✅
25 → true  → ✅
```

Result:

```text
[20, 25]
```

---

# 📌 6. Does `filter()` modify the original array?

Normally, **no**.

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.filter((num) => {
    return num > 20;
});

console.log(numbers);
console.log(result);
```

Output:

```text
[10, 20, 30, 40]
[30, 40]
```

Original array remains unchanged.

---

# 📌 7. `filter()` with index

Just like `forEach()` and `map()`, `filter()` can receive the index.

```javascript
let students = ["John", "Rahul", "Priya", "Shagun"];

let result = students.filter((student, index) => {
    return index >= 2;
});

console.log(result);
```

Output:

```text
["Priya", "Shagun"]
```

---

# 🛒 8. Shopping Example

Suppose we have product prices:

```javascript
let prices = [500, 1200, 800, 2500, 300];
```

We want products costing more than ₹1,000:

```javascript
let expensiveProducts = prices.filter((price) => {
    return price > 1000;
});

console.log(expensiveProducts);
```

Output:

```text
[1200, 2500]
```

---

# 🏥 9. Hospital Example

Suppose we have patient ages:

```javascript
let patientAges = [12, 25, 67, 8, 45, 72];
```

We want patients above 60:

```javascript
let seniorPatients = patientAges.filter((age) => {
    return age > 60;
});

console.log(seniorPatients);
```

Output:

```text
[67, 72]
```

---

# 🏦 10. Banking Example

Suppose we have account balances:

```javascript
let balances = [5000, 25000, 10000, 75000, 3000];
```

Find accounts having more than ₹20,000:

```javascript
let highBalanceAccounts = balances.filter((balance) => {
    return balance > 20000;
});

console.log(highBalanceAccounts);
```

Output:

```text
[25000, 75000]
```

---

# ⚛️ 11. Why `filter()` is important in React

Later in React, you'll often have a list of objects and need to display only matching data.

For example:

```javascript
let products = [
    { name: "Laptop", price: 65000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2500 }
];
```

Find products costing more than ₹2,000:

```javascript
let result = products.filter((product) => {
    return product.price > 2000;
});
```

Result:

```text
Laptop
Keyboard
```

A very common pattern later will be:

```text
array
  ↓
filter()
  ↓
map()
  ↓
display in React
```

For example:

```javascript
products
    .filter(product => product.price > 2000)
    .map(product => product.name);
```

This is an important pattern to understand.

---

# 🔥 12. `map()` vs `filter()`

| `map()`                              | `filter()`                      |
| ------------------------------------ | ------------------------------- |
| Transforms elements                  | Selects elements                |
| Returns new array                    | Returns new array               |
| Usually same number of elements      | Usually fewer or equal elements |
| Callback returns transformed value   | Callback returns true/false     |
| Used for modification/transformation | Used for selection              |

### Example

```javascript
let numbers = [1, 2, 3, 4, 5];
```

### `map()`

```javascript
numbers.map(num => num * 2);
```

Result:

```text
[2, 4, 6, 8, 10]
```

All 5 elements remain.

### `filter()`

```javascript
numbers.filter(num => num > 3);
```

Result:

```text
[4, 5]
```

Only matching elements remain.

---

# 🧠 Easy Memory Trick

Remember:

> **MAP = Modify/Transform**

> **FILTER = Find matching elements**

---

# 🎯 Your Interview Questions — `filter()`

Answer these **20 questions** in your own words.

### Basic

**1. What is `filter()` in JavaScript?**

**2. Is `filter()` a method or property?**

**3. What does `filter()` return?**

**4. What is the basic syntax of `filter()`?**

**5. What should the callback function return?**

### Understanding

**6. What happens when the callback returns `true`?**

**7. What happens when the callback returns `false`?**

**8. Does `filter()` modify the original array?**

**9. Can `filter()` receive an index?**

**10. What happens if no elements satisfy the condition?**

### Comparison

**11. What is the difference between `map()` and `filter()`?**

**12. What is the difference between `filter()` and `forEach()`?**

**13. Can we use conditions inside `filter()`?**

**14. Can `filter()` be used with numbers?**

**15. Can `filter()` be used with strings?**

### Real-world

**16. Give one shopping website example where `filter()` can be used.**

**17. Give one hospital-management example.**

**18. Give one banking example.**

**19. How can `filter()` be useful in a React application?**

**20. Explain `filter()` in simple words as if you were answering an interviewer.**

---

# 📝 MCQ

### 1. What does `filter()` return?

a) Boolean
b) New array
c) String
d) Number

### 2. What does the callback normally return?

a) Array
b) String
c) Boolean condition
d) Number

### 3. If the callback returns `true`, what happens?

a) Element is removed
b) Element is included in the new array
c) Original array is deleted
d) Nothing happens

### 4. Which method is used to select elements based on a condition?

a) `map()`
b) `push()`
c) `filter()`
d) `join()`

### 5. What is the result?

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.filter((num) => {
    return num > 20;
});
```

a) `[10, 20]`
b) `[20, 30]`
c) `[30, 40]`
d) `[10, 20, 30, 40]`

---

# 💻 Practice

Create:

```text
exampleFilter.js
shoppingCartFilter.js
```

### `exampleFilter.js`

Practice `filter()` with:

* Numbers greater than a value
* Students based on a condition
* Products based on price
* Patients based on age
* Bank accounts based on balance
* Cities based on a condition
* Movies based on a condition

### `shoppingCartFilter.js`

Create a cart containing products with prices and filter products above a particular price.

Example output:

```text
Shopping Cart
-----------------
Laptop - ₹65000
Monitor - ₹20000
Keyboard - ₹2500
Mouse - ₹1000
-----------------
Products above ₹5000:
Laptop
Monitor
-----------------