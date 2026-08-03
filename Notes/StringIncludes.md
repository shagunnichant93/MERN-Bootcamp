Excellent! 🎉

You're now entering the last part of the **String Methods** section. The remaining topics (`includes()`, `startsWith()`, `endsWith()`, and Template Literals) are comparatively easier, and you'll see them frequently in React, Node.js, and interviews.

---

# Module 3 — Strings

# Topic 10 — `includes()`

> ⭐ One of the most frequently used string methods in real-world JavaScript.

You'll use `includes()` in:

* 🔐 Login validation
* 📧 Email validation
* 🛒 Product search
* 🔍 Search bars
* 🏦 Banking applications
* 🏥 Hospital management systems
* 📱 React applications
* 🌐 Node.js APIs

---

# Lesson Flow

1. What is `includes()`?
2. Why do we need it?
3. Syntax
4. How `includes()` works
5. Return value
6. Real-life examples
7. Code examples
8. Common mistakes
9. Coding assignments
10. Mini Project
11. Interview Questions
12. MCQs
13. Notes
14. Git Practice

---

# 1. What is `includes()`?

## Definition

`includes()` is a **string method** used to **check whether a string contains a specified text**.

It returns a **Boolean value**:

* `true` → if the text is found.
* `false` → if the text is not found.

It **does not modify the original string**.

---

# Why do we need `includes()`?

Imagine these situations:

* Check if an email contains `"@"`.
* Check if a password contains a special character.
* Check if a product name contains `"Laptop"`.
* Check if a URL contains `"https"`.
* Check if a hospital ID contains `"PAT"`.

Instead of writing complex conditions, JavaScript provides `includes()`.

---

# 2. Syntax

```javascript
string.includes(searchText);
```

or

```javascript
string.includes(searchText, startIndex);
```

### Parameters

* **searchText** → Text to search for.
* **startIndex** *(optional)* → Position from which to start searching.

---

# 3. Basic Example

```javascript
let city = "New Delhi";

console.log(city.includes("Delhi"));
```

Output

```text
true
```

---

## Example 2

```javascript
let city = "New Delhi";

console.log(city.includes("Mumbai"));
```

Output

```text
false
```

---

## Example 3

```javascript
let email = "john@gmail.com";

console.log(email.includes("@"));
```

Output

```text
true
```

---

## Example 4

```javascript
let website = "https://google.com";

console.log(website.includes("https"));
```

Output

```text
true
```

---

## Example 5

```javascript
let movie = "SpiderMan";

console.log(movie.includes("Man"));
```

Output

```text
true
```

---

# 4. Using `startIndex`

```javascript
let text = "JavaScript";

console.log(text.includes("Script", 4));
```

Output

```text
true
```

Because the search starts from index `4`.

---

Another example:

```javascript
console.log("JavaScript".includes("Java", 5));
```

Output

```text
false
```

The search starts at index `5`, so `"Java"` is skipped.

---

# 5. Return Value

Unlike methods like `slice()` or `split()`:

* `includes()` **does not return a string or array**.
* It returns **only a Boolean value**.

```javascript
console.log("Apple".includes("pp"));
```

Output

```text
true
```

---

```javascript
console.log("Apple".includes("zz"));
```

Output

```text
false
```

---

# 6. Real-Life Examples

## Login System

```javascript
let email = "john@gmail.com";

console.log(email.includes("@"));
```

Output

```text
true
```

---

## Banking

```javascript
let account = "ACC-123456";

console.log(account.includes("ACC"));
```

Output

```text
true
```

---

## Hospital

```javascript
let patient = "PAT-458921";

console.log(patient.includes("PAT"));
```

Output

```text
true
```

---

## Shopping Website

```javascript
let product = "Apple iPhone 14";

console.log(product.includes("iPhone"));
```

Output

```text
true
```

---

## Food Ordering

```javascript
let order = "Pizza, Burger, Pasta";

console.log(order.includes("Burger"));
```

Output

```text
true
```

---

# 7. Method Chaining

