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


