//11
function greet11() {
    return "hi";
}
console.log(greet11());

//12
const greet12 = function() {
    return "hi";
};
console.log(greet12());

//13
const greet13 = () => "hi";
console.log(greet13());

//14
function add(a, b = 5) {
    return a + b;
}
console.log(add(10));

//15
const arr = [1, 2, 3];
console.log(arr.map(x => x * 2));

//16
function outer(cb) {
    cb();
}
outer(() => console.log("called"));

//17
const obj11 = {
    name: "Sam",
    greet15: function() {
        return this.name;
    }
};
console.log(obj11.greet15());

//18
const obj22 = {
    name: "Sam",
    greet16: () => this.name
};
console.log(obj22.greet16());

//19
console.log(typeof function() {});

//20
console.log(typeof (() => {}));

//21
console.log(greet16());

function greet16() {
    return "hi";
}

//22
// console.log(greet17());

// const greet17 = function() {
//     return "hi";
// };

//22
const greet17 = function() {
    return "hi";
};

console.log(greet17());

//23
// const greet18 = () => "hi";
// greet18 = () => "bye";

//23
const greet18 = () => "hi";

console.log(greet18());

//

//24
function add(a, b) {
    return a + b;
}
console.log(add(1));

//25
// const obj33 = {
//     name: "A",
//     greet19: () => this.name
// };
// console.log(obj33.greet19());

//25
const obj33 = {
    name: "A",

    greet19: function() {
        return this.name;
    }
};

console.log(obj33.greet19());

//26
// function() {
//     return 1;
// }

//26
function test() {
    return 1;
}

console.log(test());

//27
// const fn = function named() {};
// console.log(named());

//27
const fn = function named() {
    return "hi";
};

console.log(fn());

//28
// callback();
// function callback() {
//     console.log("Callback executed");
// }

//28
callback();

function callback() {
    console.log("Callback executed");
}

//29
// const arrow = (a, b) => a + b,;

//
29
const arrow = (a, b) => a + b;

console.log(arrow(10, 20));

//30
function outer(cb) {
    cb;
}
outer(() => console.log("hi"));

//31
function square11(number) {
    return number * number;
}
console.log(square11(5));

//32
const square22 = function(number) {
    return number * number;
};
console.log(square22(5));

//33
const square33 = (number) => number * number;
console.log(square33(5));

//34
function greet20(name, prefix = "Hello") {
    return `${prefix}, ${name}!`;
}
console.log(greet20("Sam"));
console.log(greet20("Sam", "Hi"));

//35
function processTask(callback) {
    console.log("Doing some work");
    callback();
}
processTask(() => {
    console.log("Task completed");
});

//36
const numbers11 = [1, 2, 3, 4, 5];
const doubled = numbers11.map(number => number * 2);
console.log(doubled);

//37
const person11 = {
    name: "Sam",

    greet21: function() {
        console.log(this.name);
    }
};
person11.greet21();

//38
const person22 = {
    name: "Sam",

    greet22: () => {
        console.log(this.name);
    }
};
person22.greet22();

//39
function createFunction(callback) {
    return function() {
        callback();
    };
}

const newFunction = createFunction(() => {
    console.log("Hello");
});
newFunction();

//40
const greet23 = function sayHello() {
    // sayHello is available inside this function only
    console.log("Hello");
};

greet();

//41
const user11 = {
    name: "Sam",

    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

user11.greet();

//42
const prices = [100, 200, 300];
const taxRate = 0.18;

const pricesWithTax = prices.map(price => price + price * taxRate);

console.log(pricesWithTax);

//43
function validateForm(data, onSuccess) {
    if (data.name && data.email) {
        onSuccess();
    } else {
        console.log("Validation failed");
    }
}

const formData = {
    name: "Sam",
    email: "sam@example.com"
};

validateForm(formData, () => {
    console.log("Form submitted");
});

//44
const user22 = {
    name: "Sam",

    greet: () => {
        console.log(this.name);
    }
};

user22.greet();

//45
function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

greet("Sam");
greet("Sam", "Hi");

//46
function logger(callback) {
    callback();
}

logger(() => {
    console.log("Custom log message");
});

//47
const numbers22 = [1, 2, 3, 4, 5, 6];

const evenNumbers22 = numbers22.filter(number => number % 2 === 0);

console.log(evenNumbers22);

//48
const user33 = {
    name: "Sam",

    greet: () => {
        console.log(this.name);
    }
};

user33.greet();

//or
const user44 = {
    name: "Sam",

    greet: function() {
        console.log(this.name);
    }
};

user44.greet();

//49
function calculateTotal(a, b) {
    return a + b;
}

console.log(calculateTotal(10, 20));

//50
function processPayment(amount, onSuccess, onFailure) {
    if (amount > 0) {
        onSuccess();
    } else {
        onFailure();
    }
}

processPayment(
    1000,
    () => console.log("Payment successful"),
    () => console.log("Payment failed")
);

//or
processPayment(
    0,
    () => console.log("Payment successful"),
    () => console.log("Payment failed")
);