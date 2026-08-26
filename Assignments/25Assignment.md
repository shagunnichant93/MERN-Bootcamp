
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


---

# 🎯 MCQs

### 1. What does `Object.keys()` return?

**a)** Object
**b)** String
**c)** Array
**d)** Boolean

### 2. What will this return?

```javascript
let student = {
    name: "Shagun",
    age: 25
};

Object.keys(student);
```

**a)** `["Shagun", 25]`
**b)** `["name", "age"]`
**c)** `{name, age}`
**d)** `"name, age"`

### 3. Which is the correct syntax?

**a)** `student.keys()`
**b)** `keys.student()`
**c)** `Object.keys(student)`
**d)** `student.Object.keys()`

### 4. What does this return?

```javascript
Object.keys({}).length
```

**a)** `undefined`
**b)** `0`
**c)** `1`
**d)** `false`

### 5. What does this code do?

```javascript
Object.keys(student).forEach((key) => {
    console.log(student[key]);
});
```

**a)** Prints only keys
**b)** Prints only values
**c)** Deletes the properties
**d)** Updates the properties

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

# MCQs

### 1. What does object destructuring do?

A. Deletes properties

B. Extracts properties into variables

C. Merges objects

D. Converts an object into an array

### 2. Which is correct?

A. `let [name] = student`

B. `let (name) = student`

C. `let { name } = student`

D. `let <name> = student`

### 3. What will this produce?

`let student = { name: "Shagun", age: 25 };`

`let { name } = student;`

A. `student`

B. `"name"`

C. `"Shagun"`

D. `undefined`

### 4. How do you rename `name` to `studentName`?

A. `let { studentName = name } = student`

B. `let { name: studentName } = student`

C. `let { name -> studentName } = student`

D. `let { name as studentName } = student`

### 5. What happens here?

`let { city = "Delhi" } = student;`

If `city` doesn't exist

A. Error

B. `undefined`

C. `"Delhi"`

D. `null`

---

# MCQs

### 1. What does `?.` represent?

A. Spread operator

B. Optional chaining

C. Destructuring

D. Rest operator

### 2. What happens here?

`let user = { name: "Shagun" };`

`console.log(user?.address?.city);`

A. Error

B. `null`

C. `undefined`

D. `"Delhi"`

### 3. Which is safer when `address` may not exist?

A. `user.address.city`

B. `user.address?.city`

C. `user.address-city`

D. `user.address!city`

### 4. Does optional chaining automatically give a default value?

A. Yes

B. No

C. Only for strings

D. Only for arrays

### 5. Which is valid optional chaining with an array?

A. `students?.[0]`

B. `students.?[0]`

C. `students[?.0]`

D. `students?.0`

---