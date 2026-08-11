Awesome! 🎉

You're doing really well. We have now completed **9 Array topics**.

Today we'll learn another very commonly used method.

---

# 📚 Module 4 – Arrays

# Topic 10 – `includes()` Method (Arrays)

> **Note:** We already learned `includes()` for **strings** in Module 3.
>
> Now we'll learn **`includes()` for arrays**.
>
> The idea is similar, but instead of checking text inside a string, it checks **whether an element exists in an array**.

---

# Lesson Flow

1. What is `includes()`?
2. Why do we use it?
3. Syntax
4. Checking if an Element Exists
5. Searching from a Specific Index
6. Return Value
7. Mutable or Immutable?
8. Difference between `includes()` and `indexOf()`
9. Common Mistakes
10. Real-World Examples
11. Coding Assignments
12. Mini Project
13. Interview Questions
14. MCQs
15. Notes
16. Git Practice

---

# 1. What is `includes()`?

`includes()` is an **array method** used to check **whether an array contains a specific element**.

It returns:

* `true` → if the element exists.
* `false` → if the element does not exist.

---

## Real-Life Example

Shopping cart:

```text
Laptop
Mouse
Keyboard
Monitor
Headphones
```

Want to know if **Keyboard** is in the cart?

```javascript
cart.includes("Keyboard");
```

Output

```text
true
```

---

# 2. Syntax

```javascript
array.includes(element)
```

OR

```javascript
array.includes(element, startIndex)
```

---

## Parameters

* **element** → Item to search.
* **startIndex** (optional) → Search starts from this index.

---

# 3. Basic Example

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];

console.log(fruits.includes("Mango"));
```

Output

```text
true
```

---

Another example

```javascript
console.log(fruits.includes("Grapes"));
```

Output

```text
false
```

---

# 4. Searching from a Specific Index

```javascript
let numbers = [
    10,
    20,
    30,
    20,
    40
];

console.log(numbers.includes(20,2));
```

Output

```text
true
```

Explanation:

Search starts from index **2**.

Array:

```text
0 → 10
1 → 20
2 → 30
3 → 20
4 → 40
```

It ignores the first `20` and finds the second one.

---

Another example

```javascript
console.log(numbers.includes(20,4));
```

Output

```text
false
```

Because search starts at index **4**, where only `40` remains.

---

# 5. Return Value

`includes()` always returns a **boolean**.

```text
true
```

or

```text
false
```

Never an index.

---

# 6. Arrays are Immutable

```javascript
let arr = [
1,
2,
3
];

arr.includes(2);

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

Original array remains unchanged.

---

# 7. Difference

| `includes()`             | `indexOf()`               |
| ------------------------ | ------------------------- |
| Returns `true`/`false`   | Returns index             |
| Used for existence check | Used for finding position |
| Immutable                | Immutable                 |

---

# 8. Common Mistakes

## ❌ Mistake 1

Expecting an index.

Wrong

```javascript
arr.includes("Apple");
```

Returns

```text
true
```

NOT

```text
0
```

---

## ❌ Mistake 2

Confusing it with `indexOf()`.

Remember:

```javascript
arr.includes("Apple");
```

↓

```text
true
```

```javascript
arr.indexOf("Apple");
```

↓

```text
0
```

---

## ❌ Mistake 3

Ignoring `startIndex`.

```javascript
arr.includes("Apple",3);
```

Search starts only from index **3**.

---

# Real-World Examples

## 🏥 Hospital

```javascript
patients.includes("Rahul");
```

---

## 🏦 Banking

```javascript
accounts.includes("Savings");
```

---

## 🛒 Shopping

```javascript
cart.includes("Laptop");
```

---

## 🎬 Movies

```javascript
movies.includes("Inception");
```

---

## 🍕

```javascript
orders.includes("Pizza");
```

---

# Coding Assignments (10)

Create **`exampleIncludesArray.js`**

### 1.

Check if `"Banana"` exists in fruits.

---

### 2.

Check if `"John"` exists in students.

---

### 3.

Check if `"Delhi"` exists in cities.

---

### 4.

Check if `"Laptop"` exists in products.

---

### 5.

Check if `"SpiderMan"` exists in movies.

---

### 6.

Check if `"Savings"` exists in bank accounts.

---

### 7.

Check if `"Java"` exists in languages.

Print the result.

---

### 8.

Check if `"Python"` exists in:

```javascript
[
"JavaScript",
"C++",
"Java"
]
```

Observe output.

---

### 9.

Use:

```javascript
let numbers = [10,20,30,20,40];

console.log(numbers.includes(20,2));
```

Observe output.

---

### 10.

Check if `"Charlie"` exists in patients.

If found print

```text
Patient Found
```

Else print

```text
Patient Not Found
```

---

# Mini Project

Create:

**`shoppingCartAvailability.js`**

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

1. Check `"Keyboard"`
2. If found print

```text
Product Available
```

3. Check `"Printer"`
4. If not found print

```text
Product Not Available
```

Expected Output

```text
Shopping Cart

Laptop
Mouse
Keyboard
Monitor
Headphones

-------------------

Keyboard Available

-------------------

Printer Not Available
```

---

# Interview Questions

## Beginner

1. What is `includes()`?
2. Is it a method or property?
3. What does it return?
4. Syntax of `includes()`.
5. What happens if the element is not found?

---

## Intermediate

6. What does `includes("Mango")` return?
7. What does `includes("Mango",2)` mean?
8. Does `includes()` modify the original array?
9. Is `includes()` mutable or immutable?
10. Can it return an index?

---

## Advanced

11. Difference between `includes()` and `indexOf()`.
12. Why is `includes()` useful?
13. Why does it return `true` or `false`?
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

`includes()` is a:

A) Property

B) Method

C) Variable

D) Object

---

### 2.

Output?

```javascript
let arr = ["A","B","C"];

console.log(arr.includes("B"));
```

A)

```text
0
```

B)

```text
true
```

C)

```text
1
```

D)

```text
false
```

---

### 3.

What does `includes()` return?

A) Index

B) Boolean

C) Array

D) String

---

### 4.

Does `includes()` modify the original array?

A) Yes

B) No

---

### 5.

Which method returns an index?

A) `includes()`

B) `indexOf()`

C) Both

D) Neither

---

# Notes (`ArrayIncludes.md`)

```md
# Array includes()

- includes() is an array method.
- Used to check whether an element exists.
- Returns true or false.
- Does not modify the original array.
- Supports an optional startIndex.
- Returns boolean, not an index.
```

---

# Git Practice

```bash
git status
git add .
git commit -m "Completed Array includes() method"
git push
```

---

## 📌 Memory Trick

Imagine you're checking a guest list for a party.

You ask:

> **"Is Rahul on the guest list?"**

You don't ask **where** Rahul is sitting.

You only want:

* ✅ **Yes (`true`)**
* ❌ **No (`false`)**

That's exactly what `includes()` does.

---