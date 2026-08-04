Excellent! 🎉

Welcome to the **final topic of Module 3**.

This is one of the **most important JavaScript topics** because you'll use it **every day** in:

* ⚛️ React
* 🟢 Node.js
* 🚀 Express.js
* 🍃 MongoDB
* REST APIs
* Console logging
* Dynamic HTML
* Email templates
* Reports
* Error messages

If someone writes modern JavaScript today, they almost always use **Template Literals** instead of string concatenation.

---

# Module 3 — Strings

# Topic 13 — Template Literals

> ⭐ Template Literals provide an easier and cleaner way to create strings and insert variables or expressions.

---

# Lesson Flow

1. What are Template Literals?
2. Why do we need them?
3. Syntax
4. Variable Interpolation
5. Expressions inside Template Literals
6. Multi-line Strings
7. Real-life Examples
8. Method Chaining
9. Common Mistakes
10. Coding Assignments
11. Mini Project
12. Interview Questions
13. MCQs
14. Notes
15. Git Practice

---

# 1. What are Template Literals?

A **Template Literal** is a special way to create strings using **backticks (` `)** instead of single (`'`) or double (`"`) quotes.

It allows you to:

* Insert variables directly.
* Insert expressions.
* Create multi-line strings.
* Write cleaner and more readable code.

---

# Why do we need Template Literals?

Before ES6, we used string concatenation:

```javascript
let name = "John";
let city = "Delhi";

console.log("Name: " + name + ", City: " + city);
```

Output:

```text
Name: John, City: Delhi
```

This works, but becomes difficult to read when many variables are involved.

With Template Literals:

```javascript
let name = "John";
let city = "Delhi";

console.log(`Name: ${name}, City: ${city}`);
```

Output:

```text
Name: John, City: Delhi
```

Much cleaner.

---

# 2. Syntax

```javascript
`Text ${variable}`
```

or

```javascript
`Text ${expression}`
```

Notice:

* Uses **backticks (` `)**, **not** single or double quotes.
* Variables or expressions go inside `${}`.

---

# 3. Variable Interpolation

Example 1

```javascript
let name = "Rahul";

console.log(`Hello ${name}`);
```

Output

```text
Hello Rahul
```

---

Example 2

```javascript
let employee = "Shagun";
let company = "Infosys";

console.log(`${employee} works at ${company}`);
```

Output

```text
Shagun works at Infosys
```

---

Example 3

```javascript
let city = "Delhi";

console.log(`Welcome to ${city}`);
```

Output

```text
Welcome to Delhi
```

---

# 4. Expressions inside Template Literals

You can even perform calculations.

```javascript
let a = 20;
let b = 10;

console.log(`Sum = ${a + b}`);
```

Output

```text
Sum = 30
```

---

Another example

```javascript
let price = 500;
let quantity = 4;

console.log(`Total = ${price * quantity}`);
```

Output

```text
Total = 2000
```

---

# 5. Multi-line Strings

Without Template Literals

```javascript
console.log("Hello\nWelcome\nJavaScript");
```

With Template Literals

```javascript
console.log(`Hello
Welcome
JavaScript`);
```

Output

```text
Hello
Welcome
JavaScript
```

---

# 6. Real-Life Examples

## Employee

```javascript
let employee = "John";
let salary = 80000;

console.log(`Employee: ${employee}`);
console.log(`Salary: ${salary}`);
```

---

## Banking

```javascript
let account = "ACC1234";
let balance = 25000;

console.log(`Account: ${account}`);
console.log(`Balance: ₹${balance}`);
```

---

## Hospital

```javascript
let patient = "Rahul";
let disease = "Fever";

console.log(`Patient: ${patient}`);
console.log(`Disease: ${disease}`);
```

---

## Shopping

```javascript
let product = "Laptop";
let price = 65000;

console.log(`Product: ${product}`);
console.log(`Price: ₹${price}`);
```

---

## Food Ordering

```javascript
let food = "Pizza";
let quantity = 2;

console.log(`You ordered ${quantity} ${food}`);
```

---

# 7. Method Chaining inside Template Literals

```javascript
let name = "  JOHN DOE  ";

console.log(`Name: ${name.trim().toLowerCase()}`);
```

Output

```text
Name: john doe
```

---

# 8. Common Mistakes

## Mistake 1

Using single quotes.

❌ Wrong

