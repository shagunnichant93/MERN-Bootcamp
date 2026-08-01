# **MERN Bootcamp – Day 15**

## **Module 2 – Advanced Functions**

# **Topic: Higher Order Functions (HOF)**

---

# What are Higher Order Functions?

A **Higher Order Function (HOF)** is a function that **either accepts another function as an argument or returns another function.**

In simple words:

> A Higher Order Function is a function that works with other functions.

Example:

```javascript
function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greet);
```

Output

```
Hello
```

Here

* `execute()` → Higher Order Function
* `greet()` → Callback Function

---

# Real Life Example

Imagine a restaurant.

Customer orders food.

Restaurant accepts the order.

Chef prepares food.

Delivery boy delivers it.

Restaurant itself doesn't cook.

It simply **accepts another function (chef's work)** and executes it.

Exactly how Higher Order Functions work.

---

# Syntax

```javascript
function higherOrder(callback) {
    callback();
}
```

---

# Example 1

## helloHOF.js

```javascript
function welcome() {
    console.log("Welcome to MERN");
}

function executeTask(task) {
    task();
}

executeTask(welcome);
```

Output

```
Welcome to MERN
```

---

# Example 2

## calculatorHOF.js

```javascript
function add(a, b) {
    console.log(a + b);
}

function calculate(a, b, operation) {
    operation(a, b);
}

calculate(20, 10, add);
```

Output

```
30
```

---

# Example 3

## bankHOF.js

```javascript
function deposit() {
    console.log("Money Deposited");
}

function transaction(action) {
    action();
}

transaction(deposit);
```

Output

```
Money Deposited
```

---

# Example 4

## loginHOF.js

```javascript
function loginSuccess() {
    console.log("Dashboard Loaded");
}

function login(callback) {
    console.log("Login Successful");
    callback();
}

login(loginSuccess);
```

Output

```
Login Successful
Dashboard Loaded
```

---

# Example 5

## shoppingHOF.js

```javascript
function payment() {
    console.log("Payment Successful");
}

function checkout(callback) {
    console.log("Items Checked Out");
    callback();
}

checkout(payment);
```

Output

```
Items Checked Out
Payment Successful
```

---

# Example 6

## movieHOF.js

```javascript
function enjoyMovie() {
    console.log("Enjoy the Movie");
}

function bookTicket(callback) {
    console.log("Ticket Booked");
    callback();
}

bookTicket(enjoyMovie);
```

Output

```
Ticket Booked
Enjoy the Movie
```

---

# Example 7

## restaurantHOF.js

```javascript
function prepareFood() {
    console.log("Food Prepared");
}

function placeOrder(callback) {
    console.log("Order Accepted");
    callback();
}

placeOrder(prepareFood);
```

Output

```
Order Accepted
Food Prepared
```

---

# Example 8

## hospitalHOF.js

```javascript
function assignDoctor() {
    console.log("Doctor Assigned");
}

function registerPatient(callback) {
    console.log("Patient Registered");
    callback();
}

registerPatient(assignDoctor);
```

Output

```
Patient Registered
Doctor Assigned
```

---

# Example 9

## employeeHOF.js

```javascript
function creditSalary() {
    console.log("Salary Credited");
}

function verifyEmployee(callback) {
    console.log("Employee Verified");
    callback();
}

verifyEmployee(creditSalary);
```

Output

```
Employee Verified
Salary Credited
```

---

# Example 10

## examHOF.js

```javascript
function publishResult() {
    console.log("Result Published");
}

function completeExam(callback) {
    console.log("Exam Completed");
    callback();
}

completeExam(publishResult);
```

Output

```
Exam Completed
Result Published
```

---

# Example 11 (Passing Different Functions)

```javascript
function add(a, b) {
    console.log("Addition:", a + b);
}

function subtract(a, b) {
    console.log("Subtraction:", a - b);
}

function multiply(a, b) {
    console.log("Multiplication:", a * b);
}

function calculator(a, b, operation) {
    operation(a, b);
}

calculator(20, 10, add);
calculator(20, 10, subtract);
calculator(20, 10, multiply);
```

Output

```
Addition: 30
Subtraction: 10
Multiplication: 200
```

---

# Example 12 (Anonymous Function)

```javascript
function process(callback) {
    console.log("Processing...");
    callback();
}

process(function () {
    console.log("Process Complete");
});
```

Output

```
Processing...
Process Complete
```

---

# Example 13 (Arrow Function)

```javascript
function download(callback) {
    console.log("Downloading...");
    callback();
}

download(() => {
    console.log("Download Complete");
});
```

Output

```
Downloading...
Download Complete
```

---

# Real-Life Uses of Higher Order Functions

### Payment Gateway

```
Verify Payment
↓

Send Receipt
```

---

### Login System

```
Login
↓

Load Dashboard
```

---

### Food Delivery

```
Place Order
↓

Prepare Food
↓

Deliver Food
```

---

### OTP Verification

```
Verify OTP
↓

Allow Login
```

---

### Online Shopping

```
Checkout
↓

Payment
↓

Invoice
```

---

# Why Higher Order Functions?

They make code:

* Reusable
* Flexible
* Cleaner
* Easier to maintain
* Dynamic (you can change behavior by passing different functions)

---

# Difference

| Callback Function        | Higher Order Function            |
| ------------------------ | -------------------------------- |
| Passed as an argument    | Accepts another function         |
| Performs the actual task | Decides when to execute the task |

Example:

```javascript
function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greet);
```

* `greet` → Callback
* `execute` → Higher Order Function

---

# Common Mistake

❌ Wrong

```javascript
execute(greet());
```

This executes `greet` immediately and passes its return value.

✅ Correct

```javascript
execute(greet);
```

This passes the function itself, allowing `execute` to call it later.

---

# Mini Assignment (10 Programs)

1. Create `paymentHOF.js` (verify payment → send receipt)
2. Create `otpHOF.js` (verify OTP → login)
3. Create `foodOrderHOF.js` (order → prepare → deliver)
4. Create `movieHOF.js` (book ticket → enjoy movie)
5. Create `hospitalHOF.js` (register patient → assign doctor)
6. Create `employeeHOF.js` (verify employee → credit salary)
7. Create `shoppingHOF.js` (checkout → payment)
8. Create `bankHOF.js` (deposit → SMS notification)
9. Create `calculatorHOF.js` (pass add, subtract, multiply callbacks)
10. Create `downloadHOF.js` (download → install)

---

# Quiz (Answer after completing the programs)

### Q1.

What is a Higher Order Function?

**a)** A variable

