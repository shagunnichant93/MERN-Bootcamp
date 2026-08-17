Absolutely 👍 Let's start **Module 4 — JavaScript Objects**.

We'll follow the exact same format we've been using.

# 📘 Module 4 — JavaScript Objects

## Topic 1: What is an Object?

You already learned that an **array** is useful when we have a list of values.

For example:

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

But imagine we want to store information about **one employee**:

```text
Name: John
Age: 30
Department: IT
Salary: 70000
```

An array isn't the best choice because we would have to remember what each position means.

An **object** solves this problem.

---

# 🧒 Object explained like a 5-year-old

Imagine you have a **school bag** 🎒.

Inside the bag you have different things:

```text
Name → Rahul
Age → 25
Course → MERN
City → Delhi
```

Each thing has:

```text
KEY → VALUE
```

So an object is basically a collection of **key-value pairs**.

---

# 1. Creating an Object

We use curly braces:

```javascript
let student = {
    name: "Rahul",
    age: 25,
    course: "MERN",
    city: "Delhi"
};
```

Here:

```text
name   → "Rahul"
age    → 25
course → "MERN"
city   → "Delhi"
```

These are called **properties**.

---

# 2. Object Syntax

The basic structure is:

```javascript
let objectName = {
    key: value,
    key: value,
    key: value
};
```

Example:

```javascript
let employee = {
    name: "John",
    department: "IT",
    salary: 70000
};
```

---

# 3. Why Do We Need Objects?

Suppose we have an employee.

Without an object:

```javascript
let employeeName = "John";
let employeeDepartment = "IT";
let employeeSalary = 70000;
```

This works, but if we have many employees, things become difficult to manage.

With an object:

```javascript
let employee = {
    name: "John",
    department: "IT",
    salary: 70000
};
```

Everything related to the employee is grouped together.

---

# 4. Real-World Examples

### 🛒 Product

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};
```

### 🏥 Patient

```javascript
let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35,
    disease: "Fever"
};
```

### 🏦 Bank Account

```javascript
let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000
};
```

### 👨‍💼 Employee

```javascript
let employee = {
    name: "John",
    department: "IT",
    salary: 75000
};
```

---

# 5. Object vs Array

This is VERY important.

### Array

Used mainly for a **list of values**:

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

Think:

```text
Fruit 1
Fruit 2
Fruit 3
```

### Object

Used for **details about one thing**:

```javascript
let fruit = {
    name: "Apple",
    color: "Red",
    price: 100
};
```

Think:

```text
Name  → Apple
Color → Red
Price → 100
```

### Easy way to remember:

> **Array = list**
> **Object = details**

---

# 6. Object Properties

In this object:

```javascript
let employee = {
    name: "John",
    department: "IT",
    salary: 70000
};
```

We have three properties:

```text
name
department
salary
```

And their values are:

```text
John
IT
70000
```

---

# 7. Important Point ⭐

Objects can contain **different data types**.

```javascript
let student = {
    name: "Rahul",       // string
    age: 25,             // number
    isActive: true       // boolean
};
```

So an object can store:

```text
String
Number
Boolean
Array
Object
Function
```

We'll learn the more advanced ones later.

---

# 🧠 Simple Mental Model

Whenever you see:

```javascript
let patient = {
    name: "Rahul",
    age: 35
};
```

Think:

```text
patient
   |
   +--- name → Rahul
   |
   +--- age → 35