```javascript
'Hello ${name}'
```

Output

```text
Hello ${name}
```

---

Correct

```javascript
`Hello ${name}`
```

---

## Mistake 2

Forgetting `${}`

Wrong

```javascript
`Hello name`
```

Correct

```javascript
`Hello ${name}`
```

---

## Mistake 3

Using parentheses instead of braces.

Wrong

```javascript
`Hello $(name)`
```

Correct

```javascript
`Hello ${name}`
```

---

# 9. Coding Assignments (10)

Create these files inside **01-JavaScript**.

### 1. employeeDetails.js

Display:

```
Employee: John
Salary: 70000
```

---

### 2. studentDetails.js

Display:

```
Student: Rahul
Course: MERN Stack
```

---

### 3. bankDetails.js

Display:

```
Account: ACC1234
Balance: ₹25000
```

---

### 4. hospitalDetails.js

Display:

```
Patient: Amit
Disease: Fever
```

---

### 5. shoppingBill.js

Display:

```
Product: Laptop
Price: ₹65000
```

---

### 6. foodOrder.js

Display:

```
You ordered 3 Burgers
```

---

### 7. movieTicket.js

Display:

```
Movie: Inception
Seats: 4
```

---

### 8. travelBooking.js

Display:

```
Passenger: Priya
Destination: Goa
```

---

### 9. electricityBill.js

Display:

```
Customer: Mohan
Bill Amount: ₹1800
```

---

### 10. loginMessage.js

Display:

```
Welcome Rahul!
```

---

# 10. Mini Project

## Employee Salary Slip

Store:

```javascript
let employee = "John";
let department = "IT";
let salary = 75000;
```

Display:

```
Employee: John
Department: IT
Salary: ₹75000
```

using **Template Literals only**.

---

# 11. Interview Questions

## Beginner

1. What are Template Literals?
2. Which symbol is used for Template Literals?
3. Why do we use Template Literals?
4. Can variables be inserted inside Template Literals?
5. What is variable interpolation?

---

## Intermediate

6. What is the syntax for inserting variables?
7. Can expressions be used inside Template Literals?
8. Output?

```javascript
let a = 20;
let b = 10;

console.log(`Sum = ${a + b}`);
```

9. Can Template Literals create multi-line strings?
10. Why are they more readable than string concatenation?

---

## Advanced

11. Can methods be called inside `${}`? Give an example.
12. Do Template Literals modify variables?
13. Can function calls be used inside `${}`?
14. Difference between Template Literals and string concatenation?
15. Why are Template Literals widely used in React?

---

## Scenario-Based

16. How would you display an employee's name and salary?
17. How would you display a customer's bill amount?
18. Name four real-world uses of Template Literals.
19. How are Template Literals useful in Node.js?
20. How are Template Literals useful in React?

---

# 12. MCQs

### Q1.

Template Literals use:

A) Single quotes

B) Double quotes

C) Backticks

D) Parentheses

---

### Q2.

Variables are inserted using:

A) `$(name)`

B) `${name}`

C) `[name]`

D) `<name>`

---

### Q3.

Output?

```javascript
let name = "John";
console.log(`Hello ${name}`);
```

A)

```
Hello John
```

B)

```
Hello ${name}
```

C)

```
Hello
```

D)

```
Error
```

---

### Q4.

Can expressions be used inside `${}`?

A) No

B) Yes

---

### Q5.

Which is more readable for modern JavaScript?

A) String concatenation

B) Template Literals

---

# 13. Notes (`Strings.md`)

Add:

```md
## Template Literals

- Uses backticks (` `).
- Supports variable interpolation with `${}`.
- Can evaluate expressions.
- Supports multi-line strings.
- Improves code readability.

### Common Uses

- Employee details
- Bills
- Login messages
- Reports
- API responses
```

---

# 14. Git Practice

```bash
git status
git add .
git commit -m "Completed JavaScript Template Literals"
git push
```

---

# 💡 Interview Tip

A very common interview question is:

**"What is the difference between string concatenation and Template Literals?"**

| String Concatenation          | Template Literals                     |
| ----------------------------- | ------------------------------------- |
| Uses `+` operator             | Uses backticks (` `)                  |
| Harder to read                | Cleaner and easier to read            |
| Difficult with many variables | Easy with `${}`                       |
| Poor for multi-line strings   | Supports multi-line strings naturally |

---