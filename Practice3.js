console.log("Tutorial 12");
console.log("In this tutoruial we will practice arrays, their methods and functions");
console.log("We will also practice using the map, filter and reduce methods");

/* Q1
Create an array of numbers and take input from the user to add  number to it */
let arr=[4,8,12,16,20,24];
// let n=prompt("Enter a number..");
// Number.parseInt(n);
// arr.push(n);
// console.log(arr);

/* Q2
Keep adding numbers to the array until 0 is added*/
let n;
do {
   n=prompt("Enter a number..");
Number.parseInt(n);
arr.push(n);
console.log(arr);  
} while(n!=0);
console.log(arr);  

/* Q3
Filter for numbers divisible by 10 for given array*/
let ar=[1,45,20,67,400,90,34];
const divbyten((a)=>{
    if (a%10==0)
    {
        return true;
    }
    return false;
})


