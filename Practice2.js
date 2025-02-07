console.log("Tutorial 8");
console.log("In this tutoruial we will pracrice loops, strings and functions");
/* Q1
Write a program to print the marks of student in an object using for in loop */
const marks = {
    physics: 87,
    Chemistry: 71,
    English: 66,
    Urdu: 83,
    Math: 55
}
for (i in marks) {
    console.log(i, marks[i])
};

/* Q2
Write a program to print "try again" until user enters the correct number*/
let cn = 49;
let n;
while (n != cn) {
    n = prompt("Enter a number?");
    alert("Try again");
}
alert("Congrtas You entered the correct number");

/* Q3
Write a function to find the mean of five numbers*/
function mean(a,b,c,d,e){
    console.log(a+b+c+d+e/5);
    return a+b+c+d+e/5;
}
result=mean(2,4,6,8,10);

/* Q4
Explore the includes, startswith and endswith function of a string*/
let str="Don't miss the opportunity!";
str2=str.includes("Hey");
console.log(str2); //returns false
str3=str.startsWith("miss");
console.log(str3); //returns false
str4=str.endsWith("opportunity!");
console.log(str4); //returns true

/* Q5
Extract the amount out of this string "Please give me Rs 5000" also try to change the forth character of the string.Were you able to do it*/
let sent="Please give me Rs 5000";
amount=sent.slice(18);
console.log(amount);
 
newstr=sent.replace("give","send");
console.log(newstr); //after this the original string remains the same because strings are immutable
console.log(sent);