```

That's an object.

---

# 📝 Interview / Practice Questions

Answer these in detail, just like you did for Arrays.

### Basic

1. What is an Object in JavaScript?
2. Why do we use Objects?
3. Which brackets are used to create an Object?
4. What is a property in an Object?
5. What is a key?
6. What is a value?
7. Can an Object contain different data types?
8. Can an Object contain multiple properties?
9. Is an Object different from an Array?
10. Give one real-world example of an Object.

### Understanding

11. Explain the difference between an Array and an Object.
12. Why would you use an Object to represent an employee?
13. What is the purpose of grouping related data inside an Object?
14. Can an Object contain a number and a string at the same time?
15. Can we store a Boolean value inside an Object?

### Real-world

16. How would you represent a product using an Object?
17. How would you represent a patient using an Object?
18. How would you represent a bank account using an Object?
19. Why are Objects useful when working with API data?
20. Explain Objects in your own words using a real-world example.

---

# 🧠 MCQs

### 1. Which brackets are used to create an Object?

a) `[]`
b) `{}`
c) `()`
d) `<>`

### 2. Which of the following is an Object?

a)

```javascript
let fruits = ["Apple", "Mango"];
```

b)

```javascript
let student = {
    name: "Rahul",
    age: 25
};
```

c)

```javascript
let age = 25;
```

d)

```javascript
let name = "Rahul";
```

### 3. In this Object, what is `name`?

```javascript
let student = {
    name: "Rahul"
};
```

a) Value
b) Array
c) Key/Property
d) Function

### 4. What is the value of `age`?

```javascript
let student = {
    name: "Rahul",
    age: 25
};
```

a) `student`
b) `age`
c) `25`
d) `"age"`

### 5. Which is the best use of an Object?

a) Storing a simple list of fruits
b) Storing details about a particular employee
c) Repeating a loop
d) Sorting numbers

---

# 💻 Coding Practice

We'll start very easy, just like we did with Arrays.

## Practice 1 — Employee Object

Create:

```text
exampleObject.js
```

Create an employee Object with:

```text
Name: John
Department: IT
Salary: 70000
```

Expected data structure:

```javascript
let employee = {
    name: "John",
    department: "IT",
    salary: 70000
};
```

For now, **just create the object**.

---

## Practice 2 — Product Object

Create:

```text
productObject.js
```

Create a product with:

```text
Name: Laptop
Price: 65000
Brand: HP
```

---

## Practice 3 — Patient Object

Create:

```text
patientObject.js
```

Create a patient with:

```text
ID: PAT101
Name: Rahul
Age: 35
Disease: Fever
```

---

## Practice 4 — Bank Account Object

Create:

```text
bankAccountObject.js
```

Create an account with:

```text
Account No: ACC1001
Customer: Amit
Balance: 50000
```

---

## Practice 5 — Student Object

Create:

```text
studentObject.js
```

Create a student with:

```text
Name: Shagun
Age: 25
Course: MERN
City: Delhi
```
Great 👍 Let's continue with **Module 4 — JavaScript Objects**.

# 📘 Topic 3: Adding Properties to an Object

You already know how to **create an object** and **read its properties**.

Now we're going to learn how to **add a new property to an existing object**.

---

## 🧒 Think of it like this

Imagine you have a student record:

```javascript
let student = {
    name: "Shagun",
    age: 25
};
```

Later, the school says:

> "We also need to store the student's course."

We can add it:

```javascript
student.course = "MERN";
```

Now the object becomes:

```javascript
{
    name: "Shagun",
    age: 25,
    course: "MERN"
}
```

That's **adding a property**.

---

# 1. Adding a Property Using Dot Notation

This is the easiest way.

```javascript
let student = {
    name: "Shagun",
    age: 25
};

student.course = "MERN";
```

Now:

```javascript
console.log(student);
```

Output:

```text
{
    name: "Shagun",
    age: 25,
    course: "MERN"
}
```

The important part is:

```javascript
student.course = "MERN";
```

---

# 2. Adding Multiple Properties

We can add more than one property.

```javascript
let student = {
    name: "Shagun",
    age: 25
};

