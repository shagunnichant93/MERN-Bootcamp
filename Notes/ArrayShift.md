Excellent! 🎉

You've now learned:

* ✅ `push()` → Add at the **end**
* ✅ `pop()` → Remove from the **end**

Now let's learn the opposite operation.

---

# 📚 Module 4 — Arrays

# Topic 5 — `shift()` Method

---

# Lesson Flow

1. What is `shift()`?
2. Why do we use it?
3. Syntax
4. Real-Life Examples
5. Important Points
6. Common Mistakes
7. Difference between `shift()` and `pop()`
8. Coding Assignments
9. Mini Project
10. Interview Questions
11. MCQs
12. Notes
13. Git Practice

---

# 1. What is `shift()`?

The **`shift()`** method removes the **first element** from an array.

Think of it as:

> **"Remove the first person standing in a queue."**

---

Example

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits.shift();

console.log(fruits);
```

Output

```text
["Mango", "Banana"]
```

Notice:

**Apple** (the first element) is removed.

---

# 2. Why do we use `shift()`?

Imagine a queue at a bank.

Before serving a customer:

```text
Rahul
John
Priya
```

Rahul is served and leaves.

Remaining queue:

```text
John
Priya
```

This is exactly what `shift()` does.

---

# 🏦 Real-Life Example 1 — Banking Queue

```javascript
let customers = [
    "Rahul",
    "John",
    "Priya"
];

customers.shift();

console.log(customers);
```

Output

```text
["John", "Priya"]
```

---

# 🏥 Real-Life Example 2 — Hospital

The first patient is called by the doctor.

```javascript
let patients = [
    "Rahul",
    "Amit",
    "Priya"
];

patients.shift();

console.log(patients);
```

Output

```text
["Amit", "Priya"]
```

---

# 🍕 Real-Life Example 3 — Restaurant

The first pending order is completed.

```javascript
let orders = [
    "Pizza",
    "Burger",
    "Pasta"
];

orders.shift();

console.log(orders);
```

Output

```text
["Burger", "Pasta"]
```

---

# 🎬 Real-Life Example 4 — Movie Booking

The first booked seat is cancelled.

```javascript
let seats = [
    "A1",
    "A2",
    "A3"
];

seats.shift();

console.log(seats);
```

Output

```text
["A2", "A3"]
```

---

# 🛒 Real-Life Example 5 — Shopping Orders

The oldest order has been delivered.

```javascript
let orders = [
    "ORD1001",
    "ORD1002",
    "ORD1003"
];

orders.shift();

console.log(orders);
```

Output

```text
["ORD1002", "ORD1003"]
```

---

# 3. Syntax

```javascript
arrayName.shift();
```

Example

```javascript
let cities = [
    "Delhi",
    "Mumbai",
    "Pune"
];

cities.shift();

console.log(cities);
```

Output

```text
["Mumbai", "Pune"]
```

---

# 4. `shift()` Returns Something Important

Just like `pop()`...

`shift()` returns the **removed first element**.

Example

```javascript
let fruits = [
    "Apple",
    "Mango",
    "Banana"
];

let removed = fruits.shift();

console.log(removed);
```

Output

```text
Apple
```

The array becomes:

```text
["Mango", "Banana"]
```

---

# 5. Arrays are Mutable

`shift()` changes the original array.

```javascript
let fruits = [
    "Apple",
    "Mango"
];

fruits.shift();

console.log(fruits);
```

Output

```text
["Mango"]
```

---

# 6. Empty Array

```javascript
let arr = [];

let removed = arr.shift();

