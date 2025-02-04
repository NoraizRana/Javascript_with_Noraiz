console.log("Tutorial 6");
console.log("Practice of datatypes, loops, conditional statements, functions, objects,");
// In this tutorial we will practice the topics that we studied previous

/* Q1
Create a variable of type string and try to add a number to it */
let star = "abcd";
// let star=1; will throw error

/*Q2
Create a const object in js. Try to add a new key in it*/
console.log(typeof star);
const bank = {
    manager: "Ali",
    employee: 17,
    location: "267-A Mall Road",
    private: false
}
console.log(bank);
bank.guard = "Imran";
console.log(bank);

/*Q3
Create a Js program to make a word meaning dictionary of five words*/
const dict = {
    Love: "affection",
    Brave: "Courage",
    Cold: "Low in temperature",
    Clever: "Smart",
    Brilliant: "Intelligent"
}
console.log(dict);

/*Q4
Use logical operators to find whether age of the person lies between 10 & 20*/
let age = 34;
if (age > 10 && age < 20) {
    console.log("Your age lies between 10 & 20");
}
else {
    console.log("Your age doesn't lie between 10 & 20");
};

/*Q5
Demonstarte the use of switch case statement*/
let color = "red";
switch (color) {
    case 'black':
        console.log("The colour is black");
        break;
    case 'pink':
        console.log("The colour is pink");
        break;
    case 'red':
        console.log("The colour is red");
        break;
    case 'green':
        console.log("The colour is green");
        break;
    case 'purple':
        console.log("The colour is purple");
        break;
    default:
        console.log("I am unable to recognize the color");
};

/*Q6
Write a Js program to check whether a number is divsible by 2 0r 3*/
let no = prompt("Enter a number");
no = Number.parseInt(no);
if (no % 2 == 0 || no % 3 == 0) {
    console.log("Your number is divisible by 2 0r 3");
}
else {
    console.log("Your number isn't divisible by 2 or 3");
};

/*Q7
Print "You can drive" or "You can't drive" on the bases of age > or < 18  using ternary operator*/
let agee = 13;
ag = (agee < 18) ? ("You can't drive") : ("You can drive");
console.log(ag);
