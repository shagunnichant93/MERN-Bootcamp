Awesome! 🎉

You've now completed **7 Array topics** successfully.

Now we'll learn another interview favorite.

---

# 📚 Module 4 – Arrays

# Topic 8 – `slice()` Method (Arrays)

> **⚠️ Don't confuse this with String `slice()`.**
>
> * **String `slice()`** → extracts part of a **string**.
> * **Array `slice()`** → extracts part of an **array**.

---

# Lesson Flow

1. What is `slice()`?
2. Why do we use it?
3. Syntax
4. Positive Index
5. Negative Index
6. Return Value
7. Mutable or Immutable?
8. Common Mistakes
9. Difference between `slice()` and `splice()`
10. Coding Assignments
11. Mini Project
12. Interview Questions
13. MCQs
14. Notes
15. Git Practice

---

# 1. What is `slice()`?

`slice()` is an **array method** used to **copy or extract a portion of an array** without changing the original array.

---

## Real-Life Example

Suppose you have a class list:

```text
John
Rahul
Priya
Shagun
Amit
```

You only want the first three students.

Instead of changing the original list, you create a new list:

```text
John
Rahul
Priya
```

The original class list remains unchanged.

This is exactly what `slice()` does.

---

# 2. Syntax

```javascript
array.slice(startIndex, endIndex);
```

OR

```javascript
array.slice(startIndex);
```

---

## Parameters

* **startIndex** → Starting position (included)
* **endIndex** → Ending position (excluded)

Remember:

**Start is included. End is NOT included.**

---

# 3. Positive Index

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];

let result = fruits.slice(1,3);

console.log(result);
```

Output

```text
[
"Banana",
"Mango"
]
```

Explanation

```text
0 Apple
1 Banana   ← included
2 Mango
3 Orange   ← excluded
```

---

## Example 2

```javascript
let students = [
    "John",
    "Rahul",
    "Shagun",
    "Priya"
];

let topStudents = students.slice(0,2);

console.log(topStudents);
```

Output

```text
John
Rahul
```

---

# 4. Without End Index

```javascript
let cities = [
    "Delhi",
    "Mumbai",
    "Pune",
    "Chennai"
];

let result = cities.slice(2);

console.log(result);
```

Output

```text
Pune
Chennai
```

It copies from index 2 until the end.

---

# 5. Negative Index

Just like String `slice()`, Array `slice()` also supports negative indexes.

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];

let lastTwo = fruits.slice(-2);

console.log(lastTwo);
```

Output

```text
[
"Mango",
"Orange"
]
```

---

Another example

```javascript
let lastOne = fruits.slice(-1);
```

Output

```text
[
"Orange"
]
```

---

# 6. Return Value

`slice()` returns a **new array**.

Example

```javascript
let arr = [
1,
2,
3,
4
];

let copied = arr.slice(1,3);

console.log(copied);
```

Output

```text
[
2,
3
]
```

Original array

```text
[
1,
2,
3,
4
]
```

---

# 7. Arrays are Immutable with `slice()`

```javascript
let arr = [
1,
2,
3
];

arr.slice(1);

console.log(arr);
```

Output

```text
[
1,
2,
3
]
```

Original array does not change.

---

# 8. Common Mistakes

## Mistake 1

Thinking end index is included.

Wrong.

```javascript
arr.slice(1,3);
```

Returns:

```text
Index 1
Index 2
```

NOT index 3.

---

## Mistake 2

Confusing `slice()` with `splice()`.

Remember:

| slice     | splice  |
| --------- | ------- |
| Copy      | Edit    |
| Immutable | Mutable |

---

## Mistake 3

Ignoring the returned array.

Wrong

```javascript
arr.slice(1,3);
```

Correct

```javascript
let newArray = arr.slice(1,3);
```

---

# Real-World Examples

## 🏥 Hospital

Copy today's admitted patients.

```javascript
let todayPatients = patients.slice(0,10);
```

---

## 🏦 Banking

Display first five transactions.

```javascript
transactions.slice(0,5);
```

---

## 🛒 Shopping

Display featured products.

```javascript
products.slice(0,6);
```

---

## 🎬 Movies

Display Top 10 movies.

```javascript
movies.slice(0,10);
```

---

## 🍕

Latest Orders

```javascript
orders.slice(-5);
```

---

# Difference

| Method     | Purpose                |
| ---------- | ---------------------- |
| `splice()` | Add / Remove / Replace |
| `slice()`  | Copy / Extract         |

---

# Coding Assignments (10)

Create **`exampleArraySlice.js`**

### 1.

Create fruits array.

Copy first two fruits.

---

### 2.

Copy last two students.

---

### 3.

Copy first three cities.

---

### 4.

Copy products from index 2.

---

### 5.

Copy first four movies.

---

### 6.

Copy last bank account.

---

### 7.

Store copied patients in another variable.

Print both arrays.

---

### 8.

Use `slice()` without end index.

Observe output.

---

### 9.

Copy middle three products.

---

### 10.

Copy entire array.

---

# Mini Project

Create:

**`bankTransactionHistory.js`**

Transactions:

```javascript
[
"Deposit",
"Withdraw",
"Transfer",
"Bill Payment",
"Recharge",
"Loan EMI",
"Interest"
]
```

Tasks:

1. Copy first three transactions.
2. Copy last two transactions.
3. Print original array.
4. Print copied arrays.
5. Show original is unchanged.

Expected Output

```text
Original Transactions

Deposit
Withdraw
Transfer
Bill Payment
Recharge
Loan EMI
Interest

------------------

Recent Transactions

Loan EMI
Interest

------------------

First Three Transactions

Deposit
Withdraw
Transfer

------------------

Original Array Still Same
```

---

# Interview Questions

## Beginner

1. What is `slice()`?
2. Is it a method or property?
3. Does it modify the original array?
4. Syntax of `slice()`.
5. What does `slice(2)` mean?

---

## Intermediate

6. What does `slice(1,4)` return?
7. Is end index included?
8. Does `slice()` support negative indexes?
9. What does `slice(-2)` return?
10. What does `slice()` return?

---

## Advanced

11. Difference between `slice()` and `splice()`.
12. Why is `slice()` immutable?
13. Why is `slice()` useful?
14. Can it copy the whole array?
15. What happens if end index is omitted?

---

## Scenario-Based

16. Shopping website example.
17. Hospital example.
18. Banking example.
19. React example.
20. API example.

---

# MCQs

### 1.

`slice()` is a:

A) Property

B) Method

C) Variable

D) Object

---

### 2.

What does this return?

```javascript
let arr = ["A","B","C","D"];
console.log(arr.slice(1,3));
```

A)

```text
["A","B"]
```

B)

```text
["B","C"]
```

C)

```text
["C","D"]
```

D)

```text
["A","B","C"]
```

---

### 3.

Does `slice()` modify the original array?

A) Yes

B) No

---

### 4.

Which supports negative indexes?

A) `slice()`

B) `push()`

C) `pop()`

D) `shift()`

---

### 5.

What does `slice()` return?

A) Boolean

B) Number

C) New Array

D) String

---

# Notes (`ArraySlice.md`)

```md
# Array slice()

- slice() is an array method.
- Used to copy or extract part of an array.
- Does not modify the original array.
- Returns a new array.
- Supports negative indexes.
- Start index is included.
- End index is excluded.
```

---

# Git Practice

```bash
git status
git add .
git commit -m "Completed Array slice() method"
git push
```

---

## 📌 Memory Trick

Imagine a cake 🍰.

* **`slice()`** = Take a piece of the cake. The original cake is still there.
* **`splice()`** = Cut the cake and change it by removing or replacing pieces.
