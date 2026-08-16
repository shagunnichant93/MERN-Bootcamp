Absolutely. 👍 We completed **`find()`**, so let's move to the next array topic in the same format we've been following.

# 📘 JavaScript Array Method — `reduce()`

Don't worry if `reduce()` looks confusing at first. We'll learn it slowly with simple examples.

---

## 1. What is `reduce()`?

`reduce()` is an **array method used to reduce all elements of an array into a single final value**.

Think of it like this:

```text
Many values
    ↓
reduce()
    ↓
One final value
```

For example:

```javascript
let numbers = [10, 20, 30, 40];
```

We can use `reduce()` to calculate the total:

```text
10 + 20 + 30 + 40
        ↓
       100
```

So:

```javascript
let total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);
```

Output:

```text
100
```

---

# 2. Why do we use `reduce()`?

`reduce()` is useful when we want to calculate **one final result** from many array elements.

Common examples:

* Calculate total price 🛒
* Calculate total salary
* Calculate total bank balance
* Calculate total marks
* Calculate average
* Count items
* Calculate totals from API data

---

# 3. Basic Syntax

```javascript
array.reduce((accumulator, element) => {
    return accumulator + element;
}, initialValue);
```

There are two important things here:

### `accumulator`

Think of it as a **box that keeps the result so far**.

### `element`

The current element being processed.

### `initialValue`

The starting value of the accumulator.

---

# 4. Very Easy Example 🧒

Suppose:

```javascript
let numbers = [10, 20, 30];
```

We want:

```text
10 + 20 + 30 = 60
```

Code:

```javascript
let total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);
```

Think about it like this:

```text
Start: 0

0 + 10 = 10
10 + 20 = 30
30 + 30 = 60

Final answer = 60
```

That's the basic idea of `reduce()`.

---

# 5. Shopping Cart Example 🛒

This is where `reduce()` becomes very useful.

```javascript
let prices = [65000, 1000, 2500, 20000];

let total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(`Total: ₹${total}`);
```

Output:

```text
Total: ₹88500
```

Instead of manually doing:

```javascript
65000 + 1000 + 2500 + 20000
```

`reduce()` calculates the total for us.

---

# 6. `reduce()` with Product Objects

This is even more important for real applications.

```javascript
let products = [
    { name: "Laptop", price: 65000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2500 }
];
```

We can calculate the total:

```javascript
let total = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log(`Total: ₹${total}`);
```

Output:

```text
Total: ₹68500
```

Notice:

```text
product
   ↓
product.price
   ↓
added to sum
```

---

# 7. Hospital Example 🏥

Suppose we have patient bills:

```javascript
let bills = [5000, 3000, 7000, 2000];

let totalBill = bills.reduce((total, bill) => {
    return total + bill;
}, 0);

console.log(`Total Hospital Bill: ₹${totalBill}`);
```

Output:

```text
Total Hospital Bill: ₹17000
```

---

# 8. Banking Example 🏦

Suppose we have account balances:

```javascript
let balances = [15000, 25000, 75000, 45000];

let totalBalance = balances.reduce((total, balance) => {
    return total + balance;
}, 0);

console.log(`Total Bank Balance: ₹${totalBalance}`);
```

Output:

```text
Total Bank Balance: ₹160000
```

---

# 9. `reduce()` vs `map()` vs `filter()` vs `find()`

This is VERY important.

| Method     | Purpose                          | Returns        |
| ---------- | -------------------------------- | -------------- |
| `map()`    | Transform every element          | New array      |
| `filter()` | Select matching elements         | New array      |
| `find()`   | Find first matching element      | Single element |
| `reduce()` | Combine elements into one result | Single value   |

Think:

```text
map()
↓
Many → Many

filter()
↓
Many → Fewer

find()
↓
Many → One element

reduce()
↓
Many → One final result
```

---

# 10. Does `reduce()` modify the original array?

No.

`reduce()` does **not modify the original array**.

Example:

```javascript
let numbers = [10, 20, 30];

let total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(numbers);
```

Original array remains:

```text
10,20,30
```

---

# 11. Important Points ⭐

Remember these:

* `reduce()` is an **array method**
* It processes every element
* It produces **one final result**
* It commonly performs calculations
* It uses an **accumulator**
* It can have an **initial value**
* It doesn't modify the original array

