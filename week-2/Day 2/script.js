//11
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

//12
let i = 5;

while (i > 0) {
    console.log(i);
    i--;
}

//13
let i1 = 10;

do {
    console.log(i1);
    i1++;
} while (i1 < 5);

//14
const obj = {
    a: 1,
    b: 2
};

for (let key in obj) {
    console.log(key);
}

//15
const arr = [10, 20, 30];

for (let val of arr) {
    console.log(val);
}

//16
const str = "hi";

for (let ch of str) {
    console.log(ch);
}

//17
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(i, j);
    }
}

//18
let count = 0;

for (;;) {
    count++;

    if (count === 3) {
        break;
    }
}

console.log(count);

//19
const arr1 = [1, 2, 3];

for (let i in arr1) {
    console.log(typeof i);
}

//20
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log(sum);

//21
// for (let i = 0; i < 5; i--) {
//     console.log(i);
// }                                   //It is an infinite loop because i-- decreases i, while the condition is i < 5. Since i keeps decreasing, the condition always remains true.

//22
let count1 = 0;

while (true) {
    console.log("Running");

    count1++;

    if (count1 === 5) {
        break;
    }
}

//23
for (let i in [10, 20, 30]) {
    console.log(i);
}

//24
do {
    console.log("run");
} while (false);

//25
let arr2 = [10, 20, 30];

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

//26
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
    }
}

//27
const obj1 = {
    name: "John",
    age: 25
};

for (let key in obj1) {
    console.log(key, obj1[key]);
}

//28
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
        break;
    }
}

//29
const arr3 = [10, 20, 30];

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

//30
const arr4 = [1, 2, 3, 4, 5];

for (let value of arr4) {
    console.log(value);

    arr4.pop();
}

//31
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

//32
let i2 = 10;

while (i2 >= 1) {
    console.log(i2);
    i2--;
}

//33
let i3 = 1;

do {
    console.log(i3);
    i3++;
} while (i3 <= 5);

//34
const person = {
    name: "John",
    age: 25,
    city: "Chennai"
};

for (let key in person) {
    console.log(key, person[key]);
}

//35
const numbers = [10, 20, 30, 40, 50];

let sum1 = 0;

for (let number of numbers) {
    sum1 += number;
}

console.log(sum1);

//36
for (let i = 0; i < 3; i++) {
    let row = "";

    for (let j = 0; j < 3; j++) {
        row += "* ";
    }

    console.log(row);
}

//37
const numbers1 = [1, 3, 5, 7, 8, 10, 12];

for (let number1 of numbers1) {
    if (number1 % 2 === 0) {
        console.log(number1);
        break;
    }
}

//38
const str1 = "javascript";

for (let ch of str1) {
    if ("aeiou".includes(ch)) {
        continue;
    }

    console.log(ch);
}

//39
const arr5 = [1, 2, 3, 4];
const arr6 = [2, 3, 4, 5];
const target = 6;

for (let i = 0; i < arr5.length; i++) {
    for (let j = 0; j < arr6.length; j++) {
        if (arr1[i] + arr2[j] === target) {
            console.log(arr5[i], arr6[j]);
        }
    }
}

//40
let count11 = 0;

for (;;) {
    count11++;

    if (count11 === 5) {
        break;
    }
}

console.log(count11);


