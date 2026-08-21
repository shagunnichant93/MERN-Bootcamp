# 📘 JavaScript Objects — Topic: `Object.entries()`


```text
Object.keys()
     ↓
Gets all keys

Object.values()
     ↓
Gets all values

Object.entries()
     ↓
Gets key + value together
```


---

## 1. What is `Object.entries()`?

`Object.entries()` is a **method used to get all key-value pairs of an object in an array**.

Example:

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};

console.log(Object.entries(student));
```

Output:

```text
[
  [ 'name', 'Shagun' ],
  [ 'age', 25 ],
  [ 'course', 'MERN' ]
]
```

---

# 🧒 2. Explain Like a 5-Year-Old

Imagine you have a student card:

```text
Student
----------------
name   → Shagun
age    → 25
course → MERN
```

### `Object.keys()`

Asks:

> "Give me only the labels."

```text
name
age
course
```

### `Object.values()`

Asks:

> "Give me only what's written."

```text
Shagun
25
MERN
```

### `Object.entries()`

Asks:

> "Give me the label AND what's written next to it."

```text
name   → Shagun
age    → 25
course → MERN
```

That's exactly what **entries** means.

---

# 3. Syntax

```javascript
Object.entries(objectName);
```

Example:

```javascript
Object.entries(student);
```

---

# 4. What Does It Return?

It returns an **array**.

But there's something important.

Each item inside the array is itself an **array containing two things**:

```text
[key, value]
```

Example:

```javascript
let student = {
    name: "Shagun",
    age: 25
};

console.log(Object.entries(student));
```

Output:

```text
[
    [ "name", "Shagun" ],
    [ "age", 25 ]
]
```

Think:

```text
Outer Array
│
├── [ "name", "Shagun" ]
│       ↑        ↑
│      key     value
│
└── [ "age", 25 ]
        ↑      ↑
       key   value
```

---

# 5. Compare All Three ⭐

Suppose:

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};
```

### `Object.keys()`

```javascript
Object.keys(student);
```

Result:

```text
["name", "age", "course"]
```

### `Object.values()`

```javascript
Object.values(student);
```

Result:

```text
["Shagun", 25, "MERN"]
```

### `Object.entries()`

```javascript
Object.entries(student);
```

Result:

```text
[
    ["name", "Shagun"],
    ["age", 25],
    ["course", "MERN"]
]
```

### 🧠 Memory Trick

Remember:

```text
KEYS     → WHAT ARE THE LABELS?
VALUES   → WHAT IS THE DATA?
ENTRIES  → LABEL + DATA TOGETHER
```

---

# 6. Why Is `Object.entries()` Useful?

Suppose you want to display:

```text
Name: Shagun
Age: 25
Course: MERN
```

You need both:

```text
key + value
```

That's where `Object.entries()` is useful.

---

# 7. Using `forEach()`

Because `Object.entries()` returns an array, we can use `forEach()`.

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};

Object.entries(student).forEach((entry) => {
    console.log(entry);
});
```

Output:

```text
[ 'name', 'Shagun' ]
[ 'age', 25 ]
[ 'course', 'MERN' ]
```

---

# 8. Destructuring Entries ⭐

Instead of:

```javascript
Object.entries(student).forEach((entry) => {
    console.log(entry[0]);
    console.log(entry[1]);
});
```

we can write:

```javascript
Object.entries(student).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

Output:

```text
name: Shagun
age: 25
course: MERN
```

Don't worry if `[key, value]` looks new.

The important idea is:

```text
[key, value]
    ↓
  entry
```

We'll practice this.

---

# 9. Real-World Example — Product 🛒

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};

Object.entries(product).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

Output:

```text
name: Laptop
price: 65000
brand: HP
```

This is useful when you don't know the property names beforehand.

---

# 10. Patient Example 🏥

```javascript
let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35,
    disease: "Fever"
};

Object.entries(patient).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

Output:

```text
id: PAT101
name: Rahul
age: 35
disease: Fever
```

---

# 11. Bank Account Example 🏦

```javascript
let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000,
    accountType: "Savings"
};

Object.entries(account).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

Output:

```text
accountNo: ACC1001
customer: Amit
balance: 50000
accountType: Savings
```

---

# 12. Important Difference

### `Object.keys()`

```javascript
Object.keys(student);
```

Gives:

```text
["name", "age", "course"]
```

### `Object.values()`

```javascript
Object.values(student);
```

Gives:

```text
["Shagun", 25, "MERN"]
```

### `Object.entries()`

```javascript
Object.entries(student);
```

Gives:

```text
[
    ["name", "Shagun"],
    ["age", 25],
    ["course", "MERN"]
]
```

---

# 13. Empty Object

What happens here?

```javascript
let student = {};

console.log(Object.entries(student));
```

