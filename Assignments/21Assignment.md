
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

Quick Quiz
Q1

A variable declared outside every function is called

A) Local Variable

B) Global Variable

C) Block Variable

D) Function Variable

Q2

Can a function access global variables?

Yes / No

Q3

Can global code access a function variable?

Yes / No

Q4

Which keyword is block scoped?

A) var

B) let

C) goto

Q5

What will be printed?

let city = "Delhi";

function test(){

console.log(city);

}

test();

A) Delhi

B) Error

Quiz Review
Q1. A variable declared outside every function is called

Your Answer:

B) Global Variable ✅

Correct.

Q2. Can a function access global variables?

Your Answer:

Yes ✅

Correct.

Q3. Can global code access function variables?

Your Answer:

No ✅

Correct.

Q4. Which keyword is block scoped?

Your Answer:

let ✅

Correct.

(const is also block scoped, but among the given options, let was the correct answer.)

Q5
let city = "Delhi";

function test() {
    console.log(city);
}

test();

Your Answer:

A) Delhi ✅

Correct.

Quiz Score

5 / 5 ⭐⭐⭐⭐⭐

Perfect!