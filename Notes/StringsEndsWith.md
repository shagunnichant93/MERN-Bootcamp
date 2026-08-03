Awesome! 🎉

Welcome to the **second last topic** of Module 3.

This topic is very similar to `startsWith()`, so you'll learn it quickly.

---

# Module 3 — Strings

# Topic 12 — `endsWith()`

> ⭐ `endsWith()` is a string method used to check whether a string **ends with** a specified text.

It is commonly used in:

* 📄 File extension validation
* 📧 Email domain validation
* 🌐 Website URL validation
* 🖼️ Image type validation
* 🎵 Audio file validation
* 📹 Video file validation
* 📱 React & Node.js applications

---

# Lesson Flow

1. What is `endsWith()`?
2. Why do we need it?
3. Syntax
4. How `endsWith()` works
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

# 1. What is `endsWith()`?

## Definition

`endsWith()` is a **string method** used to check whether a string **ends with a specified text**.

It returns:

* `true` → if the string ends with the specified text.
* `false` → otherwise.

It **does not modify the original string**.

---

# Why do we need `endsWith()`?

Imagine these situations:

* Check whether a file ends with `.pdf`.
* Check whether an image ends with `.jpg`.
* Check whether an email ends with `@gmail.com`.
* Check whether a website ends with `.com`.
* Check whether a video ends with `.mp4`.

Instead of writing complex conditions, JavaScript provides `endsWith()`.

---

# 2. Syntax

```javascript
string.endsWith(searchText);
```

or

```javascript
string.endsWith(searchText, length);
```

### Parameters

* **searchText** → Text to check.
* **length** *(optional)* → Treats the string as if it were only this many characters long before checking.

> **Note:** Unlike `startsWith()`, the second parameter is **not an index**. It is the **length** of the string to consider.

---

# 3. Basic Examples

### Example 1

```javascript
let file = "resume.pdf";

console.log(file.endsWith(".pdf"));
```

Output

```text
true
```

---

### Example 2

```javascript
let image = "photo.jpg";

console.log(image.endsWith(".png"));
```

Output

```text
false
```

---

### Example 3

```javascript
let email = "john@gmail.com";

console.log(email.endsWith("@gmail.com"));
```

Output

```text
true
```

---

### Example 4

```javascript
let website = "google.com";

console.log(website.endsWith(".com"));
```

Output

```text
true
```

---

### Example 5

```javascript
let song = "music.mp3";

console.log(song.endsWith(".mp3"));
```

Output

```text
true
```

---

# 4. Using the Optional Length Parameter

```javascript
let text = "JavaScript";

console.log(text.endsWith("Java", 4));
```

Output

```text
true
```

### Why?

The second parameter (`4`) means:

Treat the string as only the **first 4 characters**:

```
Java
```

Now check:

```
Does "Java" end with "Java"?
```

Yes → `true`

---

Another example

```javascript
console.log("JavaScript".endsWith("Script", 10));
```

Output

```text
true
```

Because the first **10** characters are:

```
JavaScript
```

which ends with `"Script"`.

---

# 5. Return Value

`endsWith()` always returns a **Boolean**.

```javascript
console.log("resume.pdf".endsWith(".pdf"));
```

Output

```text
true
```

---

```javascript
console.log("resume.pdf".endsWith(".jpg"));
```

Output

```text
false
```

---

# 6. Real-Life Examples

## File Validation

```javascript
let file = "resume.pdf";

console.log(file.endsWith(".pdf"));
```

Output

```text
true
```

---

## Image Validation

```javascript
let image = "photo.jpg";

console.log(image.endsWith(".jpg"));
```

Output

```text
true
```

---

## Email Validation

```javascript
let email = "john@gmail.com";

console.log(email.endsWith("@gmail.com"));
```

Output

```text
true
```

---

## Website Validation

```javascript
let website = "google.com";

console.log(website.endsWith(".com"));
```

Output

```text
true
```

---

## Video Validation

```javascript
let video = "movie.mp4";

console.log(video.endsWith(".mp4"));
```

