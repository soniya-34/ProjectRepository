// //11
function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    return inner;
}

const fn11 = outer();

console.log("fn11 value:", fn11);
console.log("fn11 type:", typeof fn11);

//12
function counter11() {
    let count11 = 0;

    return function () {
        count11++;
        return count11;
    };
}

const c = counter11();

console.log(c());
console.log(c());

//13
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

//14
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

//15
let x = 1;

{
    let x = 2;
    console.log(x);
}

console.log(x);

//16
function makeGreeter(name) {
    return function () {
        return "Hi " + name;
    };
}

const g = makeGreeter("Sam");

console.log(g());

//17
function a() {
    function b() {
        function c() {
            console.log("deep");
        }

        c();
    }

    b();
}

a();

//18
let count22 = 0;

function increment() {
    count22++;
}

increment();
increment();

console.log(count22);

//19
function outer() {
    var x = 1;

    if (true) {
        var x = 2;
    }

    console.log(x);
}

outer();

//20
function outer() {
    let x = 1;

    if (true) {
        let x = 2;
        console.log(x);
    }

    console.log(x);
}

outer();

//21
function outer() {
    let x = 10;
}

console.log(x);

//21
function outer() {
    let x = 10;
    console.log(x);
}

outer();

//22
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}

//22
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}

//23
function counter33() {
    let count33 = 0;

    return () => count33++;
}

const c11 = counter44();

console.log(c11());
console.log(c11());
console.log(c11());

//23
function counter44() {
    let count44 = 0;

    return () => ++count44;
}

const c22 = counter44();

console.log(c22());
console.log(c22());
console.log(c22());

//24
const functions = [];

for (let i = 0; i < 100000; i++) {
    functions.push(function () {
        return i;
    });
}

console.log(functions.length);

//25
// if (true) {
//     let message = "Hello";
// }

// console.log(message);

//25
let message;

if (true) {
    message = "Hello";
}

console.log(message);

//26
function createClosure() {
    const largeObject = {
        data: new Array(1000000).fill("data")
    };

    return function () {
        console.log(largeObject.data.length);
    };
}

const fn22 = createClosure();

fn22();

// Q27 - Proper Closures

function outer27() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const first27 = outer27();
const second27 = outer27();

console.log(first27());
console.log(first27());

console.log(second27());
console.log(second27());

// Q27 - Shared State Problem

let count = 0;

function outerShared27() {
    return function () {
        count++;
        return count;
    };
}

const firstShared27 = outerShared27();
const secondShared27 = outerShared27();

console.log(firstShared27());
console.log(secondShared27());

console.log(firstShared27());
console.log(secondShared27());


//28
let value = "Outer";

function outer() {
    let value = "Inner";

    console.log(value);
}

outer();

console.log(value);

//29 Using var
function test() {
    if (true) {
        var value = "Hello";
    }

    console.log(value);
}

test();

//29 Using let
function test() {
    if (true) {
        let value = "Hello";
    }

    // console.log(value);
}

test();

//30
function outer() {
    let count77 = 0;

    function inner() {
        count77++;
    }
}

const fn33 = outer();

console.log(fn33);

//30
function outer() {
    let count88 = 0;

    function inner() {
        count88++;
        console.log(count88);

        return inner;
    }

    return inner;
}

outer();

//31
function counter66() {
    let count99 = 0;

    return {
        increment() {
            count99++;
            return count99;
        },

        decrement() {
            count99--;
            return count99;
        }
    };
}

const c55 = counter66();

console.log(c55.increment());
console.log(c55.increment());
console.log(c55.decrement());

//32 Broken (var)
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

//32 Fixed (let)
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

//33
function makeMultiplier(x) {
    return function (number) {
        return x * number;
    };
}

const double11 = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double11(5));
console.log(triple(5));

//34
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
            }

            return balance;
        },

        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
            } else {
                console.log("Insufficient balance");
            }

            return balance;
        },

        getBalance() {
            return balance;
        }
    };
}

