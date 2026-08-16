// Q1. Basic arithmetic operators
console.log(5 + 3);   // Addition = 8
console.log(5 - 3);   // Subtraction = 2
console.log(5 * 3);   // Multiplication = 15
console.log(6 / 3);   // Division = 2
console.log(7 % 3);   // Modulus = 1
console.log(2 ** 3);  // Exponentiation = 8

// Q2. Difference between =, += and ++
let q2 = 5;
q2 = 10;       // Assignment
console.log(q2);
q2 += 5;       // Add and assign
console.log(q2);
q2++;          // Increment by 1
console.log(q2);

// Q3. Difference between && and ||
console.log(true && "Hello");      // Hello
console.log(false && "Hello");     // false

console.log(false || "Default");   // Default
console.log("Hello" || "Default"); // Hello

// Q4. Ternary operator
let q4Age = 20;
let q4Status = q4Age >= 18 ? "Adult" : "Minor";
console.log(q4Status);

// Q5. Difference between ?? and ||
console.log(0 ?? "Default");    // 0
console.log(0 || "Default");    // Default

console.log("" ?? "Default");   // ""
console.log("" || "Default");   // Default

console.log(null ?? "Default"); // Default


// Q6. Optional chaining ?.
const q6User = {};

console.log(q6User?.address?.city); // undefined

// Q7. Spread operator
const q7Array1 = [1, 2, 3];
const q7Array2 = [4, 5, 6];
const q7MergedArray = [...q7Array1, ...q7Array2];
console.log(q7MergedArray);

const q7Object1 = { name: "John" };
const q7Object2 = { age: 25 };
const q7MergedObject = {
    ...q7Object1,
    ...q7Object2
};
console.log(q7MergedObject);

// Q8. Rest parameter
function q8Function(...numbers) {
    console.log(numbers);
}

q8Function(10, 20, 30);

// Q9. Operator precedence
console.log("Q9:");

console.log(2 + 3 * 4);       // 14
console.log((2 + 3) * 4);     // 20

// Q10. Unary operator
console.log("Q10:");
let q10Number = 5;
console.log(-q10Number);  // -5
console.log(+q10Number);  // 5

// Q11
console.log(5 + 2 * 2);
// Output: 9

// Q12
console.log((5 + 2) * 2);
// Output: 14

// Q13
console.log(10 % 3);
// Output: 1

// Q14
let q14A = 5;
q14A += 3;
console.log(q14A);
// Output: 8

// Q15
console.log(true && "hello");
// Output: hello

// Q16
console.log(false || "default");
// Output: default

// Q17
console.log(null ?? "fallback");
// Output: fallback

// Q18
console.log(0 ?? "fallback");
// Output: 0

// Q19
console.log(0 || "fallback");
// Output: fallback

// Q20
const q20User = {};
console.log(q20User?.address?.city);
// Output: undefined

// Q21
console.log(5 / 0);
// Output: Infinity
// This is NOT an error.

// Q22
console.log(0 / 0);
// Output: NaN
// This is NOT an error.

// Q23. Accessing property from null
const q23Obj = null;
// The following would cause TypeError:
// console.log(q23Obj.name);

// Safe version:
console.log(q23Obj?.name);
// Output: undefined

// Q24. Nullish assignment ??=
let q24X;
q24X ??= 10;
console.log(q24X);
// Output: 10

// Q25. Numeric coercion with -
console.log("5" - "2");
// Output: 3

// Q26
console.log(1 < 2 < 3);
// Output: true

// Explanation:
// 1 < 2 -> true
// true becomes 1
// 1 < 3 -> true

// Q27

console.log("Q27:");

console.log(3 > 2 > 1);
// Output: false

// Explanation:
// 3 > 2 -> true
// true becomes 1
// 1 > 1 -> false

// Q28. Array destructuring
const q28Array = [1, 2, 3];
const [q28A, q28B, q28C, q28D] = q28Array;
console.log(q28D);
// Output: undefined

// Q29. Rest parameter must be last
// This is invalid and causes SyntaxError:
// function sum(...nums, last) {}

// Correct form:
function q29Sum(last, ...nums) {
    console.log(last);
    console.log(nums);
}

q29Sum(10, 20, 30);

// Q30. NaN comparison
console.log(NaN === NaN);
// Output: false

console.log(Number.isNaN(NaN));
// Output: true

// Q31. At least 3 arithmetic operators
console.log(10 + 5 * 2 - 4);
// Output: 16

// Q32. Ternary - Adult or Minor
let q32Age = 20;
let q32Status = q32Age >= 18 ? "Adult" : "Minor";
console.log(q32Status);
// Output: Adult

