Awesome! 🎉

Congratulations on completing the **4 fundamental array methods**:

* ✅ `push()`
* ✅ `pop()`
* ✅ `shift()`
* ✅ `unshift()`

Now we're moving to one of the **most important array methods in JavaScript**.

---

# 📚 Module 4 – Arrays

# Topic 7 – `splice()` Method

---

# Lesson Flow

1. What is `splice()`?
2. Why do we use it?
3. Syntax
4. Remove Elements
5. Add Elements
6. Replace Elements
7. Return Value
8. Mutable or Immutable?
9. Common Mistakes
10. Difference between `splice()` and `slice()`
11. Coding Assignments
12. Mini Project
13. Interview Questions
14. MCQs
15. Notes
16. Git Practice

---

# 1. What is `splice()`?

`splice()` is an **array method** used to:

* ✅ Remove elements
* ✅ Add elements
* ✅ Replace elements

**at any position in an array.**

Unlike `push()` or `pop()`, which only work at the beginning or end, `splice()` can work **anywhere**.

---

## Real-Life Example

Imagine a class:

```text
John
Rahul
Priya
Shagun
Amit
```

Rahul leaves the class.

The new list becomes:

```text
John
Priya
Shagun
Amit
```

That's exactly what `splice()` can do.

---

# 2. Syntax

```javascript
array.splice(startIndex, deleteCount);
```

OR

```javascript
array.splice(startIndex, deleteCount, item1, item2, ...);
```

Parameters:

* **startIndex** → Where to start.
* **deleteCount** → How many elements to remove.
* **item1, item2...** → Optional elements to insert.

---

# 3. Removing Elements

Example

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];

fruits.splice(1, 1);

console.log(fruits);
```

Output

```text
[
"Apple",
"Mango",
"Orange"
]
```

Explanation:

Index:

```text
0 Apple
1 Banana
2 Mango
3 Orange
```

Start at index **1**

Remove **1** element.

So Banana disappears.

---

## Remove Multiple Elements

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];

fruits.splice(1,2);

console.log(fruits);
```

Output

```text
[
"Apple",
"Orange"
]
```

Removed:

* Banana
* Mango

---

# 4. Adding Elements

Want to insert something without deleting?

Use delete count = **0**

```javascript
let fruits = [
    "Apple",
    "Orange"
];

fruits.splice(1,0,"Banana");

console.log(fruits);
```

Output

```text
[
"Apple",
"Banana",
"Orange"
]
```

Explanation

Start at index 1.

Delete nothing.

Insert Banana.

---

# 5. Replacing Elements

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Orange"
];

fruits.splice(1,1,"Mango");

console.log(fruits);
```

Output

```text
[
"Apple",
"Mango",
"Orange"
]
```

Banana is removed.

Mango is inserted.

---

## Replace Multiple Elements

```javascript
let cities = [
    "Delhi",
    "Mumbai",
    "Pune",
    "Chennai"
];

cities.splice(1,2,"Bangalore","Hyderabad");

console.log(cities);
```

Output

```text
[
"Delhi",
"Bangalore",
"Hyderabad",
"Chennai"
]
```

---

# 6. Return Value

Many people forget this.

`splice()` returns an **array containing the removed elements**.

Example

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Mango"
];

let removed = fruits.splice(1,1);

console.log(removed);
```

Output

```text
[
"Banana"
]
```

Original array

```text
[
"Apple",
"Mango"
]
```

---

# 7. Arrays are Mutable

```javascript
let arr = [1,2,3];

arr.splice(1,1);

console.log(arr);
```

Output

```text
[1,3]
```

The original array changes.

So `splice()` is **mutable**.

---

# 8. Common Mistakes

### ❌ Mistake 1

```javascript
arr.splice(2);
```

This removes everything from index 2 onwards.

Sometimes that's intended—but beginners often do it by accident.

---

### ❌ Mistake 2

Thinking it returns the modified array.

No.

It returns the **removed elements**.

---

### ❌ Mistake 3

Confusing `splice()` with `slice()`.

Remember:

| splice                 | slice                         |
| ---------------------- | ----------------------------- |
| Changes original array | Doesn't change original array |
| Can add/remove/replace | Only copies/extracts          |

---

# Real-World Examples

## 🏥 Hospital

Remove discharged patient.

```javascript
patients.splice(2,1);
```

---

## 🏦 Banking

Replace a closed account.

```javascript
accounts.splice(1,1,"ACC2001");
```

---

## 🛒 Shopping

Remove unavailable product.

```javascript
products.splice(3,1);
```

---

## 🎬 Movie Booking

Replace cancelled seat.

```javascript
seats.splice(2,1,"A5");
```

---

## 🍕

