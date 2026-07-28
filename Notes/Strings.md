

# Module 3 – Strings

---

# Topic 1 – Introduction to Strings

> **Format:** Theory → Real-life Examples → Code Examples → Coding Assignments → Notes → Interview Questions → MCQs → Industry Usage → Git → Revision

---

# 1. Theory

## What is a String?

### Definition

A **String** is a sequence of characters used to store text.

A string can contain:

* Letters
* Numbers
* Spaces
* Symbols
* Special characters

Examples:

```javascript
"Shagun"

"Hello World"

"9876543210"

"Delhi"

"Welcome@123"
```

---

## Why do we need Strings?

Think about the applications you use every day.

What type of data do they store?

Instagram

```text
Username
Bio
Comments
Captions
```

Amazon

```text
Product Name
Address
Category
```

Bank

```text
Customer Name
Branch Name
IFSC Code
```

Hospital

```text
Patient Name
Doctor Name
Disease
```

Movie Booking

```text
Movie Name
Theatre Name
City
```

Almost every application stores text.

That's why Strings are one of the most frequently used data types.

---

# Memory Diagram

```javascript
let city = "Delhi";
```

Memory

```text
city
 ↓
"Delhi"
```

---

```javascript
let company = "Infosys";
```

Memory

```text
company
   ↓
"Infosys"
```

---

# Ways to Create Strings

## 1. Double Quotes

```javascript
let city = "Delhi";
```

---

## 2. Single Quotes

```javascript
let city = 'Delhi';
```

---

## 3. Backticks (Template Literals)

```javascript
let city = `Delhi`;
```

We'll study template literals in detail later in this module.

---

# Difference

All three create strings.

```javascript
"Delhi"

'Delhi'

`Delhi`
```

The difference is that backticks allow embedding variables and expressions easily, which we'll learn later.

---

# Common Mistakes

### Mistake 1

```javascript
let city = Delhi;
```

❌ Error

JavaScript thinks `Delhi` is a variable.

Correct:

```javascript
let city = "Delhi";
```

---

### Mistake 2

```javascript
let message = "Hello';
```

❌ Quotes don't match.

Correct:

```javascript
let message = "Hello";
```

---

# 2. Real-Life Examples

## Example 1 – Bank

```javascript
let customerName = "Rahul";
```

---

## Example 2 – Hospital

```javascript
let patientName = "Amit";
```

---

## Example 3 – Restaurant

```javascript
let food = "Pizza";
```

---

## Example 4 – Shopping

```javascript
let product = "Laptop";
```

---

## Example 5 – Login

```javascript
let username = "Shagun123";
```

---

## Example 6 – Movie Booking

```javascript
let movie = "Avengers";
```

---

## Example 7 – School

```javascript
let student = "Priya";
```

---

## Example 8 – OTP

```javascript
let otp = "123456";
```

Notice that OTP is often stored as a string because we don't perform arithmetic on it.

---

## Example 9 – Email

```javascript
let email = "abc@gmail.com";
```

---

## Example 10 – Address

```javascript
let address = "New Delhi";
```

---

# 3. Code Examples

## Example 1

```javascript
let name = "Shagun";

console.log(name);
```

Output

```text
Shagun
```

---

## Example 2

```javascript
let city = "Delhi";

console.log(city);
```

Output

```text
Delhi
```

---

## Example 3

```javascript
let company = "Infosys";

console.log(company);
```

Output

```text
Infosys
```

---

## Example 4

```javascript
let food = "Burger";

console.log(food);
```

Output

```text
Burger
```

---

## Example 5

```javascript
let movie = "Bahubali";

console.log(movie);
```

Output

```text
Bahubali
```

---

## Example 6

```javascript
let email = "abc@gmail.com";

console.log(email);
```

Output

```text
abc@gmail.com
```

---

## Example 7

```javascript
let branch = "SBI";

console.log(branch);
```

Output

```text
SBI
```

---

## Example 8

