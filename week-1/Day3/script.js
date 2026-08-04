//11
const a = { x: 1 };
const b = a;
b.x = 2;
console.log(a.x);

//12
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2);

//13
console.log(typeof []);

//14
console.log(typeof {});

//15
console.log(typeof function () {});

//16
console.log(Array.isArray([1, 2, 3]));

//17
console.log(Array.isArray({ length: 0 }));

//18
const d = new Date(2025, 0, 1);
console.log(d.getFullYear());

//19
console.log(Math.max(3, 7, 2));

//20
console.log(Math.floor(4.7), Math.ceil(4.2));

//21
function updateObj(obj) {
    obj.value = 100;
}
const o = { value: 1 };
updateObj(o);
console.log(o.value);

//22
const arr = [1, 2, 3];
arr.length = 0;
console.log(arr);

//23
// const obj = {};
// obj.newProp.deep = 5;

//24
console.log([1, 2, 3] == "1,2,3");

//25
const d1 = new Date("not a date");
console.log(d1);

//26
console.log(Math.max());

//27
console.log([] + []);

//28
console.log([] + {});

//29
const frozen = Object.freeze({ a: 1 });
frozen.a = 2;
console.log(frozen.a);

//30
function greet() {}
console.log(greet == function () {});

//31
const book = {
    title: "JavaScript Basics",
    author: "John",
    year: 2025
};
console.log(book);

//32
const arr11 = [1, 2, 3, 4, 5];
console.log(arr11 === arr11);
const copy = [...arr11];
console.log(arr11 === copy);

//33
function shallowCopy(obj) {
    return { ...obj };
}
const person = {
    name: "John",
    age: 25
};
const copy11 = shallowCopy(person);
console.log(copy11);

//34
const birthday = new Date(2002, 5, 20);
console.log(birthday);
console.log(birthday.getDay());

//35
const num = 4.7;
const result = Math.floor(num) + Math.ceil(num) + Math.max(5, 10);
console.log(result);

//36
function isPlainObject(value) {
    return (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
    );
}
console.log(isPlainObject({}));
console.log(isPlainObject([]));

//37
function copyArray(arr) {
    return [...arr];
}
const numbers = [1, 2, 3];
const newArray = copyArray(numbers);
console.log(newArray);
console.log(numbers === newArray);

//38
const greet11 = function (name) {
    return "Hello " + name;
};
function execute(func) {
    console.log(func("John"));
}
execute(greet11);

//39
const obj = {
    user: {
        name: "John"
    }
};
const clone = {
    user: {
        ...obj.user
    }
};
console.log(clone);

//40
const person11 = Object.freeze({
    name: "John"
});
person11.name = "David";
console.log(person11.name);

//41
function calculateTotal(cart) {
    cart.total = 500;
}
const cart = {
    items: ["Shoes", "Bag"]
};
calculateTotal(cart);
console.log(cart);

//42
const user1 = {
    name: "John",
    age: 20
};
const user2 = {
    name: "John",
    age: 20
};
console.log(user1 === user2);

//43
const ticketCreated = new Date();
console.log(ticketCreated);

//44
const shippingCost = 149.75;
console.log(Math.round(shippingCost));

//45
const productIds = [101, 102, 103];
console.log(Array.isArray(productIds));

//46
const cart22 = ["Bag", "Shoes", "Watch"];
const preview = [...cart22];
preview.push("Mobile");
console.log(cart22);
console.log(preview);

//47
const randomCode = Math.floor(Math.random() * 9000) + 1000;
console.log(randomCode);

//48
const dob = new Date("invalid date");
console.log(dob);

//49
const config = Object.freeze({
    settings: {
        theme: "dark"
    }
});
config.settings.theme = "light";
console.log(config.settings.theme);

//50
const arr31 = [1, 2, 3];
const arr32 = [1, 2, 3];
console.log(arr31 === arr32);
console.log(JSON.stringify(arr31) === JSON.stringify(arr32));
