Absolutely. I’ll keep **everything in plain text format**, including the notes and examples, so nothing gets hidden or broken.

# JavaScript Object Spread Operator

## 1. What is Object Spread

The Object Spread Operator is used to copy and combine properties of objects.

The symbol used is three dots

`...`

Example

`let copyStudent = { ...student };`

Think of `...` as

**"Take everything from this object and put it here."**

---

# 2. Basic Syntax

`let newObject = { ...oldObject };`

Example

`let student = { name: "Shagun", age: 25, course: "MERN" };`

`let studentCopy = { ...student };`

`console.log(studentCopy);`

Output

`{ name: 'Shagun', age: 25, course: 'MERN' }`

---

# 3. Why Do We Use Spread

Object Spread is mainly used for

1. Copying objects
2. Merging objects
3. Adding properties
4. Updating properties
5. Creating a new object without directly modifying the original object

---

# 4. Copying an Object

Original object

`let student = { name: "Shagun", age: 25, course: "MERN" };`

Copy the object

`let studentCopy = { ...student };`

Display both

`console.log(student);`

`console.log(studentCopy);`

Both will contain the same properties.

Important

`student` and `studentCopy` are two different objects.

---

# 5. Adding a New Property

Suppose we have

`let student = { name: "Shagun", age: 25, course: "MERN" };`

We want to add city.

We can create a new object

`let updatedStudent = { ...student, city: "Delhi" };`

Output

`{ name: 'Shagun', age: 25, course: 'MERN', city: 'Delhi' }`

The original student is not directly changed.

---

# 6. Updating an Existing Property

Suppose the student age changes from 25 to 26.

Original

`let student = { name: "Shagun", age: 25, course: "MERN" };`

Create updated object

`let updatedStudent = { ...student, age: 26 };`

Output

`{ name: 'Shagun', age: 26, course: 'MERN' }`

The important concept is

`...student`

copies all existing properties.

`age: 26`

then replaces the existing age value.

---

# 7. Merging Two Objects

Suppose we have basic details

`let basicDetails = { name: "Shagun", age: 25 };`

And education details

`let educationDetails = { course: "MERN", city: "Delhi" };`

Merge them

`let student = { ...basicDetails, ...educationDetails };`

Output

`{ name: 'Shagun', age: 25, course: 'MERN', city: 'Delhi' }`

---

# 8. Merging Three Objects

Personal details

`let personalDetails = { name: "Shagun", age: 25 };`

Education details

`let educationDetails = { course: "MERN" };`

Location details

`let locationDetails = { city: "Delhi" };`

Merge all three

`let student = { ...personalDetails, ...educationDetails, ...locationDetails };`

Output

`{ name: 'Shagun', age: 25, course: 'MERN', city: 'Delhi' }`

---

# 9. Duplicate Properties

This is very important.

First object

`let student1 = { name: "Shagun", age: 25 };`

Second object

`let student2 = { age: 30, course: "MERN" };`

Merge them

`let student = { ...student1, ...student2 };`

Output

`{ name: 'Shagun', age: 30, course: 'MERN' }`

Why did age become 30?

Because both objects have an age property.

First value

`age: 25`

Second value

`age: 30`

The second value comes later.

Therefore

**Later value wins.**

This is one of the most important Object Spread rules.

---

# 10. Product Example

Original product

`let product = { name: "Laptop", price: 65000, brand: "HP" };`

Create a new product with a different price

`let updatedProduct = { ...product, price: 60000 };`

Output

`{ name: 'Laptop', price: 60000, brand: 'HP' }`

Original product still contains

`price: 65000`

Updated product contains

`price: 60000`

---

# 11. Patient Example

Original patient

`let patient = { id: "PAT101", name: "Rahul", age: 35, disease: "Fever", roomNo: 205 };`

Suppose the disease changes and the patient moves to another room.

`let updatedPatient = { ...patient, disease: "Cold", roomNo: 305 };`

Output

`{ id: 'PAT101', name: 'Rahul', age: 35, disease: 'Cold', roomNo: 305 }`

---

# 12. Bank Account Example

Original account

`let account = { accountNo: "ACC1001", customer: "Amit", balance: 50000, accountType: "Savings" };`

Update balance

`let updatedAccount = { ...account, balance: 60000 };`

Output

`{ accountNo: 'ACC1001', customer: 'Amit', balance: 60000, accountType: 'Savings' }`

---

# 13. Adding Multiple Properties

We can add multiple properties.

Original

`let student = { name: "Shagun", age: 25 };`

Add course and city

`let updatedStudent = { ...student, course: "MERN", city: "Delhi" };`

Output

`{ name: 'Shagun', age: 25, course: 'MERN', city: 'Delhi' }`