student.course = "MERN";
student.city = "Delhi";
student.marks = 85;
```

Now the object contains:

```text
name   → Shagun
age    → 25
course → MERN
city   → Delhi
marks  → 85
```

---

# 3. Adding a Property Using Bracket Notation

We can also use brackets:

```javascript
student["course"] = "MERN";
```

This does the same thing as:

```javascript
student.course = "MERN";
```

Both are valid.

---

# 4. Dynamic Property Addition ⭐

This is where bracket notation becomes powerful.

Suppose:

```javascript
let key = "course";
let value = "MERN";
```

We can do:

```javascript
student[key] = value;
```

JavaScript interprets it as:

```javascript
student["course"] = "MERN";
```

So the property is added dynamically.

---

# 5. Real-World Example — Product 🛒

Initially:

```javascript
let product = {
    name: "Laptop",
    price: 65000
};
```

Later, we want to add the brand:

```javascript
product.brand = "HP";
```

Now:

```text
Product
----------------
Name: Laptop
Price: 65000
Brand: HP
```

---

# 6. Real-World Example — Patient 🏥

Initially:

```javascript
let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35
};
```

Later, the hospital records the disease:

```javascript
patient.disease = "Fever";
```

We can also add:

```javascript
patient.roomNo = 205;
patient.doctor = "Dr. Sharma";
```

Now the patient object contains additional information.

---

# 7. Real-World Example — Bank Account 🏦

Initially:

```javascript
let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000
};
```

Later we need account type:

```javascript
account.accountType = "Savings";
```

We can also add:

```javascript
account.branch = "Delhi";
```

---

# 8. Adding a Property to an Empty Object

We can start with an empty object:

```javascript
let employee = {};
```

Then add properties:

```javascript
employee.name = "John";
employee.department = "IT";
employee.salary = 70000;
```

Now:

```text
name       → John
department → IT
salary     → 70000
```

This is useful when we don't know all the information at the time we create the object.

---

# 9. Important: Adding vs Updating

This is **very important**.

Suppose:

```javascript
let student = {
    name: "Shagun",
    age: 25
};
```

If we do:

```javascript
student.course = "MERN";
```

`course` doesn't exist.

Therefore:

> **A new property is added.**

But if we do:

```javascript
student.age = 26;
```

`age` already exists.

Therefore:

> **The existing property is updated.**

We'll study updating properties in the next topic in detail.

For now remember:

```text
Property doesn't exist
        ↓
      ADD

Property already exists
        ↓
     UPDATE
```

---

# 10. Does Adding a Property Modify the Object?

**Yes.**

Objects are mutable.

For example:

```javascript
let student = {
    name: "Shagun"
};

student.age = 25;
```

The original `student` object now contains `age`.

We haven't created a completely separate object.

---

# 🧠 Easy Way to Remember

Think about a **student form**.

Initially:

```text
Name: Shagun
Age: 25
```

Later you add:

```text
Course: MERN
```

You didn't create another student.

You simply **added another property to the existing student object**.

---

# 📝 20 Detailed Practice / Interview Questions

Answer these in the same format as before.

### Basic

1. How do you add a new property to an Object?
2. Is adding a property an Object method?
3. Which notation can be used to add a property?
4. Write the syntax for adding a property using dot notation.
5. Write the syntax for adding a property using bracket notation.
6. Can we add multiple properties to an Object?
7. Can we add a property to an empty Object?
8. What happens if the property doesn't already exist?
9. Does adding a property modify the original Object?
10. Are JavaScript Objects mutable?

### Understanding

11. What is the difference between adding and updating a property?
12. What happens when we use `student.course = "MERN"`?
13. What happens when we use `student["course"] = "MERN"`?
14. Why can bracket notation be useful when adding properties?
15. What happens if the property name is stored in a variable?

### Real-world

16. How would you add a brand to a Product Object?
17. How would you add a disease to a Patient Object?
18. How would you add an account type to a Bank Account Object?
19. Give a real-world situation where you might need to add a new property to an Object.
20. Explain adding a property to an Object in your own words with a real-world example.

---

# 🧠 MCQs

### 1. Which statement correctly adds a property?

a)

```javascript
student -> age = 25;
```

b)

```javascript
student.age = 25;
```

c)

```javascript
student.age == 25;
```

d)

```javascript
student.add(age, 25);
```

---

### 2. What happens here?

```javascript
let student = {
    name: "Shagun"
};

student.age = 25;
```

a) `name` is deleted
b) `age` is added
c) Object is deleted
d) Error occurs

---

### 3. Which is valid bracket notation for adding a property?

a)

```javascript
student(age) = 25;
```

b)

```javascript
student.age = 25;
```

c)

```javascript
student["age"] = 25;
```

d)

```javascript
student->age = 25;
```

---

### 4. What happens when we add a property to an existing Object?

a) Original Object is modified
b) Array is created
c) Object becomes immutable
d) Property is ignored

---

### 5. What will this produce?

```javascript
let key = "course";

