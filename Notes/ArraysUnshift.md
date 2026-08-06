Awesome! 🎉

You've now learned:

* ✅ `push()` → Add at the end
* ✅ `pop()` → Remove from the end
* ✅ `shift()` → Remove from the beginning

Now let's learn the **4th basic array operation**.

---

# 📚 Module 4 — Arrays

# Topic 6 — `unshift()` Method

---

# Lesson Flow

1. What is `unshift()`?
2. Why do we use it?
3. Syntax
4. Real-Life Examples
5. Return Value
6. Important Points
7. Common Mistakes
8. Difference between `push()`, `pop()`, `shift()`, and `unshift()`
9. Coding Assignments
10. Mini Project
11. Interview Questions
12. MCQs
13. Notes
14. Git Practice

---

# 1. What is `unshift()`?

The **`unshift()`** method adds one or more elements **at the beginning** of an array.

Think of it as:

> **"A VIP customer joins the front of the queue."**

---

Example

```javascript
let fruits = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits);
```

Output

```text
["Apple", "Banana", "Mango"]
```

Notice:

`Apple` is added **at the beginning**.

---

# 2. Why do we use `unshift()`?

Imagine a hospital emergency.

Normal queue:

```text
Rahul
John
Priya
```

An emergency patient arrives.

New queue:

```text
Emergency Patient
Rahul
John
Priya
```

The emergency patient is added **at the front**.

This is exactly what `unshift()` does.

---

# 🏥 Real-Life Example 1 — Hospital

```javascript
let patients = [
    "Rahul",
    "John",
    "Priya"
];

patients.unshift("Emergency Patient");

console.log(patients);
```

Output

```text
[
"Emergency Patient",
"Rahul",
"John",
"Priya"
]
```

---

# 🏦 Real-Life Example 2 — Banking

```javascript
let customers = [
    "Rahul",
    "John"
];

customers.unshift("Senior Citizen");

console.log(customers);
```

Output

```text
[
"Senior Citizen",
"Rahul",
"John"
]
```

---

# 🍕 Real-Life Example 3 — Restaurant

```javascript
let orders = [
    "Burger",
    "Pizza"
];

orders.unshift("VIP Order");

console.log(orders);
```

Output

```text
[
"VIP Order",
"Burger",
"Pizza"
]
```

---

# 🎬 Real-Life Example 4 — Movie Booking

```javascript
let seats = [
    "A2",
    "A3"
];

seats.unshift("A1");

console.log(seats);
```

Output

```text
["A1", "A2", "A3"]
```

---

# 🛒 Real-Life Example 5 — Shopping

```javascript
let cart = [
    "Mouse",
    "Keyboard"
];

cart.unshift("Laptop");

console.log(cart);
```

Output

```text
[
"Laptop",
"Mouse",
"Keyboard"
]
```

---

# 3. Syntax

```javascript
arrayName.unshift(element);
```

Example

```javascript
let cities = [
    "Mumbai",
    "Pune"
];

cities.unshift("Delhi");

console.log(cities);
```

Output

```text
["Delhi", "Mumbai", "Pune"]
```

---

# 4. `unshift()` Returns Something Important

Unlike `shift()`...

`unshift()` returns the **new length of the array**.

Example

```javascript
let fruits = [
    "Banana",
    "Mango"
];

let result = fruits.unshift("Apple");

console.log(result);
```

Output

```text
3
```

Array becomes

```text
[
"Apple",
"Banana",
"Mango"
]
```

---

# 5. Multiple Elements

You can add multiple elements.

```javascript
let numbers = [3,4];

numbers.unshift(1,2);

console.log(numbers);
```

Output

```text
[1,2,3,4]
```

---

# 6. Arrays are Mutable

```javascript
let fruits = [
    "Banana",
    "Mango"
];

fruits.unshift("Apple");

console.log(fruits);
```

Output

```text
[
"Apple",
"Banana",
"Mango"
]
```

The original array changes.

---

# 7. Common Mistakes

### ❌ Mistake 1

```javascript
arr.unshift;
```

Wrong.

Correct

```javascript
arr.unshift();
```

---

### ❌ Mistake 2

Thinking it returns the added element.

No.

It returns the **new array length**.

---

### ❌ Mistake 3

Thinking it adds at the end.

No.

It always adds at the **beginning**.

---

# Difference Between the Four Methods

| Method      | Action | Position  | Returns         |
| ----------- | ------ | --------- | --------------- |
| `push()`    | Add    | End       | New length      |
| `pop()`     | Remove | End       | Removed element |
| `shift()`   | Remove | Beginning | Removed element |
| `unshift()` | Add    | Beginning | New length      |