const account11 = createBankAccount(1000);

console.log(account11.deposit(500));
console.log(account11.withdraw(300));
console.log(account11.getBalance());

//35
if (true) {
    let message = "Hello";
    console.log(message);
}

// console.log(message);

//36
function callCounter88() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const countCalls = callCounter88();

console.log(countCalls());
console.log(countCalls());
console.log(countCalls());

//37
function memoizeDouble() {
    const cache = {};

    return function (number) {
        if (cache[number] !== undefined) {
            console.log("From cache");
            return cache[number];
        }

        console.log("Calculating");

        const result = number * 2;

        cache[number] = result;

        return result;
    };
}

const double22 = memoizeDouble();

console.log(double22(5));
console.log(double22(5));
console.log(double22(10));

//38
function outer() {
    let message = "Hello";

    function middle() {
        function inner() {
            console.log(message);
        }

        inner();
    }

    middle();
}

outer();

//39
function once(fn44) {
    let hasRun = false;

    return function () {
        if (!hasRun) {
            hasRun = true;
            return fn44();
        }
    };
}

function greet() {
    console.log("Hello");
}

const greetOnce = once(greet);

greetOnce();
greetOnce();
greetOnce();

//40
function createCounter99() {
    let count12 = 0;

    return function () {
        count12++;
        return count12;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());

//41
function createLikeButton() {
    let likes = 0;

    return function () {
        likes++;
        return likes;
    };
}

const button1 = createLikeButton();
const button2 = createLikeButton();

console.log("Button 1:", button1());
console.log("Button 1:", button1());

console.log("Button 2:", button2());


//42
function createAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },

        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
            }

            return balance;
        },

        getBalance() {
            return balance;
        }
    };
}

const account22 = createAccount(1000);

console.log(account22.deposit(500));
console.log(account22.withdraw(200));
console.log(account22.getBalance());

//43
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

//43
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

//44
function createRateLimiter(limit) {
    let requests = 0;

    return function () {
        if (requests < limit) {
            requests++;
            console.log("Request allowed:", requests);
        } else {
            console.log("Rate limit exceeded");
        }
    };
}

const limiter = createRateLimiter(3);

limiter();
limiter();
limiter();
limiter();

//45
function setupDashboard() {
    const button = {
        name: "Dashboard Button"
    };

    function handleClick() {
        console.log(button.name);
    }

    return {
        handleClick,
        cleanup() {
            console.log("Cleanup completed");
        }
    };
}

const dashboard = setupDashboard();

dashboard.handleClick();
dashboard.cleanup();

//46
function debounce(fn55, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn55();
        }, delay);
    };
}

function search() {
    console.log("Searching...");
}

const debouncedSearch = debounce(search, 1000);

debouncedSearch();
debouncedSearch();
debouncedSearch();

//47
const counterModule = (function () {
    let count13 = 0;

    return {
        increment() {
            count13++;
            return count13;
        },

        getCount() {
            return count13;
        }
    };
})();

console.log(counterModule.increment());
console.log(counterModule.increment());
console.log(counterModule.getCount());

//48
function memoize(fn66) {
    const cache = {};

    return function (number) {
        if (cache[number] !== undefined) {
            console.log("Using cached result");
            return cache[number];
        }

        console.log("Calculating result");

        const result = fn66(number);

        cache[number] = result;

        return result;
    };
}

function square(number) {
    return number * number;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));

//49
function createComponentCounter(name) {
    let count14 = 0;

    return function () {
        count14++;

        console.log(name + " count14:", count14);
    };
}

const component1 = createComponentCounter("Component 1");
const component2 = createComponentCounter("Component 2");

component1();
component1();

component2();
component2();

//50
function createCounter() {
    let count15 = 0;

    return function () {
        count15++;
        console.log("Count15:", count15);
    };
}

const counter = createCounter();

counter();
counter();
counter();