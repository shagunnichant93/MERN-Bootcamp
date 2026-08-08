Great. We continue exactly from our original plan. 👍

# 📚 Module 3 – Arrays

## Topic 14 – `forEach()`

This is an **important topic** because `forEach()` is the first method where you'll start working with **each array element one by one**.

---

# 1. What is `forEach()`?

`forEach()` is an **array method used to execute a function once for every element in an array.**

Example:

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

Output:

```text
Apple
Banana
Mango
```

Think of it like:

> "Go through every item in this array and do something with it."

---

# 2. Why do we use `forEach()`?

Suppose we have:

```javascript
let students = ["John", "Rahul", "Priya", "Shagun"];
```

Instead of doing:

```javascript
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
```

We can simply do:

```javascript
students.forEach(function(student) {
    console.log(student);
});
```

Much cleaner. ✅

---

# 3. Syntax

Basic syntax:

```javascript
array.forEach(function(element) {
    // code
});
```

You can also use an arrow function:

```javascript
array.forEach((element) => {
    // code
});
```

For example:

```javascript
let cities = ["Delhi", "Mumbai", "Pune"];

cities.forEach((city) => {
    console.log(city);
});
```

---

# 4. What is `element`?

Look at:

```javascript
fruits.forEach((fruit) => {
    console.log(fruit);
});
```

Here:

```text
fruits → array
fruit  → current element
```

During each iteration:

```text
1st time → Apple
2nd time → Banana
3rd time → Mango
```

So `fruit` represents the **current element**.

---

# 5. `forEach()` with index

`forEach()` can give you the index too.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
```

Output:

```text
0 Apple
1 Banana
2 Mango
```

The callback can receive:

```text
element
index
array
```

Example:

```javascript
fruits.forEach((fruit, index, array) => {
    console.log(fruit);
});
```

You don't have to use all three.

---

# 6. Very Important: `forEach()` does NOT return a new array

This is different from methods like `map()` that we'll learn later.

Example:

```javascript
let numbers = [10, 20, 30];

let result = numbers.forEach((number) => {
    console.log(number);
});

console.log(result);
```

Output:

```text
10
20
30
undefined
```

### Remember:

`forEach()` → performs an action.

It does **not** create and return a new array.

---

# 7. Does `forEach()` modify the original array?

Normally, `forEach()` itself **does not modify the array**.

Example:

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit) => {
    console.log(fruit);
});

console.log(fruits);
```

Original array remains:

```text
Apple
Banana
Mango
```

However, you **can modify array elements inside the callback** if you deliberately assign to them.

For now, remember:

> `forEach()` itself is not a mutation method like `push()`, `pop()`, `splice()`, `reverse()`, or `sort()`.

---

# 8. `forEach()` vs `for` loop

Traditional loop:

```javascript
let fruits = ["Apple", "Banana", "Mango"];

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

Using `forEach()`:

```javascript
fruits.forEach((fruit) => {
    console.log(fruit);
});
```

Both produce:

```text
Apple
Banana
Mango
```

`forEach()` is often cleaner when you simply want to perform an operation on every element.

---

# 9. Real-World Example – Shopping

```javascript
let products = ["Laptop", "Mouse", "Keyboard"];

products.forEach((product) => {
    console.log(`Product: ${product}`);
});
```

Output:

```text
Product: Laptop
Product: Mouse
Product: Keyboard
```

---

# 10. Hospital Example

```javascript
let patients = ["Rahul", "Amit", "Priya"];

patients.forEach((patient) => {
    console.log(`Patient: ${patient}`);
});
```

Output:

```text
Patient: Rahul
Patient: Amit
Patient: Priya
```

---

# 11. Banking Example

```javascript
let accounts = ["ACC1001", "ACC1002", "ACC1003"];

accounts.forEach((account) => {
    console.log(`Account: ${account}`);
});
```

---

# 12. Employee Example

```javascript
let employees = ["John", "Rahul", "Priya"];

employees.forEach((employee, index) => {
    console.log(`Employee ${index + 1}: ${employee}`);
});
```

Output:

```text
Employee 1: John
Employee 2: Rahul
Employee 3: Priya
```

Notice:

```javascript
index + 1
```

because array indexes start from `0`.

---

# 13. Important Difference: `forEach()` and `for`

| `forEach()`               | `for` loop                         |
| ------------------------- | ---------------------------------- |
| Array method              | Loop                               |
| Easy to read              | More control                       |
| Works with array elements | Can work with different conditions |
| No normal `break`         | Can use `break`                    |
| No normal `continue`      | Can use `continue`                 |
| Returns `undefined`       | Doesn't have a method return value |

Don't worry about `break` and `continue` too much yet. We'll use them more when revising loops.

---

# 14. Can we use `if` inside `forEach()`?

### Yes. ✅

Example:

```javascript
let numbers = [10, 20, 30, 40];

