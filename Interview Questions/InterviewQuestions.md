Interview Questions
Q1: What is Node.js?

Answer:

Node.js is a JavaScript runtime that allows JavaScript code to execute outside the browser, enabling developers to build server-side applications.

Q2: Why do we use Node.js?

Answer:

Node.js allows JavaScript to run on the server, where it can handle business logic, communicate with databases, create APIs, authenticate users, and process requests.

Q3: Can React connect directly to MongoDB?

Answer:

No. React runs in the browser and should not directly access the database for security reasons. Requests should go through the backend (Node.js), which validates and processes them before interacting with MongoDB.

What is the difference between if and else if?
Does JavaScript check every else if condition?
Which block executes in an if...else if...else chain?
What is the purpose of the else block?
Why is else if useful in real-world applications?


# 💼 Interview Questions

## Basic

### 1.

What is a function in JavaScript?

---

### 2.

Why do we use functions?

---

### 3.

What is the syntax of a function declaration?

---

### 4.

Can a function be called multiple times?

---

### 5.

What happens if you create a function but never call it?

---

## Intermediate

### 6.

What is the difference between a **function declaration** and a **function call**?

---

### 7.

Can two functions have the same name in the same JavaScript file?

Why or why not?

---

### 8.

Can one function call another function?

---

### 9.

Is JavaScript case-sensitive for function names?

Example:

```javascript
greet()
Greet()
```

Are they the same?

---

## Advanced

### 10.

