/**
 * Created by Bancho on 04-Feb-16.
 */
//Write a program that accepts one or more numbers as command-line arguments
//and prints the sum of those numbers to the console.

var numbersToSum = [];
for(var i = 2; i < process.argv.length; i++){
    var number = parseInt(process.argv[i]);
    numbersToSum.push(number);
}
var sum = 0;
numbersToSum.forEach(function(number){
    sum += number;
});
console.log(sum);