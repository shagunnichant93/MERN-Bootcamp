Awesome! 🎉

You've now completed **11 Array topics**. The next topic is one of the easiest and most commonly asked in interviews.

---

# 📚 Module 4 – Arrays

# Topic 12 – `reverse()` Method

---

# Lesson Flow

1. What is `reverse()`?
2. Why do we use it?
3. Syntax
4. Return Value
5. Mutable or Immutable?
6. Common Mistakes
7. Difference between `reverse()` and `sort()`
8. Real-World Examples
9. Coding Assignments
10. Mini Project
11. Interview Questions
12. MCQs
13. Notes
14. Git Practice

---

# 1. What is `reverse()`?

`reverse()` is an **array method** used to **reverse the order of elements in an array**.

---

## Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.reverse());
```

Output

```text
["Mango", "Banana", "Apple"]
```

---

# 2. Why do we use it?

Whenever we want to display elements in the **opposite order**.

Examples:

* Latest notifications first
* Latest transactions first
* Latest chat messages first
* Recent orders first

---

# 3. Syntax

```javascript
array.reverse()
```

No parameters.

---

# 4. Return Value

`reverse()` returns the **same array after reversing it**.

Example

```javascript
let numbers = [1,2,3];

let result = numbers.reverse();

console.log(result);
```

Output

```text
[3,2,1]
```

---

# 5. Arrays are Mutable

This is the most important point.

```javascript
let fruits = ["Apple","Banana","Mango"];

fruits.reverse();

console.log(fruits);
```

Output

```text
["Mango","Banana","Apple"]
```

The **original array changes**.

Unlike:

* `slice()`
* `join()`
* `includes()`
* `indexOf()`

`reverse()` **modifies the original array**.

---

# 6. Common Mistakes

## ❌ Mistake 1

Thinking `reverse()` creates a new array.

Wrong thinking:

```javascript
arr.reverse();
```

Original array **does change**.

---

## ❌ Mistake 2

Confusing `reverse()` with sorting.

Original

```text
3 1 2
```

Reverse

```text
2 1 3
```

It simply flips the order.

---

Sorting gives

```text
1 2 3
```

Different operations.

---

# 7. Difference

| `reverse()`            | `sort()`                      |
| ---------------------- | ----------------------------- |
| Reverses current order | Arranges elements             |
| Mutable                | Mutable                       |
| No parameters needed   | Can accept a compare function |

---

# 8. Real-World Examples

## 🏥 Hospital

Show latest admitted patient first.

```javascript
patients.reverse();
```

---

## 🏦 Banking

Latest transaction first.

```javascript
transactions.reverse();
```

---

## 🛒 Shopping

Recent orders first.

```javascript
orders.reverse();
```

---

## 🎬 Movies

Reverse watch history.

```javascript
movies.reverse();
```

---

## 📱 Chat App

Newest message first.

```javascript
messages.reverse();
```

---

# Coding Assignments (10)

Create **`exampleReverse.js`**

### 1.

Reverse fruits.

---

### 2.

Reverse students.

---

### 3.

Reverse cities.

---

### 4.

Reverse products.

---

### 5.

Reverse movies.

---

### 6.

Reverse bank accounts.

---

### 7.

Reverse

```javascript
[1,2,3,4,5]
```

---

### 8.

Reverse

```javascript
["A"]
```

Observe output.

---

### 9.

Reverse an empty array.

Observe output.

---

### 10.

Print the array before and after `reverse()`.

Verify that the original array changes.

---

# Mini Project

Create:

**`bankTransactionReverse.js`**

Transactions

```javascript
[
"Deposit",
"Withdraw",
"Transfer",
"Recharge",
"Loan EMI"
]
```

Tasks:

1. Print original transactions.
2. Reverse the array.
3. Print recent transactions first.

Expected Output

```text
Original Transactions

Deposit
Withdraw
Transfer
Recharge
Loan EMI

-----------------------

Recent Transactions

Loan EMI
Recharge
Transfer
Withdraw
Deposit
```

---

# Interview Questions

## Beginner

1. What is `reverse()`?
2. Is it a method or property?
3. What does it do?
4. Syntax of `reverse()`.
5. Does it take parameters?

---

## Intermediate

6. What does `reverse()` return?
7. Does it modify the original array?
8. Is `reverse()` mutable or immutable?
9. Can it reverse an empty array?
10. Can it reverse a single-element array?

---

## Advanced

11. Difference between `reverse()` and `sort()`.
12. Why is `reverse()` mutable?
13. Why is it useful?
14. Can it be chained with other methods?
15. What happens if you call `reverse()` twice?

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

`reverse()` is a:

A) Property

B) Method

C) Variable

D) Object

---

### 2.

Output?

```javascript
let arr = [1,2,3];

console.log(arr.reverse());
```

A)

```text
1,2,3
```

B)

```text
3,2,1
```

C)

```text
2,1,3
```

D)

```text
Error
```

---

### 3.

Does `reverse()` modify the original array?

A) Yes

B) No

---

### 4.

Is `reverse()` mutable?

A) Yes

B) No

---

### 5.

Calling `reverse()` twice results in:

A) Empty array

B) Original order

C) Sorted array

D) Error

---

# Notes (`ArrayReverse.md`)

```md
# Array reverse()

- reverse() is an array method.
- Reverses the order of array elements.
- Returns the same array.
- Modifies the original array.
- Mutable method.
- Takes no parameters.
```

---

# Git Practice

```bash
git status
git add .
git commit -m "Completed Array reverse() method"
git push
```

---

## 📌 Memory Trick

Imagine a queue:

```text
Rahul
John
Priya
Amit
```

Calling `reverse()` flips the queue:

```text
Amit
Priya
John
Rahul
```

It doesn't sort alphabetically—it simply **reverses the current order**.