Explain **DRY (Don't Repeat Yourself)** and how functions help follow this principle.

---

### 11.

Suppose you have the same login code written on 50 pages.

Your manager asks you to change one line.

How do functions make this easier?

---

## Scenario-Based

### 12.

You are building an online food delivery app.

Which features would you make into separate functions?

For example:

* Login
* Search Food
* Add to Cart
* Payment

Explain why.


Interview Questions
Basic
What is a Function Expression?
What is the difference between a Function Declaration and a Function Expression?
Can a Function Expression have parameters?
Can a Function Expression return a value?
Why do we store a function inside a variable?
Intermediate
Can you call a Function Expression before it is defined?
What happens if you try?
Why do developers prefer Function Expressions in modern JavaScript?
Can you assign one Function Expression to another variable?
Can a Function Expression be passed as an argument to another function?
Scenario-Based
You're building an online banking application. You need functions for deposit, withdraw, and checkBalance. Would you use Function Declarations or Function Expressions? Explain your choice.
Excellent work! You have completed **Module 2.1 – Function Expressions** successfully. Your understanding is getting much stronger.

---



# 💼 Interview Questions

### Basic

**1. What is an arrow function?**
(Definition with example)

---

**2. Why were arrow functions introduced in JavaScript?**

---

**3. Write the syntax of an arrow function.**

---

**4. Can an arrow function have multiple parameters?**

---

**5. Can it have zero parameters?**

---

### Intermediate

**6. Difference between Normal Function and Arrow Function?**
(At least 4 points)

---

**7. What is an implicit return?**

---

**8. Does an arrow function always need the `return` keyword? Why or why not?**

---

**9. Can an arrow function be stored inside a variable?**

---

### Advanced

**10. Why are arrow functions heavily used in React?**

---

**11. What is the difference in the behavior of `this` in normal functions and arrow functions?**
(Research-based question — write in your own words after learning.)

---

### Scenario-Based

**12.**
You are building a food delivery application. You need a function to repeatedly calculate the total bill for different customers. Would you choose a normal function or an arrow function? Explain your choice with a practical example from the app.

---


Interview Questions (Detailed)
Basic

1. What is a callback function?

2. Why are callback functions used in JavaScript?

3. Can a function be passed as an argument? Explain with an example.

4. Difference between calling a function and passing a function?

5. What happens if we write callback() instead of callback while passing it?

Intermediate

6. Can arrow functions be used as callbacks? Explain with an example.

7. Can anonymous functions be used as callbacks?

8. Where are callback functions used in real projects?

9. What is Callback Hell? (Just basic definition.)

10. What are the disadvantages of callback functions?

Advanced Beginner

11. Explain callback execution using a banking transaction example.

12. Explain callback execution using an online shopping website.

Scenario-Based Question

Scenario:

You are building an online food delivery application.

The sequence is:

Restaurant Accepts Order

↓

Food Prepared

↓

Delivery Started

↓

Food Delivered

Would you use callback functions for this flow? Why?

Answer with a practical explanation.


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


# Interview Questions

## Basic

1. What is Scope in JavaScript?
2. What is Global Scope?
3. What is Function Scope?
4. What is Block Scope?
5. Difference between Global Scope and Function Scope?
6. Difference between `var`, `let`, and `const` regarding scope?
7. Can a function access global variables?
8. Can global code access local variables?
9. Why should we avoid using too many global variables?
10. What is a `ReferenceError`?

---

## Intermediate

11. What happens if you try to access a function variable outside the function?
12. Why is `let` preferred over `var` in modern JavaScript?
13. Is `const` block scoped?
14. Can two different functions have variables with the same name?
15. Explain variable visibility using a real-life example.

---

## Scenario-Based

16. In a Banking Application, which data should be global and which should be local? Why?

17. In an E-commerce application, where would you keep the website name and where would you keep the customer's cart items?

18. In a Hospital Management System, explain global and local variables using a real-world example.



# 6. Interview Questions

### Beginner

1. What is hoisting?
2. Does JavaScript move code to the top?
3. How many execution phases are there?
4. What happens to a `var` variable during the memory phase?
5. What happens if you access a `var` before declaration?
6. Is `let` hoisted?
7. Is `const` hoisted?
8. Why do `let` and `const` throw a `ReferenceError` before declaration?
9. Are function declarations hoisted?
10. Are function expressions hoisted?

### Intermediate

11. Why does `var` print `undefined` instead of throwing an error?
12. Explain the Memory Creation Phase.
13. Explain the Execution Phase.
14. Compare hoisting behavior of `var`, `let`, and `const`.
15. Explain hoisting of a function declaration versus a function expression.

### Scenario-Based

16. Why would a function declaration work before its definition while a function expression fails?
17. What kind of bug can occur if you rely on `var` hoisting?
18. In a banking application, why is using `let` or `const` generally safer than `var`?
19. What would happen if you call an arrow function before its declaration?
20. Why do modern JavaScript projects usually prefer `let` and `const`?

> Notice that every interview question above is based only on concepts we've covered.

# 6. Interview Questions

### Beginner

1. What is a string?
2. Why do we use strings?
3. Name three ways to create a string.
4. Can a string contain numbers?
5. Is `"12345"` a number or a string?
6. Can a string contain spaces?
7. Can a string contain special characters like `@` or `#`?
8. Why are emails stored as strings?
9. Why is an OTP often stored as a string?
10. Give five real-life examples of string data.

### Intermediate

11. What happens if you don't use quotes around text?
12. What happens if opening and closing quotes don't match?
13. When would you choose backticks over single or double quotes?
14. Can a string be empty? Give an example.
15. Explain the difference between text and numeric data with examples.

### Scenario-Based

16. Which fields in a banking application would be strings?
17. Which fields in a hospital management system would be strings?
18. Why is a phone number usually stored as a string?
19. Why is a PIN or ZIP code often stored as a string?
20. In an e-commerce app, list five values that should be strings.



Answer these after completing the programs.

1. What is `length` in JavaScript?
2. Is `length` a method or a property?
3. What does `"Hello".length` return?
4. Does `length` count spaces?
5. What is the length of `"Java Script"`?
6. What is the length of an empty string `""`?
7. Can we use `length` on numbers?
8. Why is `"12345".length` equal to 5?
9. Where is `length` used in real projects?
10. Why is `length` useful for password validation?
11. How is `length` used for OTP validation?
12. How is `length` used in username validation?
13. What will `" ".length` return? (A string containing one space.)
14. What will `"ABC".length` return?
15. What will `"A B C".length` return?
16. Why does `"Axis Bank".length` include the space?
17. Give three real-world examples where `length` is used.
18. Can `length` be used to check if user input is empty?
19. Which is better for password validation: checking `length` or checking exact text? Why?
20. In a MERN application, name four places where you would use `length`.
Remember this wording because interviewers often ask it exactly like this:

What is the difference between a property and a method?

Answer:

Property stores information about an object.
Method performs an action.

Example:

let name = "Shagun";

console.log(name.length);      // Property
console.log(name.toUpperCase()); // Method

Notice:

length        ❌ no ()
toUpperCase() ✅ ()

This distinction comes up frequently in JavaScript interviews.

Interview Questions

Answer these after completing the assignments.

Q1. What does toUpperCase() do?
Q2. Is toUpperCase() a property or a method?
Q3. Does it change the original string?
Q4. What does this print?
let name = "hello";
console.log(name.toUpperCase());
Q5. Output?
console.log("javascript".toUpperCase());
Q6. Output?
console.log("abc123".toUpperCase());
Q7. Will numbers change?
Q8. Why is toUpperCase() useful in login systems?
Q9. Name three real-world uses of toUpperCase().
Q10. Why do banks convert IFSC codes to uppercase?
Q11. What is wrong with this code?
let name = "john";

name.toUpperCase();

console.log(name);
Q12. How do you permanently change a string to uppercase?
Q13. Can spaces be converted to uppercase?
Q14. Is "hello world" converted into "HELLO WORLD"?
Q15. Can emails also be converted using toUpperCase()?
Q16. What is the output?
let city = "delhi";
city = city.toUpperCase();
console.log(city);
Q17. Which is correct?

A)

