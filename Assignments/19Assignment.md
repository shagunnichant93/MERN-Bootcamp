Theory Questions

Answer in your own words.

Q1 What is a callback function?
Q2 Why do we pass functions as arguments?
Q3 Why do we write
greet(showMessage);

instead of

greet(showMessage());
Q4 Can callbacks have parameters?
Q5 Give one real-life example of callback functions.




# Theory Review

### Q1. What is a callback function?

Your Answer:

> function that is passed as an argument to another function

✅ Correct.

A more complete interview definition:

> A callback function is a function that is passed as an argument to another function and is executed later when the main function calls it.

**Marks:** ⭐⭐⭐⭐⭐

---

### Q2. Why do we pass functions as arguments?

Your Answer:

> so that task finishes in order

✅ Correct.

A stronger explanation:

> We pass functions as arguments so that one task can execute after another task finishes. This helps control the flow of execution and makes the code reusable and flexible.

**Real-life Example:**

Restaurant → Prepare Food → Notify Customer

The notification happens only after the food is prepared.

**Marks:** ⭐⭐⭐⭐☆

---

### Q3. Why do we write `greet(showMessage)` instead of `greet(showMessage())`?

Your Answer:

> first method passes the function and second one executed immediately.

✅ Perfect.

Example:

```javascript
greet(showMessage);     // Passes the function

greet(showMessage());   // Executes immediately
```

**Marks:** ⭐⭐⭐⭐⭐

---

### Q4. Can callbacks have parameters?

Your Answer:

> yes

✅ Correct.

Example:

```javascript
function calculate(a, b, operation) {
    operation(a, b);
}
```

**Marks:** ⭐⭐⭐⭐⭐

---

### Q5. Give one real-life example.

Your Answer:

> order from a restaurant.

✅ Correct.

Better explanation:

> When you order food, the restaurant first prepares it and then notifies you that it is ready. The notification is like a callback that happens after the main task is completed.

**Marks:** ⭐⭐⭐⭐☆

---

# Theory Score

**23/25**

Excellent.

---