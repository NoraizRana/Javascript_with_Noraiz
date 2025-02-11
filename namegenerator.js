console.log("Tutorial 10");
console.log("In this tutoruial we will make a random business name generator");
//Generating First word of name randomly
let first, second, third
 randm = Math.random();
if (randm < 0.33) {
    first = "Crazy";
}
else if (randm >= 0.33 && randm < 0.66) {
    first = "Amazing";
}
else {
    first = "Fire";
}
//Generating Second word of name randomly

 randm = Math.random();
if (randm < 0.33) {
    second = "Engine";
}
else if (randm >= 0.33 && randm < 0.66) {
    second = "Foods";
}
else {
    second = "Garments";
}
//Generating Third word of name randomly

 randm = Math.random();
if (randm < 0.33) {
    third = "Bros";
}
else if (randm >= 0.33 && randm < 0.66) {
    third = "Limited";
}
else {

    third = "Hub";
}
console.log(`The random name we generated is "${first} ${second} ${third}"`);