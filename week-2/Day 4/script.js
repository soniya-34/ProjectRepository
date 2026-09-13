//11
function makeMultiplier(x) {
    return function(y) {
        return x * y;
    };
}

const double = makeMultiplier(2);

console.log(double(5));

//12
(function() {
    console.log("IIFE ran");
})();

//13
function factorial(n) {
    if (n <= 1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(4));

//14
const arr11 = [1, 2, 3, 4];

console.log(
    arr11.filter(function(x) {
        return x % 2 === 0;
    })
);

//15
function countdown(n) {
    if (n <= 0) {
        console.log("done");
        return;
    }

    console.log(n);
    countdown(n - 1);
}

countdown(3);

//16
const add = (a) => (b) => a + b;

console.log(add(2)(3));

//17
console.log(
    [1, 2, 3].reduce((acc, val) => acc + val, 0)
);

//18
(function(x) {
    console.log(x * 2);
})(10);

//19
function fib(n) {
    if (n < 2) return n;

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));

//20
const greetLater = (function() {
    return function() {
        return "hi";
    };
})();

console.log(greetLater());

//21
function recurse(n) {
    if (n <= 0) {
        return;
    }

    console.log(n);
    recurse(n - 1);
}

recurse(5);

//22
(function() {
    console.log("test");
})();

//23
function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));

//24
const arr22 = [1, 2, 3, 4];

const fn11 = arr22.filter(x => x > 2);

console.log(fn11);

//25
function outer() {
    function inner() {
        return "Inner function called";
    }

    return inner;
}

const fn22 = outer();

console.log(fn22());

//26
const numbers11 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers11.length; i++) {
    console.log(numbers11[i]);
}

//27
(function() {
    console.log("IIFE is running");
})();

//28
function inner() {
    return "Hello";
}

function outer() {
    return inner;
}

const fn33 = outer();

console.log(fn33());

//29
function sum(n) {
    if (n === 0) {
        return 0;
    }

    return n + sum(n - 1);
}

console.log(sum(5));

//30
const first = (function() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
})();

const second = (function() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
})();

console.log(first());
console.log(first());
console.log(second());

//31
function miniMap(callback, array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }

    return result;
}

const numbers22 = [1, 2, 3];

const result = miniMap(function(num) {
    return num * 2;
}, numbers22);

console.log(result);

//32
function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));

//33
function sumArray(arr33) {
    if (arr33.length === 0) {
        return 0;
    }

    return arr33[0] + sumArray(arr33.slice(1));
}

console.log(sumArray([1, 2, 3, 4]));

//34
const counter11 = (function() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },

        getValue: function() {
            return count;
        }
    };
})();

counter11.increment();
counter11.increment();

console.log(counter11.getValue());

//35
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = makeAdder(5);

console.log(add5(10));

//36
const cart11 = [
    { price: 100, qty: 2 },
    { price: 50, qty: 3 },
    { price: 200, qty: 1 }
];

const total = cart11.reduce(function(acc, item) {
    return acc + item.price * item.qty;
}, 0);

console.log(total);

//37
function reverseString(str) {
    if (str.length <= 1) {
        return str;
    }

    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));

//38
function flatten(arr44) {
    if (arr44.length === 0) {
        return [];
    }

    const first = arr44[0];
    const rest = arr44.slice(1);

    if (Array.isArray(first)) {
        return first.concat(flatten(rest));
    }

    return [first].concat(flatten(rest));
}

console.log(flatten([1, [2, 3], 4, [5, 6]]));

//39
setTimeout(function() {
    console.log("Hello");
}, 1000);

//40
function greet() {
    return function() {
        return "Hello";
    };
}

console.log(greet()());

//41
const cart22 = [100, 200, 300];

const discountedCart22 = cart22.map(function(price) {
    return price * 0.9;
});

console.log(discountedCart22);

//42
const folder = {
    name: "Root",
    items: [
        {
            name: "file1.txt",
            type: "file"
        },
        {
            name: "Documents",
            type: "folder",
            items: [
                {
                    name: "file2.txt",
                    type: "file"
                }
            ]
        }
    ]
};

function explore(folder) {
    for (const item of folder.items) {
        if (item.type === "file") {
            console.log(item.name);
        } else {
            explore(item);
        }
    }
}

explore(folder);

//43
const counter22 = (function() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        getValue() {
            return count;
        }
    };
})();

counter22.increment();
counter22.increment();

console.log(counter22.getValue());

//44
function hasRole(role) {
    return function(user) {
        return user.role === role;
    };
}

const isAdmin = hasRole("admin");

const user = {
    name: "John",
    role: "admin"
};

console.log(isAdmin(user));

//45
const data = {
    name: "Root",
    children: [
        {
            name: "Child 1",
            children: []
        },
        {
            name: "Child 2",
            children: [
                {
                    name: "Grandchild",
                    children: []
                }
            ]
        }
    ]
};

const stack = [data];

while (stack.length > 0) {
    const current = stack.pop();

    console.log(current.name);

    for (const child of current.children) {
        stack.push(child);
    }
}

//46
const prices = [100, 200, 300];

const subtotal = prices.reduce(function(total, price) {
    return total + price;
}, 0);

const tax = subtotal * 0.1;
const shipping = 50;

const finalTotal = subtotal + tax + shipping;

console.log(finalTotal);

//47
function display(render) {
    console.log(render());
}

display(function() {
    return "Hello User";
});

//48
(function() {
    const appName = "My Library";

    console.log(appName + " initialized");
})();

//49
function fib(n) {
    if (n === 0) {
        return 0;
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

console.log(fib(10));

//50
function minLength(length) {
    return function(value) {
        return value.length >= length;
    };
}

const validate = minLength(5);

console.log(validate("John"));
console.log(validate("kaviya"));