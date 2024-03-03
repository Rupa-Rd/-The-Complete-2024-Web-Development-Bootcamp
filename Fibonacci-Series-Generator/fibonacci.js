function fibonacciGenerator(num){
// 0, 1, 1, 2, 3
var fibonacci = [0, 1];
if(num === 1){
    return fibonacci[0];
}
if (num  == 2){
    return fibonacci;
}
for(var i = 2; i < num; i++){
    var temp = fibonacci[fibonacci.length -1];
    var temp2 = fibonacci[fibonacci.length -2];
    fibonacci.push(temp + temp2);
}
return fibonacci;


}

console.log(fibonacciGenerator(10));