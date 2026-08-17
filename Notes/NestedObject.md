# 📘 Module 6 — Objects

## Topic 9: Nested Objects

Great. We are moving to the next topic in the **Objects module: Nested Objects**.

---

# 1. What is a Nested Object?

A **nested object** is an object that exists **inside another object**.

Think of it like this:

```text
Student
│
├── name
├── age
└── address
      │
      ├── city
      ├── state
      └── pincode
```

Here, `address` itself is another object.

### Example

```javascript
let student = {
    name: "Rahul",
    age: 22,

    address: {
        city: "Delhi",
        state: "Delhi",
        pincode: 110001
    }
};
```

The `student` object contains another object called `address`.

---

# 2. Why Do We Need Nested Objects?

Suppose we have a student:

```javascript
let student = {
    name: "Rahul",
    age: 22,
    city: "Delhi",
    state: "Delhi",
    pincode: 110001
};
```

This works, but as the application grows, it becomes difficult to organize related information.

Instead, we can group address information:

```javascript
let student = {
    name: "Rahul",
    age: 22,

    address: {
        city: "Delhi",
        state: "Delhi",
        pincode: 110001
    }
};
```

Now the structure is much cleaner.

```text
student
│
├── name
├── age
│
└── address
     ├── city
     ├── state
     └── pincode
```

### 🧠 Remember

> **Nested object = object inside another object**

---

# 3. Accessing Nested Object Properties

This is very important.

Suppose:

```javascript
let student = {
    name: "Rahul",

    address: {
        city: "Delhi",
        state: "Delhi"
    }
};
```

To access `name`:

```javascript
console.log(student.name);
```

Output:

```text
Rahul
```

To access `city`:

```javascript
console.log(student.address.city);
```

Output:

```text
Delhi
```

To access `state`:

```javascript
console.log(student.address.state);
```

Output:

```text
Delhi
```

### 🧠 Think of it as going inside step-by-step

```text
student
   ↓
address
   ↓
city
```

So:

```javascript
student.address.city
```

---

# 4. Memory Diagram

Consider:

```javascript
let employee = {
    name: "John",

    address: {
        city: "Noida",
        state: "UP"
    }
};
```

Think of the object like this:

```text
employee
   │
   ├── name ──────────→ "John"
   │
   └── address
          │
          ├── city ───→ "Noida"
          │
          └── state ──→ "UP"
```

Therefore:

```javascript
employee.name
```

gives:

```text
John
```

And:

```javascript
employee.address.city
```

gives:

```text
Noida
```

---

# 5. Real-Life Example — Employee 👨‍💼

In a real application, an employee may have:

* Personal information
* Address
* Contact information
* Job information

We can organize it using nested objects.

```javascript
let employee = {
    name: "John",
    age: 30,

    address: {
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: 201301
    },

    job: {
        department: "IT",
        designation: "Developer",
        salary: 70000
    }
};
```

Now we have:

```text
employee
│
├── name
├── age
│
├── address
│    ├── city
│    ├── state
│    └── pincode
│
└── job
     ├── department
     ├── designation
     └── salary
```

---

# 6. Accessing Deeply Nested Values

To get the employee's city:

```javascript
console.log(employee.address.city);
```

To get department:

```javascript
console.log(employee.job.department);
```

To get salary:

```javascript
console.log(employee.job.salary);
```

Output:

```text
Noida
IT
70000
```

---

# 7. Updating Nested Properties

You can also update nested properties.

Suppose:

```javascript
let employee = {
    name: "John",

    address: {
        city: "Noida",
        state: "UP"
    }
};
```

Change city:

```javascript
employee.address.city = "Delhi";
```

Now:

```javascript
console.log(employee.address.city);
```

Output:

```text
Delhi
```

### Flow

```text
Before:

address
   ↓
city → Noida


After:

address
   ↓
city → Delhi
```

---

# 8. Adding Properties to a Nested Object

You can add a new property:

```javascript
employee.address.pincode = 110001;
```

Now:

```javascript
console.log(employee.address.pincode);
```

Output:

```text
110001
```

You can also add another nested object:

```javascript
employee.contact = {
    email: "john@gmail.com",
    phone: "9876543210"
};
```

Now the structure becomes:

```text
employee
│
├── name
├── address
│    ├── city
│    ├── state
│    └── pincode
│
└── contact
     ├── email
     └── phone
```

---

# 9. Deleting Nested Properties

You can delete a nested property using `delete`.

```javascript
delete employee.address.pincode;
```

Now `pincode` is removed from `address`.

This is the same `delete` concept you already learned, but now we're applying it to a nested object.

---

# 10. Nested Object With Methods

A nested object can also contain methods.

```javascript
let user = {
    name: "Amit",

    address: {
        city: "Delhi",

        showCity() {
            console.log(this.city);
        }
    }
};

user.address.showCity();
```

Output:

```text
Delhi
```

Notice:

```javascript
this.city
```

Here, `this` refers to the **address object**, because `showCity()` belongs to `address`.

This is an important concept. 👍

---

# 11. Nested Objects in Real Applications 🌐

Nested objects are extremely common when working with APIs.

For example, an API might return:

```javascript
let user = {
    id: 101,
    name: "Rahul",

    profile: {
        age: 25,
        gender: "Male"
    },

    address: {
        city: "Delhi",
        country: "India"
    }
};
```

You might access:

```javascript
user.profile.age
```

or:

```javascript
user.address.country
```

