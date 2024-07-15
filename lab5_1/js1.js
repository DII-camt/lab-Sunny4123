var x = 10;
if(x === 10){
var y = 100;
console.log(y);
}
console.log(y);

var x = 10;
if(x === 10){
var y = 100;
console.log(y);
}
console.log(y);
 var x2 = 10;
 let y2 = 100;
    if(x === 10){
 console.log(y);
 }
 console.log(y);

let myArray = [1, 2, 3]
myArray.forEach(element => {
console.log(element);
});

let myArray2 = [1, 2, 3];
for (const iterator of myArray) {
console.log(iterator); //?
}

let dog = {
    name: "Yoyo", color: "black", age: 2
    }
    for (const k in dog) {
    console.log(k);
}

const numbersOne2 = [1, 2, 3];
const numbersTwo2 = [4, 5, numbersOne2];
console.log(numbersTwo2)

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, ...numbersOne];
console.log(numbersTwo)

function fun(input){
    let sum = 0;
    for (let i = 1; i <= input; i++) {
    sum += i;
    }
    return sum;
}

console.log("sum"+fun(4));