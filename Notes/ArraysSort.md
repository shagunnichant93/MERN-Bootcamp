Awesome! 🎉 You're doing great. Today we'll cover one of the **most important JavaScript array methods**. It is asked very frequently in interviews.

---

# 📚 Module 4 – Arrays

# Topic 14 – `sort()` Method

---

# Lesson Flow

1. What is `sort()`?
2. Why do we use it?
3. Syntax
4. Return Value
5. Mutable or Immutable?
6. Sorting Strings
7. Sorting Numbers (Important)
8. Ascending & Descending Order
9. Common Mistakes
10. Difference between `sort()` and `reverse()`
11. Real-World Examples
12. Coding Assignments
13. Mini Project
14. Interview Questions
15. MCQs
16. Notes
17. Git Practice

---

# 1. What is `sort()`?

`sort()` is an **array method** used to **arrange the elements of an array in a specific order**.

By default, it sorts **strings alphabetically**.

---

## Example

```javascript
let fruits = ["Banana", "Apple", "Mango"];

fruits.sort();

console.log(fruits);
```

### Output

```text
["Apple", "Banana", "Mango"]
```

---

# 2. Why do we use it?

We use `sort()` whenever we want data in a meaningful order.

Examples:

* Products A → Z
* Customer names alphabetically
* Students alphabetically
* Cities alphabetically
* Employees alphabetically

---

# 3. Syntax

```javascript
array.sort()
```

For numbers:

```javascript
array.sort((a, b) => a - b)
```

---

# 4. Return Value

It returns the **same array after sorting**.

```javascript
let numbers = [3,1,2];

let result = numbers.sort();

console.log(result);
```

Output

```text
[1,2,3]
```

(⚠️ This looks correct here, but see the "Sorting Numbers" section below.)

---

# 5. Arrays are Mutable

Like:

* push()
* pop()
* shift()
* unshift()
* splice()
* reverse()

`sort()` **changes the original array**.

```javascript
let fruits = ["Banana","Apple","Mango"];

fruits.sort();

console.log(fruits);
```

Output

```text
Apple
Banana
Mango
```

---

# 6. Sorting Strings

```javascript
let students = ["Rahul","Amit","John","Priya"];

students.sort();

console.log(students);
```

Output

```text
Amit
John
Priya
Rahul
```

Works perfectly.

---

# 7. Sorting Numbers (VERY IMPORTANT)

Most beginners expect:

```javascript
let numbers = [10,2,5,1];

numbers.sort();

console.log(numbers);
```

Expected

```text
1
2
5
10
```

But JavaScript gives:

```text
1
10
2
5
```

### Why?

By default, `sort()` converts elements to **strings** and compares them alphabetically.

So it compares:

```text
"1"
"10"
"2"
"5"
```

Alphabetically:

```text
1
10
2
5
```

---

## Correct Way (Ascending)

```javascript
let numbers = [10,2,5,1];

numbers.sort((a,b)=>a-b);

console.log(numbers);
```

Output

```text
1
2
5
10
```

---

## Descending

```javascript
numbers.sort((a,b)=>b-a);
```

Output

```text
10
5
2
1
```

---

# 8. Ascending vs Descending

Ascending

```javascript
(a,b)=>a-b
```

Descending

```javascript
(a,b)=>b-a
```

Remember this. It is a very common interview question.

---

# 9. Common Mistakes

## ❌ Mistake 1

```javascript
numbers.sort();
```

Thinking this sorts numbers correctly.

Wrong.

---

## ❌ Mistake 2

Thinking `sort()` creates a new array.

It does **not**.

It modifies the original array.

---

# 10. Difference

| `sort()`                 | `reverse()`         |
| ------------------------ | ------------------- |
| Arranges elements        | Flips current order |
| Mutable                  | Mutable             |
| Can use compare function | No compare function |

---

# 11. Real-World Examples

## 🛒 Shopping

Sort products A-Z.

