let queue = [
    "Rahul",
    "John",
    "Priya",
    "Shagun",
    "Amit"
];
console.log(`Initial queue: ${queue[0]}
    ${queue[1]}
    ${queue[2]}
    ${queue[3]}
    ${queue[4]}`);
console.log("------------------");
let removed = queue.shift();
console.log(`Remaining Queue: ${queue[0]}
    ${queue[1]}
    ${queue[2]}
    ${queue[3]}`);
console.log("------------------");
console.log(`Served Customer: ${removed}`);
console.log(`Total people in queue: ${queue.length}`);