name.upperCase();

B)

name.toUpperCase();
Q18. Does toUpperCase() return a new string?
Q19. What is the output?
console.log("Pizza Hut".toUpperCase());
Q20. Give four real-life examples where toUpperCase() is used



# Interview Questions

### Q1. What does `toLowerCase()` do?

---

### Q2. Is it a method or property?

---

### Q3. Does it change the original string?

---

### Q4. What is the output?

```javascript
console.log("HELLO".toLowerCase());
```

---

### Q5. Output?

```javascript
console.log("JAVASCRIPT".toLowerCase());
```

---

### Q6. Output?

```javascript
console.log("ABC123".toLowerCase());
```

---

### Q7. Does it affect numbers?

---

### Q8. Why is `toLowerCase()` useful?

---

### Q9. Give three real-world examples where `toLowerCase()` is used.

---

### Q10. Why do websites convert emails to lowercase?

---

### Q11. What will this print?

```javascript
let name = "JOHN";

name.toLowerCase();

console.log(name);
```

---

### Q12. How do you permanently convert a string to lowercase?

---

### Q13. Does `toLowerCase()` affect special characters?

---

### Q14. Can it be chained with other string methods?

Example:

```javascript
name.trim().toLowerCase();
```

Yes or No?

---

### Q15. What does `toLowerCase()` return?

---

### Q16. Convert

```
NEW DELHI
```

to lowercase.

---

### Q17. Which method converts a string to lowercase?

A)

```javascript
lower()
```

B)

```javascript
toLowerCase()
```

C)

```javascript
lowerCase()
```

D)

```javascript
Lower()
```

---

### Q18. Can `toLowerCase()` be used for login validation?

---

### Q19. Convert

```
PIZZA HUT
```

to lowercase.

---

### Q20. Give four real-world uses of `toLowerCase()`.

 10. Interview Questions

Answer after completing the assignments.

### Beginner

1. What is `trim()`?
2. Is `trim()` a method or a property?
3. What does `trim()` remove?
4. Does `trim()` remove spaces from the middle of a string?
5. Does `trim()` change the original string?

### Intermediate

6. What is the output?

```javascript
console.log("   Hello   ".trim());
```

7. What is the output?

```javascript
console.log("New Delhi".trim());
```

8. Why doesn't `trim()` remove the space in `"New Delhi"`?
9. Why is `trim()` important in login systems?
10. Why is `trim()` useful in search functionality?

### Advanced

11. Can `trim()` be chained with other methods?
12. Give an example of method chaining using `trim()`.
13. Why are strings immutable?
14. How do you permanently remove spaces using `trim()`?
15. What is wrong with this code?

```javascript
let name = "   Rahul   ";

name.trim();

console.log(name);
```

### Scenario-Based