```javascript
let doctor = "Dr. Sharma";

console.log(doctor);
```

Output

```text
Dr. Sharma
```

---

## Example 9

```javascript
let language = "JavaScript";

console.log(language);
```

Output

```text
JavaScript
```

---

## Example 10

```javascript
let country = "India";

console.log(country);
```

Output

```text
India
```

---

# 4. Coding Assignments

Create these files inside `01-JavaScript`.

### Assignment 1 – studentString.js

Store:

* Student Name
* Class
* School

Print all three.

---

### Assignment 2 – bankString.js

Store:

* Customer Name
* Bank Name
* Branch

Print all values.

---

### Assignment 3 – hospitalString.js

Store:

* Patient Name
* Doctor Name
* Disease

Print all values.

---

### Assignment 4 – shoppingString.js

Store:

* Product Name
* Category
* Brand

Print all values.

---

### Assignment 5 – restaurantString.js

Store:

* Restaurant Name
* Food Item
* City

Print all values.

---

### Assignment 6 – movieString.js

Store:

* Movie Name
* Theatre
* City

Print all values.

---

### Assignment 7 – loginString.js

Store:

* Username
* Email
* Password

Print all values.

---

### Assignment 8 – employeeString.js

Store:

* Employee Name
* Department
* Company

Print all values.

---

### Assignment 9 – addressString.js

Store:

* Name
* City
* State
* Country

Print all values.

---

### Assignment 10 – favouriteThings.js

Store and print:

* Favorite Food
* Favorite Movie
* Favorite Programming Language
* Favorite Place

---

# 5. Notes (`Notes/Strings.md`)

Create a file named `Strings.md` and write:

```md
# Strings

## Definition
A string is a sequence of characters used to store text.

## Why Strings are Needed
- Store names
- Store emails
- Store addresses
- Store product names
- Store messages

## Ways to Create Strings
1. Double Quotes ""
2. Single Quotes ''
3. Backticks ``

## Examples
- "Delhi"
- "Pizza"
- "JavaScript"

## Common Mistakes
- Missing quotes
- Mismatched quotes
```

---

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

---

# 7. MCQs

**Q1.** Which data type stores text?

a) Number

b) String

c) Boolean

d) Null

---

**Q2.** Which is a valid string?

a) `Delhi`

b) `"Delhi"`

c) `123`

d) `true`

---

**Q3.** Which symbol is used for template literals?

a) `'`

b) `"`

c) `` ` ``

d) `#`

---

**Q4.** `"9876543210"` is a:

a) Number

b) String

c) Boolean

d) Object

---

**Q5.** Which of the following is **not** a string?

a) `"JavaScript"`

b) `'Delhi'`

c) `` `React` ``

d) `500`

---

# 8. Industry Usage ⭐⭐⭐⭐⭐

Strings are everywhere in software development.

Examples:

* Usernames
* Passwords
* Emails
* Product names
* API responses
* JSON data
* URLs
* Search boxes
* Error messages
* Chat applications

In React and Node.js, you'll work with strings every single day.

---

# 9. Git

After completing the assignments and notes:

```bash
git status
git add .
git commit -m "Completed JavaScript Strings Introduction"
git push
```

---

# 10. One-Page Revision

* A string stores text.
* Strings can contain letters, numbers, spaces, and special characters.
* Strings are created using `" "`, `' '`, or `` ` ` ``.
* Missing quotes cause errors.
* Strings are used for names, emails, addresses, product names, and much more.

---


If the answer is No, it's usually stored as a string.

Examples:

Data	Number?	String?	Why
Age	✅	❌	We calculate it.
Salary	✅	❌	We calculate it.
Phone Number	❌	✅	Identifier, no math.
Email	❌	✅	Text.
PAN Card	❌	✅	Identifier.
Aadhaar Number	❌	✅	Identifier.
OTP	❌	✅	No calculations.
PIN Code	❌	✅	May have leading zeros.

This simple rule will help you answer many interview questions correctly.