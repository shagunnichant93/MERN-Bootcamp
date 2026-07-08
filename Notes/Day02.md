Awesome! Welcome to **Day 2**. This is one of the most important lessons because **every web developer (MERN, .NET, Java, Python, PHP)** needs to understand this.

By the end of this lesson, you'll know **what actually happens when you type `google.com` and press Enter**.

---

# MERN Bootcamp - Day 2

# Module 0 - Lesson 2

# How the Internet Works

## Objective

Understand:

* What happens after typing a website address
* What DNS is
* What an IP Address is
* What a Server is
* How Browser and Server communicate

---

# Imagine This

Suppose you want pizza.

Do you directly know the chef?

❌ No.

You know only:

```text
Domino's
```

Similarly,

You don't know Google's server.

You only know:

```text
google.com
```

---

# Step 1 - You Type

```text
google.com
```

inside Chrome.

Question:

Does Chrome know where Google is?

Answer:

❌ No.

---

# Real World Example

Suppose I say

> Meet me at House No. 27.

Can you come?

Yes.

Now suppose I say

> Meet me at Rahul's House.

Can you?

Probably not.

Because you need the address.

Same here.

---

# Every Website Has Two Names

Example:

```text
Website Name

google.com
```

and

```text
Real Address

142.250.xxx.xxx
```

That number is called an

# IP Address

Think of it like

```text
House Address
```

---

# Easy Memory Trick

```text
Person Name
↓

Rahul
```

has

```text
House Address

Hyderabad...
```

Similarly,

```text
Website Name

amazon.in
```

has

```text
IP Address

52.xx.xx.xx
```

---

# Question

How does Chrome know

```text
google.com
```

means

```text
142.xxx.xxx.xxx
```

Answer:

DNS

---

# What is DNS?

DNS stands for

> Domain Name System

Don't worry about the full form.

Just remember:

DNS is the Internet's Phonebook.

---

# Real World Example

Suppose you open your phone.

You search

```text
Mom
```

Phone automatically finds

```text
9876543210
```

You never remember the number.

Correct?

Same here.

You type

```text
google.com
```

DNS finds

```text
IP Address
```

---

# Diagram

```text
You

↓

google.com

↓

DNS

↓

IP Address

↓

Google Server
```

---

# Why Do We Need DNS?

Imagine if Google told everyone

```text
142.250.183.78
```

instead of

```text
google.com
```

Would you remember?

Probably not.

That's why domains exist.

---

# Step 2 - Browser Sends Request

Once Chrome gets the IP Address

It says

```text
Hello Google,

I want your homepage.
```

This is called a

# Request

---

# Step 3 - Server Receives Request

Now Google's server gets the request.

Think of the server like a waiter.

Customer says

```text
One Pizza
```

Waiter doesn't cook.

Waiter goes to kitchen.

Similarly

Browser asks

```text
Homepage please
```

Server goes to database.

---

# Step 4 - Database

Database contains

```text
User Accounts

Emails

Search History

Images

Videos
```

Server fetches the required data.

---

# Step 5 - Server Sends Response

Server prepares data.

Example

```text
Google Logo

Search Box

Buttons

Images
```

and sends it back.

This is called

# Response

---

# Step 6 - Browser Displays Page

Chrome receives data.

Displays

```text
Google Homepage
```

Done.

---

# Complete Flow

```text
You

↓

Type google.com

↓

Browser

↓

DNS

↓

IP Address

↓

Google Server

↓

Database

↓

Google Server

↓

Browser

↓

You See Website
```

---

# Restaurant Example (Very Easy)

Imagine ordering food.

```text
You
↓

Waiter
↓

Chef
↓

Kitchen Storage
↓

Chef
↓

Waiter
↓

You
```

Now compare it with a web application.

```text
You
↓

Browser
↓

Server
↓

Database
↓

Server
↓

Browser
↓

You
```

Exactly the same idea.

---

# Where Does MERN Fit?

```text
You
↓

React
↓

Express

↓

Node.js

↓

MongoDB

↓

Node.js

↓

React

↓

You
```

Notice:

* React = Waiter who shows things to the customer.
* Node.js + Express = Chef who prepares the response.
* MongoDB = Kitchen storage where ingredients (data) are kept.

---

# Important New Words

| Word       | Meaning                               |
| ---------- | ------------------------------------- |
| Browser    | Sends and receives web requests       |
| Domain     | Website name (`google.com`)           |
| IP Address | Real address of a server              |
| DNS        | Converts website name into IP address |
| Server     | Processes requests                    |
| Request    | Browser asking for something          |
| Response   | Server sending something back         |
| Database   | Stores information                    |

---

# Interview Question

**What happens when you type `google.com` and press Enter?**

A simple answer:

> The browser sends the domain name to DNS, which converts it into an IP address. The browser then sends a request to the server at that IP address. The server processes the request, retrieves any required data from the database, and sends a response back to the browser, which displays the webpage.

---

# Mini Exercise

Imagine you type:

```text
www.amazon.in
```

---

# Today's Notes Folder

Create this structure:

```text
MERN-Bootcamp/
│
├── Day-02/
│   ├── Notes.md
│   ├── InterviewQuestions.md
│   └── Assignment.md
```

Write today's concepts in your own words. Don't copy mine exactly—rewriting helps you remember.

---

# 🚀 GitHub Roadmap Update

Starting **Day 5**, we'll install and use **Git**. I'll teach you from zero:

* What Git is
* Why companies use it
* Installing Git
* Creating your first repository
* `git init`
* `git add`
* `git commit`
* `git push`
* Creating a GitHub account
* Uploading your learning repository

After that, **every lesson** will end with a Git commit so that by the end of this bootcamp you'll have a professional GitHub profile with a history of consistent learning.

**Don't move ahead until you're comfortable with today's lesson.** Once you've answered the five questions and you're ready, type **`next`** and we'll move to **Lesson 3: Frontend vs Backend**. This is where we'll start understanding exactly what React, Node.js, and Express each do in a MERN application.
