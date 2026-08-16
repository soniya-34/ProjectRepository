// 1-Implicit conversion
let result1 = "5" - 2;

console.log(result1); // 3
console.log(typeof result1); // number

// Explicit conversion
let value = "5";
let result2 = Number(value);

console.log(result2); // 5
console.log(typeof result2); // number

//2
let value1 = Number("123");
let value2 = Number("123abc");

console.log(value1); // 123
console.log(value2); // NaN

//3
let value11 = String(123);
let value22 = (123).toString();

console.log(value11); // "123"
console.log(value22); // "123"

console.log(typeof value11); // string
console.log(typeof value22); // string

// String() can handle null
console.log(String(null)); // "null"

//4
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Truthy examples
console.log(Boolean("hello"));    // true
console.log(Boolean("0"));        // true
console.log(Boolean("false"));    // true

//5
console.log(Number("123"));       // 123
console.log(Number("123abc"));    // NaN

console.log(parseInt("123", 10));      // 123
console.log(parseInt("123abc", 10));   // 123

//6
let value33 = parseInt("42px", 10);

console.log(value33); // 42
console.log(typeof value33); // number

//7
let a = "5";
let b = 5;

console.log(a == b);   // true
console.log(a === b);  // false

//8
let stringValue = "5";
let numberValue = 5;

console.log(stringValue == numberValue);   // true
console.log(stringValue === numberValue);  // false

console.log(typeof stringValue); // string
console.log(typeof numberValue); // number

//9
let value41 = "hello";
let value42 = "";

if (value41) {
    console.log("value41 is truthy");
}

if (!value42) {
    console.log("value42 is falsy");      //value1 is truthy
}                                         //value2 is falsy

//10
let value44 = parseFloat("3.14 is pi");
console.log(value44); // 3.14

//11
console.log(Number("123"));     //123

//12
console.log(Number("123abc"));   //NaN

//13
console.log(Number(""));          //0

//14
console.log(Number(null));       //0

//15
console.log(Number(undefined));    //NaN

//16
console.log(String(null));       //NaN

//17
console.log(Boolean(""));       //false

//18
console.log(Boolean(" "));      //true

//19
console.log("5" == 5);         //true

//20
console.log("5" === 5);       //true

//21
let value51 = Number("abc");

console.log(value51); // NaN
console.log(Number.isNaN(value51)); // true

//22
let result22 = 1 + "1";
console.log(result22); // "11"
console.log(typeof result22); // string

//23
let result3 = "5" - 1;
console.log(result3); // 4
console.log(typeof result3); // number

//24
let result4 = null == undefined;
console.log(result4); // true

//25
let result5 = null === undefined;
console.log(result5); // false

//26
let result6 = [] == false;
console.log(result6); // true

//27
let result7 = parseInt("", 10);
console.log(result7); // NaN
console.log(Number.isNaN(result7)); // true

//28
if ("0") {
    console.log("truthy");
}            //truthy

//29
let a1 = NaN;
let b1 = NaN;
console.log(a1 == b1);   // false
console.log(a1 === b1);  // false
console.log(Number.isNaN(a1)); // true

//30
let value66 = +"3.14";

console.log(value66); // 3.14
console.log(typeof value66); // number

//31
let value77 = "42";
// Method 1: Number()
let number1 = Number(value77);
// Method 2: parseInt()
let number2 = parseInt(value77, 10);
console.log(number1);
console.log(number2);

//32
function convertToBoolean(value) {
    return Boolean(value);
}
console.log(convertToBoolean("Hello"));
console.log(convertToBoolean(""));
console.log(convertToBoolean(0));
console.log(convertToBoolean(10));
console.log(convertToBoolean(null));

//33
let userInput = "19.99";
let price = parseFloat(userInput);
console.log(price);
console.log(price * 2);

//34
let falsyValues = [
    false,
    0,
    -0,
    0n,
    "",
    null,
    undefined,
    NaN
];
falsyValues.forEach(function(value) {
    console.log(value, "=>", Boolean(value));
});

