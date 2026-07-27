//1
let stringValue1 = "Hello";
let numberValue1 = 25;
let booleanValue1 = true;
let undefinedValue1;
let nullValue1 = null;
let symbolValue1 = Symbol("id");
let bigIntValue1 = 12345678901234567890n;

console.log(typeof stringValue1);
console.log(typeof numberValue1);
console.log(typeof booleanValue1);
console.log(typeof undefinedValue1);
console.log(typeof nullValue1);
console.log(typeof symbolValue1);
console.log(typeof bigIntValue1);

//2 Primitive
// let a1= 10;
// let b1 = a;

// b1 = 20;

// console.log("Primitive a1:", a1);
// console.log("Primitive b1:", b1);

//2 Reference
let person1 = {
  name: "John",
};

let person2 = person1;

person2.name = "David";

console.log("Reference person1:", person1.name);
console.log("Reference person2:", person2.name);

//3
let value1;
let value2 = null;

console.log("value1:", value1);
console.log("value2:", value2);

console.log("typeof value1:", typeof value1);
console.log("typeof value2:", typeof value2);

//4
let value = null;
console.log(typeof value);

//5
let id1 = Symbol("user");
let id2 = Symbol("user");

console.log(id1 === id2);
console.log(typeof id1);

//6
let normalNumber = 9007199254740993;
let bigNumber = 9007199254740993n;

console.log("Number:", normalNumber);
console.log("BigInt:", bigNumber);

console.log("Type of Number:", typeof normalNumber);
console.log("Type of BigInt:", typeof bigNumber);

//7
let text = "hello";
console.log("Before:", text);
text[0] = "H";
console.log("After:", text);

//8
let primitiveString = "Hello";
let objectString = new String("Hello");

console.log("Primitive:", primitiveString);
console.log("Object:", objectString);

console.log("Primitive type:", typeof primitiveString);
console.log("Object type:", typeof objectString);

//9
console.log("Boolean values:");

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

console.log("Possible Boolean values:");
console.log(true);
console.log(false);

//10
let result1 = Number("Hello");
console.log("Value:", result1);
console.log("Type:", typeof result1);
console.log("Is NaN:", Number.isNaN(result1));

//11
console.log(typeof "hello");

//12
console.log(typeof 42);

//13
console.log(typeof undefined);

//14
console.log(typeof null);

//15
console.log(typeof NaN);

//16
console.log(typeof Symbol("id"));

//17
console.log(typeof 10n);

//18
console.log("5" + 3);

//19
console.log(5 + "3");

//20
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);

//21
let name = new String("John");
console.log(typeof name);

let a2 = "John";
let b2 = new String("John");
console.log(typeof a2);
console.log(typeof b2);

//22
console.log("22")
const bigNum = 9007199254740993n;
console.log(bigNum);
console.log(typeof bigNum);
console.log(bigNum + 1n);
console.log("22")

//23
let x = 10n + 10n;
console.log(x);

//24
console.log(undefined == null); //true
//console.log("24");

//25
console.log(undefined === null); //false 
console.log("25" === 25); //true //false

//26
let s = "hello";
s[0] = "H";
console.log(s);

//27
console.log(typeof NaN === "number");

//28
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2);

//29
console.log(0 == false);

//30
console.log(0 === false);

//31
let stringValue2 = "Hello";
let numberValue2 = 100;
let booleanValue2 = true;
let undefinedValue2;
let nullValue2 = null;
let symbolValue2 = Symbol("id");
let bigIntValue2 = 10000000000000000000n;

console.log("String:", typeof stringValue2);
console.log("Number:", typeof numberValue2);
console.log("Boolean:", typeof booleanValue2);
console.log("Undefined:", typeof undefinedValue2);
console.log("Null:", typeof nullValue2);
console.log("Symbol:", typeof symbolValue2);
console.log("BigInt:", typeof bigIntValue2);

