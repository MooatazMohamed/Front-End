
/* let fullName = "Mohamed Ahmed"
 *//* console.log(fullName[1]);
 */ 
/* console.log(fullName.charAt(5)); */

/* console.log(fullName.indexOf("m"));
console.log(fullName.slice(0,4));
console.log(fullName.repeat(2));
console.log(fullName.split("")); */


/* let arr1 = ["Ahmed" , "Mohamed" , 1 , 2 ,3 ,4,false]
 *//* console.log(arr1);
arr1[0]="Ossama"
console.log(arr1); */
/* console.log(arr1[1][2]); */
/* console.log(arr1.length);
 */

/* Unshift */
/* arr1.unshift(true)
console.log(arr1[0]); */

/* Push */
/* arr1.push("Last vallue")
console.log(arr1); */

/* Shift & Pop */
/* console.log(arr1.shift());
console.log(arr1.pop()); */

/* let arr1 = ["Ahmed" , "Mohamed"]
let arr2 = [1,2,3,4]
console.log(arr1.concat(arr2)); */

/* let num = [25,31,42,59,66]
console.log(num.sort());
console.log(num.reverse()); */


/* Functions */

/* function printHello(name){
    console.log(`Hello ${name}`);
}

printHello("Ahmed")
printHello("Mohamed")
printHello("Ziad") */

/* let add = function(num1,num2){
    return num1+num2
}
console.log(add(2,4)); */

/* let add = (num1,num2) =>{
    return num1+num2
}
console.log(add(2,4)); */

/* Higher Order Function */

/* let numbers = [1,2,3,4,5,6,7,8]
let newArray = numbers.map(function(ele , index){
    return `Element at index ${index} ${ele * 10}`
})
console.log(newArray); 
console.log("-----------------------");
let numbers2 = [1,2,3,4,5,6,7,8,9,10]
let evenNumber = numbers2.filter(function(ele){
    return ele%2 ==0?ele:""
})
console.log(evenNumber); */

/* 
let numbers = [-1,5,-6,77,22,-10,9]

let names = ["Mohamed" , "Ahmed" , "mazen" , "ziad" , "Maged"]

let newNames = names.filter(
    (e) =>{ return e.toLowerCase().startsWith("m");}
);

console.log(newNames); */


/* DOM */

/* let myHead = document.getElementById("heading")
console.log(myHead); */

/* let tag = document.getElementsByTagName("h1")
console.log(tag); */

/* let querySelector = document.querySelector("h1")
console.log(querySelector);

console.log("-----------------------");
let querySelectorAll = document.querySelectorAll("h1")
console.log(querySelectorAll); */

/* let parent = document.getElementById("parent")
console.log(parent.innerHTML);
console.log(parent.textContent); */

/* let image = document.images[0]
image.src="https://picsum.photos/id/237/200/300"
console.log(image); */

/* let link = document.links[0]
link.setAttribute("href","https://www.google.com")
link.setAttribute("target","_blank")
console.log(link);
console.log(link.getAttribute("href")); */

/* let head = document.getElementsByTagName("h1")[3]
console.log(head.attributes);
console.log(head.hasAttribute("id"));
 */

/* let form = document.getElementById("myForm")
form.addEventListener("submit",function(event){
    event.preventDefault()
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    if(age<20){
        console.log("You aren't authorized");
    }
    if(name.length<6){
        console.log("Name must be greater than 6 character");
        return
    }
    
    console.log(`Name = ${name} and Age = ${age}`);
})

document.addEventListener("contextmenu",function(e){
    e.preventDefault()
}) */

let age = 20
let res = (age>40)?console.log("age greater than 40"):(age<40)?console.log("your age is less than 40"):console.log("your age is 40")
console.log(res);