16. Why should registration forms use `trim()`?
17. Why should OTP validation use `trim()`?
18. Why should email validation use `trim()`?
19. Name four real-world applications where `trim()` is used.
20. In a banking application, where would you use `trim()`?


# 11. Interview Questions

### Beginner

1. What is `slice()`?
2. Is `slice()` a method or property?
3. Does `slice()` modify the original string?
4. What does `slice(0,4)` mean?
5. What happens if the second parameter is omitted?

### Intermediate

6. What is the output?

```javascript
console.log("JavaScript".slice(4));
```

7. Output?

```javascript
console.log("JavaScript".slice(0,4));
```

8. What is negative indexing?
9. What does `slice(-4)` do?
10. Why is `slice()` useful in banking applications?

### Advanced

11. Explain the difference between positive and negative indexing.
12. Why is `slice()` considered a non-mutating method?
13. What happens if the start index is greater than the end index?
14. What happens if the end index is greater than the string length?
15. Can `slice()` be chained with other methods? Give an example.

### Scenario-Based

16. How would you display only the last four digits of an account number?
17. How would you extract the domain from an email?
18. How would you extract a product code from `LAPTOP-2025`?
19. Name four real-world uses of `slice()`.
20. Where would you use `slice()` in a food-ordering application?


# 12. Interview Questions

## Beginner

1. What is `substring()`?
2. Is it a method or property?
3. Does it modify the original string?
4. What is the syntax of `substring()`?
5. What happens if the second parameter is omitted?

---

## Intermediate

6. Output?

```javascript
console.log("JavaScript".substring(0,4));
```

7. Output?

```javascript
console.log("New Delhi".substring(4));
```

8. Does `substring()` support negative indexing?
9. What happens if a negative index is passed?
10. Why doesn't `substring(-4)` return the last four characters?

---

## Advanced

11. What happens if the start index is greater than the end index?
12. Explain the biggest differences between `slice()` and `substring()`.
13. Why is `substring()` considered non-mutating?
14. Can `substring()` be chained with other methods? Give an example.
15. What is the output?

```javascript
console.log("JavaScript".substring(6,2));
```

---

## Scenario-Based

16. How would you extract the first name from `"John Doe"`?
17. How would you extract the domain from `"john@gmail.com"`?
18. Where would you use `substring()` in a hospital management system?
19. Name four real-world uses of `substring()`.
20. In an employee management system, where could `substring()` be useful?



# 11. Interview Questions

## Beginner

1. What is `replace()`?
2. Is `replace()` a method or a property?
3. Does `replace()` modify the original string?
4. What is the syntax of `replace()`?
5. What happens if the search value is not found?

---

## Intermediate

6. Output?

```javascript
console.log("SpiderMan".replace("Man","Woman"));
```

7. Output?

```javascript
console.log("resume.txt".replace(".txt",".pdf"));
```

8. Does `replace()` replace all occurrences?
9. Why?
10. How do you permanently replace text in a string?

---

## Advanced

11. Why is `replace()` called a non-mutating method?
12. Can `replace()` be chained with other methods? Give an example.
13. What happens if the replacement string is empty (`""`)?
14. Explain why `replace()` is useful in data cleaning.
15. What is the output?

```javascript
console.log("apple apple".replace("apple","orange"));
```

---

## Scenario-Based

16. How would you remove `"EMP"` from `"EMP10025"`?
17. How would you change `"Pending"` to `"Delivered"`?
18. Name four real-world uses of `replace()`.
19. Why is `replace()` useful in file handling?
20. In a banking application, where could `replace()` be useful?



# 12. Interview Questions

## Beginner

1. What is `split()`?
2. Is `split()` a method or a property?
3. Does `split()` modify the original string?
4. What does `split()` return?
5. What is the syntax of `split()`?

---

## Intermediate

6. Output?

```javascript
console.log("John Doe".split(" "));
```

7. Output?

```javascript
console.log("Apple,Mango".split(","));
```

8. What happens if the separator is not found?
9. Can `split()` return only a limited number of elements?
10. Which parameter controls the number of returned elements?

---

## Advanced

11. Why is `split()` useful in JavaScript?
12. Explain the difference between a string and the array returned by `split()`.
13. Why is `split()` considered a non-mutating method?
14. Can `split()` be chained with other methods? Give an example.
15. What is the output?

