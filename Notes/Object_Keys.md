Awesome! 🎉

Welcome to **Module 4 — Arrays**.

This is one of the **most important modules** in JavaScript because arrays are used **everywhere**:

* ⚛️ React (displaying lists of products, users, etc.)
* 🟢 Node.js (processing data)
* 🍃 MongoDB (documents often contain arrays)
* 🌐 APIs (JSON responses are full of arrays)

---

# 📚 Module 4 — Arrays

# Topic 1 — Array Introduction

---

# Lesson Flow

1. What is an Array?
2. Why do we need Arrays?
3. Syntax
4. Accessing Elements
5. Real-Life Examples
6. Common Mistakes
7. Coding Assignments
8. Mini Project
9. Interview Questions
10. MCQs
11. Notes
12. Git Practice

---

# 1. What is an Array?

An **Array** is a data structure used to store **multiple values in a single variable**.

Instead of creating many variables:

```javascript
let student1 = "John";
let student2 = "Rahul";
let student3 = "Priya";
let student4 = "Shagun";
```

We can store them together:

```javascript
let students = ["John", "Rahul", "Priya", "Shagun"];
```

Now all student names are stored in one variable called `students`.

---

# 2. Why do we need Arrays?

Imagine a classroom with **100 students**.

Without arrays:

```javascript
let student1 = "John";
let student2 = "Rahul";
let student3 = "Priya";
...
let student100 = "Amit";
```

Very difficult to manage.

With an array:

```javascript
let students = [
    "John",
    "Rahul",
    "Priya",
    "Amit"
];
```

Much cleaner and easier.

---

# 🏦 Real-Life Example 1 — Bank

A bank has multiple account numbers.

```javascript
let accounts = [
    "ACC1001",
    "ACC1002",
    "ACC1003",
    "ACC1004"
];
```

Instead of four separate variables, one array stores them all.

---

# 🏥 Real-Life Example 2 — Hospital

```javascript
let patients = [
    "Rahul",
    "Amit",
    "Priya",
    "John"
];
```

---

# 🍕 Real-Life Example 3 — Restaurant

```javascript
let menu = [
    "Pizza",
    "Burger",
    "Pasta",
    "Sandwich"
];
```

---

# 🎬 Real-Life Example 4 — Movies

```javascript
let movies = [
    "Inception",
    "Avatar",
    "Spider-Man",
    "Interstellar"
];
```

---

# 🛒 Real-Life Example 5 — Shopping

```javascript
let cart = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Headphones"
];
```

---

# 3. Syntax

```javascript
let arrayName = [
    value1,
    value2,
    value3
];
```

Example:

```javascript
let fruits = [
    "Apple",
    "Mango",
    "Banana"
];
```

---

# 4. Array Rules

## Rule 1

Arrays use **square brackets**.

```javascript
[]
```

✅ Correct

---

## Rule 2

Values are separated by commas.

```javascript
["A", "B", "C"]
```

---

## Rule 3

Arrays can store different data types.

```javascript
let data = [
    "John",
    25,
    true
];
```

Output:

```text
["John", 25, true]
```

---

## Rule 4

An array can also be empty.

```javascript
let cart = [];
```

---

# 5. Accessing Array Elements

Every element has an **index**.

```javascript
let fruits = [
    "Apple",
    "Mango",
    "Banana"
];
```

| Index | Value  |
| ----: | ------ |
|     0 | Apple  |
|     1 | Mango  |
|     2 | Banana |

Remember:

> **JavaScript arrays always start from index 0.**

Access elements like this:

```javascript
console.log(fruits[0]);
```

Output

```text
Apple
```

---

```javascript
console.log(fruits[1]);
```

Output

```text
Mango
```

---

```javascript
console.log(fruits[2]);
```

Output

```text
Banana
```

---

# 🎯 Real-Life Analogy

Imagine a **train**.

```
Engine | Coach 1 | Coach 2 | Coach 3
```

JavaScript numbers the coaches like this:

| Coach   | Index |
| ------- | ----: |
| Engine  |     0 |
| Coach 1 |     1 |
| Coach 2 |     2 |
| Coach 3 |     3 |

