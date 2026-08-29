# JavaScript Objects — Next Topic

# `Object.seal()`

Now that you've learned `Object.freeze()`, the next related concept is **`Object.seal()`**.

The key difference is simple:

```text
freeze()  → cannot add, delete, or update
seal()    → cannot add or delete, but CAN update
```

---

# 1. What is `Object.seal()`?

`Object.seal()` is used to **prevent adding new properties and deleting existing properties** from an object.

However, existing property values **can still be changed**.

Example

```text
let student = {
    name: "Shagun",
    age: 25
};

Object.seal(student);

student.age = 30;
student.city = "Delhi";
delete student.name;

console.log(student);
```

Result

```text
{
    name: "Shagun",
    age: 30
}
```

Notice

```text
age changed       → YES
city added        → NO
name deleted      → NO
```

---

# 2. Real-Life Analogy

Imagine a student admission form.

Once the form is officially submitted:

```text
Adding a new field       ❌
Removing an existing field ❌
Changing existing information ✅
```

For example, the student's age may need correction.

So the form is **sealed**, but existing information can still be updated.

---

# 3. Basic Syntax

```text
Object.seal(objectName);
```

Example

```text
Object.seal(student);
```

---

# 4. What Happens After Sealing?

Suppose

```text
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};

Object.seal(product);
```

### Update

```text
product.price = 70000;
```

✅ Allowed.

### Add

```text
product.stock = 10;
```

❌ Not allowed.

### Delete

```text
delete product.brand;
```

❌ Not allowed.

---

# 5. `Object.isSealed()`

JavaScript provides

```text
Object.isSealed()
```

to check whether an object is sealed.

Example

```text
let student = {
    name: "Shagun",
    age: 25
};

console.log(Object.isSealed(student));

Object.seal(student);

console.log(Object.isSealed(student));
```

Output

```text
false
true
```

---

# 6. Seal vs Freeze

This is the **most important part of today's lesson**.

| Operation       | Normal Object | Sealed Object | Frozen Object |
| --------------- | ------------- | ------------- | ------------- |
| Add property    | ✅             | ❌             | ❌             |
| Update property | ✅             | ✅             | ❌             |
| Delete property | ✅             | ❌             | ❌             |

Memory trick

```text
SEAL
↓
Structure is locked
↓
Values can change
```

```text
FREEZE
↓
Everything is locked
```

---

# 7. `const` vs `seal()` vs `freeze()`

Remember this comparison.

### `const`

```text
const student = {
    name: "Shagun"
};
```

You cannot reassign `student`.

But you can change properties.

```text
student.name = "Rahul";
```

✅ Allowed.

---

### `Object.seal()`

```text
Object.seal(student);
```

Now

```text
student.name = "Rahul";
```

✅ Allowed.

But

```text
student.age = 25;
```

❌ Not allowed.

And

```text
delete student.name;
```

❌ Not allowed.

---

### `Object.freeze()`

```text
Object.freeze(student);
```

Now

```text
student.name = "Rahul";
```

❌ Not allowed.

Adding

❌

Deleting

❌

Everything is locked.

---

# 8. Memory Diagram

Think of an object as a house.

### Normal Object

```text
HOUSE

Add room       ✅
Remove room    ✅
Change furniture ✅
```

### Sealed Object

```text
HOUSE 🔒

Add room       ❌
Remove room    ❌
Change furniture ✅
```

### Frozen Object

```text
HOUSE ❄️

Add room       ❌
Remove room    ❌
Change furniture ❌
```

---

# 9. Student Example

```text
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};

Object.seal(student);

student.age = 26;

student.city = "Ghaziabad";

delete student.course;

console.log(student);
```

Result

```text
{
    name: "Shagun",
    age: 26,
    course: "MERN"
}
```

Only the update worked.

---

# 10. Bank Account Example

A sealed object can be useful when the structure of an account should remain fixed, but values such as the balance can change.

```text
let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000
};

Object.seal(account);

account.balance = 60000;

account.accountType = "Savings";

delete account.customer;

console.log(account);
```

Result

```text
{
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 60000
}
```

The balance changed.

The new property wasn't added.

The customer wasn't deleted.

---

# 11. Nested Objects

Just like `Object.freeze()`, `Object.seal()` is **shallow**.

Example

```text
let student = {
    name: "Shagun",
    address: {
        city: "Delhi"
    }
};

Object.seal(student);
```

This prevents changes to the structure of the outer object.

But the nested object can still be modified.

```text
student.address.city = "Mumbai";
```

✅ Allowed.

So

```text
student
│
├── name 🔒
│
└── address
      │
      └── city 🔓
```

The nested `address` object hasn't been sealed.

---

# Practice Coding

Create

```text
exampleObjectSeal.js
```

## Exercise 1 — Student

Create a student object with

```text
name
age
course
```

Seal it.

Try

* Updating age
* Adding city
* Deleting course

Print the object.

---

## Exercise 2 — Product

Create a product with

```text
name
price
brand
```

Seal it.

Update the price.

Then try adding