```javascript
let email = "  JOHN@GMAIL.COM  ";

console.log(email.trim().toLowerCase().includes("@"));
```

Output

```text
true
```

Notice how we combine:

* `trim()`
* `toLowerCase()`
* `includes()`

---

# 8. Common Mistakes

## Mistake 1

Thinking `includes()` returns the found text.

```javascript
let city = "New Delhi";

console.log(city.includes("Delhi"));
```

Output

```text
true
```

It returns **true**, not `"Delhi"`.

---

## Mistake 2

Case sensitivity.

```javascript
console.log("JavaScript".includes("java"));
```

Output

```text
false
```

Because:

```text
Java ≠ java
```

Correct:

```javascript
console.log("JavaScript".toLowerCase().includes("java"));
```

Output

```text
true
```

---

## Mistake 3

Thinking it changes the original string.

It doesn't.

Strings remain immutable.

---

# 9. Coding Assignments (10)

Create these files inside **01-JavaScript**.

### 1. emailValidation.js

Check whether:

```text
john@gmail.com
```

contains `"@"`.

Display:

```text
Valid Email: true
```

---

### 2. websiteValidation.js

Check whether:

```text
https://google.com
```

contains `"https"`.

---

### 3. bankValidation.js

Check whether:

```text
ACC-123456
```

contains `"ACC"`.

---

### 4. patientValidation.js

Check whether:

```text
PAT-458921
```

contains `"PAT"`.

---

### 5. productSearch.js

Check whether:

```text
Apple iPhone 14
```

contains `"iPhone"`.

---

### 6. foodSearch.js

Check whether:

```text
Pizza, Burger, Pasta
```

contains `"Burger"`.

---

### 7. citySearch.js

Check whether:

```text
New Delhi
```

contains `"Mumbai"`.

---

### 8. movieSearch.js

Check whether:

```text
SpiderMan
```

contains `"Man"`.

---

### 9. companySearch.js

Check whether:

```text
Microsoft Corporation
```

contains `"Google"`.

---

### 10. usernameValidation.js

Check whether:

```text
john_doe123
```

contains `"_"`.

---

# 10. Mini Project

## Password Strength Checker

Store:

```text
Pass@123
```

Check whether it contains:

```text
@
```

Display:

```text
Contains @ : true
```

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

---

# 12. MCQs

### Q1

`includes()` returns:

A) String

B) Boolean

C) Array

D) Number

---

### Q2

`includes()` is a:

A) Property

B) Method

C) Variable

D) Object

---

### Q3

Output?

```javascript
console.log("JavaScript".includes("Script"));
```

A) true

B) false

C) Script

D) Error

---

### Q4

Does `includes()` modify the original string?

A) Yes

B) No

---

### Q5

Which method is commonly used to perform a case-insensitive search?

A)

```javascript
toUpperCase()
```

B)

```javascript
toLowerCase()
```

C)

```javascript
trim()
```

D)

```javascript
slice()
```

---

# 13. Notes (`Strings.md`)

Add:

```md
## includes()

- Used to check whether a string contains specific text.
- Returns `true` or `false`.
- Returns a Boolean value.
- Does not modify the original string.
- Supports an optional start index.

### Common Uses

- Email validation
- Search functionality
- Login systems
- Banking validation
- Product search
- URL validation
```

---

# 14. Git Practice

```bash
git status
git add .
git commit -m "Completed JavaScript includes() method"
git push
```

---

# 💡 Interview Tip

Many beginners confuse these methods:

| Method       | Returns | Purpose                         |
| ------------ | ------- | ------------------------------- |
| `includes()` | Boolean | Checks if text exists           |
| `slice()`    | String  | Extracts part of a string       |
| `split()`    | Array   | Converts a string into an array |
| `replace()`  | String  | Replaces text                   |

### Easy way to remember

```javascript
let email = "john@gmail.com";

console.log(email.includes("@")); // true
console.log(email.split("@"));    // ["john", "gmail.com"]
```

* `includes()` answers **"Does it exist?"**
* `split()` answers **"Can I separate it?"**

---