Output

```text
true
```

---

# 7. Method Chaining

```javascript
let file = "  RESUME.PDF  ";

console.log(
    file.trim().toLowerCase().endsWith(".pdf")
);
```

Output

```text
true
```

---

# 8. Common Mistakes

## Mistake 1

Thinking it checks anywhere.

```javascript
console.log("resume.pdf".endsWith("resume"));
```

Output

```text
false
```

Because `"resume"` is at the **start**, not the **end**.

---

## Mistake 2

Case sensitivity

```javascript
console.log("Resume.PDF".endsWith(".pdf"));
```

Output

```text
false
```

Correct:

```javascript
console.log(
    "Resume.PDF".toLowerCase().endsWith(".pdf")
);
```

Output

```text
true
```

---

## Mistake 3

Thinking it changes the string.

It doesn't.

Strings remain immutable.

---

# 9. Coding Assignments (10)

Create these files inside **01-JavaScript**.

### 1. pdfValidation.js

Check whether:

```
resume.pdf
```

ends with:

```
.pdf
```

---

### 2. imageValidation.js

Check whether:

```
photo.jpg
```

ends with:

```
.jpg
```

---

### 3. emailValidation.js

Check whether:

```
john@gmail.com
```

ends with:

```
@gmail.com
```

---

### 4. websiteValidation.js

Check whether:

```
google.com
```

ends with:

```
.com
```

---

### 5. videoValidation.js

Check whether:

```
movie.mp4
```

ends with:

```
.mp4
```

---

### 6. musicValidation.js

Check whether:

```
music.mp3
```

ends with:

```
.mp3
```

---

### 7. companyValidation.js

Check whether:

```
Microsoft Corporation
```

ends with:

```
Corporation
```

---

### 8. cityValidation.js

Check whether:

```
New Delhi
```

ends with:

```
Delhi
```

---

### 9. bankValidation.js

Check whether:

```
BANK1234
```

ends with:

```
1234
```

---

### 10. patientValidation.js

Check whether:

```
PAT458921
```

ends with:

```
8921
```

---

# 10. Mini Project

## File Upload Validator

Store:

```
resume.pdf
```

Check whether it ends with:

```
.pdf
```

Display:

```
Valid PDF : true
```

---

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

---

# 12. MCQs

### Q1.

`endsWith()` returns:

A) String

B) Boolean

C) Array

D) Number

---

### Q2.

`endsWith()` is a:

A) Property

B) Method

C) Variable

D) Object

---

### Q3.

Output?

```javascript
console.log("movie.mp4".endsWith(".mp4"));
```

A) `true`

B) `false`

C) `.mp4`

D) Error

---

### Q4.

Does `endsWith()` modify the original string?

A) Yes

B) No

---

### Q5.

Which method is commonly chained with `endsWith()` for case-insensitive comparison?

A) `trim()`

B) `toLowerCase()`

C) `split()`

D) `slice()`

---

# 13. Notes (`Strings.md`)

Add:

```md
## endsWith()

- Used to check whether a string ends with specific text.
- Returns `true` or `false`.
- Returns a Boolean value.
- Does not modify the original string.
- Supports an optional length parameter.

### Common Uses

- PDF validation
- Image validation
- Email domain validation
- Website validation
- Video and audio file validation
```

---

# 14. Git Practice

```bash
git status
git add .
git commit -m "Completed JavaScript endsWith() method"
git push
```

---

# 💡 Interview Tip

Don't confuse these three methods:

| Method         | Checks                  |
| -------------- | ----------------------- |
| `startsWith()` | Beginning of the string |
| `endsWith()`   | End of the string       |
| `includes()`   | Anywhere in the string  |

### Example

```javascript
let file = "resume.pdf";

console.log(file.startsWith("resume")); // true
console.log(file.endsWith(".pdf"));     // true
console.log(file.includes("sum"));      // true
```

### Easy way to remember

* `startsWith()` → **Beginning**
* `endsWith()` → **Ending**
* `includes()` → **Anywhere**

---