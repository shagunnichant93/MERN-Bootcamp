Awesome! 🎉

You have completed **8 Array topics**.

Now let's learn one of the most frequently used array methods in JavaScript.

---

# 📚 Module 4 – Arrays

# Topic 9 – `indexOf()` Method

---

# Lesson Flow

1. What is `indexOf()`?
2. Why do we use it?
3. Syntax
4. Finding an Element
5. Element Not Found
6. Start Searching from a Specific Index
7. Return Value
8. Mutable or Immutable?
9. Common Mistakes
10. Real-World Examples
11. Coding Assignments
12. Mini Project
13. Interview Questions
14. MCQs
15. Notes
16. Git Practice

---

# 1. What is `indexOf()`?

`indexOf()` is an **array method** used to **find the index (position) of an element** in an array.

It searches from **left to right** and returns the **index of the first matching element**.

---

## Real-Life Example

Imagine a queue:

```text
Rahul
John
Priya
Shagun
Amit
```

Indexes:

```text
0 Rahul
1 John
2 Priya
3 Shagun
4 Amit
```

If you want to know where **Shagun** is in the queue:

```javascript
queue.indexOf("Shagun");
```

Output

```text
3
```

---

# 2. Syntax

```javascript
array.indexOf(element)
```

OR

```javascript
array.indexOf(element, startIndex)
```

---

## Parameters

* **element** → Element to search
* **startIndex** → Optional. Search starts from this index.

---

# 3. Finding an Element

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];

console.log(fruits.indexOf("Mango"));
```

Output

```text
2
```

---

Another Example

```javascript
let cities = [
    "Delhi",
    "Mumbai",
    "Pune"
];

console.log(cities.indexOf("Mumbai"));
```

Output

```text
1
```

---

# 4. Element Not Found

If the element does not exist,

`indexOf()` returns **-1**

```javascript
let fruits = [
    "Apple",
    "Banana"
];

console.log(fruits.indexOf("Mango"));
```

Output

```text
-1
```

---

# 5. Search from a Specific Index

```javascript
let numbers = [
    10,
    20,
    30,
    20,
    40
];

console.log(numbers.indexOf(20,2));
```

Output

```text
3
```

Explanation:

It starts searching from index **2**, so it skips the first `20`.

---

# 6. Return Value

`indexOf()` returns:

* Index if found.
* `-1` if not found.

---

# 7. Arrays are Immutable

```javascript
let arr = [
1,
2,
3
];

arr.indexOf(2);

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

The original array is unchanged.

---

# 8. Common Mistakes

## ❌ Mistake 1

Expecting a boolean.

Wrong

```javascript
arr.indexOf("Apple");
```

Returns

```text
0
```

NOT

```text
true
```

---

## ❌ Mistake 2

Ignoring `-1`.

```javascript
if(arr.indexOf("Mango")){
```

Wrong!

Because:

```javascript
indexOf("Mango")
```

returns

```text
-1
```

Correct

```javascript
if(arr.indexOf("Mango") !== -1){
    console.log("Found");
}
```

---

## ❌ Mistake 3

Confusing `indexOf()` with `includes()`.

| indexOf()     | includes()      |
| ------------- | --------------- |
| Returns index | Returns boolean |

---

# Real-World Examples

## 🏥 Hospital

Find a patient.

```javascript
patients.indexOf("Rahul");
```

---

## 🏦 Banking

Find an account.

```javascript
accounts.indexOf("ACC1002");
```

---

## 🛒 Shopping

Find a product.

```javascript
products.indexOf("Laptop");
```

---

## 🎬 Movies

Find a movie.

```javascript
movies.indexOf("Inception");
```

---

## 🍕

Find an order.

```javascript
orders.indexOf("Pizza");
```

---

# Difference

| Method       | Returns |
| ------------ | ------- |
| `indexOf()`  | Index   |
| `includes()` | Boolean |

---

# Coding Assignments (10)

Create **`exampleIndexOf.js`**

### 1.

Find `"Banana"` in fruits.

---

### 2.

Find `"John"` in students.

---

### 3.

Find `"Delhi"` in cities.

---

### 4.

Find `"Laptop"` in products.

---

### 5.

Find `"SpiderMan"` in movies.

---

### 6.

Find `"Savings"` in bank accounts.

---

### 7.

Search `"Java"` in an array.

Print the returned index.

---

### 8.

Search an element that doesn't exist.

Observe the output.

---

### 9.

Use `indexOf()` with `startIndex`.

Example:

```javascript
let numbers = [10,20,30,20,40];

console.log(numbers.indexOf(20,2));
```

---

### 10.

Search `"Charlie"` in patients.

If found, print the index.

Else print:

```text
Patient Not Found
```

---

# Mini Project

Create:

**`shoppingCartSearch.js`**

Cart:

```javascript
[
"Laptop",
"Mouse",
"Keyboard",
"Monitor",
"Headphones"
]
```

Tasks:

1. Search `"Keyboard"`
2. Print its index.
3. Search `"Printer"`
4. If not found print:

```text
Product Not Found
```

Expected Output

```text
Shopping Cart

Laptop
Mouse
Keyboard
Monitor
Headphones

------------------

Keyboard Found At Index: 2

------------------

Printer Not Found
```

---

# Interview Questions

## Beginner

1. What is `indexOf()`?
2. Is it a method or property?
3. What does it return?
4. Syntax of `indexOf()`.
5. What happens if an element is not found?

---

## Intermediate

6. What does `indexOf("Mango")` return?
7. What does `indexOf("Mango",2)` mean?
8. Does `indexOf()` modify the original array?
9. Is `indexOf()` mutable or immutable?
10. Can it return `-1`?

---

## Advanced

11. Difference between `indexOf()` and `includes()`.
12. Why is `indexOf()` useful?
13. Why does it return `-1`?
14. Can it search duplicate elements?
15. What happens if there are multiple matching elements?

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

`indexOf()` is a:

A) Property

B) Method

C) Variable

D) Object

---

### 2.

Output?

```javascript
let arr = ["A","B","C"];

console.log(arr.indexOf("B"));
```

A)

```text
0
```

B)

```text
1
```

C)

```text
2
```

D)

```text
-1
```

---

### 3.

What is returned if an element is not found?

A) `0`

B) `null`

C) `-1`

D) `false`

---

### 4.

Does `indexOf()` modify the original array?

A) Yes

B) No

---

### 5.

Which returns a boolean?

A) `indexOf()`

B) `includes()`

C) Both

D) Neither

---

# Notes (`ArrayIndexOf.md`)

```md
# indexOf()

- indexOf() is an array method.
- Used to find the index of an element.
- Returns the first matching index.
- Returns -1 if not found.
- Does not modify the original array.
- Supports an optional startIndex parameter.
```

---

# Git Practice

```bash
git status
git add .
git commit -m "Completed Array indexOf() method"
git push
```

---

## 📌 Memory Trick

Think of **`indexOf()`** like searching for a person's seat number in a classroom.

* You ask: **"Where is Rahul sitting?"**
* The answer is **Seat No. 3** (the index).

If Rahul isn't in the classroom, the answer is **-1**, meaning **"not found."**

---
