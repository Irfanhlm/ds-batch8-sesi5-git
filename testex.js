console.log("Test 1: Hello, World!");
console.log("Test 2: The current year is", new Date().getFullYear());
console.log("Test 3: Sum of 2 and 3 is", 2 + 3);
console.log("Test 4: Array example", [1, 2, 3, 4, 5]);
console.log("Test 5: Object example", { name: "John", age: 30 });
console.log("Test 6: Boolean example", true);
console.log("Test 7: Null example", null);
console.log("Test 8: Undefined example", undefined);
console.log("Test 9: Function example", function() { return "Hello from function"; }());
console.log("Test 10: Template literals example", `The sum of 5 and 10 is ${5 + 10}`);

// For loop example
for (let i = 0; i < 5; i++) {
    console.log(`For loop iteration: ${i}`);
}

// ForEach loop example
const array = [10, 20, 30, 40, 50];
array.forEach((value, index) => {
    console.log(`ForEach loop iteration ${index}: ${value}`);
});

// While loop example
let count = 0;
while (count < 5) {
    console.log(`While loop iteration: ${count}`);
    count++;
}


// If-else example
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = "Good morning";
} else if (hour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

console.log(`If-else example: ${greeting}`);

// Switch example
const day = new Date().getDay();
let dayName;
switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Unknown day";
}
console.log(`Switch example: Today is ${dayName}`);

// Array example with indexing
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log("The second fruit is", fruits[1]);
