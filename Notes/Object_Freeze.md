# JavaScript Objects — Next Topic

# `Object.freeze()`

`Object.freeze()` is used when you want to make an object **completely protected from changes**.

This is useful when you have data that should not be modified accidentally.

---

# 1. What is `Object.freeze()`?

`Object.freeze()` makes an object **immutable**.

After freezing an object, you cannot:

* Add new properties
* Delete existing properties
* Change existing property values

Example

```text
let student = {
    name: "Shagun",
    age: 25
};

Object.freeze(student);

student.age = 30;
student.course = "MERN";
delete student.name;

console.log(student);
```

The object remains

```text
{
    name: "Shagun",
    age: 25
}
```

The changes are not applied.

---

# 2. Real-Life Analogy

Imagine you have printed a certificate.

Before printing

You can edit the name, age, marks, etc.

After printing and officially sealing it

You don't want anyone changing the information.

Think

```text
Normal Object
      ↓
Can change
      ↓
Object.freeze()
      ↓
Locked Object
      ↓
Cannot change
```

---

# 3. Basic Syntax

```text
Object.freeze(objectName);
```

Example

```text
Object.freeze(student);
```

---

# 4. What Happens After Freezing?

Suppose

```text
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};

Object.freeze(product);
```

### Updating

```text
product.price = 70000;
```

❌ Not changed.

### Adding

```text
product.stock = 10;
```

❌ Not added.

### Deleting

```text
delete product.brand;
```

❌ Not deleted.

The object remains unchanged.

---

# 5. `freeze()` Does Not Create a New Object

This is important.

```text
Object.freeze(student);
```

It freezes the **same object**.

It doesn't create another copy.

Think

```text
student
   ↓
same object
   ↓
FREEZED
```

---

# 6. `Object.freeze()` Returns the Same Object

Example

```text
let student = {
    name: "Shagun",
    age: 25
};

let result = Object.freeze(student);

console.log(result === student);
```

Output

```text
true
```

Because `result` and `student` refer to the same object.

---

# 7. Checking Whether an Object Is Frozen

JavaScript provides

```text
Object.isFrozen()
```

Example

```text
let student = {
    name: "Shagun",
    age: 25
};

console.log(Object.isFrozen(student));

Object.freeze(student);

console.log(Object.isFrozen(student));
```

Output

```text
false
true
```

---

# 8. Important Difference Between Normal Object and Frozen Object

| Normal Object         | Frozen Object |
| --------------------- | ------------- |
| Can add properties    | Cannot add    |
| Can update properties | Cannot update |
| Can delete properties | Cannot delete |
| Mutable               | Immutable     |

---

# 9. Student Example

```text
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};

Object.freeze(student);

student.age = 30;
student.city = "Ghaziabad";
delete student.course;

console.log(student);
```

Result

```text
{
    name: "Shagun",
    age: 25,
    course: "MERN"
}
```

None of the changes are applied.

---

# 10. Bank Account Example

Imagine you have some configuration data that shouldn't change.

```text
let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    accountType: "Savings"
};

Object.freeze(account);

account.accountType = "Current";

console.log(account);
```

The account type remains

```text
Savings
```

---

# 11. `Object.freeze()` and Nested Objects

This is **very important**.

`Object.freeze()` performs a **shallow freeze**.

That means it freezes the top-level object, but nested objects are not automatically frozen.

Example

```text
let student = {
    name: "Shagun",

    address: {
        city: "Delhi"
    }
};

Object.freeze(student);
```

Now try

```text
student.name = "Rahul";
```

❌ Doesn't change.

But

```text
student.address.city = "Mumbai";
```

✅ Can change.

Why?

Because only the outer object was frozen.

The nested `address` object is still mutable.

---

# 12. Memory Diagram

Think

```text
student
│
├── name 🔒
│
└── address
      │
      └── city 🔓
```

Outer object

🔒 Frozen

Nested object

🔓 Still changeable

This is called a **shallow freeze**.

