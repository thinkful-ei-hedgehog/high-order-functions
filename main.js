let list = ['cAt','dOg','fIsh'];
function mainFunc(arr,callback){
    //for (let item of arr) {  
    for(let i=0; i<arr.length;i++){
        list[i] = callback(list[i]);
    }
    console.log(arr);
}

mainFunc(list, function(str){
    return str.toUpperCase();
})
mainFunc(list, function(str){
    return str.toLowerCase();
})



function createCounter() {
    let runningCount = 0;

    return function(increment = 1){
        runningCount += increment;
        return runningCount;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());    // 1
console.log(counter1());    // 2
console.log(counter1());    // 3

console.log(counter2(5));   // 5
console.log(counter2(3));   // 8
console.log(counter2(2));   

