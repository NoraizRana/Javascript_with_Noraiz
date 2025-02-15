console.log("Tutorial 11");
console.log("In this tutoruial we will learn about arrays, their methods and functions");
//Arrays are mutable & typeof arrays in Js returns object
let arr = [2, 4, 6, 7, 8, 9];
arr[2] = 44;
arr[5] = "Aiz";
console.log(arr);

//array using for of loop
for (const element of arr) {
    console.log(element)
}

//array using for each loop
arr.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

//array methods 
let list = [11, 22, "Mr.Aiz", 33, "House", 44];
list.shift(); //pop ka bhaii
list.pop();
list.push(67);
list.unshift(232); //push ka bhaii 
delete list[4];

//splice method is used to add or remove value from a particular location
list.splice(1,3);
list.splice(1,2,567,391);

//slice method cuts/slices the array from the desired indexes
console.log(list.slice(1, 3));

//join method is used to join array elements by something
console.log(list.join(" and "));
console.log(list);

//concat is used to join to arrays 
let num = [1, 2, 3, 4];
let num1 = [5, 6, 7, 8];
let num2 = num.concat(num1);
console.log(num2);