student[key] = "MERN";
```

a) Adds a property called `key`
b) Adds a property called `course`
c) Deletes `course`
d) Gives an error

---

# 💻 Coding Practice

We'll keep our **same practical format**.

You can put all exercises into **one file**, just like you did for the previous topic. 👍

Create/use:

```text
exampleObjectAdd.js
```

---

## Practice 1 — Student

Start with:

```javascript
let student = {
    name: "Shagun",
    age: 25
};
```

Add:

```text
course → MERN
city → Delhi
```

Display:

```text
Student Details
------------------
Name: Shagun
Age: 25
Course: MERN
City: Delhi
```

---

## Practice 2 — Product 🛒

Start with:

```javascript
let product = {
    name: "Laptop",
    price: 65000
};
```

Add:

```text
brand → HP
category → Electronics
```

Display:

```text
Product Details
------------------
Product: Laptop
Price: 65000
Brand: HP
Category: Electronics
```

---

## Practice 3 — Patient 🏥

Start with:

```javascript
let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35
};
```

Add:

```text
disease → Fever
roomNo → 205
```

Display:

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

## Practice 4 — Bank Account 🏦

Start with:

```javascript
let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000
};
```

Add:

```text
accountType → Savings
branch → Delhi
```

Display all details.

---

## Practice 5 — Dynamic Property ⭐

Start with:

```javascript
let student = {
    name: "Shagun",
    age: 25
};

let key = "course";
let value = "MERN";
```

Use:

```javascript
student[key] = value;
```

Then display:

```text
Student Details
------------------
Name: Shagun
Age: 25
Course: MERN
```

---

# 📘 JavaScript Objects — Topic 5: Deleting Object Properties

You've completed:

✅ Creating Objects
✅ Accessing Properties
✅ Adding Properties
✅ Updating Properties

Now we'll learn how to **delete properties from an Object**.

---

## 🧒 Easy Explanation

Imagine you have a student record:

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN",
    city: "Delhi"
};
```

Suppose we don't want to store the `city` anymore.

We can remove it:

```javascript
delete student.city;
```

Now the Object becomes:

```text
name   → Shagun
age    → 25
course → MERN
```

The `city` property is gone.

---

# 1. `delete` Operator

JavaScript provides the `delete` operator to remove a property.

```javascript
delete student.age;
```

This removes the `age` property.

---

# 2. Delete Using Dot Notation

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};

delete product.brand;
```

Now:

```javascript
console.log(product);
```

Output:

```text
{
    name: "Laptop",
    price: 65000
}
```

---

# 3. Delete Using Bracket Notation

You can also write:

```javascript
delete product["brand"];
```

Both are valid:

```javascript
delete product.brand;

delete product["brand"];
```

---

# 4. Delete a Patient Property 🏥

```javascript
let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35,
    disease: "Fever",
    roomNo: 205
};

delete patient.disease;
```

Now:

```text
id     → PAT101
name   → Rahul
age    → 35
roomNo → 205
```

The `disease` property has been removed.

---

# 5. Delete a Bank Account Property 🏦

```javascript
let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000,
    accountType: "Savings"
};

delete account.accountType;
```

Now `accountType` is removed.

---

# 6. Delete Using a Variable ⭐

Just like updating, bracket notation is useful when the property name is dynamic.

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};

let key = "age";

delete student[key];
```

Now:

```text
name   → Shagun
course → MERN
```

Notice:

```javascript
delete student[key];
```

uses the **value inside `key`**.

Since:

```javascript
key = "age"
```

JavaScript performs:

```javascript
delete student["age"];
```

---

# 7. What Happens When We Try to Access a Deleted Property?

Example:

```javascript
let student = {
    name: "Shagun",
    age: 25
};

delete student.age;

console.log(student.age);
```

Output:

```text
undefined
```

Why?

Because `age` no longer exists.

---

# 8. Does `delete` Modify the Original Object?

### Yes. ✅

Objects are mutable.

```javascript
let product = {
    name: "Laptop",
    price: 65000
};

delete product.price;

console.log(product);
```

