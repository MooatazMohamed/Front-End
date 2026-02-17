/* Variable */

/* {
    var x=5
    console.log(x);
}
console.log("x from out side",x)

*/
/* ================================ */
/* Character Escape */

/* console.log("Elzero \"web\" school");
 */


/* ================================ */
/* Concatenation */

/* let firstName = "Moataz"
let secondName = "Mohamed"
console.log(firstName + " " + secondName); */

/* let x = "5"
let y = 5
let z = 5
let ans = x+y-z
console.log(typeof x);
console.log(typeof z);
console.log(ans , typeof ans); */


/* ================================ */
/* Template Variable */


/* let name = "moataz"
console.log(`Hello ${name}`); */

/* ================================ */
/* Arithmetic operator */


/* console.log("moataz" - 10); */

/* 
let x = "10"
console.log(+x); */

/* console.log(-"100"); */

/* 
console.log((100).toString());
console.log((100.123456789).toFixed(5)); */


/* ================================ */
/* String Method */


/* let name = "moataz mohamed";

console.log("Character at index 2 using [] =>", name[2]);

console.log("Character at index 2 using charAt() =>", name.charAt(2));

console.log("String after removing whitespace from start and end using trim() =>", name.trim());

console.log("Convert string to uppercase using toUpperCase() =>", name.toUpperCase());

console.log("Convert string to lowercase using toLowerCase() =>", name.toLowerCase());

console.log("Index of first occurrence of 'oa' using indexOf() =>", name.indexOf("oa"));

console.log("Slice from index 1 to 4 (4 not included) using slice() =>", name.slice(1,4));

console.log("Slice from index 1 to the end using slice() =>", name.slice(1));

console.log("Repeat the string 3 times using repeat() =>", name.repeat(3));

{
    let name = "moataz , m,ohamed , basry";
    console.log("Split the string into an array using ',' as separator =>", name.split(","));
}

console.log("Substring from index 2 to 6 using substring() =>", name.substring(2,6));

console.log("Substring from index 2 to the end using substring() =>", name.substring(2));

console.log("Check if string includes 'ataz' starting from index 2 using includes() =>", name.includes("ataz",2));

console.log("Check if string starts with 'm' using startsWith() =>", name.startsWith("m"));

console.log("Check if string starts with 'm' from index 1 using startsWith() =>", name.startsWith("m",1));
 */


/* ================================ */
/* Comparison Operator */

/* console.log(10 == "10");
console.log(10 === "10");
console.log(typeof "Ossama" == typeof "Moataz"); */

/* ================================ */
/* IF Condition  */


/* let x =4
let ans = x==5 ? "X equal 5" : x>5 ? "x greater than 5 " :"x less than 5"
console.log(ans) */

/* let x = 8
while(x>5){
    console.log("Hii");
    x--
} */

    /* Switch */

/* let days = "Tues"

switch(days){
    case "Sat":
        console.log("Today is Sat");
        break
    case "Monday":
    case "Tues":
        console.log("Today is Monday");
        break
    default:
        console.log("Unknown");
} */

/* ================================ */
/* Array  */

/*
// Initialize the array
let friends = ["ahmed" , "shaaban" , "ziad" , "mohamed"];

// Print the full array
console.log("Initial friends array =>", friends);

// Access the second element (index 1)
console.log("Second friend =>", friends[1]);

// Access the second character of the second element
console.log("Second character of second friend =>", friends[1][1]);

// Change the first element
friends[0] = "anas";
console.log("After changing first friend =>", friends);

// Check if 'friends' is an array
console.log("Is 'friends' an array? =>", Array.isArray(friends));

// Get the length of the array
console.log("Number of friends =>", friends.length);

// Add a number at the end using push
console.log("New length after adding 5 =>", friends.push(5));

// Add a string at the end using push
console.log("New length after adding 'mohamed' =>", friends.push("mohamed"));

// Print the updated array
console.log("After push operations =>", friends);

// Assign a value to index 7 (creates empty slots if necessary)
friends[7]= "Eyad";
console.log("After assigning 'Eyad' at index 7 =>", friends);

// Add an element at the end using array length
friends[friends.length] = "Add at last";
console.log("After adding 'Add at last' using length =>", friends);

// Add an element at the start using unshift
friends.unshift("unshift");
console.log("After unshift 'unshift' =>", friends);

// Add an element at the end using push
friends.push("push");
console.log("After push 'push' =>", friends);

// Remove the first element using shift
friends.shift();
console.log("After shift (removes first element) =>", friends);

// Remove the last element using pop and print it
console.log("Removed last element using pop =>", friends.pop());

// Slice elements from index 2 to 4 (4 not included)
console.log("Slice from index 2 to 4 =>", friends.slice(2,4));
*/

/* ================================ */
/* Function  */

/* function sayHello(name){
    return `Hi ${name}`;
} 

console.log(sayHello("moataz"));*/

/* let calc = function(num1,num2){
    return num1 + num2
}
console.log(calc(10,5)); */


/* Higher Order Function  */

/* let nums=[1,2,3,4,5,6]

let addSelf = nums.map(function(ele , i){
    return `ele = ${ele} at index = ${i} // ${ele} * ${ele} = ${ele*ele}`
})

console.log(addSelf); */

/* let namee="MoataZ";

let sw = namee.split("").map(function(ele){
    return ele===ele.toUpperCase()?ele.toLowerCase():ele.toUpperCase()
    
}).join("")
console.log(sw); */

/* let nums = [1,2,3,4,5,6,7,8]
let even = nums.filter(function(ele){
    return ele%2==0? ele : ""
})
console.log(even); */