numbers.forEach((number) => {

    if(number > 20) {
        console.log(number);
    }

});
```

Output:

```text
30
40
```

This is very useful in real applications.

---

# 15. Can we use `toUpperCase()` inside `forEach()`?

Yes.

```javascript
let names = ["john", "rahul", "priya"];

names.forEach((name) => {
    console.log(name.toUpperCase());
});
```

Output:

```text
JOHN
RAHUL
PRIYA
```

Notice that the original array isn't automatically changed.

---

# 🧠 Easy Memory Trick

Think:

### `forEach()` = "Do something for EACH item."

```text
Array
 ↓
Apple   → do something
Banana  → do something
Mango   → do something
```

---

# 💻 Coding Exercises

Create:

## `exampleForEach.js`

### Exercise 1

Print every fruit:

```javascript
["Apple", "Banana", "Mango", "Orange"]
```

---

### Exercise 2

Print every student.

```javascript
["John", "Rahul", "Priya", "Shagun"]
```

---

### Exercise 3

Print every city.

```javascript
["Delhi", "Mumbai", "Pune", "Bangalore"]
```

---

### Exercise 4

Print:

```text
Product: Laptop
Product: Mouse
Product: Keyboard
Product: Monitor
```

using `forEach()`.

---

### Exercise 5

Print every patient with:

```text
Patient: Rahul
Patient: Amit
Patient: Priya
```

---

### Exercise 6

Print every bank account with its index:

```text
Account 0: ACC1001
Account 1: ACC1002
Account 2: ACC1003
```

---

### Exercise 7

Print only numbers greater than `50`:

```javascript
let numbers = [10, 60, 30, 80, 90, 40];
```

Expected:

```text
60
80
90
```

---

### Exercise 8

Convert these names to uppercase while printing:

```javascript
["john", "rahul", "priya"]
```

Expected:

```text
JOHN
RAHUL
PRIYA
```

---

### Exercise 9

Print:

```text
Student 1: John
Student 2: Rahul
Student 3: Priya
Student 4: Shagun
```

---

### Exercise 10

Print the shopping cart:

```javascript
["Laptop", "Mouse", "Keyboard", "Headphones"]
```

Expected:

```text
Cart Item: Laptop
Cart Item: Mouse
Cart Item: Keyboard
Cart Item: Headphones
```

---

# 🛒 Mini Project

Create:

## `shoppingCartForEach.js`

Use:

```javascript
let cart = ["Laptop", "Mouse", "Keyboard", "Monitor"];
```

Print:

```text
Shopping Cart
----------------
Item 1: Laptop
Item 2: Mouse
Item 3: Keyboard
Item 4: Monitor
----------------
Total Items: 4
```

**Important:** For the total, use:

```javascript
cart.length
```

Don't use a loop to calculate it.

---

# 🎯 Interview Questions

Answer these **20 questions** like you've been doing.

### Beginner

1. What is `forEach()`?
2. Is `forEach()` a method or property?
3. What does `forEach()` do?
4. What is the syntax of `forEach()`?
5. What is the parameter passed to the callback?

### Intermediate

6. What is the index parameter in `forEach()`?
7. Can `forEach()` access the original array?
8. Does `forEach()` return a new array?
9. What does `forEach()` return?
10. Is `forEach()` a mutable method?

### Comparison

11. Difference between `forEach()` and `for` loop.
12. Difference between `forEach()` and `map()`.
13. Can we use `if` inside `forEach()`?
14. Can we use `toUpperCase()` inside `forEach()`?
15. Can we get the index using `forEach()`?

### Real-world

16. How can `forEach()` be used in a shopping website?
17. How can it be used in a hospital system?
18. How can it be used in a banking system?
19. How can it be used in a React application?
20. How can it be used while processing API data?

---

# 📝 MCQs

### 1. `forEach()` is a:

A) Property
B) Method
C) Variable
D) Object

### 2. `forEach()` executes a function:

A) Once
B) For every array element
C) Only for the first element
D) Only for the last element

### 3. What does `forEach()` normally return?

A) Array
B) String
C) `undefined`
D) Boolean

### 4. Can `forEach()` receive the index?

A) Yes
B) No

### 5. Which is correct?

A)

```javascript
arr.forEach()
```

B)

```javascript
arr.forEach((item) => {
    console.log(item);
});
```

C)

```javascript
arr.forEach[item]
```

D)

```javascript
arr.foreach(item)
```