//32
let message = "hello";
console.log("Before:", message);
message[0] = "H";
console.log("After:", message);

//33
let number1 = 100n;
let number2 = 50n;

let result2 = number1 + number2;

console.log("Result2:", result2);
console.log("Type:", typeof result2);

//34
function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

console.log(isNullOrUndefined(null));
console.log(isNullOrUndefined(undefined));
console.log(isNullOrUndefined("Hello"));
console.log(isNullOrUndefined(100));

console.log("isNullOrUndefined(false):", isNullOrUndefined(false));
console.log("34");
//35
let symbol1 = Symbol("user");
let symbol2 = Symbol("user");

console.log("Symbol 1:", symbol1);
console.log("Symbol 2:", symbol2);
console.log("Are they equal?", symbol1 === symbol2);

//36
console.log("Boolean(1):", Boolean(1));
console.log("Boolean(0):", Boolean(0));
console.log('Boolean(""):', Boolean(""));
console.log('Boolean("Hello"):', Boolean("Hello"));
console.log("Boolean(null):", Boolean(null));

//37
let valuea = NaN;

console.log("NaN === NaN:", NaN === NaN);
console.log("NaN !== NaN:", NaN !== NaN);

console.log("Number.isNaN(valuea):", Number.isNaN(valuea));

//38
let stringFive = "5";
let numberFive = 5;

console.log("Value 1:", stringFive);
console.log("Type 1:", typeof stringFive);

console.log("Value 2:", numberFive);
console.log("Type 2:", typeof numberFive);

//39
let value11;
let value21 = null;

console.log("Undefined value11:", value11);
console.log("Null value21:", value21);

//40
let age = 25;
let isStudent = true;
console.log(`Age: ${age}, Is Student: ${isStudent}`);

//41
const userId = Symbol("userId");
const user = {
  name: "Soniya",
  [userId]: 101,
};
console.log(user.name);
console.log(user[userId]);
console.log(typeof userId);

//42
let age11 = null;

console.log("Age11:", age11);
console.log("Type:", typeof age11);

if (age11 === null) {
  console.log("Age was intentionally left empty.");
}

//43
let transaction1 = 9007199254740993n;
let transaction2 = 100n;

let total = transaction1 + transaction2;

console.log("Transaction 1:", transaction1);
console.log("Transaction 2:", transaction2);
console.log("Total:", total);

//44
let isLoggedIn = true;

console.log("Is logged in:", isLoggedIn);
console.log("Type:", typeof isLoggedIn);

if (isLoggedIn) {
  console.log("User is logged in.");
} else {
  console.log("User is not logged in.");
}

//45
let username = "Soniya";

console.log("Username:", username);
console.log("Type:", typeof username);

if (typeof username === "string") {
  console.log("Valid username type.");
} else {
  console.log("Invalid username type.");
}

//46
let quantity = 0;

console.log("Quantity:", quantity);
console.log("Boolean(quantity):", Boolean(quantity));

if (!quantity) {
  console.log("Quantity is falsy.");
}

// let quantity = 0;

// if (quantity === undefined || quantity === null) {
//     console.log("Quantity is missing.");
// } else {
//     console.log("Quantity:", quantity);
// }

//47
let phoneNumber = "0987654321";

console.log("Phone:", phoneNumber);
console.log("Type:", typeof phoneNumber);

//48
let result3 = 0.1 + 0.2;

console.log("Result3:", result3);
console.log("Is equal to 0.3:", result3 === 0.3);

//49
let value31;
let value32 = null;

let defaultValue31 = "Default Value32";

let result4 = value31 === undefined ? defaultValue31 : value31;
let result5 = value32 === undefined ? defaultValue32 : value32;

console.log("value31:", value31);
console.log("result4:", result4);

console.log("value32:", value32);
console.log("result5:", result5);

//50
let value55 = null;

console.log("typeof value55:", typeof value55);

console.log("Is value55 null:", value55 === null);
