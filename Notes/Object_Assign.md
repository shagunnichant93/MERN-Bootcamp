# 📘 JavaScript Objects — `Object.assign()`

Now we move to the next Object topic: **`Object.assign()`**.

This one is important because it teaches you how to **copy properties from one object to another** and how to **merge objects**.

---

# 1. What is `Object.assign()`?

`Object.assign()` is a **method used to copy properties from one or more objects into another object**.

Example:

```javascript
let student = {
    name: "Shagun",
    age: 25
};

let details = {};

Object.assign(details, student);

console.log(details);
```

Output:

```text
{ name: 'Shagun', age: 25 }
```

So:

```text
student
   ↓
name → Shagun
age  → 25
   ↓
Object.assign()
   ↓
details
   ↓
name → Shagun
age  → 25
```

---

# 🧒 2. Explain Like a 5-Year-Old

Imagine you have two boxes.

### Box 1 — Student

```text
┌─────────────────┐
│ name: Shagun    │
│ age: 25         │
└─────────────────┘
```

### Box 2 — Empty

```text
┌─────────────────┐
│                 │
└─────────────────┘
```

You say:

> "Copy everything from Box 1 into Box 2."

That's what `Object.assign()` can do.

```javascript
Object.assign(box2, box1);
```

Now:

```text
Box 2
┌─────────────────┐
│ name: Shagun    │
│ age: 25         │
└─────────────────┘
```

---

# 3. Syntax

The basic syntax is:

```javascript
Object.assign(target, source);
```

### Target

The object that **receives** the properties.

### Source

The object from which properties are **copied**.

Think:

```text
Object.assign(
    TARGET,
    SOURCE
);
```

### 🧠 Memory Trick

> **Target receives. Source gives.**

---

# 4. Simple Example

```javascript
let student = {
    name: "Shagun",
    age: 25
};

let newStudent = {};

Object.assign(newStudent, student);

console.log(newStudent);
```

Output:

```text
{ name: 'Shagun', age: 25 }
```

---

# 5. Important — Original Object

`Object.assign()` does **not remove** the properties from the source object.

```javascript
let student = {
    name: "Shagun",
    age: 25
};

let newStudent = {};

Object.assign(newStudent, student);

console.log(student);
console.log(newStudent);
```

Output:

```text
{ name: 'Shagun', age: 25 }

{ name: 'Shagun', age: 25 }
```

Both objects have the properties.

---

# 6. Copying an Object

One common use is:

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};

let copiedStudent = {};

Object.assign(copiedStudent, student);

console.log(copiedStudent);
```

Output:

```text
{
    name: 'Shagun',
    age: 25,
    course: 'MERN'
}
```

---

# 7. Merging Two Objects ⭐

This is another very important use.

Suppose:

```javascript
let studentBasic = {
    name: "Shagun",
    age: 25
};

let studentCourse = {
    course: "MERN",
    city: "Delhi"
};
```

We can merge them:

```javascript
let student = {};

Object.assign(student, studentBasic, studentCourse);

console.log(student);
```

Output:

```text
{
    name: 'Shagun',
    age: 25,
    course: 'MERN',
    city: 'Delhi'
}
```

### Visual:

```text
studentBasic
   ↓
name: Shagun
age: 25

studentCourse
   ↓
course: MERN
city: Delhi

        ↓
Object.assign()
        ↓

student
   ↓
name: Shagun
age: 25
course: MERN
city: Delhi
```

---

# 8. What Happens If Same Property Exists?

This is **very important**.

Suppose:

```javascript
let student1 = {
    name: "Shagun",
    age: 25
};

let student2 = {
    age: 30,
    course: "MERN"
};
```

Now:

```javascript
let student = {};

Object.assign(student, student1, student2);

console.log(student);
```

Output:

```text
{
    name: 'Shagun',
    age: 30,
    course: 'MERN'
}
```

Why?

Because `student2` comes **after** `student1`.

```text
student1 → age: 25

student2 → age: 30
                  ↑
             overwrites 25
```

### 🧠 Rule

> **When the same property exists, the later object wins.**

---

# 9. Another Example

```javascript
let product1 = {
    name: "Laptop",
    price: 65000
};

let product2 = {
    price: 70000,
    brand: "HP"
};

let product = {};

Object.assign(product, product1, product2);

