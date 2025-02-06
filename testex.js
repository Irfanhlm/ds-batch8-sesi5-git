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