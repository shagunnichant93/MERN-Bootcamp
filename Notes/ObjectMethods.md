# 📘 Module 6 — Objects

## Topic 8: Methods in Objects

Great. We completed the `in` operator. Now we move to the **next topic: Methods**.

---

## 1. What is a Method?

A **method is a function stored inside an object**.

You already know what a function is:

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

Now we can put that function inside an object:

```javascript
let student = {
    name: "Rahul",

    greet: function() {
        console.log("Hello Rahul");
    }
};

student.greet();
```

### Output:

```text
Hello Rahul
```

So:

> **Function inside an object = Method**

---

# 2. Real-Life Example 🏦

Imagine a bank account.

A bank account has **data**:

```text
accountNumber
name
balance
```

It also has **actions**:

```text
deposit()
withdraw()
checkBalance()
```

In JavaScript:

```javascript
let account = {
    accountNumber: 101,
    name: "Rahul",
    balance: 5000,

    deposit: function() {
        console.log("Money deposited");
    },

    withdraw: function() {
        console.log("Money withdrawn");
    },

    checkBalance: function() {
        console.log("Balance checked");
    }
};
```

Here:

* `accountNumber` → property
* `name` → property
* `balance` → property
* `deposit()` → method
* `withdraw()` → method
* `checkBalance()` → method

---

# 3. How to Call a Method?

We use the **dot operator `.`**.

```javascript
account.deposit();
```

```javascript
account.withdraw();
```

```javascript
account.checkBalance();
```

### Example

```javascript
let student = {
    name: "Amit",

    greet: function() {
        console.log("Hello Student");
    }
};

student.greet();
```

Output:

```text
Hello Student
```

---

# 4. Method Can Use Object Properties

This is where methods become really useful.

```javascript
let student = {
    name: "Amit",
    age: 20,

    introduce: function() {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    }
};

student.introduce();
```

Output:

```text
My name is Amit
My age is 20
```

Notice this:

```javascript
this.name
```

and:

```javascript
this.age
```

We'll study `this` **in much more depth later** in Advanced JavaScript.

For now, remember:

> `this` refers to the object that is calling the method.

Here:

```javascript
student.introduce();
```

So `this` refers to `student`.

---

# 5. Another Real-World Example 🍔

Imagine a food-ordering application.

```javascript
let order = {
    item: "Pizza",
    price: 500,
    quantity: 2,

    calculateTotal: function() {
        console.log(this.price * this.quantity);
    }
};

order.calculateTotal();
```

Output:

```text
1000
```

### How it works

```text
order
 │
 ├── item → "Pizza"
 ├── price → 500
 ├── quantity → 2
 │
 └── calculateTotal() → method
          │
          └── this.price * this.quantity
                    ↓
                  500 × 2
                    ↓
                  1000
```

This is one of the main reasons we use methods inside objects.

The **data and the operation performed on that data can stay together**.

---

# 6. Modern Method Syntax ⭐

There is a shorter way to create methods.

Instead of:

```javascript
let student = {
    name: "Rahul",

    greet: function() {
        console.log("Hello");
    }
};
```

We can write:

```javascript
let student = {
    name: "Rahul",

    greet() {
        console.log("Hello");
    }
};
```

Both are methods.

### Old style

```javascript
greet: function() {
    console.log("Hello");
}
```

### Modern style

```javascript
greet() {
    console.log("Hello");
}
```

You will see the **modern syntax very frequently** in real JavaScript applications.

---

# 7. Method With Parameters

A method can also accept parameters.

```javascript
let calculator = {
    add: function(a, b) {
        console.log(a + b);
    }
};

calculator.add(10, 20);
```

Output:

```text
30
```

Modern syntax:

```javascript
let calculator = {
    add(a, b) {
        console.log(a + b);
    }
};

calculator.add(10, 20);
```

---

# 8. Method Can Return a Value

A method can use `return`.

```javascript
let calculator = {
    add(a, b) {
        return a + b;
    }
};

let result = calculator.add(10, 20);

console.log(result);
```

Output:

```text
30
```

Think of it like:

```text
calculator.add(10, 20)
          ↓
       10 + 20
          ↓
         30
          ↓
       return
          ↓
       result
```

---

# 9. Important Difference

Don't confuse **property** and **method**.

```javascript
let student = {
    name: "Rahul",
    age: 20,

    greet() {
        console.log("Hello");
    }
};
```

Here:

```javascript
student.name
```

is a **property**.

```javascript
student.age
```

is a **property**.

But:

```javascript
student.greet()
```

is a **method**.

### Easy memory trick 🧠

> **Property = information/data**
> **Method = action/behavior**

Example:

```text
Car
│
├── brand → "Toyota"       Property
├── color → "Red"          Property
├── speed → 100            Property
│
├── start()                Method
├── stop()                 Method
└── accelerate()           Method
```

---

# 10. Practical Example — User Profile 👤

```javascript
let user = {
    name: "Shagun",
    age: 30,
    city: "Delhi",

    showProfile() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("City: " + this.city);
    }
};

user.showProfile();
```

Output:

```text
Name: Shagun
Age: 30
City: Delhi
```

---

# 11. Practical Example — Shopping Cart 🛒

```javascript
let product = {
    name: "Laptop",
    price: 50000,
    quantity: 2,

    getTotal() {
        return this.price * this.quantity;
    }
};

console.log(product.getTotal());
```

Output:

```text
100000
```

This is closer to how objects are used in real applications.

---

# 12. Interview Question 🎯

### Q1. What is a method in JavaScript?

**Answer:**

A method is a function defined as a property of an object. It represents an action or behavior associated with that object.

Example:

```javascript
let user = {
    name: "Rahul",

    greet() {
        console.log("Hello");
    }
};

user.greet();
```

Here, `greet()` is a method of the `user` object.

---

### Q2. What is the difference between a property and a method?

| Property        | Method             |
| --------------- | ------------------ |
| Stores data     | Performs an action |
| Usually a value | Usually a function |
| `name: "Rahul"` | `greet() {}`       |
| `user.name`     | `user.greet()`     |

---

# 13. Interview Question — Output Prediction 🔥

What will be the output?

```javascript
let product = {
    price: 100,
    quantity: 3,

    getTotal() {
        return this.price * this.quantity;
    }
};

console.log(product.getTotal());
```

Think about it before looking at the answer.

### Answer:

```text
300
```

Because:

```text
this.price     → 100
this.quantity  → 3

100 × 3 = 300
```

---

# 14. Your Hands-On Exercise 💻

Create an object called `employee`.

It should have:

```text
name
salary
department
```

And one method:

```text
showDetails()
```

The method should print:

```text
Name: ...
Salary: ...
Department: ...
```

For example:

```javascript
let employee = {
    // your code here
};
```

### 🎯 Challenge 2

Create a `bankAccount` object with:

```text
accountHolder
balance
```

And these methods:

```text
deposit(amount)
withdraw(amount)
checkBalance()
```

For example:

```javascript
account.deposit(1000);
account.withdraw(500);
account.checkBalance();
```

Try both exercises **without looking for the solution first**.

---

## 📝 Notes for `Notes/JavaScript/Objects`

Remember these core points:

```text
Object
   ↓
Properties → Data
Methods    → Actions
```

```javascript
let object = {
    property: value,

    method() {
        // action
    }
};
```

Call a method:

```javascript
object.method();
```

Access a property:

```javascript
object.property;
```

Use object data inside a method:

```javascript
this.property
```

---