**b)** A function that accepts or returns another function

**c)** A loop

**d)** An array

---

### Q2.

Which line correctly passes a callback?

**a)** `execute(greet())`

**b)** `execute(greet)`

**c)** `greet(execute)`

**d)** `execute = greet`

---

### Q3.

What is the difference between a callback function and a Higher Order Function?

---

### Q4.

Can a Higher Order Function call different callback functions?

Yes / No

---

### Q5.

Give one real-life example where a Higher Order Function is useful.

---

# Interview Questions (Answer in Detail)

### Basic

1. What is a Higher Order Function?
2. What is a callback function?
3. What is the difference between a callback and a Higher Order Function?
4. Can a Higher Order Function accept multiple callback functions?
5. What happens if you write `execute(greet())` instead of `execute(greet)`?

### Intermediate

6. Why are Higher Order Functions considered reusable?
7. Can an arrow function be used as a callback? Explain with an example.
8. Where are Higher Order Functions commonly used in JavaScript?
9. What is callback hell? (If you don't know yet, simply write "Not covered yet.")
10. What are the advantages of Higher Order Functions over writing separate functions?

### Scenario-Based

11. A banking application must:

* Verify the user
* Process the payment
* Send an SMS confirmation

How would Higher Order Functions help organize this flow?

12. An e-commerce application must:

* Add items to the cart
* Process payment
* Generate an invoice

How can callbacks make this workflow cleaner?

13. Why are Higher Order Functions heavily used in asynchronous operations like API calls and event listeners?

---

📌 **Important:** Complete all 10 programs, run them, and then send me:

1. Screenshots of the outputs.
2. Answers to the Quiz.
3. Answers to the Interview Questions.

As before, I won't move to the next topic (**Scope**) until you type **"next"** after we've reviewed this day.
Perfect! 😊 This will probably be the most important session of Module 2. After this, Higher Order Functions will become one of the easiest topics for you.

# Module 2 - Extra Practice Session

## Higher Order Functions (Master Class)

Today, don't think like a programmer.

Think like a **manager assigning work to employees.**

---

# Example 1 - Office

There are two employees.

Employee 1 prints the report.

```javascript
function printReport() {
    console.log("Report Printed");
}
```

Employee 2 tells Employee 1 when to print.

```javascript
function manager(employee) {
    console.log("Manager gave permission");
    employee();
}
```

Now,

```javascript
manager(printReport);
```

Output

```
Manager gave permission
Report Printed
```

### Question

Who is the Higher Order Function?

A) printReport()

B) manager()

---

### Answer

✔ **manager()**

Why?

Because it accepts another function.

---

Who is the Callback?

✔ **printReport()**

Because it is passed into another function.

---

# Example 2 - Swiggy

Chef

```javascript
function prepareFood() {
    console.log("Food Ready");
}
```

Restaurant

```javascript
function takeOrder(chef) {
    console.log("Order Accepted");
    chef();
}
```

Call

```javascript
takeOrder(prepareFood);
```

Output

```
Order Accepted
Food Ready
```

Restaurant = ?

Chef = ?

---

Answer

Restaurant → Higher Order Function

Chef → Callback

---

# Example 3 - Bank

```javascript
function sendSMS() {
    console.log("SMS Sent");
}

function deposit(task) {
    console.log("Money Deposited");
    task();
}

deposit(sendSMS);
```

### Think carefully