console.log(removed);
```

Output

```text
undefined
```

No error occurs.

---

# 🎯 Real-Life Analogy

Imagine a queue for movie tickets.

```text
John
Rahul
Priya
Shagun
```

John gets the ticket first and leaves.

Queue becomes:

```text
Rahul
Priya
Shagun
```

That's exactly how `shift()` works.

---

# 7. Common Mistakes

### ❌ Mistake 1

Forgetting parentheses.

Wrong

```javascript
arr.shift;
```

Correct

```javascript
arr.shift();
```

---

### ❌ Mistake 2

Thinking `shift()` removes the last element.

No.

It removes the **first** element.

---

### ❌ Mistake 3

Thinking it returns the updated array.

No.

It returns the **removed first element**.

---

# Difference Between `shift()` and `pop()`

| `shift()`                     | `pop()`                      |
| ----------------------------- | ---------------------------- |
| Removes first element         | Removes last element         |
| Returns removed first element | Returns removed last element |
| Changes original array        | Changes original array       |

---

# Difference Between `shift()` and `push()`

| `shift()`               | `push()`            |
| ----------------------- | ------------------- |
| Removes first element   | Adds element at end |
| Returns removed element | Returns new length  |

---

# 8. Coding Assignments (10)

Create:

**`exampleShift.js`**

### 1.

Create a fruits array.

Remove the first fruit.

Print the array.

---

### 2.

Create a students array.

Remove the first student.

---

### 3.

Create a cities array.

Remove the first city.

---

### 4.

Create a hospital patients array.

Remove the first patient.

---

### 5.

Create a products array.

Remove the first product.

---

### 6.

Create a movies array.

Remove the first movie.

---

### 7.

Create a bank accounts array.

Remove the first account.

---

### 8.

Create an empty array.

Call `shift()`.

Print the returned value.

Expected Output

```text
undefined
```

---

### 9.

Store the removed city in a variable.

Example

```javascript
let removedCity = cities.shift();

console.log(`Removed City: ${removedCity}`);
```

---

### 10.

Print the array after removing one element.

---

# 9. Mini Project

Create:

**`bankQueueSystem.js`**

```javascript
let queue = [
    "Rahul",
    "John",
    "Priya",
    "Shagun",
    "Amit"
];
```

Serve the first customer using `shift()`.

Print:

```text
Initial Queue

Rahul
John
Priya
Shagun
Amit

----------------

Served Customer : Rahul

----------------

Remaining Queue

John
Priya
Shagun
Amit

----------------

Customers Remaining : 4
```

---

# 10. Interview Questions

## Beginner

1. What is `shift()`?
2. Is `shift()` a method or property?
3. Which element does `shift()` remove?
4. Does `shift()` modify the original array?
5. What does `shift()` return?

---

## Intermediate

6. What is the syntax of `shift()`?
7. What happens if `shift()` is called on an empty array?
8. Is `shift()` mutable or immutable?
9. Can `shift()` remove multiple elements at once?
10. Can we store the removed value?

---

## Advanced

11. Difference between `shift()` and `pop()`.
12. Difference between `shift()` and `push()`.
13. Why is `shift()` useful?
14. Can arrays containing different data types use `shift()`?
15. What happens to the array length after calling `shift()`?

---

## Scenario-Based

16. Why is `shift()` useful in a bank queue?
17. Why is `shift()` useful in a hospital waiting room?
18. Give four real-world examples where `shift()` is used.
19. Why is `shift()` useful in React?
20. Why is `shift()` useful when processing API data?

---

# 11. MCQs

### 1.

`shift()` is a:

A) Property

B) Method

C) Variable

D) Operator

---

### 2.

`shift()` removes:

A) First element

B) Last element

C) Middle element

D) All elements

---

### 3.

Output?

```javascript
let arr = ["A", "B"];

arr.shift();

console.log(arr);
```

A)

```text
["B"]
```

B)

```text
["A"]
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

What does `shift()` return?

A) Updated array

B) Removed first element

C) Boolean

D) Length

---

### 5.

Calling `shift()` on an empty array returns:

A) `null`

B) `undefined`

C) `0`

D) Error

---

# 12. Notes (`Shift.md`)

```md
# shift()

- shift() removes the first element from an array.
- shift() is a method.
- It modifies the original array.
- It returns the removed first element.
- Calling shift() on an empty array returns undefined.
```

---

# 13. Git Practice

After completing everything:

```bash
git status
git add .
git commit -m "Completed Array shift() method"
git push
```
