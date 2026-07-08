Excellent! 🎉

# MERN Bootcamp

## Module 0 – Lesson 4

# HTTP – How Frontend Talks to Backend

> **This is one of the most important lessons in your entire MERN journey.**

After today, you'll understand how:

* React talks to Node.js
* Node.js talks to MongoDB
* APIs work
* Postman works
* REST APIs work

---

# Today's Objective

By the end of this lesson, you'll understand:

* What is HTTP?
* Why do we need HTTP?
* What problem does it solve?
* Request
* Response
* URL
* Methods (GET, POST, PUT, DELETE)
* Status Codes
* Real-world examples
* Interview questions

---

# First Question

Suppose your friend is in another city.

How do you communicate?

You have many options.

* Phone Call 📞
* WhatsApp 💬
* Email 📧
* Letter ✉️

These are all **ways of communication**.

---

Now imagine:

React wants to ask Node.js:

> "Give me all employees."

How will React talk to Node.js?

The answer is:

# HTTP

---

# What is HTTP?

### Definition

**HTTP (HyperText Transfer Protocol)** is a set of rules that allows a browser or frontend to communicate with a server.

Don't worry about the full form.

Just remember:

> **HTTP = Language used by Frontend and Backend to communicate.**

---

# Why Do We Need HTTP?

Imagine you speak only English.

Your friend speaks only Japanese.

Can you communicate?

❌ No.

You need a common language.

Similarly:

```text
React
```

and

```text
Node.js
```

need a common language.

That language is:

```text
HTTP
```

---

# Real World Example

Imagine you're at a restaurant.

You tell the waiter:

> One Veg Burger please.

This is a

## Request

The waiter goes to the kitchen.

The chef prepares the burger.

The waiter brings it back.

This is a

## Response

---

Exactly the same happens in MERN.

```text
React

↓

Request

↓

Node.js

↓

Database

↓

Node.js

↓

Response

↓

React
```

---

# What is a Request?

A request means:

> **Frontend asking Backend for something.**

Examples:

```text
Login

Get Products

Search Employees

Save Order

Delete Employee
```

Every one of these is a request.

---

# What is a Response?

Backend replies.

Examples:

```text
Login Successful

Invalid Password

Product List

Employee Saved

Order Created
```

That's called a response.

---

# Diagram

```text
React

↓

"Give me Employees"

↓

Node.js

↓

MongoDB

↓

Employee Data

↓

Node.js

↓

React

↓

Display Employees
```

---

# What is a URL?

Suppose I say

```text
https://amazon.in
```

That's a URL.

Think of it like a house address.

Example:

```text
House Address

↓

Flat 302
Green Residency
Hyderabad
```

Website:

```text
https://amazon.in/products
```

The URL tells the browser **where to send the request**.

---

# HTTP Methods

This is extremely important.

Think of CRUD operations.

| CRUD   | HTTP Method |
| ------ | ----------- |
| Read   | GET         |
| Create | POST        |
| Update | PUT         |
| Delete | DELETE      |

---

## GET

Meaning:

> I want data.

Example:

```text
Show all employees.
```

Restaurant example:

You ask:

> Show me the menu.

You are not buying anything.

You're only viewing.

That's GET.

---

## POST

Meaning:

> Create something new.

Example:

```text
Create Employee
```

Restaurant:

You place an order.

New order created.

That's POST.

---

## PUT

Meaning:

> Update existing data.

Example:

```text
Update Employee Salary
```

Restaurant:

You say:

> Change my pizza from Medium to Large.

Existing order modified.

That's PUT.

---

## DELETE

Meaning:

> Remove data.

Example:

```text
Delete Employee
```

Restaurant:

Cancel the order.

That's DELETE.

---

# Memory Trick

Remember this sentence:

```text
GET = Get

POST = Produce

PUT = Update

DELETE = Destroy
```

Or simply:

```text
G

P

P

D
```

---

# Real MERN Example

Imagine an Employee Management System.

### View Employees

```text
GET /employees
```

---

### Add Employee

```text
POST /employees
```

---

### Update Employee

```text
PUT /employees/101
```

---

### Delete Employee

```text
DELETE /employees/101
```

Don't worry about the syntax yet—we'll write these ourselves later.

---

# What are Status Codes?

Suppose you order pizza.

Possible responses:

Pizza delivered ✅

Pizza not available ❌

Restaurant closed 🚫

Similarly, servers respond with **status codes**.

---

## 200

```text
Success
```

Everything worked.

---

## 201

```text
Created
```

New employee created.

---

## 400

```text
Bad Request
```

Something wrong with the data you sent.

---

## 401

```text
Unauthorized
```

Login required.

---

## 404

```text
Not Found
```

Page or resource doesn't exist.

---

## 500

```text
Internal Server Error
```

Server has a problem.

---

# Restaurant Example

Customer:

> One Burger.

Restaurant replies:

Burger delivered.

Equivalent:

```text
200 OK
```

---

Customer:

> Dragon Burger.

Restaurant:

We don't sell it.

Equivalent:

```text
404 Not Found
```

---

Customer:

Pays with fake money.

Equivalent:

```text
401 Unauthorized
```

---

Kitchen catches fire.

Equivalent:

```text
500 Internal Server Error
```

---

# Complete Flow

```text
You

↓

Browser

↓

HTTP Request

↓

Node.js Server

↓

MongoDB

↓

Node.js

↓

HTTP Response

↓

Browser

↓

You
```

---

# Compare with .NET

| ASP.NET Core     | MERN           |
| ---------------- | -------------- |
| HTTP Request     | HTTP Request   |
| Controller       | Express Route  |
| Service          | Business Logic |
| Entity Framework | Mongoose       |
| SQL Server       | MongoDB        |

The concepts are very similar; only the technologies differ.

---

# Interview Question

**Q: What is HTTP?**

**Answer:**

> HTTP (HyperText Transfer Protocol) is a communication protocol used by clients (such as browsers or React applications) and servers to exchange requests and responses over the web.

---

# Mini Exercise

## Q1

Which HTTP method is used to **read data**?

a) POST

b) GET

c) DELETE

---

## Q2

Which HTTP method is used to **create a new employee**?

a) GET

b) POST

c) PUT

---

## Q3

Which HTTP method is used to **update an employee**?

a) PUT

b) DELETE

c) GET

---

## Q4

Which status code means **Success**?

a) 404

b) 500

c) 200

---

## Q5 (Thinking Question)

Imagine there was **no HTTP**.

How would React communicate with Node.js?

What problem would developers face?

Think about today's lesson and answer in your own words.

---

# 📝 Today's Assignment

Create a file:

```text
Day-04/HTTP-Notes.md
```

Write:

1. What is HTTP?
2. Why do we need HTTP?
3. Difference between Request and Response.
4. Explain GET, POST, PUT, and DELETE using the **restaurant example** (don't copy my explanation—write it in your own words).

---

# 📚 Revision (Days 1–4)

Before we move to the next lesson, try answering these without looking:

1. What is the difference between a website and a web application?
2. What does DNS do?
3. What is the difference between the frontend and the backend?
4. What is HTTP?
5. Name the four main HTTP methods and what each is used for.

If you can answer these confidently, your foundation is becoming solid.

---

# 👨‍🏫 Mentor's Note

From the **next module**, we'll start installing tools and writing actual code. We'll set up:

* Visual Studio Code
* Node.js
* Git
* GitHub
* Our first JavaScript program

We'll also start making **daily Git commits**, and I'll explain every Git command from scratch so you don't have to memorize anything. We'll build your GitHub profile alongside your MERN skills, just like you would in a real development team.