//35
let value101 = "5";
let value201 = 5;
let looseComparison = value101 == value201;
let strictComparison = value101 === value201;
console.log("== :", looseComparison);
console.log("===:", strictComparison);

//36
function canConvertToNumber(value) {
    let number = Number(value);

    return !Number.isNaN(number);
}
console.log(canConvertToNumber("123"));
console.log(canConvertToNumber("45.5"));
console.log(canConvertToNumber("abc"));

//37
let binary = "1010";
let decimal = parseInt(binary, 2);
console.log(decimal);

//38
let age = 25;
let ageString = String(age);
let message = `My age is ${ageString}.`;
console.log(message);

//39
function convertValue(value) {
    let number = Number(value);
    if (Number.isNaN(number)) {
        return 0;
    }
    return number;
}
console.log(convertValue("100"));
console.log(convertValue(50));
console.log(convertValue(true));
console.log(convertValue(false));
console.log(convertValue("abc"));

//40
let result111 = Number("10");
let result211 = parseInt("10abc", 10);
console.log("Number:", result111);
console.log("parseInt:", result211);
console.log("Number('10abc'):", Number("10abc"));

//41
let quantity = "5";
let price11 = 100;
// Without conversion
console.log(quantity + price11); // "5100"
// With conversion
quantity = Number(quantity);
console.log(quantity + price11); // 105
console.log(quantity * price11); // 500

//42
let priceInput = " 100 ";
let price22 = Number(priceInput);
console.log(price22); // 100
console.log(typeof price22); // number

//43
let apiValue = "200";
let expectedValue = 200;
console.log(apiValue == expectedValue);   // true
console.log(apiValue === expectedValue);  // false

//44
let checkboxValue = 1;
let isChecked = Boolean(checkboxValue);
console.log(isChecked); // true
console.log(typeof isChecked); // boolean

//45
let age11 = "25 years";
let numericAge = parseInt(age11, 10);
console.log(numericAge); // 25

//46
let storedValue = "false";
console.log(Boolean(storedValue)); // true
let correctValue = storedValue === "true";
console.log(correctValue); // false

//47
let subtotal = 100;
let discount = "10";
// Wrong
console.log(subtotal + discount); // "10010"
// Correct conversion
discount = Number(discount);
console.log(subtotal + discount); // 110
// If discount should be subtracted:
console.log(subtotal - discount); // 90

//48
let quantity11 = 0;
if (quantity11) {
    console.log("Quantity exists");
} else {
    console.log("Condition is false because 0 is falsy");
}

//49
let csvRow = {
    name: "Ravi",
    age: "20",
    salary: "50000",
    city: "Chennai"
};
let age22 = Number(csvRow.age22);
let salary = Number(csvRow.salary);
console.log(age22);
console.log(typeof age22);
console.log(salary);
console.log(typeof salary);
console.log(csvRow.name);
console.log(csvRow.city);

//50
function validateNumber(value) {
    let number = Number(value);

    if (Number.isNaN(number)) {
        return "Invalid number";
    }

    return number;
}
console.log(validateNumber("123"));
console.log(validateNumber("45.5"));
console.log(validateNumber("abc"));
console.log(validateNumber("100abc"));

//51
function convertValue(value) {
    // 1. null or undefined
    if (value === null || value === undefined) {
        return "No Value";
    }

    // 2. Empty string
    if (value === "") {
        return "Empty String";
    }

    // 3. Boolean
    if (value === true || value === false) {
        return "Boolean Value";
    }

    // 4. Try converting to number
    let numberValue = Number(value);

    if (!Number.isNaN(numberValue)) {
        return numberValue;
    }

    // 5. Otherwise
    return "Invalid Number";
}
// Function calls
console.log(convertValue("100"));
console.log(convertValue("25.5"));
console.log(convertValue(""));
console.log(convertValue(null));
console.log(convertValue(undefined));
console.log(convertValue(true));
console.log(convertValue(false));
console.log(convertValue("hello"));
console.log(convertValue("50abc"));