---

# 14. Updating Multiple Properties

Original

`let student = { name: "Shagun", age: 25, city: "Delhi" };`

Update age and city

`let updatedStudent = { ...student, age: 26, city: "Mumbai" };`

Output

`{ name: 'Shagun', age: 26, city: 'Mumbai' }`

---

# 15. Spread With Dynamic Property

You already learned dynamic properties.

Suppose

`let key = "city";`

`let value = "Delhi";`

We can use

`let student = { name: "Shagun", age: 25, [key]: value };`

Output

`{ name: 'Shagun', age: 25, city: 'Delhi' }`

Here `[key]` means JavaScript uses the value stored inside the variable `key`.

---

# 16. Spread Versus Direct Update

Direct update

`student.age = 26;`

This changes the existing object.

With spread

`let updatedStudent = { ...student, age: 26 };`

This creates a new object.

Remember

**Direct update**

Original object changes.

**Spread**

A new object is created.

---

# 17. Spread Versus Object.assign

You have already learned `Object.assign()`.

Object.assign example

`let copy = Object.assign({}, student);`

Spread example

`let copy = { ...student };`

Both can be used to copy an object.

For merging

`let student = Object.assign({}, basicDetails, educationDetails);`

Using spread

`let student = { ...basicDetails, ...educationDetails };`

The spread syntax is very common in modern JavaScript and especially important when we reach React.

---

# 18. Shallow Copy

Object Spread creates a shallow copy.

For a simple object, this works as expected.

Example

`let student = { name: "Shagun", age: 25 };`

`let copyStudent = { ...student };`

But if an object contains another object inside it, the nested object is not deeply copied.

Example

`let student = { name: "Shagun", address: { city: "Delhi" } };`

For now, just remember

**Object Spread creates a shallow copy.**

We will study shallow copy and deep copy separately later.

---

# 19. Memory Diagram

Remember Object Spread like this

`Original Object`

↓

`...`

↓

`New Object`

For copying

`{ ...student }`

For merging

`{ ...student, ...course }`

For adding

`{ ...student, city: "Delhi" }`

For updating

`{ ...student, age: 26 }`

---

# 20. Most Important Rules

### Rule 1

`...object`

Means

**Copy all properties from the object.**

### Rule 2

`{ ...object }`

Creates a new object.

### Rule 3

`{ ...object1, ...object2 }`

Merges objects.

### Rule 4

`{ ...object, newProperty: value }`

Copies the object and adds a property.

### Rule 5

`{ ...object, existingProperty: newValue }`

Copies the object and updates a property.

### Rule 6

If the same property exists multiple times

**The later value wins.**

### Rule 7

Object Spread creates a

**Shallow Copy**

---

# 21. Real-Life Analogy

Imagine you have a student file.

The file contains

`Name = Shagun`

`Age = 25`

`Course = MERN`

You want to create another file with the same information.

Instead of manually copying everything, you say

**Copy everything from the first file.**

That is essentially what this does

`let newStudent = { ...student };`

If you then say

`age: 26`

you are saying

**Copy everything, but put 26 for age in the new file.**

So

`let newStudent = { ...student, age: 26 };`

---

# 22. Quick Revision Table

| Operation        | Syntax                                    |
| ---------------- | ----------------------------------------- |
| Copy             | `{ ...student }`                          |
| Merge            | `{ ...student, ...product }`              |
| Add property     | `{ ...student, city: "Delhi" }`           |
| Update property  | `{ ...student, age: 26 }`                 |
| Multiple updates | `{ ...student, age: 26, city: "Mumbai" }` |

---

# 23. Interview Points

**Q — What is Object Spread?**

It is a syntax used to copy and merge properties of objects.

**Q — What symbol is used?**

Three dots

`...`

**Q — Does spread modify the original object?**

Normally, when used to create a new object, it creates a new object and does not directly modify the original.

**Q — What happens when duplicate properties exist?**

The later value overwrites the earlier value.

**Q — Is Object Spread shallow or deep?**

Shallow.

**Q — Is Object Spread commonly used in React?**

Yes. It is commonly used when creating updated objects, especially when working with state.

---

# 24. One Example You Should Understand Completely

`let student = { name: "Shagun", age: 25, course: "MERN" };`

`let updatedStudent = { ...student, age: 26, city: "Delhi" };`

Think about it step by step.

First

`...student`

copies

`name`

`age`

`course`

Then

`age: 26`

changes the copied age.

Then

`city: "Delhi"`

adds a new property.

Final result

`{ name: 'Shagun', age: 26, course: 'MERN', city: 'Delhi' }`

This single pattern is **very important for your JavaScript and later React learning**.
