
> "Frontend only displays..."

That's exactly what I want. Let's review each answer like I would in a real company.

---

# Day 3 Assessment

## Q1. Restaurant images belong to?

Your Answer:

> ✅ b) Frontend

**Correct!**

Why?

Because the user can **see** the images.

Frontend is responsible for displaying:

* Images
* Buttons
* Forms
* Text
* Colors

Remember:

> **If the user can see it, it's usually Frontend.**

⭐ Score: 10/10

---

## Q2. Checking whether your password is correct is done by?

Your Answer:

> ✅ b) Backend

**Correct!**

Let's see what happens.

You type:

```text
Username: Rahul

Password: abc123
```

Frontend **collects** this information.

Backend **checks** if it is correct.

Database **stores** the password (securely, usually as a hash).

Flow:

```text
Frontend
     │
     ▼
Backend
     │
     ▼
Database
     │
     ▼
Backend
     │
     ▼
Frontend
```

⭐ Score: 10/10

---

## Q3. Restaurant information is stored where?

Your Answer:

> ✅ c) Database

Correct!

Example:

```text
Restaurant Name

Address

Rating

Menu

Delivery Time
```

All stored in MongoDB (in MERN).

⭐ Score: 10/10

---

## Q4. Who decides how the "Order Now" button looks?

Your Answer:

> ✅ a) Frontend

Perfect.

Frontend decides:

* Color
* Size
* Font
* Position
* Animation

Backend doesn't care whether the button is green or blue.

⭐ Score: 10/10

---

# Q5 (Thinking Question)

Your Answer:

> No

> No

> No

> Because frontend only displays.

👏👏👏

This is the answer I wanted.

Let's expand it a little.

Suppose we build Swiggy using **only React**.

Can React:

Login?

❌ No.

Why?

Because React doesn't know which users exist.

---

Can React save orders?

❌ No.

Because it has nowhere to store them.

---

Can React store passwords?

❌ No.

Because passwords should never be stored in browser code.

Anyone can inspect browser code.

Huge security problem.

---

Think about Gmail.

Suppose there is only Frontend.

You type:

```text
Username

Password
```

Who checks them?

Nobody.

There is no backend.

So login can never happen.

---

Suppose Amazon has only Frontend.

You click:

```text
Buy Now
```

Where will the order go?

Nowhere.

No backend.

---

Suppose you search:

```text
Laptop
```

Who searches?

Nobody.

Backend performs searching.

---

# Easy Memory Trick

Remember this forever:

## Frontend

```text
FACE
```

It shows.

---

## Backend

```text
BRAIN
```

It thinks.

---

## Database

```text
MEMORY
```

It remembers.

---

Now combine all three.

Imagine a human.

```text
Face
```

Can a face think?

No.

---

Can a brain smile?

No.

---

Can memory show expressions?

No.

---

All three are needed.

Exactly like:

```text
Frontend

+

Backend

+

Database
```

---

# Bonus Question (Company Interview)

Suppose an interviewer asks:

> **Can React connect directly to MongoDB?**

What do you think?

Choose one.

A.

```text
Yes
```

B.

```text
No
```

Don't Google it.

Think using today's lesson.

---

# Day 3 Score

| Question | Result                |
| -------- | --------------------- |
| Q1       | ✅                     |
| Q2       | ✅                     |
| Q3       | ✅                     |
| Q4       | ✅                     |
| Q5       | ✅ Excellent reasoning |

# ⭐⭐⭐⭐⭐ 10/10

Excellent work!

---

