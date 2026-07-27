
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


### Theory Questions

**Q1. What is a Higher Order Function?**

> ✅ Correct

A Higher Order Function is a function that **accepts another function as an argument**, **returns another function**, or both.

---

**Q2. Which of the following is a Higher Order Function?**

> ✅ Correct (c)

---

**Q3. Difference between Callback and Higher Order Function**

> ✅ Correct

A slightly better interview answer:

| Callback Function        | Higher Order Function                         |
| ------------------------ | --------------------------------------------- |
| Passed as an argument    | Receives another function as an argument      |
| Performs the actual work | Controls when or how the callback is executed |

Example:

```javascript
const greet = () => {
    console.log("Hello");
}

function execute(callback) {   // HOF
    callback();                // Callback executes
}

execute(greet);
```

---

**Q4. Can an arrow function be passed as a callback?**

> ✅ Yes

---

**Q5. Real-life example**

> ✅ Excellent

Food Ordering ✔
Login Verification ✔

---