---

# 📝 20 Detailed Practice / Interview Questions

Answer these in the same way you've been answering our previous topics.

### Basic

1. What is `reduce()`?
2. Is `reduce()` a method or property?
3. What does `reduce()` generally return?
4. What is an accumulator?
5. What is the purpose of the initial value?
6. Write the basic syntax of `reduce()`.
7. What happens to the accumulator during each iteration?
8. Does `reduce()` modify the original array?
9. Is `reduce()` mutable or immutable?
10. Can `reduce()` be used to calculate a total?

### Comparison

11. Explain the difference between `reduce()` and `map()`.
12. Explain the difference between `reduce()` and `filter()`.
13. Explain the difference between `reduce()` and `find()`.
14. Why would we use `reduce()` instead of a normal loop for calculating a total?
15. Can `reduce()` work with an array of objects?

### Real-world

16. How can `reduce()` be used in a shopping cart?
17. How can `reduce()` be used in a hospital management system?
18. How can `reduce()` be used in a banking system?
19. How can `reduce()` be useful when processing API data?
20. Explain `reduce()` in your own words with a real-world example.

---

# 🧠 MCQs

### 1. What is the main purpose of `reduce()`?

a) Find an element
b) Remove an element
c) Produce one final result from array elements
d) Sort an array

### 2. Which value stores the result during `reduce()`?

a) index
b) accumulator
c) element
d) array

### 3. What does this return?

```javascript
let numbers = [10, 20, 30];

numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
```

a) `[60]`
b) `30`
c) `60`
d) `undefined`

### 4. Does `reduce()` modify the original array?

a) Yes
b) No
c) Always
d) Only for numbers

### 5. Which method is best suited for calculating the total price of products?

a) `find()`
b) `filter()`
c) `reduce()`
d) `includes()`

---

## 💻 Coding Practice

We'll follow the **same practice style as push/pop/filter**.

### Practice 1 — Total Numbers

Create:

```text
exampleReduce.js
```

Use:

```javascript
let numbers = [10, 20, 30, 40, 50];
```

Use `reduce()` to calculate the total.

Expected:

```text
Total: 150
```

---

### Practice 2 — Shopping Cart Total

Create:

```text
shoppingCartReduce.js
```

Use:

```javascript
let products = [
    { name: "Laptop", price: 65000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2500 },
    { name: "Monitor", price: 20000 },
    { name: "Headphones", price: 5000 }
];
```

Calculate the **total price** using `reduce()`.

Expected:

```text
Shopping Cart
------------------
Laptop - ₹65000
Mouse - ₹1000
Keyboard - ₹2500
Monitor - ₹20000
Headphones - ₹5000
------------------
Total Amount: ₹93500
```

---

### Practice 3 — Hospital Bills

Create:

```text
hospitalReduce.js
```

Use:

```javascript
let bills = [5000, 3000, 7000, 2000];
```

Calculate the total hospital bill.

Expected:

```text
Hospital Bills
------------------
Total Bill: ₹17000
```

---

### Practice 4 — Bank Balances

Create:

```text
bankReduce.js
```

Use:

```javascript
let accounts = [
    { accountNo: "ACC1001", balance: 15000 },
    { accountNo: "ACC1002", balance: 75000 },
    { accountNo: "ACC1003", balance: 25000 },
    { accountNo: "ACC1004", balance: 45000 }
];
```

Use `reduce()` to calculate the **total balance**.

Expected:

```text
Bank Accounts
------------------
Total Balance: ₹160000
```

---

### Practice 5 — Student Marks ⭐

Create:

```text
studentReduce.js
```

Use:

```javascript
let marks = [80, 75, 90, 85, 70];
```

Use `reduce()` to calculate the **total marks**.

Expected:

```text
Student Marks
------------------
Total Marks: 400
```

---

### Practice 6 — Total Cart Quantity 🔥

Use:

```javascript
let cart = [
    { product: "Laptop", quantity: 1 },
    { product: "Mouse", quantity: 2 },
    { product: "Keyboard", quantity: 1 },
    { product: "Headphones", quantity: 3 }
];
```

Use `reduce()` to calculate the **total number of items**.

Expected:

```text
Shopping Cart
------------------
Total Items: 7
```