To access Coach 2, JavaScript uses its **index**.

Arrays work the same way.

---

# 6. Common Mistakes

### ❌ Mistake 1

Using parentheses.

```javascript
let fruits = ("Apple", "Mango");
```

✅ Correct

```javascript
let fruits = ["Apple", "Mango"];
```

---

### ❌ Mistake 2

Forgetting commas.

```javascript
["Apple" "Mango"]
```

✅ Correct

```javascript
["Apple", "Mango"]
```

---

### ❌ Mistake 3

Wrong index.

```javascript
let fruits = ["Apple", "Mango"];

console.log(fruits[2]);
```

Output

```text
undefined
```

Because only index **0** and **1** exist.

---

# 7. Coding Assignments (10)

Create **one file** named:

**`exampleArrays.js`**

### 1.

Create an array of students.

```javascript
["John", "Rahul", "Priya", "Shagun"]
```

Print the entire array.

---

### 2.

Create an array of fruits.

```javascript
["Apple", "Mango", "Banana", "Orange"]
```

Print the entire array.

---

### 3.

Create an array of bank accounts.

```javascript
["ACC1001", "ACC1002", "ACC1003"]
```

Print the array.

---

### 4.

Create an array of hospital patients.

```javascript
["Rahul", "Amit", "Priya"]
```

---

### 5.

Create an array of products.

```javascript
["Laptop", "Mouse", "Keyboard"]
```

---

### 6.

Create an array of cities.

```javascript
["Delhi", "Mumbai", "Pune"]
```

---

### 7.

Create an array containing different data types.

```javascript
["John", 25, true]
```

---

### 8.

Create an empty array.

Print it.

---

### 9.

Print the **first fruit**.

Expected Output:

```text
Apple
```

---

### 10.

Print the **second student**.

Expected Output:

```text
Rahul
```

---

# 8. Mini Project

Create:

**`shoppingCart.js`**

Store:

```javascript
let cart = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Headphones"
];
```

Print:

```text
Shopping Cart:
Laptop
Mouse
Keyboard
Headphones
```

(Hint: Print each item using its index.)

---

# 9. Interview Questions

## Beginner

1. What is an array?
2. Why do we use arrays?
3. Which brackets are used to create an array?
4. Can an array store multiple values?
5. Can an array store different data types?

---

## Intermediate

6. What is an index in an array?
7. From which index does a JavaScript array start?
8. What is the index of the first element?
9. What happens if we access an index that doesn't exist?
10. Can an array be empty?

---

## Advanced

11. Is an array mutable or immutable?
12. Can arrays contain other arrays?
13. Can arrays contain objects?
14. How do you access the third element?
15. How do you access the last element if you know the array length?

---

## Scenario-Based

16. Why are arrays useful in a shopping website?
17. Why are arrays useful in a hospital system?
18. Give four real-world examples where arrays are used.
19. Why are arrays important in React?
20. Why are arrays important in APIs?

---

# 10. MCQs

### 1.

An array is used to:

A) Store one value

B) Store multiple values

C) Store only numbers

D) Store only strings

---

### 2.

Which brackets are used for arrays?

A) `()`

B) `{}`

C) `[]`

D) `<>`

---

### 3.

What is the first index of an array?

A) 1

B) 0

C) -1

D) 10

---

### 4.

Output?

```javascript
let fruits = ["Apple", "Mango"];
console.log(fruits[1]);
```

A)

```text
Apple
```

B)

```text
Mango
```

C)

```text
undefined
```

D)

```text
Error
```

---

### 5.

Can arrays store different data types?

A) No

B) Yes

---

# 11. Notes (`Arrays.md`)

Add:

```md
# Arrays

- Stores multiple values.
- Uses square brackets [].
- Index starts from 0.
- Values are separated by commas.
- Arrays can store different data types.
- Arrays can be empty.
```

---

# 12. Git Practice

After completing everything:

```bash
git status
git add .
git commit -m "Completed JavaScript Arrays Introduction"
git push
```

---