console.log(product);
```

Output:

```text
{
    name: 'Laptop',
    price: 70000,
    brand: 'HP'
}
```

`price: 70000` wins because `product2` came later.

---

# 10. Using Multiple Source Objects

You can have more than one source.

```javascript
let basic = {
    name: "Shagun"
};

let education = {
    course: "MERN"
};

let location = {
    city: "Delhi"
};

let student = {};

Object.assign(student, basic, education, location);

console.log(student);
```

Output:

```text
{
    name: 'Shagun',
    course: 'MERN',
    city: 'Delhi'
}
```

---

# 11. Product Example 🛒

```javascript
let productBasic = {
    name: "Laptop",
    brand: "HP"
};

let productDetails = {
    price: 65000,
    category: "Electronics"
};

let product = {};

Object.assign(product, productBasic, productDetails);

console.log(product);
```

Output:

```text
{
    name: 'Laptop',
    brand: 'HP',
    price: 65000,
    category: 'Electronics'
}
```

---

# 12. Patient Example 🏥

```javascript
let patientBasic = {
    id: "PAT101",
    name: "Rahul"
};

let patientMedical = {
    age: 35,
    disease: "Fever"
};

let patient = {};

Object.assign(patient, patientBasic, patientMedical);

console.log(patient);
```

Output:

```text
{
    id: 'PAT101',
    name: 'Rahul',
    age: 35,
    disease: 'Fever'
}
```

---

# 13. Bank Account Example 🏦

```javascript
let accountBasic = {
    accountNo: "ACC1001",
    customer: "Amit"
};

let accountDetails = {
    balance: 50000,
    accountType: "Savings"
};

let account = {};

Object.assign(account, accountBasic, accountDetails);

console.log(account);
```

Output:

```text
{
    accountNo: 'ACC1001',
    customer: 'Amit',
    balance: 50000,
    accountType: 'Savings'
}
```

---

# 14. Important: Target Object Changes

Look carefully at this:

```javascript
let target = {
    name: "Shagun"
};

let source = {
    age: 25
};

Object.assign(target, source);

console.log(target);
```

Output:

```text
{
    name: 'Shagun',
    age: 25
}
```

The **target object itself was changed**.

That's important.

```text
source
   ↓
copies properties
   ↓
target
   ↓
target is modified
```

---

# 15. What If Target Already Has the Property?

```javascript
let target = {
    name: "Shagun",
    age: 25
};

let source = {
    age: 30
};

Object.assign(target, source);

console.log(target);
```

Output:

```text
{
    name: 'Shagun',
    age: 30
}
```

The source's `age: 30` replaces `age: 25`.

---

# 16. `Object.assign()` vs `Object.keys()`

| `Object.assign()`        | `Object.keys()`                |
| ------------------------ | ------------------------------ |
| Copies/merges properties | Gets property names            |
| Returns target object    | Returns array                  |
| Can modify target        | Doesn't modify original object |
| Used for copying/merging | Used for getting keys          |

---

# 17. `Object.assign()` vs `Object.values()`

| `Object.assign()`     | `Object.values()`       |
| --------------------- | ----------------------- |
| Copies properties     | Gets values             |
| Used for merging      | Used for reading values |
| Returns target object | Returns array           |

---

# 18. Important Point About `Object.assign()`

It performs a **shallow copy**.

For now, remember:

> It copies the object's **top-level properties**.

Example:

```javascript
let student = {
    name: "Shagun",
    age: 25
};

let copy = {};

Object.assign(copy, student);
```

The simple properties are copied.

We'll discuss **shallow copy vs deep copy** separately later because that's an important concept.

---

# 19. Modern Alternative — Spread Operator

You may also see:

```javascript
let student = {
    name: "Shagun",
    age: 25
};

let copy = {
    ...student
};
```

This also creates a shallow copy.

But **don't worry about the spread operator yet**. We'll learn it properly when we reach that topic.

For now:

```text
Object.assign()
      ↓
Copy / merge objects
```

---

# 🧠 Quick Memory Trick

Remember this sentence:

> **Target receives, Source gives. Later source wins.**

Example:

```javascript
Object.assign(target, source1, source2);
```

Means:

```text
source1 ──┐
          ├──→ target
source2 ──┘
```

If both have the same property:

```text
source1 → age: 25
source2 → age: 30

