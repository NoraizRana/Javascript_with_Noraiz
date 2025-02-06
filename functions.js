console.log("Tutorial 7");
console.log("Functions in Js");
/* If we want to use specific block of code multiple times in our program then we can use function in js */
function properties(name) {
    console.log(name + " is pious");
    console.log(name + " is nice");
    console.log(name + " is good");
    console.log(name + " is supportive");
}
properties("Abdullah"); //This is called function invoke 
properties("Bahadur");
properties("Saad");


function sum(a, b, c = 7) { //a & b are the local variable while c is called the default parameter
    console.log(a + b + c);
    return a + b + c;
}
result = sum(2, 7);
result1 = sum(67, 89);

//arrow function in Js
 const arrow=(x)=>{
    console.log ("You're trying to call arrow function " + x);
 }
 arrow(67);
 arrow(99);
 arrow(23);
