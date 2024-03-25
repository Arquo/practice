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
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ['apple', 'banana', 'orange'];
let mixed: any[] = [1, 'two', true];
let mixed2 = [1, 'two', true];
let emptyArray: number[] = [];
let emptyArray2 = [];






console.log(age)
console.log(numbers)
console.log(emptyArray)



function logMessage(): void {
    console.log("Hello bruh");
}