---

# Easy Memory Trick

Imagine a line of people:

```text
Rahul → John → Priya
```

`push("Amit")`

```text
Rahul → John → Priya → Amit
```

`pop()`

```text
Rahul → John
```

`shift()`

```text
John → Priya
```

`unshift("VIP")`

```text
VIP → Rahul → John → Priya
```

---

# 8. Coding Assignments (10)

Create:

**`exampleUnshift.js`**

### 1.

Create a fruits array.

Add `"Apple"` at the beginning.

Print the array.

---

### 2.

Create a students array.

Add `"Shagun"` at the beginning.

---

### 3.

Create a cities array.

Add `"Delhi"` at the beginning.

---

### 4.

Create a hospital patients array.

Add `"Emergency Patient"` at the beginning.

---

### 5.

Create a products array.

Add `"Laptop"` at the beginning.

---

### 6.

Create a movies array.

Add `"Interstellar"` at the beginning.

---

### 7.

Create a bank accounts array.

Add `"VIP-0001"` at the beginning.

---

### 8.

Create an empty array.

Use `unshift("JavaScript")`.

Print the array and the returned value.

Expected Output

```text
Array: JavaScript
Returned Length: 1
```

---

### 9.

Store the returned value in a variable.

Example

```javascript
let length = fruits.unshift("Apple");

console.log(`New Length: ${length}`);
```

---

### 10.

Add **two elements** at the beginning.

Example

```javascript
fruits.unshift("Kiwi", "Apple");
```

Expected Output

```text
["Kiwi", "Apple", "Banana", "Mango"]
```

---

# 9. Mini Project

Create:

**`hospitalEmergencyQueue.js`**

```javascript
let patients = [
    "Rahul",
    "John",
    "Priya",
    "Amit"
];
```

An emergency patient arrives.

Add `"Emergency Patient"` at the beginning.

Print:

```text
Initial Queue

Rahul
John
Priya
Amit

------------------

Updated Queue

Emergency Patient
Rahul
John
Priya
Amit

------------------

Total Patients: 5
```

---

# 10. Interview Questions

## Beginner

1. What is `unshift()`?
2. Is `unshift()` a method or property?
3. Where does `unshift()` add an element?
4. Does `unshift()` modify the original array?
5. What does `unshift()` return?

---

## Intermediate

6. What is the syntax of `unshift()`?
7. Can `unshift()` add multiple elements?
8. Is `unshift()` mutable or immutable?
9. Can `unshift()` be used on an empty array?
10. Can we store its return value?

---

## Advanced

11. Difference between `unshift()` and `push()`.
12. Difference between `unshift()` and `shift()`.
13. Why is `unshift()` useful?
14. Can arrays containing different data types use `unshift()`?
15. What happens to the array length after calling `unshift()`?

---

## Scenario-Based

16. Why is `unshift()` useful in a hospital?
17. Why is `unshift()` useful in banking?
18. Give four real-world examples where `unshift()` is used.
19. Why is `unshift()` useful in React?
20. Why is `unshift()` useful when processing API data?

---

# 11. MCQs

### 1.

`unshift()` is a:

A) Property

B) Method

C) Variable

D) Operator

---

### 2.

`unshift()` adds an element at the:

A) End

B) Beginning

C) Middle

D) Random position

---

### 3.

What is the output?

```javascript
let arr = ["B", "C"];

arr.unshift("A");

console.log(arr);
```

A)

```text
["A", "B", "C"]
```

B)

```text
["B", "C", "A"]
```

C)

```text
["A"]
```

D)

```text
Error
```

---

### 4.

What does `unshift()` return?

A) Removed element

B) Updated array

C) New array length

D) Boolean

---

### 5.

Can `unshift()` add multiple elements?

A) No

B) Yes

C) Only in Node.js

D) Only in React

---

# 12. Notes (`Unshift.md`)

```md
# unshift()

- unshift() adds one or more elements at the beginning of an array.
- It is an array method.
- It modifies the original array.
- It returns the new length of the array.
- It can add multiple elements at once.
```

---

# 13. Git Practice

After completing everything:

```bash
git status
git add .
git commit -m "Completed Array unshift() method"
git push
```
---

## 🌟 Pro Tip


| Method      | Adds/Removes | Beginning/End | Returns         |
| ----------- | ------------ | ------------- | --------------- |
| `push()`    | Adds         | End           | New length      |
| `pop()`     | Removes      | End           | Removed element |
| `shift()`   | Removes      | Beginning     | Removed element |
| `unshift()` | Adds         | Beginning     | New length      |
