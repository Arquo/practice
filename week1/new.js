var age = 100;
var isGood = false;
var firstName = "Jaa";
var tuple = [1, true];
var Type;
(function (Type) {
    Type[Type["small"] = 0] = "small";
    Type[Type["big"] = 1] = "big";
    Type[Type["mid"] = 2] = "mid";
})(Type || (Type = {}));
var size = Type.small;
var obj = { key: 'value' };
/"   ----------------------------------------         "/;
var strings = ['apple', 'banana', 'orange'];
var mixed = [1, 'two', true];
var mixed2 = [1, 'two', true];
var emptyArray = [];
var emptyArray2 = [];
console.log(age);
console.log(emptyArray);
function logMessage() {
    console.log("Hello bruh");
}
var numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]
var newNumbers = numbers.map(function (element) { return element + 1; });
console.log(newNumbers); //[2, 3, 4, 5, 6]
var evenNumbers = numbers.filter(function (element) { return element % 2 === 0; });
console.log(evenNumbers); // [2, 4]
// reduce is basically add
var sum = numbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 10);
console.log(sum); //25
