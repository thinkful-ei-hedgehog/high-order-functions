// -1 0 1 2 3

//-1
let nums = [9,2,1,6,5];

nums.sort((a,b)=>b-a)
console.log(nums);

let words=['papaya','Apple','orange','Kiwi'];
words.sort((a,b)=>a.toLowerCase() > b.toLowerCase()? 1:-1)

console.log(words);