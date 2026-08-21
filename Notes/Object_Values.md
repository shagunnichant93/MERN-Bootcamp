
# 📘 JavaScript Objects — `Object.values()`

## 1. What is `Object.values()`?

`Object.values()` is a **JavaScript Object method used to get all the values of an object**.

Example:

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};

let result = Object.values(student);

console.log(result);
```

Output:

```text
[ 'Shagun', 25, 'MERN' ]
```

### 🧒 Easy way to remember

Think of an object as a cupboard:

```text
Student
----------------
name   → Shagun
age    → 25
course → MERN
```

`Object.keys()` asks:

> "Give me the **labels**."

```text
name
age
course
```

`Object.values()` asks:

> "Give me what's **inside**."

```text
Shagun
25
MERN
```

---

## 2. Syntax

```javascript
Object.values(object);
```

Example:

```javascript
Object.values(student);
```

---

## 3. What does it return?

It returns an **Array**.

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};

console.log(Object.values(product));
```

Output:

```text
[ 'Laptop', 65000, 'HP' ]
```

So:

```text
Object.values()
       ↓
    Array
       ↓
["Laptop", 65000, "HP"]
```

---

## 4. `Object.keys()` vs `Object.values()`

| `Object.keys()`     | `Object.values()`    |
| ------------------- | -------------------- |
| Gets property names | Gets property values |
| Returns Array       | Returns Array        |
| `["name", "age"]`   | `["Shagun", 25]`     |

Example:

```javascript
let student = {
    name: "Shagun",
    age: 25
};

console.log(Object.keys(student));
console.log(Object.values(student));
```

Output:

```text
[ 'name', 'age' ]
[ 'Shagun', 25 ]
```

### 🧠 Memory Trick

> **KEYS = labels**

> **VALUES = actual data**

---

## 5. Using `forEach()`

Because `Object.values()` returns an array, we can use array methods on the result.

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};

Object.values(student).forEach((value) => {
    console.log(value);
});
```

Output:

```text
Shagun
25
MERN
```

---

## 6. Real-World Example — Product 🛒

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP",
    category: "Electronics"
};

let values = Object.values(product);

console.log(values);
```

Output:

```text
[ 'Laptop', 65000, 'HP', 'Electronics' ]
```

---

## 7. Counting Object Values

Because the result is an array:

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};

console.log(Object.values(student).length);
```

Output:

```text
3
```

---

## 8. Important Point

`Object.values()` **does not change the original object**.

```javascript
let student = {
    name: "Shagun",
    age: 25
};

let values = Object.values(student);

console.log(student);
console.log(values);
```

The original object remains:

```text
{
    name: 'Shagun',
    age: 25
}
```

---

# 📝 Practice Questions

### 1.

What is `Object.values()`?

### 2.

Is `Object.values()` a method or operator?

### 3.

What does `Object.values()` return?

### 4.

Write the syntax of `Object.values()`.

### 5.

What will be the output?

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};

console.log(Object.values(student));
```

### 6.

Does `Object.values()` return an Object or Array?

### 7.

What is the difference between `Object.keys()` and `Object.values()`?

### 8.

What will this return?

```javascript
let product = {};

console.log(Object.values(product));
```

### 9.

How can you find the number of values in an object?

### 10.

Does `Object.values()` modify the original object?

### 11.

Why can we use `forEach()` with the result of `Object.values()`?

### 12.

What will this print?

```javascript
let student = {
    name: "Shagun",
    age: 25
};

Object.values(student).forEach((value) => {
    console.log(value);
});
```

### 13.

Can `Object.values()` contain different data types?

Explain with an example.

### 14.

What will `Object.values()` return if an object has 5 properties?

### 15.

Explain `Object.values()` using a real-world student example.

### 16.

How can `Object.values()` be useful with product information?

### 17.

How can `Object.values()` be useful with patient information?

### 18.

How can `Object.values()` be useful with bank account information?

### 19.

Why is it useful that `Object.values()` returns an Array?

### 20.

Explain the difference between `Object.keys()`, `Object.values()`, and normal object access in your own words.

---

# 🎯 MCQs

**1. What does `Object.values()` return?**

a) Object
b) String
c) Array
d) Boolean

**2. Which gets the values of an object?**

a) `Object.keys()`
b) `Object.values()`
c) `Object.value()`
d) `Object.get()`

**3. What is the output?**

```javascript
let student = {
    name: "Shagun",
    age: 25
};

console.log(Object.values(student));
```

a) `["name", "age"]`
b) `["Shagun", 25]`
c) `{name, age}`
d) `25`

**4. Can we use `.length` on the result of `Object.values()`?**

a) Yes
b) No
c) Only for strings
d) Only for numbers

**5. Does `Object.values()` modify the original object?**

a) Yes
b) No
c) Sometimes
d) Only when numbers are present

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

Use `Object.values()` to display all values.

Expected:

```text
Shagun
25
MERN
Delhi
```

---

### Exercise 2 — Product 🛒

Create a product with:

```text
name: Laptop
price: 65000
brand: HP
category: Electronics
```

Use `Object.values()` and display:

```text
Product Values
------------------
Laptop
65000
HP
Electronics
```

---

### Exercise 3 — Patient 🏥

Create:

```text
id: PAT101
name: Rahul
age: 35
disease: Fever
roomNo: 205
```

Use `Object.values()` to display all values.

---

### Exercise 4 — Bank Account 🏦

Create:

```text
accountNo: ACC1001
customer: Amit
balance: 50000
accountType: Savings
```

Use:

```javascript
Object.values(account)
```

and display all values.

---

### Exercise 5 — Count Properties ⭐

Create:

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP",
    category: "Electronics"
};
```

Use `Object.values()` to find how many values the object contains.

Expected:

```text
Total Values: 4
```