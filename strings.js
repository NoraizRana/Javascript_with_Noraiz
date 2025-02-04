console.log("Tutorial 5");
console.log("Strings in Js");
let name= "Noraiz";
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
//length is the property of string not a function
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}
//some important methods of strings 
let sent="Clever Fox";
console.log(sent.toUpperCase());
console.log(sent.toLowerCase());
console.log(sent.slice(0));
console.log(sent.slice(1,8));
console.log(sent.replace("Clever", "Smart"));
console.log(sent.trim()); //removes whitespaces 
console.log(sent.charAt(5));
console.log(sent.concat(" Grapes are sour", "I should not eat them")); //+ can also be used for concatination
//strings are immutable mean to say that no matter what function you perform the actual strings remains the same