```javascript
products.sort();
```

---

## 🏥 Hospital

Sort patient names alphabetically.

```javascript
patients.sort();
```

---

## 🏦 Banking

Sort transactions by amount.

```javascript
amounts.sort((a,b)=>a-b);
```

---

## 🎬 Movies

Sort movie names.

```javascript
movies.sort();
```

---

## 👨‍🎓 Student Portal

Sort student names.

```javascript
students.sort();
```

---

# Coding Assignments (10)

Create:

## `exampleSort.js`

### 1.

Sort fruits alphabetically.

---

### 2.

Sort students.

---

### 3.

Sort cities.

---

### 4.

Sort movies.

---

### 5.

Sort products.

---

### 6.

Sort bank accounts.

---

### 7.

Sort

```javascript
[40,10,5,100,2]
```

using only

```javascript
sort()
```

Observe the output.

---

### 8.

Now sort the same array using

```javascript
sort((a,b)=>a-b)
```

Observe the difference.

---

### 9.

Now sort descending.

```javascript
sort((a,b)=>b-a)
```

---

### 10.

Show that `sort()` changes the original array.

---

# Mini Project

Create:

## `studentRankingSystem.js`

Marks

```javascript
[88,95,72,100,67,91]
```

Tasks

1. Print original marks.
2. Sort ascending.
3. Print ascending.
4. Sort descending.
5. Print descending.

Expected Output

```text
Original Marks

88
95
72
100
67
91

--------------------

Ascending

67
72
88
91
95
100

--------------------

Descending

100
95
91
88
72
67
```

---

# Interview Questions

## Beginner

1. What is `sort()`?
2. Is it a method or property?
3. What does it do?
4. Syntax of `sort()`.
5. Is compare function mandatory?

---

## Intermediate

6. What does `sort()` return?
7. Is `sort()` mutable?
8. Why doesn't `sort()` work correctly for numbers?
9. How do you sort numbers correctly?
10. How do you sort descending?

---

## Advanced

11. Difference between `sort()` and `reverse()`.
12. Difference between `sort()` and `slice()`.
13. Why is `sort()` mutable?
14. Can `sort()` be chained?
15. What happens if you call `sort()` twice?

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

`sort()` is a:

A) Property

B) Method

C) Variable

D) Object

---

### 2.

Default sorting is:

A) Numerical

B) Alphabetical (lexicographical)

C) Random

D) Reverse

---

### 3.

Output?

```javascript
let arr = [10,2,5];

arr.sort();

console.log(arr);
```

A)

```text
2 5 10
```

B)

```text
10 2 5
```

C)

```text
10 5 2
```

D)

```text
2 10 5
```

---

### 4.

Correct ascending numeric sort:

A)

```javascript
sort((a,b)=>b-a)
```

B)

```javascript
sort((a,b)=>a-b)
```

C)

```javascript
sort()
```

D)

```javascript
reverse()
```

---

### 5.

Is `sort()` mutable?

A) No

B) Yes

---

# Notes (`ArraySort.md`)

```md
# Array sort()

- sort() is an array method.
- Sorts array elements.
- Mutable.
- Returns the same array.
- Default sorting is alphabetical.
- Numeric sorting needs a compare function.
- Ascending: sort((a,b)=>a-b)
- Descending: sort((a,b)=>b-a)
```

---

# Git Practice

```bash
git status
git add .
git commit -m "Completed Array sort() method"
git push
```

---

## 💡 Memory Trick

Think of a bookshelf:

Books:

```text
Banana
Apple
Mango
```

After `sort()`:

```text
Apple
Banana
Mango
```

Now think of numbers:

```text
10
2
5
```

JavaScript sees them as:

```text
"10"
"2"
"5"
```

So alphabetical sorting becomes:

```text
10
2
5
```

That's why for numbers you should always remember:

* **Ascending:** `sort((a,b)=>a-b)`
* **Descending:** `sort((a,b)=>b-a)`

---