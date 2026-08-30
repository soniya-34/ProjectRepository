//11
let x1= 5;

if (x1 > 3) {
    console.log("big");
} else {
    console.log("small");
}

//12
switch (2) {
    case 1:
        console.log("one");

    case 2:
        console.log("two");

    case 3:
        console.log("three");
        break;

    default:
        console.log("other");
}

//13
let a = 10;

if (a > 5) {
    console.log("A");
} else if (a > 8) {
    console.log("B");
} else {
    console.log("C");
}

//14
for (let c = 0; c < 5; c++) {
    if (c === 3) {
        continue;
    }

    console.log(c);
}

//15
for (let i2 = 0; i2 < 5; i2++) {
    if (i2 === 3) {
        break;
    }

    console.log(i2);
}

//16
switch ("2") {
    case 2:
        console.log("number match");
        break;

    default:
        console.log("no match");
}

//17
let val = 0;

if (val) {
    console.log("truthy");
} else {
    console.log("falsy");
}

//18
let count = 0;

while (count < 3) {
    console.log(count);
    count++;
}

//19
if (0 == "0") {
    console.log("loose equal");
} else {
    console.log("not equal");
}

//20
let n = 15;

if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
} else {
    console.log(n);
}

//21
switch (1) {
    case 1:
        console.log("one");
        break;

    case 2:
        console.log("two");
        break;
}

//22
let x2 = 5;

if (x2 === 5) {
    console.log("correct");
}

//23
switch ("1") {
    case "1":
        console.log("matched");
        break;

    default:
        console.log("not matched");
}

//24
let i3;

for (i3 = 0; i3 < 5; i3++) {
    if (i3 === 2) {
        break;
    }
}

console.log(i3);

//25
let a1 = 20;
let b1 = 10;

if (a1 > b1) {
    console.log("bigger");
}

//26
let x3 = 15;

switch (true) {
    case x3 > 10:
        console.log("Greater than 10");
        break;

    default:
        console.log("10 or less");
}

//27
let a2 = true;
let b2 = false;

if (a2) {
    if (b2) {
        console.log("B");
    } else {
        console.log("Not B");
    }
}

//28
for (let i4 = 1; i4 <= 5; i4++) {
    if (i4 === 3) {
        continue;
    }

    console.log(i4);
}

//29
for (let i5 = 1; i5 <= 5; i5++) {
    if (i5 === 3) {
        break;
    }

    console.log(i5);
}

//30
let i6 = 0;

while (i6 < 5) {
    console.log(i6);
    i6++;
}

//31
let num1 = -5;

if (num1 > 0) {
    console.log("Positive");
} else if (num1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//32
let num2 = -5;

switch (Math.sign(num2)) {
    case 1:
        console.log("Positive");
        break;

    case -1:
        console.log("Negative");
        break;

    case 0:
        console.log("Zero");
        break;

    default:
        console.log("Invalid number");
}

//33
let age1 = 20;
let citizen = true;

if (age1 >= 18) {
    if (citizen === true) {
        console.log("Eligible to vote");
    } else {
        console.log("Not eligible: Citizenship required");
    }
} else {
    console.log("Not eligible: Age must be 18 or older");
}

//34
for (let i7 = 1; i7 <= 20; i7++) {
    if (i7 % 3 === 0) {
        continue;
    }

    console.log(i7);
}

//35
let numbers1 = [10, 20, 30, 55, 70, 90];

for (let number1 of numbers1) {
    if (number1 > 50) {
        console.log(number1);
        break;
    }
}

//36
let day = "Sunday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday");
        break;

    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Invalid day");
}

//37
let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}

//38
function validatePassword(password) {
    if (password.length >= 8) {
        if (/[A-Z]/.test(password)) {
            if (/[0-9]/.test(password)) {
                return "Valid password";
            } else {
                return "Password must contain a number";
            }
        } else {
            return "Password must contain an uppercase letter";
        }
    } else {
        return "Password must be at least 8 characters long";
    }
}

console.log(validatePassword("Hello123"));

//39
let age2 = 25;

switch (true) {
    case age2 < 13:
        console.log("Child");
        break;

    case age2 < 18:
        console.log("Teenager");
        break;

    case age2 < 60:
        console.log("Adult");
        break;

    default:
        console.log("Senior");
}

//40
let numbers2 = [10, -5, 20, -3, 15];
let sum = 0;

for (let number2 of numbers2) {
    if (number2 < 0) {
        continue;
    }

    sum += number2;
}

console.log(sum);

//41
let light = "red";

switch (light) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid light");
}

//42
let zone = 3;
let shippingCost;

switch (zone) {
    case 1:
        shippingCost = 50;
        break;

    case 2:
        shippingCost = 75;
        break;

    case 3:
        shippingCost = 100;
        break;

    case 4:
        shippingCost = 125;
        break;

    case 5:
        shippingCost = 150;
        break;

    default:
        shippingCost = 0;
        console.log("Invalid zone");
}

console.log("Shipping Cost:", shippingCost);

//43
let emailValid = true;
let passwordStrong = true;
let termsAccepted = true;

if (emailValid && passwordStrong && termsAccepted) {
    console.log("Form is valid");
} else {
    console.log("Form is invalid");
}

//44
let frames = ["running", "paused", "running", "running"];

for (let frame of frames) {
    if (frame === "paused") {
        continue;
    }

    console.log("Processing frame");
}

//45
let numbers = [10, 20, 30, 40, 50];
let target = 30;

for (let number of numbers) {
    if (number === target) {
        console.log("Match found:", number);
        break;
    }
}

//46
let role = "admin";

switch (role) {
    case "admin":
        console.log("Show Admin Dashboard");
        break;

    case "editor":
        console.log("Show Editor Dashboard");
        break;

    case "viewer":
        console.log("Show Viewer Dashboard");
        break;

    default:
        console.log("Unknown role");
}

//47
function processUser(user) {
    if (!user) {
        return "User not found";
    }

    if (!user.active) {
        return "User is inactive";
    }

    return "User can be processed";
}

let user = {
    active: true
};

console.log(processUser(user));

//48
let plan = "enterprise";

switch (plan) {
    case "pro":
    case "enterprise":
        console.log("Premium features enabled");
        break;

    case "free":
        console.log("Basic features enabled");
        break;

    default:
        console.log("Invalid plan");
}

//49
let success = false;

for (let attempt = 1; attempt <= 3; attempt++) {
    console.log("Attempt:", attempt);

    if (attempt === 2) {
        success = true;
    }

    if (success) {
        console.log("Network call successful");
        break;
    }
}

//50
let score1 = 85;

switch (true) {
    case score1 >= 90:
        console.log("Grade A");
        break;

    case score1 >= 80:
        console.log("Grade B");
        break;

    case score1 >= 70:
        console.log("Grade C");
        break;

    case score1 >= 60:
        console.log("Grade D");
        break;

    default:
        console.log("Grade F");
}