You'll see structures like this frequently when working with **Node.js, Express, MongoDB and React**.

---

# 12. Multiple Levels of Nesting

Objects can be nested more than one level.

```javascript
let company = {
    name: "ABC",

    office: {
        location: {
            city: "Noida",
            country: "India"
        }
    }
};
```

To get the city:

```javascript
console.log(company.office.location.city);
```

Output:

```text
Noida
```

Think:

```text
company
   ↓
office
   ↓
location
   ↓
city
```

Therefore:

```javascript
company.office.location.city
```

---

# 13. Important Interview Point ⭐

### What is the difference between:

```javascript
student.name
```

and:

```javascript
student.address.city
```

`student.name` accesses a property directly on `student`.

`student.address.city` accesses:

1. `address` from `student`
2. then `city` from `address`

---

# 🎯 Interview Questions

### Q1. What is a nested object?

**Answer:**

A nested object is an object stored as a property inside another object.

Example:

```javascript
let user = {
    name: "Rahul",

    address: {
        city: "Delhi"
    }
};
```

Here, `address` is a nested object.

---

### Q2. How do you access a property of a nested object?

Using the dot operator:

```javascript
user.address.city;
```

---

### Q3. Can nested objects contain methods?

**Yes.**

```javascript
let user = {
    address: {
        city: "Delhi",

        showCity() {
            console.log(this.city);
        }
    }
};
```

---

### Q4. Can you update a nested property?

Yes:

```javascript
user.address.city = "Mumbai";
```

---

### Q5. Can you delete a nested property?

Yes:

```javascript
delete user.address.city;
```

---

# 🔥 Scenario-Based Interview Question

### Question

You receive this user object:

```javascript
let user = {
    name: "Amit",

    address: {
        city: "Delhi",
        pincode: 110001
    }
};
```

You need to change the city to `"Mumbai"`.

What code would you write?

### Answer

```javascript
user.address.city = "Mumbai";
```

---

# 🧩 Output Prediction Questions

### Question 1

What is the output?

```javascript
let employee = {
    name: "John",

    job: {
        department: "IT",
        salary: 70000
    }
};

console.log(employee.job.department);
```

**Answer:**

```text
IT
```

---

### Question 2

What is the output?

```javascript
let user = {
    name: "Rahul",

    address: {
        city: "Delhi"
    }
};

user.address.city = "Mumbai";

console.log(user.address.city);
```

**Answer:**

```text
Mumbai
```

---

### Question 3 🔥

What is the output?

```javascript
let company = {
    office: {
        location: {
            city: "Noida"
        }
    }
};

console.log(company.office.location.city);
```

**Answer:**

```text
Noida
```

---

# ❓ MCQs

Try answering these **without looking at the answers first**.

### MCQ 1

What is a nested object?

**A.** An array inside an object
**B.** An object inside another object
**C.** A function inside an object
**D.** A variable inside an object

---

### MCQ 2

How do you access `city`?

```javascript
let user = {
    address: {
        city: "Delhi"
    }
};
```

**A.**

```javascript
user.city
```

**B.**

```javascript
user.address
```

**C.**

```javascript
user.address.city
```

**D.**

```javascript
user[city]
```

---

### MCQ 3

Which statement updates the city?

```javascript
let user = {
    address: {
        city: "Delhi"
    }
};
```

**A.**

```javascript
user.city = "Mumbai";
```

**B.**

```javascript
user.address.city = "Mumbai";
```

**C.**

```javascript
user.address = "Mumbai";
```

**D.**

```javascript
city.address.user = "Mumbai";
```

---

### MCQ 4

What will this print?

```javascript
let product = {
    details: {
        price: 500
    }
};

console.log(product.details.price);
```

**A.** `details`
**B.** `price`
**C.** `500`
**D.** `undefined`

---

### MCQ 5 🔥

Which statement correctly deletes the `city` property?

```javascript
let user = {
    address: {
        city: "Delhi"
    }
};
```

**A.**

```javascript
delete user.city;
```

**B.**

```javascript
delete city;
```

**C.**

```javascript
delete user.address.city;
```

**D.**

```javascript
user.delete.address.city;
```

---

# ✍️ Hands-On Exercise

Create an object called `student` with:

### Direct properties:

```text
name
age
```

### Nested `address` object:

```text
city
state
pincode
```

### Nested `education` object:

```text
degree
college
percentage
```

Your structure should look like:

```text
student
│
├── name
├── age
│
├── address
│    ├── city
│    ├── state
│    └── pincode
│
└── education
     ├── degree
     ├── college
     └── percentage
```

Then print:

```text
Student Name:
City:
State:
Degree:
College:
Percentage:
```

---

# 🔥 Challenge

After creating the object:

1. Change the student's city.
2. Change the percentage.
3. Add a `phone` property inside `address`.
4. Delete the `state` property.
5. Print the updated object.

Try doing this yourself before asking for the solution.

---

# 📝 Notes for `Notes/` Folder

```text
Nested Object
    ↓
Object inside another object
```

Example:

```javascript
let user = {
    name: "Rahul",

    address: {
        city: "Delhi",
        pincode: 110001
    }
};
```

Access:

```javascript
user.address.city;
```

Update:

```javascript
user.address.city = "Mumbai";
```

Add:

```javascript
user.address.phone = "9876543210";
```

Delete:

```javascript
delete user.address.pincode;
```

### 🧠 Memory Trick

> **Go from outside → inside → property**

```text
user → address → city

user.address.city
```
