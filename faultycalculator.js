/*Make a faulty calculator which gives the wrong answer 10% of the time of the total answersit will perform following wrong calculationds.*/
let wrong = {
    '+': '*',
    '-': '/',
    '*': '+',
    '/': '-'
}
let random = Math.random();
console.log(random);
let a = prompt("Enter first number?");
let b = prompt("Enter operation");
let c = prompt("Enter second number?");
if (random > 0.1) {
    console.log(`The result is ${a} ${b} ${c}`);
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else {
    b = wrong[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}