```javascript
console.log("A-B-C-D".split("-", 2));
```

---

## Scenario-Based

16. How would you extract the username from `"john@gmail.com"`?
17. How would you extract the file extension from `"resume.pdf"`?
18. Name four real-world uses of `split()`.
19. Where is `split()` used in banking applications?
20. Where is `split()` useful in a hospital management system?


---

# 11. Interview Questions

## Beginner

1. What is `includes()`?
2. Is `includes()` a method or a property?
3. What does `includes()` return?
4. Does `includes()` modify the original string?
5. What is the syntax of `includes()`?

---

## Intermediate

6. Output?

```javascript
console.log("JavaScript".includes("Script"));
```

7. Output?

```javascript
console.log("JavaScript".includes("Java"));
```

8. Output?

```javascript
console.log("JavaScript".includes("Python"));
```

9. Is `includes()` case-sensitive?
10. How can you perform a case-insensitive search?

---

## Advanced

11. Why is `includes()` useful?
12. Explain why `includes()` returns a Boolean.
13. Why is `includes()` considered non-mutating?
14. Can `includes()` be chained with other methods? Give an example.
15. Output?

```javascript
console.log("JavaScript".includes("Script",4));
```

---

## Scenario-Based

16. How would you validate an email using `includes()`?
17. How would you check if a website uses HTTPS?
18. Name four real-world uses of `includes()`.
19. How is `includes()` useful in banking applications?
20. How can `includes()` help in a shopping website search feature?



# 11. Interview Questions

## Beginner

1. What is `startsWith()`?
2. Is `startsWith()` a method or a property?
3. What does `startsWith()` return?
4. Does `startsWith()` modify the original string?
5. What is the syntax of `startsWith()`?

---

## Intermediate

6. Output?

```javascript
console.log("JavaScript".startsWith("Java"));
```

7. Output?

```javascript
console.log("JavaScript".startsWith("Script"));
```

8. Is `startsWith()` case-sensitive?
9. How can you perform a case-insensitive check?
10. What is the optional second parameter used for?

---

## Advanced

11. Why is `startsWith()` useful?
12. Why does it return a Boolean value?
13. Why is it considered a non-mutating method?
14. Can it be chained with other methods? Give an example.
15. Output?

```javascript
console.log("JavaScript".startsWith("Script",4));
```

---

## Scenario-Based

16. How would you check whether an employee ID starts with `"EMP"`?
17. How would you validate that a website uses HTTPS?
18. Name four real-world uses of `startsWith()`.
19. How is `startsWith()` useful in banking?
20. How is `startsWith()` useful in a hospital management system?


# 11. Interview Questions

## Beginner

1. What is `endsWith()`?
2. Is `endsWith()` a method or a property?
3. What does `endsWith()` return?
4. Does `endsWith()` modify the original string?
5. What is the syntax of `endsWith()`?

---

## Intermediate

6. Output?

```javascript
console.log("resume.pdf".endsWith(".pdf"));
```

7. Output?

```javascript
console.log("resume.pdf".endsWith(".jpg"));
```

8. Is `endsWith()` case-sensitive?
9. How can you perform a case-insensitive check?
10. What is the optional second parameter used for?

---

## Advanced

11. Why is `endsWith()` useful?
12. Why does it return a Boolean value?
13. Why is it considered a non-mutating method?
14. Can it be chained with other methods? Give an example.
15. Output?

```javascript
console.log("JavaScript".endsWith("Java", 4));
```

---

## Scenario-Based

16. How would you validate whether a file is a PDF?
17. How would you check whether an email belongs to Gmail?
18. Name four real-world uses of `endsWith()`.
19. How is `endsWith()` useful in a file upload system?
20. How is `endsWith()` useful in website validation?




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


# 9. Interview Questions

## Beginner

1. What is an array?
2. Why do we use arrays?
3. Which brackets are used to create an array?
4. Can an array store multiple values?
5. Can an array store different data types?

---

## Intermediate

6. What is an index in an array?
7. From which index does a JavaScript array start?
8. What is the index of the first element?
9. What happens if we access an index that doesn't exist?
10. Can an array be empty?

---

## Advanced