Insert priority order.

```javascript
orders.splice(0,0,"VIP Order");
```

---

# Difference

| Method    | Purpose                         |
| --------- | ------------------------------- |
| push()    | Add at end                      |
| pop()     | Remove from end                 |
| shift()   | Remove from beginning           |
| unshift() | Add at beginning                |
| splice()  | Add, remove or replace anywhere |

---

# Coding Assignments (10)

Create **`exampleSplice.js`**

### 1.

Create a fruits array.

Remove `"Banana"`.

---

### 2.

Create a students array.

Remove `"Jane"`.

---

### 3.

Create a cities array.

Insert `"Delhi"` at index 1.

---

### 4.

Replace `"Laptop"` with `"Gaming Laptop"`.

---

### 5.

Remove two movies.

---

### 6.

Replace `"Savings"` with `"Current"`.

---

### 7.

Store removed patient in a variable.

Print:

```text
Removed Patient: Rahul
```

---

### 8.

Use `splice()` with `deleteCount = 0`.

Observe the output.

---

### 9.

Replace two products.

---

### 10.

Remove all elements from index 2 onward.

---

# Mini Project

Create:

**`hospitalPatientManagement.js`**

Initial patients:

```javascript
[
"Rahul",
"John",
"Priya",
"Amit",
"Shagun"
]
```

Tasks:

1. Remove John.
2. Add Emergency Patient at John's position.
3. Store removed patient.
4. Print removed patient.
5. Print updated list.
6. Print total patients.

Expected Output

```text
Initial Patients

Rahul
John
Priya
Amit
Shagun

------------------

Removed Patient:
John

------------------

Updated Patients

Rahul
Emergency Patient
Priya
Amit
Shagun

------------------

Total Patients: 5
```

---

# Interview Questions

## Beginner

1. What is `splice()`?
2. Is `splice()` a method or property?
3. Can `splice()` remove elements?
4. Can `splice()` add elements?
5. Can `splice()` replace elements?

---

## Intermediate

6. Syntax of `splice()`.
7. What does `startIndex` mean?
8. What does `deleteCount` mean?
9. What happens when `deleteCount` is 0?
10. What does `splice()` return?

---

## Advanced

11. Is `splice()` mutable or immutable?
12. Difference between `splice()` and `slice()`.
13. Why is `splice()` useful?
14. Can it insert multiple elements?
15. Can it remove multiple elements?

---

## Scenario-Based

16. Hospital example.
17. Shopping website example.
18. Banking example.
19. React example.
20. API example.

---

# MCQs

### 1.

`splice()` is:

A) Property

B) Method

C) Variable

D) Object

---

### 2.

Which method can add, remove, and replace elements?

A) `pop()`

B) `splice()`

C) `shift()`

D) `push()`

---

### 3.

What does this print?

```javascript
let arr = ["A","B","C"];
arr.splice(1,1);
console.log(arr);
```

A)

```text
["A","C"]
```

B)

```text
["A","B"]
```

C)

```text
["B","C"]
```

D)

```text
["A","B","C"]
```

---

### 4.

`splice()` returns:

A) Boolean

B) Modified array

C) Removed elements

D) Length

---

### 5.

Is `splice()` mutable?

A) No

B) Yes

---

# Notes (`Splice.md`)

```md
# splice()

- splice() is an array method.
- It can remove elements.
- It can add elements.
- It can replace elements.
- It modifies the original array.
- It returns an array of removed elements.
- deleteCount = 0 means insert without removing.
```

---

# Git Practice

```bash
git status
git add .
git commit -m "Completed Array splice() method"
git push
```

---

# 📌 Important Interview Tip

Many developers confuse `splice()` and `slice()`. Keep this simple rule in mind:

| `splice()`                     | `slice()`                           |
| ------------------------------ | ----------------------------------- |
| ✂️ **Cuts** the original array | 📋 **Copies** part of the array     |
| Changes the original array     | Leaves the original array unchanged |
| Can add, remove, and replace   | Only extracts elements              |

A simple memory trick:

* **sp**lice = **sp**ecial editing (add, remove, replace)
* **slice** = take a slice of cake 🍰 (copy a portion without changing the whole cake)


Revision Tip

Notice the difference between the two similarly named methods:

Feature	splice()	slice()
Changes original array	✅ Yes	❌ No
Returns	Removed elements	Copied elements
Add elements	✅ Yes	❌ No
Remove elements	✅ Yes	❌ No (only copies)
Replace elements	✅ Yes	❌ No

Memory Trick:

splice() = Edit ✂️ (add, remove, replace)
slice() = Copy a slice 🍰 (take a portion, leave the original untouched)

This distinction is asked very frequently in JavaScript interviews.