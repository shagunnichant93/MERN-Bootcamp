# 📘 JavaScript Objects — Topic 6: Checking Whether a Property Exists

You've completed:

✅ Creating Objects
✅ Accessing Properties
✅ Adding Properties
✅ Updating Properties
✅ Deleting Properties

Now we'll learn how to **check whether a property exists inside an Object**.

---

# 🧒 Easy Explanation

Imagine you have a student:

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};
```

Now someone asks:

> "Does this student have a `course` property?"

We need to check.

JavaScript gives us ways to do this.

---

# 1. Using the `in` Operator ⭐

The easiest way is:

```javascript
"course" in student
```

Result:

```text
true
```

Because `course` exists.

But:

```javascript
"city" in student
```

Result:

```text
false
```

Because `city` doesn't exist.

---

# 2. Easy Way to Remember

Think of:

```javascript
"course" in student
```

as asking:

> **"Is `course` inside `student`?"**

If yes:

```text
true
```

If no:

```text
false
```

---

# 3. Example with Product 🛒

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};

console.log("price" in product);
console.log("category" in product);
```

Output:

```text
true
false
```

Because:

```text
price     → ✅ exists
category  → ❌ doesn't exist
```

---

# 4. Using a Variable ⭐

Suppose:

```javascript
let key = "price";
```

You can do:

```javascript
console.log(key in product);
```

Output:

```text
true
```

This is useful when the property name is **dynamic**.

---

# 5. `hasOwnProperty()` ⭐

Another way is:

```javascript
student.hasOwnProperty("age")
```

It returns:

```text
true
```

And:

```javascript
student.hasOwnProperty("city")
```

returns:

```text
false
```

So:

```javascript
"age" in student
```

and:

```javascript
student.hasOwnProperty("age")
```

can both tell us whether the property exists.

---

# 6. `in` vs `hasOwnProperty()`

For now, remember this simple difference:

### `in`

```javascript
"age" in student
```

Checks whether the property exists **in the object or its prototype chain**.

### `hasOwnProperty()`

```javascript
student.hasOwnProperty("age")
```

Checks whether the property belongs **directly to that object**.

For your beginner-level work, you'll mostly see:

```javascript
"property" in object
```

and:

```javascript
object.hasOwnProperty("property")
```

---

# 7. Why Not Just Use `student.age`?

You might think:

```javascript
student.age
```

If it gives a value, doesn't that mean the property exists?

Not always.

Consider:

```javascript
let student = {
    name: "Shagun",
    age: undefined
};
```

Now:

```javascript
console.log(student.age);
```

gives:

```text
undefined
```

But `age` **does exist**.

That's why property-existence checks are useful.

```javascript
"age" in student
```

gives:

```text
true
```

---

# 8. Real-World Example — Product 🛒

Imagine an API gives us:

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};
```

Before displaying a category:

```javascript
if ("category" in product) {
    console.log(product.category);
} else {
    console.log("Category not available");
}
```

Output:

```text
Category not available
```

This prevents us from blindly assuming that every product has every property.

---

# 9. Real-World Example — Patient 🏥

```javascript
let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35,
    roomNo: 205
};
```

Check whether disease information exists:

```javascript
if ("disease" in patient) {
    console.log("Disease information available");
} else {
    console.log("Disease information not available");
}
```

Output:

```text
Disease information not available
```

---

# 10. Real-World Example — Bank Account 🏦

```javascript
let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000
};
```

Check:

```javascript
if ("accountType" in account) {
    console.log("Account type available");
} else {
    console.log("Account type not available");
}
```

Output:

```text
Account type not available
```

---

# 11. Dynamic Property Checking ⭐⭐⭐

This is especially important because you've already learned dynamic properties.

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};

let key = "price";

if (key in product) {
    console.log("Property exists");
}
```

Output:

```text
Property exists
```

If:

```javascript
let key = "category";
```

then:

```text
Property does not exist
```

---

# 12. `in` Returns Boolean

Remember:

```javascript
"price" in product
```

doesn't return the price.

It returns:

```text
true
```

Similarly:

```javascript
"category" in product
```

returns:

```text
false
```

So:

```text
in
↓
checks existence
↓
true / false
```

---

# 📝 Practice Questions

Answer these in detail like you've been doing.

### Basic

1. What is the `in` operator used for with Objects?
2. Is `in` a method or an operator?
3. What does `"name" in student` check?
4. What does `in` return?
5. What happens if the property exists?
6. What happens if the property doesn't exist?
7. How do you check whether `age` exists in `student`?
8. How do you check whether `price` exists in `product`?
9. Can we use a variable with the `in` operator?
10. Does checking a property modify the Object?

### Understanding

11. What is `hasOwnProperty()` used for?
12. What does `student.hasOwnProperty("age")` return?
13. What does `student.hasOwnProperty("city")` return if city doesn't exist?
14. What is the basic difference between `in` and `hasOwnProperty()`?
15. Why is checking property existence useful instead of simply accessing the property?

### Real-world

16. How would you check whether a product has a `brand` property?
17. How would you check whether a patient has a `disease` property?
18. How would you check whether a bank account has an `accountType` property?
19. Give a real-world example where checking whether a property exists would be useful.
20. Explain property existence checking in your own words.

---

# 🧠 MCQs

### 1. What does this return?

```javascript
"name" in student
```

a) `"name"`
b) true/false
c) student name
d) undefined

### 2. Which is correct?

a)

```javascript
student.in("name");
```

b)

```javascript
"name" in student;
```

c)

```javascript
student -> "name";
```

d)

```javascript
check student.name;
```

### 3. What does this do?

```javascript
student.hasOwnProperty("age")
```

a) Deletes age
b) Updates age
c) Checks whether age belongs directly to student
d) Returns the age

### 4. If `city` doesn't exist, what does this return?

```javascript
"city" in student
```

a) true
b) false
c) null
d) city

### 5. Which is useful for a dynamic property?

```javascript
let key = "price";
```

a)

```javascript
key in product
```

b)

```javascript
product.key
```

c)

```javascript
product.price.key
```

d)

```javascript
delete key
```

---

# 💻 Coding Practice

Create:

```text
exampleObjectPropertyCheck.js
```

Put **all 5 exercises in one file**, as we've been doing.

---

## Exercise 1 — Student 🎓

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};
```

Check whether:

```text
name
city
course
```

exist.

Display:

```text
Student Property Check
-------------------------
Name exists: true
City exists: false
Course exists: true
```

---

## Exercise 2 — Product 🛒

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};
```

Check whether:

```text
price
brand
category
```

exist.

Display the result.

---

## Exercise 3 — Patient 🏥

```javascript
let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35,
    roomNo: 205
};
```

Check whether:

```text
disease
roomNo
age
```

exist.

Use `if...else` and display a meaningful message.

Example:

```text
Disease information not available
Room number available
Age available
```

---

## Exercise 4 — Bank Account 🏦

```javascript
let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000
};
```

Use `hasOwnProperty()` to check:

```text
accountNo
balance
accountType
```

Display the results.

---

## Exercise 5 — Dynamic Property ⭐⭐⭐

This one is important.

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};

let key = "price";
```

Use:

```javascript
key in product
```

to check whether the property exists.

Then change:

```javascript
key = "category";
```

and check again.

Expected idea:

```text
Property price exists: true
Property category exists: false
```
