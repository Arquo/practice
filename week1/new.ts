let age: number = 100;
let isGood: boolean = false;
let firstName: string = "Jaa";
let tuple: [number, boolean] = [1,true]

enum Type {
    small,
    big,
    mid,
}

let size: Type = Type.small;
let obj: object = { key: 'value' };

/"   ----------------------------------------         "/
let strings: string[] = ['apple', 'banana', 'orange'];
let mixed: any[] = [1, 'two', true];
let mixed2 = [1, 'two', true];
let emptyArray: number[] = [];
let emptyArray2 = [];



console.log(age)
console.log(emptyArray)



function logMessage(): void {
    console.log("Hello bruh");
}

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]
const newNumbers = numbers.map((element) => element + 1);
console.log(newNumbers); //[2, 3, 4, 5, 6]

const evenNumbers = numbers.filter((element) => element % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce is basically add
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 10);
console.log(sum)   //25