Who accepts another function?

```
deposit()
```

So deposit is the HOF.

Who actually performs the work?

```
sendSMS()
```

So sendSMS is Callback.

---

# Example 4 - Hospital

```javascript
function prescribeMedicine() {
    console.log("Medicine Prescribed");
}

function doctor(callback) {
    console.log("Patient Checked");
    callback();
}

doctor(prescribeMedicine);
```

Question

Who is HOF?

Who is Callback?

---

Answer

doctor → HOF

prescribeMedicine → Callback

---

# Example 5 - OTP

```javascript
function login() {
    console.log("Login Successful");
}

function verifyOTP(callback) {
    console.log("OTP Verified");
    callback();
}

verifyOTP(login);
```

Question

Which function is HOF?

---

Answer

verifyOTP

Why?

Because it accepts another function.

---

# Example 6 - Calculator

```javascript
function add(a,b){
    console.log(a+b);
}

function calculate(a,b,operation){
    operation(a,b);
}

calculate(10,20,add);
```

Question

Who is HOF?

---

Answer

calculate()

Who is Callback?

add()

---

# Example 7 - Movie

```javascript
function enjoyMovie(){
    console.log("Enjoy Movie");
}

function bookTicket(callback){
    console.log("Ticket Booked");
    callback();
}

bookTicket(enjoyMovie);
```

HOF?

Callback?

---

Answer

bookTicket = HOF

enjoyMovie = Callback

---

# Golden Rule

Whenever you see

```javascript
function xyz(something)
```

Ask yourself

**Is `something` a function?**

If YES

Then xyz is probably a Higher Order Function.

---

Whenever you see

```javascript
something();
```

Ask yourself

Which function is executing?

That is the Callback.

---

# Visual Memory Trick

```
Customer
      │
      ▼
Restaurant (Higher Order Function)
      │
      ▼
Chef (Callback)
      │
      ▼
Pizza Ready
```

Restaurant never cooks.

Chef cooks.

Exactly the same in JavaScript.

---

# Another Visual

```
Higher Order Function
        │
        ▼
 Accepts Callback
        │
        ▼
Decides WHEN to execute
        │
        ▼
Callback Executes
        │
        ▼
Task Completed
```

---

# Interview Trick

If interviewer gives

```javascript
function greet(){
    console.log("Hello");
}

function execute(task){
    task();
}

execute(greet);
```

Never panic.

Just ask yourself

**Who accepted another function?**

```
execute()
```

Higher Order Function ✔

**Who got passed?**

```
greet()
```

Callback ✔

---

# Mini Quiz (Don't Run Code — Just Think)

### Q1

```javascript
function cook() {
    console.log("Cooking");
}

function kitchen(worker) {
    worker();
}

kitchen(cook);
```

Who is the Higher Order Function?

A) cook

B) kitchen

---

### Q2

```javascript
function paymentSuccess() {
    console.log("Receipt Sent");
}

function payment(callback) {
    callback();
}

payment(paymentSuccess);
```

Who is the Callback?

A) payment

B) paymentSuccess

---

### Q3

```javascript
function hello() {
    console.log("Hello");
}

hello();
```

Is there any Higher Order Function here?

A) Yes

B) No

---

### Q4

```javascript
function welcome() {
    console.log("Welcome");
}

function login(task) {
    console.log("Login");
    task();
}

login(welcome);
```

Which executes first?

A) welcome

B) login

---

### Q5

Real Life

Who is the Higher Order Function?

```
Restaurant Manager
Chef
```

---

# Interview Questions

### Basic

1. What is a Higher Order Function?
2. What is a Callback Function?
3. Difference between Higher Order Function and Callback?
4. Can a Higher Order Function return another function?
5. Can an Arrow Function be used as a callback?
6. Why are Higher Order Functions useful?

### Intermediate

7. Which one is the Higher Order Function?

```javascript
function greet(){
    console.log("Hello");
}

function execute(task){
    task();
}

execute(greet);
```

8. Which one is the Callback?

9. Why do React developers use Higher Order Functions everywhere?

10. Name five real-life examples where Higher Order Functions are useful.

### Scenario Based

11. Explain how HOF works in an Online Food Ordering App.

12. Explain how HOF works during Payment Processing.

13. Explain HOF using OTP Verification.

---

Take your time with these. Don't rush. Once you answer them, I'll know whether HOF has truly clicked for you. If there's still any confusion, we'll use even simpler analogies until it becomes second nature. You're building a strong foundation, and that's far more valuable than racing through the syllabus.
One Last Trick (This Never Fails)

Whenever you see code like this:

execute(greet);

Read it in English:

"execute receives greet."

So:

Receiver (execute) = Higher Order Function
Received (greet) = Callback

Another example:

login(verifyOTP);

Read:

"login receives verifyOTP."

login → Higher Order Function
verifyOTP → Callback

Another:

payment(sendSMS);

Read:

"payment receives sendSMS."

payment → Higher Order Function
sendSMS → Callback