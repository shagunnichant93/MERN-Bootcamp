Awesome! 🎉 Welcome to the next topic.

---

# 📚 Module 4 — Arrays

# Topic 3 — `push()` Method

---

# Lesson Flow

1. What is `push()`?
2. Why do we use it?
3. Syntax
4. Real-Life Examples
5. Common Mistakes
6. Coding Assignments
7. Mini Project
8. Interview Questions
9. MCQs
10. Notes
11. Git Practice

---

# 1. What is `push()`?

The **`push()`** method is used to **add one or more elements to the end of an array**.

Think of it as:

> **"Adding a new item at the end of the list."**

Example:

```javascript
let fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Banana"]
```

Notice that `"Banana"` is added at the **end**.

---

# 2. Why do we use `push()`?

Imagine a shopping cart.

Initially:

```text
Laptop
Mouse
```

The customer adds a Keyboard.

Instead of creating a new array:

```javascript
let cart = ["Laptop", "Mouse"];

cart.push("Keyboard");
```

Output:

```text
["Laptop", "Mouse", "Keyboard"]
```

This is exactly how shopping websites work.

---

# 🏦 Real-Life Example 1 — Banking

A customer opens a new bank account.

```javascript
let accounts = [
    "ACC1001",
    "ACC1002"
];

accounts.push("ACC1003");

console.log(accounts);
```

Output:

```text
["ACC1001", "ACC1002", "ACC1003"]
```

---

# 🏥 Real-Life Example 2 — Hospital

A new patient arrives.

```javascript
let patients = [
    "Rahul",
    "Amit"
];

patients.push("Priya");

console.log(patients);
```

Output:

```text
["Rahul", "Amit", "Priya"]
```

---

# 🍕 Real-Life Example 3 — Restaurant

A customer orders one more item.

```javascript
let order = [
    "Pizza",
    "Burger"
];

order.push("Cold Drink");

console.log(order);
```

Output:

```text
["Pizza", "Burger", "Cold Drink"]
```

---

# 🎬 Real-Life Example 4 — Movie Booking

A new movie is released.

```javascript
let movies = [
    "Avatar",
    "Inception"
];

movies.push("Interstellar");

console.log(movies);
```

---

# 🛒 Real-Life Example 5 — Shopping Website

```javascript
let wishlist = [
    "Laptop",
    "Mobile"
];

wishlist.push("Headphones");

console.log(wishlist);
```

---

# 3. Syntax

```javascript
arrayName.push(value);
```

Example:

```javascript
let cities = [
    "Delhi",
    "Mumbai"
];

cities.push("Pune");

console.log(cities);
```

Output:

```text
["Delhi", "Mumbai", "Pune"]
```

---

# 4. `push()` Returns Something Important

Most beginners don't know this.

`push()` returns the **new length of the array**.

Example:

```javascript
let fruits = ["Apple", "Mango"];

let total = fruits.push("Banana");

console.log(total);
```

Output:

```text
3
```

Because there are now **3** items.

---

# 5. Arrays are Mutable

Unlike strings...

Arrays **change** after using `push()`.

```javascript
let fruits = ["Apple"];

fruits.push("Mango");

console.log(fruits);
```

Output:

```text
["Apple", "Mango"]
```

The original array has changed.

---

# 6. Multiple Values

You can add more than one value.

```javascript
let fruits = ["Apple"];

fruits.push("Mango", "Banana", "Orange");

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Banana", "Orange"]
```

---

# 🎯 Real-Life Analogy

Imagine a queue at a movie theatre.

Initially:

```text
John
Rahul
Priya
```

A new customer arrives.

```text
John
Rahul
Priya
Shagun
```

The new customer joins **at the end**.

That's exactly what `push()` does.

---

# 7. Common Mistakes

### ❌ Mistake 1

Forgetting parentheses.

Wrong:

```javascript
fruits.push;
```

Correct:

```javascript
fruits.push("Banana");
```

---

### ❌ Mistake 2

Using square brackets.

Wrong:

```javascript
fruits.push["Banana"];
```

Correct:

```javascript
fruits.push("Banana");
```

---

### ❌ Mistake 3

Thinking `push()` adds to the beginning.

It always adds to the **end**.

---

# 8. Coding Assignments (10)

Create:

**`examplePush.js`**

### 1.

Create a fruits array.

Add `"Banana"` using `push()`.

Print the array.

---

### 2.

Create a students array.

Add `"Shagun"`.

---

### 3.

Create a cities array.

Add `"Pune"`.

---

### 4.

Create a hospital patients array.

Add `"Priya"`.

---

### 5.

Create a products array.

Add `"Monitor"`.

---

### 6.

Create a movies array.

Add `"Interstellar"`.

---

### 7.

Create a bank accounts array.

Add `"ACC1004"`.

---

### 8.

Create an empty array.

Add `"JavaScript"`.

Print the array.

---

### 9.

Create a food array.

Add **three** foods using one `push()`.

Expected:

```javascript
["Pizza", "Burger", "Pasta"]
```

---

### 10.

Print the new length returned by `push()`.

Example:

```javascript
let fruits = ["Apple"];

let total = fruits.push("Mango");

console.log(total);
```

Output:

```text
2
```

---

# 9. Mini Project

Create:

**`shoppingCartPush.js`**

```javascript
let cart = [
    "Laptop",
    "Mouse"
];
```

Add:

```text
Keyboard
Headphones
Monitor
```

using `push()`.

Output:

```text
Shopping Cart

Laptop
Mouse
Keyboard
Headphones
Monitor

----------------

Total Items : 5
```

---

# 10. Interview Questions

## Beginner

1. What is `push()`?
2. Is `push()` a method or a property?
3. Where does `push()` add elements?
4. Does `push()` change the original array?
5. Can `push()` add multiple elements?

---

## Intermediate

6. What is the syntax of `push()`?
7. What does `push()` return?
8. Is `push()` mutable or immutable?
9. Can `push()` work on an empty array?
10. What happens if you call `push()` without arguments?

---

## Advanced

11. Difference between `push()` and `unshift()`?
12. Difference between `push()` and array concatenation?
13. Why is `push()` efficient?
14. Can we store the return value of `push()`?
15. Can we push different data types?

---

## Scenario-Based

16. Why is `push()` useful in a shopping cart?
17. Why is `push()` useful in a hospital system?
18. Give four real-world examples where `push()` is used.
19. Why is `push()` important in React?
20. Why is `push()` useful when processing API data?

---

# 11. MCQs

### 1.

`push()` is a:

A) Property

B) Method

C) Variable

D) Operator

---

### 2.

Where does `push()` add an element?

A) Beginning

B) End

C) Middle

D) Anywhere

---

### 3.

Output?

```javascript
let arr = ["A"];

arr.push("B");

console.log(arr);
```

A)

```text
["A"]
```

B)

```text
["B"]
```

C)

```text
["A", "B"]
```

D)

```text
Error
```

---

### 4.

Can `push()` add multiple values?

A) No

B) Yes

---

### 5.

What does `push()` return?

A) First element

B) Last element

C) New array length

D) Boolean

---

# 12. Notes (`Push.md`)

```md
# push()

- push() adds elements to the end of an array.
- push() is a method.
- It modifies the original array.
- It can add one or multiple elements.
- It returns the new length of the array.
```

---

# 13. Git Practice

After completing everything:

```bash
git status
git add .
git commit -m "Completed Array push() method"
git push
```