11. Is an array mutable or immutable?
12. Can arrays contain other arrays?
13. Can arrays contain objects?
14. How do you access the third element?
15. How do you access the last element if you know the array length?

---

## Scenario-Based

16. Why are arrays useful in a shopping website?
17. Why are arrays useful in a hospital system?
18. Give four real-world examples where arrays are used.
19. Why are arrays important in React?
20. Why are arrays important in APIs?


---

# 9. Interview Questions

## Beginner

1. What is the `length` property?
2. Is `length` a property or a method?
3. What does `array.length` return?
4. Does `length` start counting from 0?
5. Can an empty array have a length?

---

## Intermediate

6. What is the length of `["A", "B", "C"]`?
7. What is the last index if length is 5?
8. How do you access the last element?
9. What happens if you access `arr[arr.length]`?
10. Can arrays with different data types use `length`?

---

## Advanced

11. Why is `length` important?
12. Difference between index and length.
13. Can `length` change?
14. Is `length` available for strings too?
15. Can we use `length` inside loops?

---

## Scenario-Based

16. Why is `length` useful in a shopping cart?
17. Why is `length` useful in a hospital system?
18. Give four real-world examples where array `length` is used.
19. Why is `length` important in React?
20. Why is `length` important when processing API data?


# 10. Interview Questions

## Beginner

1. What is `push()`?
2. Is `push()` a method or a property?
3. Where does `push()` add elements?
4. Does `push()` change the original array?
5. Can `push()` add multiple elements?

---

## Intermediate

6. What is the syntax of `push()`?
7. What does `push()` return?
8. Is `push()` mutable or immutable?
9. Can `push()` work on an empty array?
10. What happens if you call `push()` without arguments?

---

## Advanced

11. Difference between `push()` and `unshift()`?
12. Difference between `push()` and array concatenation?
13. Why is `push()` efficient?
14. Can we store the return value of `push()`?
15. Can we push different data types?

---

## Scenario-Based

16. Why is `push()` useful in a shopping cart?
17. Why is `push()` useful in a hospital system?
18. Give four real-world examples where `push()` is used.
19. Why is `push()` important in React?
20. Why is `push()` useful when processing API data?



# 10. Interview Questions

## Beginner

1. What is `shift()`?
2. Is `shift()` a method or property?
3. Which element does `shift()` remove?
4. Does `shift()` modify the original array?
5. What does `shift()` return?

---

## Intermediate

6. What is the syntax of `shift()`?
7. What happens if `shift()` is called on an empty array?
8. Is `shift()` mutable or immutable?
9. Can `shift()` remove multiple elements at once?
10. Can we store the removed value?

---

## Advanced

11. Difference between `shift()` and `pop()`.
12. Difference between `shift()` and `push()`.
13. Why is `shift()` useful?
14. Can arrays containing different data types use `shift()`?
15. What happens to the array length after calling `shift()`?

---

## Scenario-Based

16. Why is `shift()` useful in a bank queue?
17. Why is `shift()` useful in a hospital waiting room?
18. Give four real-world examples where `shift()` is used.
19. Why is `shift()` useful in React?
20. Why is `shift()` useful when processing API data?


# 10. Interview Questions

## Beginner

1. What is `unshift()`?
2. Is `unshift()` a method or property?
3. Where does `unshift()` add an element?
4. Does `unshift()` modify the original array?
5. What does `unshift()` return?

---

## Intermediate

6. What is the syntax of `unshift()`?
7. Can `unshift()` add multiple elements?
8. Is `unshift()` mutable or immutable?
9. Can `unshift()` be used on an empty array?
10. Can we store its return value?

---

## Advanced

11. Difference between `unshift()` and `push()`.
12. Difference between `unshift()` and `shift()`.
13. Why is `unshift()` useful?
14. Can arrays containing different data types use `unshift()`?
15. What happens to the array length after calling `unshift()`?

---

## Scenario-Based

16. Why is `unshift()` useful in a hospital?
17. Why is `unshift()` useful in banking?
18. Give four real-world examples where `unshift()` is used.
19. Why is `unshift()` useful in React?
20. Why is `unshift()` useful when processing API data?


# Interview Questions

## Beginner