Output:

```text
{ name: 'Laptop' }
```

The original Object has changed.

---

# 9. `delete` Does NOT Delete the Entire Object

This:

```javascript
delete student.age;
```

does **not** delete:

```text
student
```

It only deletes:

```text
age
```

Think:

```text
Object
   |
   ├── name
   ├── age    ← delete this
   └── course
```

After deleting:

```text
Object
   |
   ├── name
   └── course
```

The Object still exists.

---

# 10. `delete` vs Updating

### Updating:

```javascript
student.age = 26;
```

Property remains:

```text
age → 26
```

### Deleting:

```javascript
delete student.age;
```

Property disappears completely.

```text
age → ❌
```

---

# 📝 Practice Questions

Answer these in detail, just like before.

### Basic

1. What is the `delete` operator used for in JavaScript Objects?
2. Is `delete` a method or an operator?
3. How do you delete a property using dot notation?
4. How do you delete a property using bracket notation?
5. What happens to the property after using `delete`?
6. Can we delete multiple properties from an Object?
7. Can we delete a property using a variable?
8. What happens if we try to access a property after deleting it?
9. Does `delete` modify the original Object?
10. Are Objects mutable?

### Understanding

11. What is the difference between updating and deleting a property?
12. What happens when we write `delete student.age`?
13. What happens when we write `delete student["age"]`?
14. Why is bracket notation useful when deleting a property?
15. What happens when the property name is stored in a variable and we use `delete object[key]`?

### Real-world Examples

16. How would you delete the `brand` property from a product?
17. How would you delete the `disease` property from a patient?
18. How would you delete the `accountType` property from a bank account?
19. Give a real-world example where an Object property might need to be deleted.
20. Explain the `delete` operator in your own words with a real-world example.

---

# 🧠 MCQs

### 1. What does this do?

```javascript
delete student.age;
```

a) Updates age
b) Deletes the `age` property
c) Deletes the student Object
d) Creates age

### 2. Which is correct?

a)

```javascript
student.delete(age);
```

b)

```javascript
delete student.age;
```

c)

```javascript
student.age.delete();
```

d)

```javascript
remove student.age;
```

### 3. What will this return?

```javascript
let student = {
    name: "Shagun",
    age: 25
};

delete student.age;

console.log(student.age);
```

a) 25
b) null
c) undefined
d) false

### 4. Which one uses bracket notation?

a)

```javascript
delete student.age;
```

b)

```javascript
student.delete(age);
```

c)

```javascript
delete student["age"];
```

d)

```javascript
remove(student.age);
```

### 5. What happens to the Object after deleting one property?

a) Entire Object is deleted
b) Object becomes an Array
c) Only that property is removed
d) Object becomes undefined

---

# 💻 Coding Practice

Create:

```text
exampleObjectDelete.js
```

Put all **5 exercises in the same file**.

---

## Exercise 1 — Student 🎓

```javascript
let student = {
    name: "Shagun",
    age: 25,
    course: "MERN",
    city: "Delhi"
};
```

Delete:

```text
city
```

Display the updated Object.

Expected:

```text
{
    name: 'Shagun',
    age: 25,
    course: 'MERN'
}
```

---

## Exercise 2 — Product 🛒

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP",
    category: "Electronics"
};
```

Delete:

```text
brand
```

Display:

```text
Product Details
------------------
Name: Laptop
Price: 65000
Category: Electronics
```

---

## Exercise 3 — Patient 🏥

```javascript
let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35,
    disease: "Fever",
    roomNo: 205
};
```

Delete:

```text
disease
```

Display the updated patient Object.

---

## Exercise 4 — Bank Account 🏦

```javascript
let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000,
    accountType: "Savings"
};
```

Delete:

```text
accountType
```

Display the updated account.

---

## Exercise 5 — Dynamic Delete ⭐

This is the most important one.

```javascript
let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP",
    category: "Electronics"
};

let key = "category";
```

Use:

```javascript
delete product[key];
```

Then display the Object.

Expected:

```text
{
    name: 'Laptop',
    price: 65000,
    brand: 'HP'
}
```