// Q33. Use ?? for default value
let q33Value = 0;
let q33Result = q33Value ?? "Default";
console.log(q33Result);
// Output: 0

// Q34. Deeply nested optional chaining
const q34User = {
    profile: {
        settings: {
            theme: "dark"
        }
    }
};
console.log(q34User?.profile?.settings?.theme);
// Output: dark

// Q35. Merge two arrays using spread
const q35Array1 = [1, 2, 3];
const q35Array2 = [4, 5, 6];
const q35Merged = [...q35Array1, ...q35Array2];
console.log(q35Merged);
// Output: [1, 2, 3, 4, 5, 6]

// Q36. Merge two objects using spread
const q36Object1 = {
    name: "John",
    age: 20
};

const q36Object2 = {
    age: 25,
    city: "Chennai"
};

const q36Merged = {
    ...q36Object1,
    ...q36Object2
};
console.log(q36Merged);
// age becomes 25 because q36Object2 comes later

// Q37. Rest parameter - sum any number of numbers
function q37Sum(...numbers) {
    return numbers.reduce(
        (total, number) => total + number,
        0
    );
}
console.log(q37Sum(10, 20, 30, 40));
// Output: 100

// Q38. && to conditionally call a function
function q38Refresh() {
    console.log("Page refreshed");
}

let q38IsOnline = true;

q38IsOnline && q38Refresh();
// Output: Page refreshed

// Q39. Operator precedence and parentheses
let q39WithoutParentheses = 10 + 5 * 2;

console.log(q39WithoutParentheses);
// Output: 20

let q39WithParentheses = (10 + 5) * 2;
console.log(q39WithParentheses);
// Output: 30

// Q40. Unary + operator
let q40Price = "100";
let q40Total = +q40Price + 50;

console.log(q40Total);
// Output: 150


// Q41. Nickname fallback using ??
let q41Nickname = "";
let q41RealName = "John";

let q41DisplayName = q41Nickname ?? q41RealName;
console.log(q41DisplayName);
// Output: ""
// Empty string is preserved because ?? only checks null/undefined.

// Q42. Safely access nested properties
const q42User = {};
const q42Theme = q42User?.profile?.settings?.theme;

console.log(q42Theme);
// Output: undefined
// No crash occurs.


// Q43. Discount can legitimately be 0%
let q43Discount = 0;
let q43FinalDiscount = q43Discount ?? 10;

console.log(q43FinalDiscount);
// Output: 0


// Q44. Combine base config and user overrides
const q44BaseConfig = {
    theme: "light",
    fontSize: 14
};

const q44UserConfig = {
    theme: "dark"
};

const q44Config = {
    ...q44BaseConfig,
    ...q44UserConfig
};

console.log(q44Config);

// Q45. Function accepts any number of tags
function q45CreatePost(...tags) {
    console.log(tags);
}

q45CreatePost(
    "JavaScript",
    "Coding",
    "Web Development"
);

// Q46. Call refresh only if online
function q46Refresh() {
    console.log("Refresh called");
}

let q46IsOnline = true;

q46IsOnline && q46Refresh();

// Q47. Parentheses in pricing formula
let q47Price = 1000;
let q47Discount = 100;
let q47Tax = 0.18;

let q47FinalPrice =
    (q47Price - q47Discount) * (1 + q47Tax);

console.log(q47FinalPrice);

// Discount is applied first,
// then tax is applied.

// Q48. User settings should override defaults
const q48DefaultSettings = {
    theme: "light",
    fontSize: 14,
    language: "English"
};

const q48UserSettings = {
    theme: "dark",
    fontSize: 16
};

const q48FinalSettings = {
    ...q48DefaultSettings,
    ...q48UserSettings
};

console.log(q48FinalSettings);

// Q49. == versus strict comparison
console.log("5" == 5);
// Output: true

console.log("5" === 5);
// Output: false

// == performs type coercion.
// === checks both value and data type.

// Q50. API field - missing, null, or empty string
// Case 1: Field is missing
const q50Response1 = {
    data: {}
};

const q50Name1 =
    q50Response1?.data?.name ?? "No name provided";

console.log(q50Name1);
// Output: No name provided

// Case 2: Field is null
const q50Response2 = {
    data: {
        name: null
    }
};

const q50Name2 =
    q50Response2?.data?.name ?? "No name provided";

console.log(q50Name2);
// Output: No name provided

// Case 3: Field is an empty string
const q50Response3 = {
    data: {
        name: ""
    }
};

const q50Name3 =
    q50Response3?.data?.name ?? "No name provided";

console.log(q50Name3);
// Output: ""