1. What is `splice()`?
2. Is `splice()` a method or property?
3. Can `splice()` remove elements?
4. Can `splice()` add elements?
5. Can `splice()` replace elements?

---

## Intermediate

6. Syntax of `splice()`.
7. What does `startIndex` mean?
8. What does `deleteCount` mean?
9. What happens when `deleteCount` is 0?
10. What does `splice()` return?

---

## Advanced

11. Is `splice()` mutable or immutable?
12. Difference between `splice()` and `slice()`.
13. Why is `splice()` useful?
14. Can it insert multiple elements?
15. Can it remove multiple elements?

---

## Scenario-Based

16. Hospital example.
17. Shopping website example.
18. Banking example.
19. React example.
20. API example.


---

# Interview Questions

## Beginner

1. What is `slice()`?
2. Is it a method or property?
3. Does it modify the original array?
4. Syntax of `slice()`.
5. What does `slice(2)` mean?

---

## Intermediate

6. What does `slice(1,4)` return?
7. Is end index included?
8. Does `slice()` support negative indexes?
9. What does `slice(-2)` return?
10. What does `slice()` return?

---

## Advanced

11. Difference between `slice()` and `splice()`.
12. Why is `slice()` immutable?
13. Why is `slice()` useful?
14. Can it copy the whole array?
15. What happens if end index is omitted?

---

## Scenario-Based

16. Shopping website example.
17. Hospital example.
18. Banking example.
19. React example.
20. API example.



---

# Interview Questions

## Beginner

1. What is `indexOf()`?
2. Is it a method or property?
3. What does it return?
4. Syntax of `indexOf()`.
5. What happens if an element is not found?

---

## Intermediate

6. What does `indexOf("Mango")` return?
7. What does `indexOf("Mango",2)` mean?
8. Does `indexOf()` modify the original array?
9. Is `indexOf()` mutable or immutable?
10. Can it return `-1`?

---

## Advanced

11. Difference between `indexOf()` and `includes()`.
12. Why is `indexOf()` useful?
13. Why does it return `-1`?
14. Can it search duplicate elements?
15. What happens if there are multiple matching elements?

---

## Scenario-Based

16. Shopping website example.
17. Hospital example.
18. Banking example.
19. React example.
20. API example.


---------

# Interview Questions

## Beginner

1. What is `includes()`?
2. Is it a method or property?
3. What does it return?
4. Syntax of `includes()`.
5. What happens if the element is not found?

---

## Intermediate

6. What does `includes("Mango")` return?
7. What does `includes("Mango",2)` mean?
8. Does `includes()` modify the original array?
9. Is `includes()` mutable or immutable?
10. Can it return an index?

---

## Advanced

11. Difference between `includes()` and `indexOf()`.
12. Why is `includes()` useful?
13. Why does it return `true` or `false`?
14. Can it search duplicate elements?
15. What happens if there are multiple matching elements?

---

## Scenario-Based

16. Shopping website example.
17. Hospital example.
18. Banking example.
19. React example.
20. API example.


---

# Interview Questions

## Beginner

1. What is `join()`?
2. Is it a method or property?
3. What does it return?
4. Syntax of `join()`.
5. What is the default separator?

---

## Intermediate

6. How do you join using a space?
7. How do you join using `-`?
8. Does `join()` modify the original array?
9. Is `join()` mutable or immutable?
10. Can `join()` return an array?

---

## Advanced

11. Difference between `join()` and `split()`.
12. Why is `join()` useful?
13. Why does it return a string?
14. Can it use custom separators?
15. What happens if the separator is an empty string?

---

## Scenario-Based

16. Shopping website example.
17. Hospital example.
18. Banking example.
19. React example.
20. API example.



---

# Interview Questions

## Beginner

1. What is `reverse()`?
2. Is it a method or property?
3. What does it do?
4. Syntax of `reverse()`.
5. Does it take parameters?

---

## Intermediate

6. What does `reverse()` return?
7. Does it modify the original array?
8. Is `reverse()` mutable or immutable?
9. Can it reverse an empty array?
10. Can it reverse a single-element array?

---

## Advanced