```text
stock
```

Print the result.

---

## Exercise 3 — `isSealed()`

Check the object before sealing.

Then seal it.

Check again using

```text
Object.isSealed()
```

---

## Exercise 4 — Patient

Create a patient object containing

```text
id
name
age
disease
```

Seal it.

Update the disease.

Try adding

```text
roomNo
```

Then try deleting age.

Print the final object.

---

## Exercise 5 — Nested Object

Create

```text
student
    name
    address
        city
        state
```

Seal the student object.

Try changing

```text
student.name
```

and

```text
student.address.city
```

Observe what happens.

---

# Assignment

Create a bank account object containing

```text
accountNo
customer
balance
accountType
```

Seal the object.

Perform these operations

```text
Update balance
Add branch
Delete accountType
```

Print the final object.

Then check whether it is sealed using

```text
Object.isSealed()
```

---

# Interview Questions

### Basic

1. What is `Object.seal()`?

2. Can you add properties to a sealed object?

3. Can you delete properties from a sealed object?

4. Can you update existing properties in a sealed object?

5. What does `Object.isSealed()` return?

### Advanced

6. What is the difference between `Object.seal()` and `Object.freeze()`?

7. Is `Object.seal()` deep or shallow?

8. Can a nested object be modified after the parent object is sealed?

### Scenario Based

9. You want to prevent users from adding or deleting fields from an object, but you still want to allow existing values to change. Which method would you use?

10. You have a bank account object where the account structure should remain fixed but the balance should change. Would `seal()` or `freeze()` be more appropriate?

---

# MCQs

### 1. What does `Object.seal()` prevent?

A. Only updating

B. Adding and deleting properties

C. Reading properties

D. Calling methods

### 2. Can an existing property be updated after sealing?

A. Yes

B. No

C. Only strings

D. Only numbers

### 3. Which method checks whether an object is sealed?

A. `Object.checkSeal()`

B. `Object.isSealed()`

C. `Object.sealed()`

D. `Object.check()`

### 4. Which statement is correct?

A. `freeze()` allows adding properties

B. `seal()` allows deleting properties

C. `seal()` allows updating existing properties

D. `seal()` makes nested objects automatically frozen

### 5. Which provides stronger protection?

A. `Object.seal()`

B. `Object.freeze()`

C. `const`

D. `Object.keys()`

---

## GitHub

Complete everything in

```text
exampleObjectSeal.js
```

Then run

```text
node exampleObjectSeal.js
```
# JavaScript Objects — Next Topic

# `Object.seal()`

Now that you've learned `Object.freeze()`, the next related concept is **`Object.seal()`**.

The key difference is simple:

```text
freeze()  → cannot add, delete, or update
seal()    → cannot add or delete, but CAN update
```

---

# 1. What is `Object.seal()`?

`Object.seal()` is used to **prevent adding new properties and deleting existing properties** from an object.

However, existing property values **can still be changed**.

Example

```text
let student = {
    name: "Shagun",
    age: 25
};

Object.seal(student);

student.age = 30;
student.city = "Delhi";
delete student.name;

console.log(student);
```

Result

```text
{
    name: "Shagun",
    age: 30
}
```

Notice

```text
age changed       → YES
city added        → NO
name deleted      → NO
```

---

# 2. Real-Life Analogy

Imagine a student admission form.

Once the form is officially submitted:

```text
Adding a new field       ❌
Removing an existing field ❌
Changing existing information ✅
```

For example, the student's age may need correction.

So the form is **sealed**, but existing information can still be updated.

---

# 3. Basic Syntax

```text
Object.seal(objectName);
```

Example

```text
Object.seal(student);
```

---

# 4. What Happens After Sealing?

Suppose

```text
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};

Object.seal(product);
```

### Update

```text
product.price = 70000;
```

✅ Allowed.

### Add

```text
product.stock = 10;
```

❌ Not allowed.

### Delete

```text
delete product.brand;
```

❌ Not allowed.

---

# 5. `Object.isSealed()`

JavaScript provides

```text
Object.isSealed()
```

to check whether an object is sealed.

Example

```text
let student = {
    name: "Shagun",
    age: 25
};

console.log(Object.isSealed(student));

Object.seal(student);

console.log(Object.isSealed(student));
```

Output

```text
false
true
```

---

# 6. Seal vs Freeze

This is the **most important part of today's lesson**.

| Operation       | Normal Object | Sealed Object | Frozen Object |
| --------------- | ------------- | ------------- | ------------- |
| Add property    | ✅             | ❌             | ❌             |
| Update property | ✅             | ✅             | ❌             |
| Delete property | ✅             | ❌             | ❌             |

Memory trick

```text
SEAL
↓
Structure is locked
↓
Values can change
```

```text
FREEZE
↓
Everything is locked
```

---

# 7. `const` vs `seal()` vs `freeze()`

Remember this comparison.

### `const`

```text
const student = {
    name: "Shagun"
};
```

You cannot reassign `student`.

But you can change properties.

```text
student.name = "Rahul";
```