Final → age: 30
```

---

# 📝 Practice Questions

Answer these in detail like our previous topics.

### 1.

What is `Object.assign()`?

### 2.

Is `Object.assign()` a method or operator?

### 3.

What is the main purpose of `Object.assign()`?

### 4.

Write the basic syntax of `Object.assign()`.

### 5.

What is a target object?

### 6.

What is a source object?

### 7.

Which object receives the copied properties — target or source?

### 8.

Does `Object.assign()` return an object or an array?

### 9.

What happens if two source objects have the same property?

### 10.

Which value wins when the same property exists in multiple source objects?

### 11.

Does `Object.assign()` remove properties from the source object?

### 12.

What will be the output?

```javascript
let student = {
    name: "Shagun",
    age: 25
};

let copy = {};

Object.assign(copy, student);

console.log(copy);
```

### 13.

What will happen here?

```javascript
let student = {
    name: "Shagun"
};

let details = {
    age: 25
};

Object.assign(student, details);

console.log(student);
```

### 14.

What happens to the target object when `Object.assign()` is used with the target directly?

### 15.

Can `Object.assign()` merge more than two objects?

### 16.

How can `Object.assign()` be used with product information?

### 17.

How can it be used with patient information?

### 18.

How can it be used with bank account information?

### 19.

Why is `Object.assign()` useful in real-world applications?

### 20.

Explain this in your own words:

```javascript
Object.assign(target, source1, source2);
```

---

# 🎯 MCQs

### 1. What is `Object.assign()` mainly used for?

a) Deleting objects
b) Copying and merging properties
c) Sorting objects
d) Filtering objects

### 2. Which object receives the properties?

a) Source
b) Target
c) Both always
d) Neither

### 3. What happens when the same property exists in two sources?

a) Error occurs
b) First value always wins
c) Later value overwrites the earlier value
d) Both values are stored

### 4. What does `Object.assign()` return?

a) Array
b) String
c) Target object
d) Boolean

### 5. What happens here?

```javascript
let a = {
    age: 25
};

let b = {
    age: 30
};

let result = {};

Object.assign(result, a, b);
```

What is `result.age`?

a) 25
b) 30
c) undefined
d) Error

---

# 💻 Coding Practice

## Exercise 1 — Copy Student

Create:

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};
```

Create an empty object called `studentCopy`.

Use `Object.assign()` to copy `student` into `studentCopy`.

Display:

```text
Original Student
------------------
{ name: 'Shagun', age: 25, course: 'MERN' }

Copied Student
------------------
{ name: 'Shagun', age: 25, course: 'MERN' }
```

---

## Exercise 2 — Merge Student Details

Create:

```javascript
let basicDetails = {
    name: "Shagun",
    age: 25
};

let educationDetails = {
    course: "MERN",
    city: "Delhi"
};
```

Merge both into a new `student` object.

Expected:

```text
Student Details
------------------
Name: Shagun
Age: 25
Course: MERN
City: Delhi
```

---

## Exercise 3 — Product 🛒

Create:

```javascript
let productBasic = {
    name: "Laptop",
    brand: "HP"
};

let productDetails = {
    price: 65000,
    category: "Electronics"
};
```

Merge them using `Object.assign()`.

Display:

```text
Product Details
------------------
Name: Laptop
Brand: HP
Price: 65000
Category: Electronics
```

---

## Exercise 4 — Patient 🏥

Create:

```javascript
let patientBasic = {
    id: "PAT101",
    name: "Rahul"
};

let patientMedical = {
    age: 35,
    disease: "Fever",
    roomNo: 205
};
```

Merge them using `Object.assign()`.

Expected:

```text
Patient Details
------------------
ID: PAT101
Name: Rahul
Age: 35
Disease: Fever
Room No: 205
```

---

## Exercise 5 — Later Object Wins ⭐

Create:

```javascript
let studentBasic = {
    name: "Shagun",
    age: 25
};

let studentUpdate = {
    age: 30,
    course: "MERN"
};
```

Use:

```javascript
Object.assign()
```

and display:

```text
Student Details
------------------
Name: Shagun
Age: 30
Course: MERN
```

Pay special attention to **why age becomes 30 instead of 25**.

Send your **20 answers + 5 MCQs + coding output**, and I'll check them carefully in the same format as before.
