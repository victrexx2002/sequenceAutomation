//this code logs in the first n terms in a fibonacci sequence with the first two numbers given by the user


console.log('this logs a fibonacci sequence to the console.');
var sequence = [];

var fibonacci = function(){
    var num1 = +prompt('input the first term');
    var num2 = +prompt('input the second term');
    sequence.push(num1,num2);
    var num = +prompt('input the nth term');
    for ( var i = 0 ; i < num - 2; i++){
        sum = sequence[i] + sequence[i+1];
        sequence.push(sum);
    }
}
fibonacci(sequence);
console.log(sequence);