Excellent! Welcome to **Day 1** of your MERN journey. 🎉

Since you asked me to teach you as if you know **nothing**, we'll start from the absolute basics. Don't worry if this feels very simple—this foundation will make everything else much easier.

---

# MERN Stack Bootcamp - Day 1

## Module 0 - Lesson 1

# What is a Web Application?

---

## First Question

Think about these apps:

* Amazon
* Swiggy
* Zomato
* Gmail
* Facebook

Question:

**Are they just websites?**

👉 **No.**

They are **Web Applications**.

---

# What is the Difference?

### Website

A website mainly provides information.

Examples:

* News website
* College website
* Company website

You mostly **read** information.

Example:

```text
You visit:
www.company.com

You read:
About Us
Services
Contact
```

No login, no placing orders, no saving data.

---

### Web Application

A web application allows you to **interact** with it.

Examples:

* Amazon
* Gmail
* Swiggy
* Netflix
* LinkedIn

You can:

* Login
* Register
* Search
* Buy products
* Upload files
* Send messages

It stores your data and responds to your actions.

---

# Real-Life Example

Imagine a **Restaurant**.

## Scenario 1 - Website

Outside the restaurant is a board.

It says:

```text
Today's Menu

Pizza
Burger
Pasta
```

You only **read** it.

That's like a website.

---

## Scenario 2 - Web Application

Now you enter the restaurant.

You:

* Sit down
* Order food
* Pay the bill
* Get updates
* Receive the food

Now you're interacting.

That's a web application.

---

# What Happens When You Open Amazon?

Suppose you type:

```text
www.amazon.in
```

What happens?

Many people think:

```text
Browser
↓

Amazon opens
```

Actually, many things happen.

---

# Simple Flow

```text
You
 │
 ▼
Browser (Chrome)
 │
 ▼
Internet
 │
 ▼
Amazon Server
 │
 ▼
Database
 │
 ▼
Amazon Server
 │
 ▼
Browser
 │
 ▼
You See Products
```

---

# Let's Understand Each Part

## 1. You

You are called the **User**.

Example:

```text
You search:

iPhone 16
```

---

## 2. Browser

Browser means:

* Chrome
* Edge
* Firefox

The browser sends your request.

Think of it as a **messenger**.

---

## 3. Internet

The internet carries your request to Amazon.

Like a road connecting your house to a shopping mall.

---

## 4. Server

The server is a powerful computer.

It receives your request.

Example:

```text
Customer asked for:

iPhone 16
```

Server says:

```text
Let me check.
```

---

## 5. Database

The database stores information.

Example:

```text
Product Name

Price

Stock

Images
```

Like a giant warehouse of data.

---

## 6. Server Again

The server gets the data from the database.

Example:

```text
Found 25 iPhones.
```

---

## 7. Browser

The server sends the data back.

Browser displays:

```text
iPhone 16

₹79,999

★★★★★
```

---

# Complete Picture

```text
                USER
                  │
                  ▼
             Browser
                  │
                  ▼
             Internet
                  │
                  ▼
               Server
                  │
                  ▼
             Database
                  │
                  ▼
               Server
                  │
                  ▼
             Browser
                  │
                  ▼
                USER
```

---

# Now Let's Relate It to MERN

In MERN:

```text
Browser
   │
   ▼
React
   │
   ▼
Express
   │
   ▼
Node.js
   │
   ▼
MongoDB
```

Don't worry about these names yet.

For now, remember:

* **React** = What the user sees.
* **Node.js + Express** = The server that processes requests.
* **MongoDB** = Where data is stored.

We'll learn each one in detail later.

---

# Compare It With .NET

Since you know C#, this comparison will help.

| MERN              | .NET                         |
| ----------------- | ---------------------------- |
| React             | Razor Pages / MVC Views (UI) |
| Node.js + Express | ASP.NET Core (Backend)       |
| MongoDB           | SQL Server                   |

You don't need to memorize this now; it's just to connect new ideas with something familiar.

---

# Easy Memory Trick

Think of **ordering food online**.

```text
You
    │
    ▼
Swiggy App
    │
    ▼
Restaurant
    │
    ▼
Kitchen
    │
    ▼
Food Ready
    │
    ▼
Delivery Partner
    │
    ▼
You
```

Similarly:

```text
You
    │
    ▼
Browser
    │
    ▼
Server
    │
    ▼
Database
    │
    ▼
Server
    │
    ▼
Browser
    │
    ▼
You
```

---

# Mini Exercise ✍️

Answer these questions without looking above.

### Q1.

Who stores the data?

---

### Q2.

Who sends the request?

---

### Q3.

Who processes the request?

---

### Q4.

Is Amazon a website or a web application?

---

# Today's Learning Summary

You learned:

* What a web application is
* Difference between a website and a web application
* The journey of a request from browser to server to database and back
* The high-level roles of React, Node.js, Express, and MongoDB

---

# Git & GitHub (Daily Habit Starts Today)

We haven't installed Git yet, so today there is nothing to commit.

Create a folder on your computer:

```text
MERN-Bootcamp/
│
├── Notes/
│   └── Day-01-Web-Application.md
├── Practice/
└── Projects/
```

Open `Day-01-Web-Application.md` and write today's notes in your own words. This habit will help you remember concepts much better than just reading them.

Once we install Git in a later lesson, we'll initialize this folder as a Git repository and start making **daily commits**.

---

### Before we move on

Please answer the **4 mini exercise questions**. This will help me check whether the foundation is clear. After that, when you type **"next"**, we'll continue to **Lesson 2: How the Internet Actually Works (What happens when you type `google.com` and press Enter?)**. That lesson will explain concepts like IP addresses, DNS, HTTP, and requests in a simple way.
