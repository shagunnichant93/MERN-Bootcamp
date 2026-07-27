Excellent work! 🎉

I checked your screenshot, and all five programs ran successfully.

✅ Screenshot Review
trafficSignalSwitch.js → Go ✅
dayChecker.js → Holiday ✅
calculatorMenu.js → Subtraction ✅
monthChecker.js → May ✅
foodMenu.js → Invalid Food Choice ✅ (This means your default case is working.)

Everything looks correct.

Quiz Review
Q1. When should we use switch instead of if...else if?

Your answer:

as it is more cleaner when we have fixed choices

✅ Correct.

Examples:

Days of the week
Months
Menu options
Traffic lights
Calculator menu
Q2. What is the purpose of break?

Your answer:

to stop execution after matching the choices

✅ Perfect.

Q3. What happens if break is omitted?

Your answer:

it executes both the cases...

✅ Correct idea.

Small correction:

It doesn't execute only two cases—it continues executing every case after the matched one until it finds a break or reaches the end of the switch.

Example:

switch(color){
   case "red":
      console.log("Stop");

   case "yellow":
      console.log("Ready");

   case "green":
      console.log("Go");

   default:
      console.log("Invalid");
}

If color = "red":

Stop
Ready
Go
Invalid

This behavior is called fall-through.

Q4. Which block runs if no case matches?

Your answer:

default

✅ Correct.

Q5. Real-life example

Your answer:

calculator

✅ Excellent example.

Score

🏆 5/5

You're consistently scoring full marks now. More importantly, your explanations show that you're understanding the concepts, not just memorizing them.

Git Commit (Day 7)

Now save today's work.

git add .
git commit -m "Day 7 - Learned Switch Statement"
git push
Progress So Far

You've now completed:

✅ Node.js Basics
✅ Variables
✅ Data Types
✅ Operators
✅ Comparison Operators
✅ if
✅ if...else
✅ else if Ladder
✅ Logical Operators
✅ Switch Statement

That's a solid JavaScript foundation.