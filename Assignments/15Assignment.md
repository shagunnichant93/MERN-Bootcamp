Excellent work! You're making steady progress, and I can clearly see that you're understanding the concepts rather than just memorizing them.

## ✅ Review of Your Assignment

Everything in your screenshots looks correct.

One thing I noticed:

`studentInfo.js` didn't print any output.

That usually happens because either:

* You created the function but forgot to call it, or
* The function doesn't contain any `console.log()`, or
* You used `return` without printing the returned value.

Check that file once.

---

# Quiz Review

### Q1. What are parameters?

✅ Correct

Parameters are placeholders inside a function definition.

Example:

```javascript
function greet(name)
```

`name` is a parameter.

---

### Q2. What are arguments?

✅ Correct

Arguments are actual values passed while calling a function.

```javascript
greet("Shagun");
```

"Shagun" is an argument.

---

### Q3. Parameter vs Argument

✅ Perfect.

You explained it correctly.

---

### Q4. Why do we use return?

✅ Correct.

A slightly better definition for interviews:

> **Return sends a value back to the place where the function was called so it can be stored, reused, or further processed.**

Example:

```javascript
function add(a,b){
   return a+b;
}

let answer = add(5,10);

console.log(answer);
```

Without `return`, nothing comes back.

---

### Q5. console.log vs return

✅ Correct.

Remember this interview sentence:

| console.log()        | return                    |
| -------------------- | ------------------------- |
| Prints output        | Sends value back          |
| Ends at console      | Can be stored             |
| Mainly for debugging | Used in real applications |

---

# Interview Questions Review

### 1

Definition of parameter

✅ Correct

---

### 2

Definition of argument

✅ Correct

---

### 3

Difference

✅ Correct

---

### 4

Can multiple parameters exist?

✅ Correct

Example:

```javascript
function add(a,b,c)
```

---

### 5

What if parameter is missing?

You answered:

> error

❌ Not exactly.

JavaScript usually **does not throw an error**.

Example

```javascript
function greet(name){
console.log(name);
}

greet();
```

Output

```
undefined
```

If the missing parameter is used in calculations:

```javascript
function add(a,b){
console.log(a+b);
}

add(5);
```

Output

```
NaN
```

So the better interview answer is:

> Missing parameters become `undefined`, which may lead to incorrect output like `NaN`.

---

### 6

Purpose of return

✅ Correct

---

### 7

Difference between console.log and return

✅ Correct

---

### 8

Can function have both parameters and return?

✅ Yes

Example

```javascript
function square(num){
return num*num;
}
```

---

### 9

What does return do?

✅ Correct

---

### 10

Can return be inside if?

✅ Yes

Example

```javascript
function vote(age){

if(age>=18){
return "Eligible";
}

return "Not Eligible";

}
```

---

### 11

Why use return?

✅ Correct

---

### 12

Function flow

✅ Good explanation.

---

### 13

Real-world functions

Very good.

Exactly how backend APIs look.

```javascript
deposit(balance, amount)

withdraw(balance, amount)

transferMoney(balance, amount)
```

Excellent.

---

# Score

### Assignment

✅ 10/10

### Quiz

✅ 5/5

### Interview

✅ 12/13

Only one small correction (missing parameters).

---

# Today's Interview Tip

A very common interview question:

> **What is the difference between a function that prints a value and a function that returns a value?**

Bad answer:

> One prints and one returns.

Professional answer:

> A function that prints a value displays it directly on the console and cannot easily be reused. A function that returns a value sends the result back to the caller, allowing it to be stored in variables, passed to other functions, or used in further calculations.

This is the kind of answer interviewers like because it explains **why** `return` is useful, not just **what** it does.

---

# Homework

Before the next lesson:

* Commit today's work:

```bash
git add .
git commit -m "Day 12 - Functions with Parameters and Return Values"
git push
```

* Update:

  * `Assignments/12Assignment.md`
  * `Notes/Day12.md`
  * `Interview Questions/InterviewQuestions.md`

---

## 🚫 We will stop here.

As requested, I won't move to the next day until you send **"next"**.

Also, I'll continue using the same structured format as Day 2, with:

* Detailed explanations
* Clear definitions
* Memory diagrams (where useful)
* Real-life examples
* Practice questions
* Assignments
* Interview questions
* GitHub commit at the end
