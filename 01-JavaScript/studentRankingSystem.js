let marks =[88,95,72,100,67,91];

console.log(`Original Marks: ${marks}`);
console.log(`Ascending marks: ${marks.sort((a,b)=>a-b)}`);
console.log(`Descending marks: ${marks.sort((a,b)=>b-a)}`);