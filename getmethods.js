console.log("Tutorial 14");
console.log("In this tutoruial we will learn about get methods in Javascript");
//by class
console.log(document.getElementsByClassName("cont"));
//by id
// console.log(document.getElementById("rx").style.backgroundColor = "green");
//by tag name
console.log(document.getElementsByTagName("div"));
//by query selector
// console.log(document.querySelector(".box").style.backgroundColor = "purple");
//to select all boxes All is used
console.log(document.querySelectorAll(".box"));
let cp = document.querySelectorAll(".box");
for (let i = 0; i < cp.length; i++) {
   cp[i].style.backgroundColor = "purple"
}
cp[2].closest("#rx"); 
cp[2].closest("html"); //gives html tag
//contain method
document.querySelector(".cont").contains(cp[2]);
//contains method returns true if the element is present in the parent element otherwise false
console.log(document.querySelector(".cont").contains(document.querySelector(".box")));
console.log(document.querySelector("html").contains(document.querySelector("body")));
// particular node matches __css property or not
console.log(cp[2].matches("#rx"));
