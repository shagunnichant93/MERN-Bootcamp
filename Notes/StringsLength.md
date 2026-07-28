Excellent! ✅ All your programs ran correctly.

You have completed the **Strings Introduction** section.

---

# 📚 Module 3 — Strings

## Topic 2 — String Length (`length`)

This is one of the **most commonly used properties** in JavaScript.

You'll use it almost every day in MERN projects.

---

# What is length?

`length` tells us **how many characters** are present inside a string.

Think of it like counting letters.

Example:

```
"Shagun"
```

Count:

```
S h a g u n
1 2 3 4 5 6
```

Length = **6**

---

# Real-Life Example 1 — Login

Website checks username length.

```
Username:
shagun123
```

Length = 9

If

```
Length >= 5
```

Allow login.

---

# Real-Life Example 2 — Password

```
Password:
abc12345
```

Length = 8

Website says

✔ Strong password

---

# Real-Life Example 3 — OTP

```
OTP

458921
```

Length = 6

Correct OTP format.

---

# Real-Life Example 4 — Mobile Number

```
9876543210
```

Length = 10

Correct.

---

# Syntax

```javascript
string.length
```

Example

```javascript
let name = "Shagun";

console.log(name.length);
```

Output

```
6
```

---

# Example 2

```javascript
let city = "Delhi";

console.log(city.length);
```

Output

```
5
```

---

# Example 3

```javascript
let company = "Infosys";

console.log(company.length);
```

Output

```
8
```

---

# Example 4

```javascript
let movie = "Inception";

console.log(movie.length);
```

Output

```
9
```

---

# Example 5

```javascript
let food = "Pizza";

console.log(food.length);
```

Output

```
5
```

---

# Example 6

```javascript
let bank = "Axis Bank";

console.log(bank.length);
```

Output

```
9
```

Because space is also counted.

```
Axis Bank

Axis(4)

space(1)

Bank(4)

Total = 9
```

---

# Important

Spaces are characters too.

```
"Hello World"
```

Length is

```
11
```

Not 10.

---

# Numbers inside string

```javascript
let otp = "458921";

console.log(otp.length);
```

Output

```
6
```

Although they are numbers, because they are inside quotes they are treated as text.

---

# Empty String

```javascript
let text = "";

console.log(text.length);
```

Output

```
0
```

---

# Real Project Example

Registration Form

```javascript
let password = "abc12345";

if(password.length >= 8){
    console.log("Strong Password");
}
else{
    console.log("Weak Password");
}
```

Output

```
Strong Password
```

---

# Another Example

```javascript
let username = "ab";

if(username.length >= 5){
    console.log("Valid Username");
}
else{
    console.log("Username Too Short");
}
```

Output

```
Username Too Short
```

---

# Assignment (10 Programs)

Create these files inside **01-JavaScript**.

### 1. studentLength.js

Print length of student name.

---

### 2. employeeLength.js

Print length of employee name.

---

### 3. bankLength.js

Print length of bank name.

---

### 4. hospitalLength.js

Print length of hospital name.

---

### 5. shoppingLength.js

Print length of product name.

---

### 6. movieLength.js

Print length of movie name.

---

### 7. restaurantLength.js

Print length of restaurant name.

---

### 8. passwordLength.js

Check if password length is at least 8.

Print:

```
Strong Password
```

or

```
Weak Password
```

---

### 9. otpLength.js

Check whether OTP length is exactly 6.

Print:

```
Valid OTP
```

or

```
Invalid OTP
```

---

### 10. usernameLength.js

Check username length.

Minimum 5 characters.

---

# Interview Questions (20)

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

---

# MCQs (5)

**Q1.** `"Hello".length` returns:

a) 4
b) 5
c) 6
d) Error

---

**Q2.** `length` is a:

a) Function
b) Property
c) Variable
d) Loop

---

**Q3.** Which one has length **0**?

a) `" "`
b) `"A"`
c) `""`
d) `"0"`

---

**Q4.** Does `length` count spaces?

a) No
b) Yes

---

**Q5.** Which condition checks for a password of at least 8 characters?

a) `password.length == 8`
b) `password.length <= 8`
c) `password.length >= 8`
d) `password = 8`

---

### 📌 Git after completion

```bash
git add .
git commit -m "Completed JavaScript String length"
git push
```