// Q1 - Variable Example

let username = "Soniya";

console.log("Username:", username);

// Q2 - Identifier Example

let studentName = "Rahul";

console.log("Identifier:", "studentName");
console.log("Value:", studentName);

// Q3 - Valid Variable Names

let age = 22;
let _marks = 95;
let $salary = 50000;
let studentName = "Soniya";

console.log(age);
console.log(_marks);
console.log($salary);
console.log(studentName);

// Q4 - var, let, const

var a = 10;
var a = 20;

let b = 30;
b = 40;

const PI = 3.14;

console.log("var:", a);
console.log("let:", b);
console.log("const:", PI);

// Q5 - const Object

const student = {
    name: "Soniya",
    age: 22
};

student.age = 23;

console.log(student);

// Q6 - Hoisting

console.log(a);

var a = 100;

console.log(a);

// Q7 - TDZ

console.log(city);

let city = "Chennai";

// Q8 - Hoisting Comparison

console.log("Using var");
console.log(x);

var x = 10;

console.log("----------------");

console.log("Using let");

// Uncomment below to see TDZ error

// console.log(y);

let y = 20;

console.log(y);

// Q9 - Scope

let globalVar = "Global Variable";

function showScope() {

    let localVar = "Local Variable";

    console.log(globalVar);

    console.log(localVar);
}

showScope();

console.log(globalVar);

// console.log(localVar); // Error

// Q10 - var Problem

var x = 10;

{
    var x = 20;
}

console.log("var:", x);

let y = 10;

{
    let y = 20;

    console.log("Block y:", y);
}

console.log("Outside y:", y);

// Q11 - Copy by Value

let a = 10;
let b = a;

b = 20;

console.log(a);

// Q12 - var is Function Scoped

var x = 1;

{
    var x = 2;
}

console.log(x);

// Q13 - Hoisting with var

console.log(y);

var y = 5;

// Q14 - Temporal Dead Zone

console.log(z);

let z = 5;

// Q15 - const Object

const obj = {
    name: "Ravi"
};

obj.name = "Kumar";

console.log(obj.name);

// Q16 - var Hoisting Inside Function

function test() {

    console.log(a);

    var a = 10;

}

test();

// Q17 - Local Scope

let count = 5;

function inc() {

    let count = 10;

    count++;

    console.log(count);

}

inc();

console.log(count);

// Q18 - var Loop

for (var i = 0; i < 3; i++) {

}

console.log(i);

// Q19 - let Loop

for (let i = 0; i < 3; i++) {

}

console.log(i);

// Q20 - const Array

const arr = [1, 2, 3];

arr.push(4);

console.log(arr);

// Q21 - const Reassignment Error

const age = 20;

age = 30;

console.log(age);

let age = 20;

age = 30;

console.log(age);

// Q22 - Reserved Keyword

let let = 5;

let number = 5;

console.log(number);

// Q23 - Invalid Identifier

var 1name = "test";
var name1 = "test";

console.log(name1);

// Q24 - TDZ

console.log(x);

let x = 10;
let x = 10;

console.log(x);

// Q25 - const Initialization

const arr;

arr = [1,2,3];
const arr = [1,2,3];

console.log(arr);

// Q26 - var Hoisting

function test() {

    console.log(msg);

    var msg = "hi";

}

test();
function test(){

    var msg = "hi";

    console.log(msg);

}

test();

// Q27 - Redeclaration

let price = 100;

let price = 200;
let price = 100;

price = 200;

console.log(price);

// Q28 - const Reassignment

const PI = 3.14;

PI = 3.14159;
const PI = 3.14;

console.log(PI);

// Q29 - Block Scope

if(true){

    let day = "Monday";

}

console.log(day);
let day;

if(true){

    day = "Monday";

}

console.log(day);

// Q30 - Automatic Semicolon Insertion

var name = "John"

name = "Doe"

console.log(name);


// Q31 - Username

let username = "Soniya";

console.log("Username:", username);

// Q32 - Birth Year

const BIRTH_YEAR = 2004;

let age = 2026 - BIRTH_YEAR;

console.log("Age:", age);

// Q33 - Swap Variables

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log("a =", a);
console.log("b =", b);

// Q34 - typeof

var name = "Soniya";
let age = 22;
const isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);

// Q35 - TDZ Example

console.log(city);

let city = "Chennai";

// Q36 - Block Scope

{
    let message = "Welcome to JavaScript";

    console.log(message);
}

console.log(message);

// Q37 - const Object

const student = {

    name: "Soniya",

    age: 22

};

student.age = 23;

student.city = "Chennai";

console.log(student);

// Q38 - var Redeclaration

function demo() {

    var number = 10;

    var number = 20;

    console.log(number);

}

demo();

/*
var allows redeclaration
within the same function scope.
*/

// Q39 - Global vs Function Scope

let username = "Global User";

function display() {

    let username = "Local User";

    console.log("Inside Function:", username);

}

display();

console.log("Outside Function:", username);

// Q40 - let in Loop

let functions = [];

for (let i = 0; i < 3; i++) {

    functions.push(function () {

        console.log(i);

    });

}

functions[0]();

functions[1]();

functions[2]();

// Q41 - Bank Account Balance

let accountBalance = 5000;

console.log("Current Balance:", accountBalance);

accountBalance = accountBalance + 1500;

console.log("After Deposit:", accountBalance);

accountBalance = accountBalance - 1000;

console.log("After Withdrawal:", accountBalance);

// Q42 - Independence Year

const INDEPENDENCE_YEAR = 1947;

console.log("India Independence Year:", INDEPENDENCE_YEAR);

// Q43 - Shopping Cart

let cartTotal = 1000;

console.log("Initial Total:", cartTotal);

cartTotal += 500;

console.log("After Adding Item:", cartTotal);

cartTotal -= 200;

console.log("After Removing Item:", cartTotal);

// Q44 - Configuration Value

const MAX_LOGIN_ATTEMPTS = 5;

console.log("Maximum Login Attempts:", MAX_LOGIN_ATTEMPTS);

// Q45 - Login Status

let isLoggedIn = false;

console.log("Before Login:", isLoggedIn);

isLoggedIn = true;

console.log("After Login:", isLoggedIn);

// Q46 - Product ID

const PRODUCT_ID = 102;

console.log("Product ID:", PRODUCT_ID);

// Q47 - Using var

console.log("Using var");

for (var i = 0; i < 3; i++) {

    setTimeout(() => {

        console.log(i);

    }, 100);

}

// Q47 - Using let

console.log("Using let");

for (let i = 0; i < 3; i++) {

    setTimeout(() => {

        console.log(i);

    }, 100);

}

// Q48 - Temperature Sensor

let temperature = 30;

console.log("Current:", temperature);

temperature = 31;

console.log("Updated:", temperature);

temperature = 32;

console.log("Updated:", temperature);

// Q49 - API Key

const API_KEY = "ABC123XYZ456";

console.log("API Key:", API_KEY);

// Q50 - Payroll System

const BASE_SALARY = 50000;

let monthlyBonus = 5000;

console.log("Base Salary:", BASE_SALARY);

console.log("Bonus:", monthlyBonus);

monthlyBonus = 7000;

console.log("Updated Bonus:", monthlyBonus);

let totalSalary = BASE_SALARY + monthlyBonus;

console.log("Total Salary:", totalSalary);

