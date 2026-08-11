Awesome! 🎉 You're doing a fantastic job. Let's continue.

---

# 📚 Module 4 – Arrays

# Topic 11 – `join()` Method

---

# Lesson Flow

1. What is `join()`?
2. Why do we use it?
3. Syntax
4. Different Separators
5. Default Separator
6. Empty String Separator
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

# 1. What is `join()`?

`join()` is an **array method** used to **combine all elements of an array into a single string**.

Unlike `split()`, which converts a string into an array, `join()` converts an array into a string.

---

## Real-Life Example

Suppose you have these fruits:

```text
Apple
Banana
Mango
Orange
```

Using `join()`:

```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.join());
```

Output:

```text
Apple,Banana,Mango,Orange
```

---

# 2. Syntax

```javascript
array.join()
```

OR

```javascript
array.join(separator)
```

---

## Parameter

* **separator** (optional)

This is the text inserted between every element.

---

# 3. Default Separator

If no separator is given:

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join());
```

Output

```text
Apple,Banana,Mango
```

JavaScript automatically uses a **comma (,)**.

---

# 4. Space Separator

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(" "));
```

Output

```text
Apple Banana Mango
```

---

# 5. Hyphen Separator

```javascript
let cities = ["Delhi", "Mumbai", "Pune"];

console.log(cities.join("-"));
```

Output

```text
Delhi-Mumbai-Pune
```

---

# 6. Pipe Separator

```javascript
let products = ["Laptop", "Mouse", "Keyboard"];

console.log(products.join(" | "));
```

Output

```text
Laptop | Mouse | Keyboard
```

---

# 7. Empty String Separator

```javascript
let letters = ["J", "A", "V", "A"];

console.log(letters.join(""));
```

Output

```text
JAVA
```

---

# 8. Return Value

`join()` returns a **string**.

Example:

```javascript
let fruits = ["Apple", "Banana"];

let result = fruits.join(", ");

console.log(typeof result);
```

Output

```text
string
```

---

# 9. Arrays are Immutable

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.join(", ");

console.log(fruits);
```

Output

```text
["Apple", "Banana", "Mango"]
```

The original array does **not** change.

---

# 10. Difference

| `split()`      | `join()`       |
| -------------- | -------------- |
| String ➜ Array | Array ➜ String |
| Returns Array  | Returns String |
| String Method  | Array Method   |

---

# 11. Common Mistakes

## ❌ Mistake 1

Thinking `join()` returns an array.

Wrong:

```javascript
let result = fruits.join();

console.log(typeof result);
```

Output:

```text
string
```

---

## ❌ Mistake 2

Thinking it changes the array.

```javascript
fruits.join("-");

console.log(fruits);
```

Original array remains unchanged.

---

## ❌ Mistake 3

Confusing `join()` and `concat()`.

`join()` combines elements into **one string**.

---

# Real-World Examples

## 🏥 Hospital

Display patient names.

```javascript
patients.join(", ");
```

---

## 🏦 Banking

Display account types.

```javascript
accounts.join(" | ");
```

---

## 🛒 Shopping

Display cart items.

```javascript
cart.join(", ");
```

---

## 🎬 Movies

```javascript
movies.join(" -> ");
```

---

## 🍕

Display food order.

```javascript
foods.join(", ");
```

---

# Coding Assignments (10)

Create **`exampleJoin.js`**

### 1.

Join fruits using the default separator.

---

### 2.

Join students using a space.

---

### 3.

Join cities using `-`.

---

### 4.

Join products using `" | "`.

---

### 5.

Join movies using `" -> "`.

---

### 6.

Join bank accounts using `", "`.

---

### 7.

Join letters:

```javascript
["J", "A", "V", "A"]
```

Expected Output:

```text
JAVA
```

---

### 8.

Join an empty array.

Observe the output.

---

### 9.

Store the result in a variable.

Print:

```javascript
typeof result
```

---

### 10.

Print the original array after calling `join()`.

Verify that it remains unchanged.

---

# Mini Project

Create:

**`shoppingCartReceipt.js`**

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

1. Display original cart.
2. Print:

```text
Receipt:
Laptop, Mouse, Keyboard, Monitor, Headphones
```

Use:

```javascript
join(", ")
```

Expected Output:

```text
Shopping Cart

Laptop
Mouse
Keyboard
Monitor
Headphones

-------------------

Receipt

Laptop, Mouse, Keyboard, Monitor, Headphones
```

---

# Interview Questions

## Beginner

1. What is `join()`?
2. Is it a method or property?
3. What does it return?
4. Syntax of `join()`.
5. What is the default separator?

---

## Intermediate

6. How do you join using a space?
7. How do you join using `-`?
8. Does `join()` modify the original array?
9. Is `join()` mutable or immutable?
10. Can `join()` return an array?

---

## Advanced

11. Difference between `join()` and `split()`.
12. Why is `join()` useful?
13. Why does it return a string?
14. Can it use custom separators?
15. What happens if the separator is an empty string?

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

`join()` is a:

A) Property

B) Method

C) Variable

D) Object

---

### 2.

Output?

```javascript
let arr = ["A", "B", "C"];

console.log(arr.join("-"));
```

A)

```text
ABC
```

B)

```text
A-B-C
```

C)

```text
A,B,C
```

D)

```text
Error
```

---

### 3.

What does `join()` return?

A) Array

B) Object

C) String

D) Boolean

---

### 4.

Does `join()` modify the original array?

A) Yes

B) No

---

### 5.

Which method converts an array into a string?

A) `split()`

B) `join()`

C) `slice()`

D) `splice()`

---

# Notes (`ArrayJoin.md`)

```md
# Array join()

- join() is an array method.
- Converts an array into a string.
- Default separator is a comma (,).
- Supports custom separators.
- Returns a string.
- Does not modify the original array.
```

---

# Git Practice

```bash
git status
git add .
git commit -m "Completed Array join() method"
git push
```

---

## 📌 Memory Trick

Think of a train.

Each coach is an **array element**:

```text
Laptop
Mouse
Keyboard
Monitor
```

`join()` connects all the coaches together using a connector.

Examples:

* `","` → `Laptop,Mouse,Keyboard,Monitor`
* `" | "` → `Laptop | Mouse | Keyboard | Monitor`
* `" "` → `Laptop Mouse Keyboard Monitor`

The **connector** is the **separator**.

---