11. Difference between `reverse()` and `sort()`.
12. Why is `reverse()` mutable?
13. Why is it useful?
14. Can it be chained with other methods?
15. What happens if you call `reverse()` twice?

---

## Scenario-Based

16. Shopping website example.
17. Hospital example.
18. Banking example.
19. React example.
20. API example.


---

# Interview Questions

## Beginner

1. What is `sort()`?
2. Is it a method or property?
3. What does it do?
4. Syntax of `sort()`.
5. Is compare function mandatory?

---

## Intermediate

6. What does `sort()` return?
7. Is `sort()` mutable?
8. Why doesn't `sort()` work correctly for numbers?
9. How do you sort numbers correctly?
10. How do you sort descending?

---

## Advanced

11. Difference between `sort()` and `reverse()`.
12. Difference between `sort()` and `slice()`.
13. Why is `sort()` mutable?
14. Can `sort()` be chained?
15. What happens if you call `sort()` twice?

---

## Scenario-Based

16. Shopping website example.
17. Hospital example.
18. Banking example.
19. React example.
20. API example.


---

# 🎯 Interview Questions

Answer these **20 questions** like you've been doing.

### Beginner

1. What is `forEach()`?
2. Is `forEach()` a method or property?
3. What does `forEach()` do?
4. What is the syntax of `forEach()`?
5. What is the parameter passed to the callback?

### Intermediate

6. What is the index parameter in `forEach()`?
7. Can `forEach()` access the original array?
8. Does `forEach()` return a new array?
9. What does `forEach()` return?
10. Is `forEach()` a mutable method?

### Comparison

11. Difference between `forEach()` and `for` loop.
12. Difference between `forEach()` and `map()`.
13. Can we use `if` inside `forEach()`?
14. Can we use `toUpperCase()` inside `forEach()`?
15. Can we get the index using `forEach()`?

### Real-world

16. How can `forEach()` be used in a shopping website?
17. How can it be used in a hospital system?
18. How can it be used in a banking system?
19. How can it be used in a React application?
20. How can it be used while processing API data?



# 🎯 Your Interview Questions — `map()`

Answer these **20 questions** in your own words, just like you've been doing.

### Basic

**1. What is `map()` in JavaScript?**

**2. Is `map()` a method or property?**

**3. What does `map()` return?**

**4. What is the basic syntax of `map()`?**

**5. What is the purpose of `return` inside `map()`?**

### Understanding

**6. Does `map()` modify the original array?**

**7. Does `map()` execute the callback for every element?**

**8. What happens if you don't return a value from the callback?**

**9. Can `map()` receive an index?**

**10. What is the difference between `map()` and `forEach()`?**

### Comparison

**11. Compare `map()` and `forEach()`.**

**12. Why is `map()` commonly used in React?**

**13. Can we use conditions inside `map()`?**

**14. Can we transform numbers using `map()`?**

**15. Can we transform strings using `map()`?**

### Real-world

**16. Give one real-world shopping example where `map()` can be used.**

**17. Give one hospital-management example.**

**18. Give one banking example.**

**19. How can `map()` be useful in a React application?**

**20. Explain `map()` in simple words as if you were answering an interviewer.**


---

# 🎯 Your Interview Questions — `filter()`

Answer these **20 questions** in your own words.

### Basic

**1. What is `filter()` in JavaScript?**

**2. Is `filter()` a method or property?**

**3. What does `filter()` return?**

**4. What is the basic syntax of `filter()`?**

**5. What should the callback function return?**

### Understanding

**6. What happens when the callback returns `true`?**

**7. What happens when the callback returns `false`?**

**8. Does `filter()` modify the original array?**

**9. Can `filter()` receive an index?**

**10. What happens if no elements satisfy the condition?**

### Comparison

**11. What is the difference between `map()` and `filter()`?**

**12. What is the difference between `filter()` and `forEach()`?**

**13. Can we use conditions inside `filter()`?**

**14. Can `filter()` be used with numbers?**

**15. Can `filter()` be used with strings?**

### Real-world

**16. Give one shopping website example where `filter()` can be used.**

**17. Give one hospital-management example.**

**18. Give one banking example.**

**19. How can `filter()` be useful in a React application?**

**20. Explain `filter()` in simple words as if you were answering an interviewer.**