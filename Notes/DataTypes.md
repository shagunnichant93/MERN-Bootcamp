# 🚀 MERN Bootcamp - Day 3

## Topic: JavaScript Data Types (From Absolute Beginner)

Welcome to **Day 3**! 🎉

From today onward, we'll start learning actual JavaScript in depth.

By the end of this lesson, you'll understand **what kind of information JavaScript can store**.

---

# Today's Roadmap

We will learn:

1. What are Data Types?
2. String
3. Number
4. Boolean
5. Undefined
6. Null
7. Object (Introduction)
8. Array (Introduction)
9. typeof operator
10. Practice Questions
11. Assignment
12. Git Commit

---

# What is a Data Type?

Let's imagine you have different containers.

📦 Box 1 contains books.

🥤 Bottle contains water.

💰 Wallet contains money.

Although all are containers, **they hold different types of things.**

Variables are exactly the same.

A variable stores data.

But what kind of data?

JavaScript needs to know.

That "kind of data" is called a **Data Type**.

Example:

```javascript
let name = "Shagun";
```

This variable stores text.

So its data type is **String**.

---

```javascript
let age = 24;
```

This stores a number.

Data type = **Number**

---

```javascript
let isStudent = true;
```

Stores true/false.

Data type = **Boolean**

---

# Think of it like this

Imagine you're filling out an online registration form.

| Field        | Data Type                                                                               |
| ------------ | --------------------------------------------------------------------------------------- |
| Name         | String                                                                                  |
| Age          | Number                                                                                  |
| Email        | String                                                                                  |
| Password     | String                                                                                  |
| Is Student?  | Boolean                                                                                 |
| Phone Number | String *(we usually store phone numbers as strings because we don't do math with them)* |

---

# Data Type 1 — String

A String means **text**.

Examples:

```javascript
let city = "Hyderabad";
```

```javascript
let college = "ABC Engineering College";
```

```javascript
let language = "JavaScript";
```

Notice the quotation marks.

Strings are written inside:

```javascript
" "
```

or

```javascript
' '
```

Both work.

Example:

```javascript
let a = "Hello";
```

```javascript
let b = 'Hello';
```

Both are correct.

---

## Real Life Examples

Name

```javascript
let name = "Shagun";
```

Email

```javascript
let email = "abc@gmail.com";
```

Address

```javascript
let address = "Hyderabad";
```

Product Name

```javascript
let product = "Laptop";
```

---

# Data Type 2 — Number

Numbers are used for calculations.

Example

```javascript
let age = 24;
```

Price

```javascript
let price = 55000;
```

Salary

```javascript
let salary = 70000;
```

Marks

```javascript
let marks = 95;
```

Notice:

No quotation marks.

Correct:

```javascript
let age = 24;
```

Wrong:

```javascript
let age = "24";
```

Why?

Because `"24"` is text.

`24` is a number.

These are different.

Think about it:

```javascript
24 + 1 = 25
```

But

```javascript
"24" + 1
```

We'll see later that JavaScript treats this differently because `"24"` is text.

---

# Data Type 3 — Boolean

Boolean has only **two values**:

```javascript
true
```

or

```javascript
false
```

Examples:

```javascript
let isLoggedIn = true;
```

```javascript
let hasLicense = false;
```

```javascript
let paymentDone = true;
```

```javascript
let isAdmin = false;
```

### Real Life

Did payment succeed?

```
true
```

Is user logged in?

```
true
```

Is exam passed?

```
false
```

Can vote?

```
true
```

Booleans are used for **Yes/No**, **True/False**, **On/Off** situations.

---

# Data Type 4 — Undefined

Sometimes we create a variable but don't give it a value yet.

Example:

```javascript
let city;
```

JavaScript says:

> "I don't know the value yet."

So it becomes:

```javascript
undefined
```

Example:

```javascript
let city;

console.log(city);
```

Output:

```text
undefined
```

Think of an empty box.

```
Box

Nothing inside
```

---

# Data Type 5 — Null

`null` means:

> "This variable intentionally has no value."

Example:

```javascript
let manager = null;
```

Imagine a company where the manager position is currently vacant.

Instead of leaving it unknown, you deliberately say:

> "There is no manager."

That's `null`.

Difference:

`undefined` → JavaScript doesn't have a value yet.

`null` → You intentionally set it to "no value".

---

# Data Type 6 — Object (Introduction)

Objects store related information together.

Example:

```javascript
let student = {
  name: "Shagun",
  age: 24,
  city: "Hyderabad"
};
```

Think of a student ID card.

It contains:

* Name
* Age
* City

All belong to the same student.

We'll study Objects in detail later.

---

# Data Type 7 — Array (Introduction)

Arrays store multiple values together.

Example:

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

Imagine a shopping basket.

Instead of one fruit:

🍎

You have many:

🍎 🍌 🥭

That's an array.

We'll learn arrays in depth later.

---

# typeof Operator

Sometimes we don't know the type of a variable.

JavaScript gives us a tool:

```javascript
typeof
```

Example:

```javascript
let name = "Shagun";

console.log(typeof name);
```

Output:

```text
string
```

Example:

```javascript
let age = 24;

console.log(typeof age);
```

Output:

```text
number
```

Example:

```javascript
let isStudent = true;

console.log(typeof isStudent);
```

Output:

```text
boolean
```

---

# Mini Program

Create a new file called:

```text
datatypes.js
```

Write:

```javascript
let name = "Shagun";
let age = 24;
let isStudent = true;
let city;
let manager = null;

console.log(name);
console.log(age);
console.log(isStudent);
console.log(city);
console.log(manager);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof manager);
```

Run:

```bash
node datatypes.js
```

---

# 🧠 Memory Diagram

```
name
 └── "Shagun"
      ↓
   String
```

```
age
 └── 24
      ↓
   Number
```

```
isStudent
 └── true
      ↓
   Boolean
```

```
city
 └── undefined
```

```
manager
 └── null
```

# 📒 Daily Notes

Write these in `Notes/Day03.md`:

* A Data Type tells JavaScript what kind of value is stored.
* `String` stores text.
* `Number` stores numbers.
* `Boolean` stores `true` or `false`.
* `Undefined` means no value has been assigned yet.
* `Null` means intentionally no value.
* `Object` stores related information together.
* `Array` stores multiple values.
* `typeof` tells us the data type.

---