---

# 13. Checking Nested Object

You can separately freeze the nested object.

```text
Object.freeze(student.address);
Object.freeze(student);
```

Now both are frozen.

```text
student.name = "Rahul";
```

❌

```text
student.address.city = "Mumbai";
```

❌

---

# 14. Freeze vs Const

This is a very common interview question.

Consider

```text
const student = {
    name: "Shagun",
    age: 25
};
```

`const` prevents the variable from being reassigned.

But the object's properties can still change.

```text
student.age = 30;
```

✅ This is allowed.

But

```text
student = {};
```

❌ Not allowed.

Now with

```text
Object.freeze(student);
```

property changes are also prevented.

So remember

```text
const
↓
Cannot reassign variable

Object.freeze()
↓
Cannot modify object properties
```

---

# 15. `const` + `freeze()`

For stronger protection, you can use both.

```text
const student = {
    name: "Shagun",
    age: 25
};

Object.freeze(student);
```

Now

```text
student.age = 30;
```

❌

And

```text
student = {};
```

❌

---

# 16. Real-World Uses

`Object.freeze()` can be useful for:

### Configuration

```text
const config = {
    apiUrl: "https://example.com",
    version: "1.0"
};

Object.freeze(config);
```

### Fixed application settings

```text
const settings = {
    theme: "dark",
    language: "en"
};

Object.freeze(settings);
```

### Constant data

When you want to make sure another part of the program doesn't accidentally modify an object.

---

# Practice Coding

Create

```text
exampleObjectFreeze.js
```

## Exercise 1

Create a student object with

```text
name
age
course
```

Freeze it.

Try to

* Update age
* Add city
* Delete course

Print the object.

---

## Exercise 2

Create a product object with

```text
name
price
brand
```

Freeze it.

Try changing the price.

Check whether the price changed.

---

## Exercise 3

Use

```text
Object.isFrozen()
```

Check the object before freezing.

Then freeze it.

Check again.

---

## Exercise 4

Create a nested student object

```text
student
    name
    address
        city
        state
```

Freeze only the student object.

Try changing

```text
student.name
```

and

```text
student.address.city
```

Observe the difference.

---

## Exercise 5

Freeze both the outer object and nested address object.

Try changing both.

Check the result.

---

# Assignment

Create a `companyConfig` object.

It should contain

```text
companyName
version
environment
database
```

Inside database

```text
host
port
```

Freeze the outer object.

Try changing

```text
companyName
database.host
```

Observe which one changes.

Then freeze the nested database object as well.

Try again.

---

# Interview Questions

### Basic

1. What is `Object.freeze()`?

2. What happens when an object is frozen?

3. Can we add a property to a frozen object?

4. Can we delete a property from a frozen object?

5. Can we update a property of a frozen object?

### Advanced

6. What does `Object.isFrozen()` do?

7. Does `Object.freeze()` perform a shallow or deep freeze?

8. Can a nested object still be modified after freezing the parent object?

9. What is the difference between `const` and `Object.freeze()`?

### Scenario Based

10. You have application configuration that must never be modified accidentally. Which JavaScript feature could you use?

---

# MCQs

### 1. What does `Object.freeze()` do?

A. Deletes an object

B. Makes an object immutable

C. Copies an object

D. Converts an object into an array

### 2. Can we add a property after freezing?

A. Yes

B. No

C. Only strings

D. Only numbers

### 3. What does `Object.isFrozen()` return?

A. Object

B. String

C. Boolean

D. Array

### 4. Is `Object.freeze()` deep by default?

A. Yes

B. No

C. Only for arrays

D. Only for strings

### 5. What happens here?

```text
const student = {
    age: 25
};

student.age = 30;
```

A. Error always

B. Age becomes 30

C. Object is frozen

D. Student becomes undefined

---

# GitHub

Create

```text
exampleObjectFreeze.js
```

Complete the **5 exercises + assignment** in the same file.

Then run

```text
node exampleObjectFreeze.js