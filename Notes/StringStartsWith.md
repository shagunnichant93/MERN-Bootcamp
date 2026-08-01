Awesome! 🎉

You're doing a great job. Since you've understood `includes()`, learning `startsWith()` will be much easier because both methods return a **Boolean (`true`/`false`)**.

---

# Module 3 — Strings

# Topic 11 — `startsWith()`

> ⭐ A very useful string method used to check whether a string **starts with** specific text.

You'll use `startsWith()` in:

* 🏦 Banking (Account IDs)
* 🏥 Hospital (Patient IDs)
* 👨‍💼 Employee IDs
* 🌐 Website URL validation
* 📧 Email validation
* 📦 Product code validation
* 📱 React applications
* 🌐 Node.js APIs

---

# Lesson Flow

1. What is `startsWith()`?
2. Why do we need it?
3. Syntax
4. How `startsWith()` works
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

# 1. What is `startsWith()`?

## Definition

`startsWith()` is a **string method** used to check whether a string **begins with a specified text**.

It returns:

* `true` → if the string starts with the given text.
* `false` → otherwise.

It **does not modify the original string**.

---

# Why do we need `startsWith()`?

Imagine these situations:

* Employee IDs must start with `"EMP"`.
* Patient IDs must start with `"PAT"`.
* Bank accounts must start with `"ACC"`.
* Secure websites should start with `"https://"`.
* Product codes should start with `"PRD"`.

Instead of writing complicated conditions, JavaScript provides `startsWith()`.

---

# 2. Syntax

```javascript
string.startsWith(searchText);
```

or

```javascript
string.startsWith(searchText, position);
```

### Parameters

* **searchText** → Text to check.
* **position** *(optional)* → Index from where the check starts.

---

# 3. Basic Examples

### Example 1

```javascript
let employee = "EMP-10025";

console.log(employee.startsWith("EMP"));
```

Output

```text
true
```

---

### Example 2

```javascript
let patient = "PAT-458921";

console.log(patient.startsWith("PAT"));
```

Output

```text
true
```

---

### Example 3

```javascript
let website = "https://google.com";

console.log(website.startsWith("https"));
```

Output

```text
true
```

---

### Example 4

```javascript
let city = "New Delhi";

console.log(city.startsWith("Delhi"));
```

Output

```text
false
```

Because the string starts with **New**, not **Delhi**.

---

### Example 5

```javascript
let movie = "SpiderMan";

console.log(movie.startsWith("Spider"));
```

Output

```text
true
```

---

# 4. Using Position

```javascript
let text = "JavaScript";

console.log(text.startsWith("Script", 4));
```

Output

```text
true
```

The check begins from index `4`.

---

Another example:

```javascript
console.log("JavaScript".startsWith("Java", 4));
```

Output

```text
false
```

---

# 5. Return Value

`startsWith()` returns only a **Boolean**.

```javascript
console.log("Apple".startsWith("App"));
```

Output

```text
true
```

---

```javascript
console.log("Apple".startsWith("Ban"));
```

Output

```text
false
```

---

# 6. Real-Life Examples

## Banking

```javascript
let account = "ACC-123456";

console.log(account.startsWith("ACC"));
```

Output

```text
true
```

---

## Hospital

```javascript
let patient = "PAT-458921";

console.log(patient.startsWith("PAT"));
```

Output

```text
true
```

---

## Employee

```javascript
let employee = "EMP-10025";

console.log(employee.startsWith("EMP"));
```

Output

```text
true
```

---

## Website

```javascript
let website = "https://google.com";

console.log(website.startsWith("https"));
```

Output

```text
true
```

---

## Product

```javascript
let product = "PRD-2025";

console.log(product.startsWith("PRD"));
```

Output

```text
true
```

---

# 7. Method Chaining

```javascript
let website = "  HTTPS://GOOGLE.COM  ";

console.log(
    website.trim().toLowerCase().startsWith("https")
);
```

Output

```text
true
```

---

# 8. Common Mistakes

## Mistake 1

Thinking it checks anywhere in the string.

```javascript
console.log("New Delhi".startsWith("Delhi"));
```

Output

```text
false
```

Because `"Delhi"` is **not at the beginning**.

---

## Mistake 2

Case sensitivity.

```javascript
console.log("JavaScript".startsWith("java"));
```

Output

```text
false
```

Correct:

```javascript
console.log(
    "JavaScript".toLowerCase().startsWith("java")
);
```

Output

```text
true
```

---

## Mistake 3

Thinking it modifies the string.

It doesn't.

Strings remain immutable.

---

# 9. Coding Assignments (10)

Create these files inside **01-JavaScript**.

### 1. employeeValidation.js

Check whether:

```text
EMP-10025
```

starts with `"EMP"`.

---

### 2. patientValidation.js

Check whether:

```text
PAT-458921
```

starts with `"PAT"`.

---

### 3. bankValidation.js

Check whether:

```text
ACC-123456
```

starts with `"ACC"`.

---

### 4. websiteValidation.js

Check whether:

```text
https://google.com
```

starts with `"https"`.

---

### 5. productValidation.js

Check whether:

```text
PRD-2025
```

starts with `"PRD"`.

---

### 6. cityValidation.js

Check whether:

```text
New Delhi
```

starts with `"New"`.

---

### 7. movieValidation.js

Check whether:

```text
SpiderMan
```

starts with `"Spider"`.

---

### 8. companyValidation.js

Check whether:

```text
Microsoft Corporation
```

starts with `"Micro"`.

---

### 9. usernameValidation.js

Check whether:

```text
john_doe
```

starts with `"john"`.

---

### 10. foodValidation.js

Check whether:

```text
Pizza Burger Pasta
```

starts with `"Pizza"`.

---

# 10. Mini Project

## Secure Website Checker

Store:

```text
https://mywebsite.com
```

Display:

```text
Secure Website : true
```

---

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

---

# 12. MCQs

### Q1.

`startsWith()` returns:

A) String

B) Boolean

C) Array

D) Number

---

### Q2.

`startsWith()` is a:

A) Property

B) Method

C) Variable

D) Object

---

### Q3.

Output?

```javascript
console.log("SpiderMan".startsWith("Spider"));
```

A) `true`

B) `false`

C) `"Spider"`

D) Error

---

### Q4.

Does `startsWith()` modify the original string?

A) Yes

B) No

---

### Q5.

Which method is commonly chained with `startsWith()` for a case-insensitive comparison?

A) `trim()`

B) `toLowerCase()`

C) `split()`

D) `slice()`

---

# 13. Notes (`Strings.md`)

Add:

```md
## startsWith()

- Used to check whether a string starts with specific text.
- Returns `true` or `false`.
- Returns a Boolean value.
- Does not modify the original string.
- Supports an optional position parameter.

### Common Uses

- Employee ID validation
- Patient ID validation
- Bank account validation
- Website URL validation
- Product code validation
```

---

# 14. Git Practice

```bash
git status
git add .
git commit -m "Completed JavaScript startsWith() method"
git push
```

---

# 💡 Interview Tip

Many beginners confuse `includes()` and `startsWith()`.

| Method         | Checks                                             |
| -------------- | -------------------------------------------------- |
| `includes()`   | Whether the text exists **anywhere** in the string |
| `startsWith()` | Whether the string **begins** with the text        |

### Example

```javascript
let text = "New Delhi";

console.log(text.includes("Delhi"));    // true
console.log(text.startsWith("Delhi"));  // false
console.log(text.startsWith("New"));    // true
```

**Easy way to remember:**

* `includes()` → **"Does it exist anywhere?"**
* `startsWith()` → **"Does it begin with this?"**

---