✅ Allowed.

---

### `Object.seal()`

```text
Object.seal(student);
```

Now

```text
student.name = "Rahul";
```

✅ Allowed.

But

```text
student.age = 25;
```

❌ Not allowed.

And

```text
delete student.name;
```

❌ Not allowed.

---

### `Object.freeze()`

```text
Object.freeze(student);
```

Now

```text
student.name = "Rahul";
```

❌ Not allowed.

Adding

❌

Deleting

❌

Everything is locked.

---

# 8. Memory Diagram

Think of an object as a house.

### Normal Object

```text
HOUSE

Add room       ✅
Remove room    ✅
Change furniture ✅
```

### Sealed Object

```text
HOUSE 🔒

Add room       ❌
Remove room    ❌
Change furniture ✅
```

### Frozen Object

```text
HOUSE ❄️

Add room       ❌
Remove room    ❌
Change furniture ❌
```

---

# 9. Student Example

```text
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};

Object.seal(student);

student.age = 26;

student.city = "Ghaziabad";

delete student.course;

console.log(student);
```

Result

```text
{
    name: "Shagun",
    age: 26,
    course: "MERN"
}
```

Only the update worked.

---

# 10. Bank Account Example

A sealed object can be useful when the structure of an account should remain fixed, but values such as the balance can change.

```text
let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000
};

Object.seal(account);

account.balance = 60000;

account.accountType = "Savings";

delete account.customer;

console.log(account);
```

Result

```text
{
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 60000
}
```

The balance changed.

The new property wasn't added.

The customer wasn't deleted.

---

# 11. Nested Objects

Just like `Object.freeze()`, `Object.seal()` is **shallow**.

Example

```text
let student = {
    name: "Shagun",
    address: {
        city: "Delhi"
    }
};

Object.seal(student);
```

This prevents changes to the structure of the outer object.

But the nested object can still be modified.

```text
student.address.city = "Mumbai";
```

✅ Allowed.

So

```text
student
│
├── name 🔒
│
└── address
      │
      └── city 🔓
```

The nested `address` object hasn't been sealed.

---

# Practice Coding

Create

```text
exampleObjectSeal.js
```

## Exercise 1 — Student

Create a student object with

```text
name
age
course
```

Seal it.

Try

* Updating age
* Adding city
* Deleting course

Print the object.

---

## Exercise 2 — Product

Create a product with

```text
name
price
brand
```

Seal it.

Update the price.

Then try adding

```text
stock
```

Print the result.

---

## Exercise 3 — `isSealed()`

Check the object before sealing.

Then seal it.

Check again using

```text
Object.isSealed()
```

---

## Exercise 4 — Patient

Create a patient object containing

```text
id
name
age
disease
```

Seal it.

Update the disease.

Try adding

```text
roomNo
```

Then try deleting age.

Print the final object.

---

## Exercise 5 — Nested Object

Create

```text
student
    name
    address
        city
        state
```

Seal the student object.

Try changing

```text
student.name
```

and

```text
student.address.city
```

Observe what happens.

---

# Assignment

Create a bank account object containing

```text
accountNo
customer
balance
accountType
```

Seal the object.

Perform these operations

```text
Update balance
Add branch
Delete accountType
```

Print the final object.

Then check whether it is sealed using

```text
Object.isSealed()
```

---

# Interview Questions

### Basic

1. What is `Object.seal()`?

2. Can you add properties to a sealed object?

3. Can you delete properties from a sealed object?

4. Can you update existing properties in a sealed object?

5. What does `Object.isSealed()` return?

### Advanced

6. What is the difference between `Object.seal()` and `Object.freeze()`?

7. Is `Object.seal()` deep or shallow?

8. Can a nested object be modified after the parent object is sealed?

### Scenario Based

9. You want to prevent users from adding or deleting fields from an object, but you still want to allow existing values to change. Which method would you use?

10. You have a bank account object where the account structure should remain fixed but the balance should change. Would `seal()` or `freeze()` be more appropriate?

---

# MCQs

### 1. What does `Object.seal()` prevent?

A. Only updating

B. Adding and deleting properties

C. Reading properties

D. Calling methods

### 2. Can an existing property be updated after sealing?

A. Yes

B. No

C. Only strings

D. Only numbers

### 3. Which method checks whether an object is sealed?

A. `Object.checkSeal()`

B. `Object.isSealed()`

C. `Object.sealed()`

D. `Object.check()`

### 4. Which statement is correct?

A. `freeze()` allows adding properties

B. `seal()` allows deleting properties

C. `seal()` allows updating existing properties

D. `seal()` makes nested objects automatically frozen

### 5. Which provides stronger protection?

A. `Object.seal()`

B. `Object.freeze()`

C. `const`

D. `Object.keys()`

---

## GitHub

Complete everything in

```text
exampleObjectSeal.js
```

Then run

```text
node exampleObjectSeal.js
```

Send me your **terminal output + answers to the 10 interview questions + MCQ answers**.

I'll check the answers and code first, then we'll move to the next pending Objects topic.