Output:

```text
[]
```

Just like `Object.keys()` and `Object.values()`.

---

# 14. Does It Modify the Original Object?

**No.**

```javascript
let student = {
    name: "Shagun",
    age: 25
};

let result = Object.entries(student);

console.log(student);
console.log(result);
```

The original object remains unchanged.

---

# 15. Real-Life API Example 🌐

Imagine an API returns:

```javascript
let user = {
    name: "Shagun",
    age: 25,
    city: "Delhi"
};
```

You want to display the information dynamically:

```text
name: Shagun
age: 25
city: Delhi
```

Instead of manually writing:

```javascript
console.log(user.name);
console.log(user.age);
console.log(user.city);
```

you can do:

```javascript
Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

This is very useful when the object contains many properties or when the properties aren't known beforehand.

---

# 🧠 Quick Revision

```text
Object.keys()
     ↓
["name", "age"]

Object.values()
     ↓
["Shagun", 25]

Object.entries()
     ↓
[
   ["name", "Shagun"],
   ["age", 25]
]
```

### One-line memory:

> **`entries()` gives you the key and value together.**

---

# 📝 Practice Questions

Answer these in detail, just like you've been doing for the previous topics.

### 1.

What is `Object.entries()`?

### 2.

Is `Object.entries()` a method or operator?

### 3.

What does `Object.entries()` return?

### 4.

What is the syntax of `Object.entries()`?

### 5.

What does each inner array contain?

### 6.

What will be the output?

```javascript
let student = {
    name: "Shagun",
    age: 25
};

console.log(Object.entries(student));
```

### 7.

What is the difference between `Object.keys()` and `Object.entries()`?

### 8.

What is the difference between `Object.values()` and `Object.entries()`?

### 9.

What will this return?

```javascript
let product = {};

console.log(Object.entries(product));
```

### 10.

Does `Object.entries()` modify the original object?

### 11.

Why can we use `forEach()` with `Object.entries()`?

### 12.

What does this code do?

```javascript
Object.entries(student).forEach((entry) => {
    console.log(entry);
});
```

### 13.

What does `[key, value]` represent when using:

```javascript
Object.entries(student).forEach(([key, value]) => {
});
```

### 14.

What will be the output?

```javascript
let student = {
    name: "Shagun",
    age: 25
};

Object.entries(student).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

### 15.

Why is `Object.entries()` useful when we need both property names and their values?

### 16.

How can `Object.entries()` be useful for displaying product information?

### 17.

How can it be useful for displaying patient information?

### 18.

How can it be useful for displaying bank account information?

### 19.

How can `Object.entries()` be useful when working with API data?

### 20.

Explain the difference between:

```text
Object.keys()
Object.values()
Object.entries()
```

in your own words.

---

# 🎯 MCQs

### 1. What does `Object.entries()` return?

a) Object
b) String
c) Array
d) Boolean

### 2. What does each entry contain?

a) Only key
b) Only value
c) Key and value
d) Only index

### 3. What is the output?

```javascript
let student = {
    name: "Shagun",
    age: 25
};

console.log(Object.entries(student));
```

a)

```text
["name", "age"]
```

b)

```text
["Shagun", 25]
```

c)

```text
[
    ["name", "Shagun"],
    ["age", 25]
]
```

d) `25`

### 4. Can we use `forEach()` on the result of `Object.entries()`?

a) Yes
b) No
c) Only with strings
d) Only with numbers

### 5. Which method gives key + value together?

a) `Object.keys()`
b) `Object.values()`
c) `Object.entries()`
d) `Object.get()`

---

# 💻 Coding Practice

### Exercise 1 — Student

Create:

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN",
    city: "Delhi"
};
```

Use `Object.entries()` and display:

```text
name: Shagun
age: 25
course: MERN
city: Delhi
```

---

### Exercise 2 — Product 🛒

Create:

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP",
    category: "Electronics"
};
```

Display:

```text
Product Details
------------------
name: Laptop
price: 65000
brand: HP
category: Electronics
```

Use `Object.entries()`.

---

### Exercise 3 — Patient 🏥

Create:

```javascript
let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35,
    disease: "Fever",
    roomNo: 205
};
```

Use `Object.entries()` to display every key and value in this format:

```text
id: PAT101
name: Rahul
age: 35
disease: Fever
roomNo: 205
```

---

### Exercise 4 — Bank Account 🏦

Create:

```javascript
let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000,
    accountType: "Savings"
};
```

Display all key-value pairs using `Object.entries()`.

---

### Exercise 5 — Shopping Product ⭐

Create:

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP",
    stock: 10
};
```

Use `Object.entries()` and display:

```text
Product Information
-------------------------
Name: Laptop
Price: 65000
Brand: HP
Stock: 10
```