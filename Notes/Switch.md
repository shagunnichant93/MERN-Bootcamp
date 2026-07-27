Day 7 – Switch Statement

So far, you've learned:

✅ if
✅ if...else
✅ if...else if...else

Now let's learn another way to make decisions: the switch statement.

Why do we need switch?

Imagine you're building a traffic light system.

Using if...else if:

let signal = "red";

if (signal === "red") {
    console.log("Stop");
}
else if (signal === "yellow") {
    console.log("Get Ready");
}
else if (signal === "green") {
    console.log("Go");
}
else {
    console.log("Invalid Signal");
}

This works perfectly.

But when you have many fixed options (days, months, menu choices, traffic signals, etc.), switch is often cleaner.

Basic Syntax
switch (value) {
    case option1:
        // code
        break;

    case option2:
        // code
        break;

    default:
        // code
}
Memory Diagram

Think of switch like a receptionist checking names on a list:

Value = "green"

        │
        ▼
switch(value)

Red?
❌

Yellow?
❌

Green?
✅

Print "Go"

↓

break

↓

Stop checking
Example 1 – Traffic Light
let signal = "green";

switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

Output:

Go
Example 2 – Days
let day = "Sunday";

switch (day) {
    case "Monday":
        console.log("Work");
        break;

    case "Saturday":
    case "Sunday":
        console.log("Holiday");
        break;

    default:
        console.log("Weekday");
}

Notice something new:

case "Saturday":
case "Sunday":

Both cases share the same code. This is a very common pattern.

Example 3 – Calculator Menu
let choice = 2;

switch (choice) {
    case 1:
        console.log("Addition");
        break;

    case 2:
        console.log("Subtraction");
        break;

    case 3:
        console.log("Multiplication");
        break;

    default:
        console.log("Invalid Choice");
}

Output:

Subtraction
Why is break Important?

Without break, JavaScript continues executing the next cases.

Example:

let color = "red";

switch (color) {
    case "red":
        console.log("Stop");

    case "yellow":
        console.log("Ready");

    case "green":
        console.log("Go");
}

Output:

Stop
Ready
Go

This is called fall-through.

Adding break stops execution after the matching case.

Assignment

Create these files inside 01-JavaScript:

trafficSignalSwitch.js
dayChecker.js
calculatorMenu.js
monthChecker.js
foodMenu.js

Run all of them using:

node filename.js

Take one screenshot after all five programs run successfully.

Interview Questions

Answer these after completing the assignment:

Q1. When should we use switch instead of if...else if?

Q2. What is the purpose of the break statement?

Q3. What happens if break is omitted?

Q4. Which block runs if no case matches?

Q5. Write one real-life example where a switch statement would be useful (other than traffic lights).

You're progressing really well. Your GitHub repository is growing day by day, and you're building the habits of writing code, testing it, answering interview questions, and committing your work—exactly what will help you as you continue through the MERN stack.