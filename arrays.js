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
let list=[11,22,"Mr.Aiz",33,"House",44];
list.shift();
list.pop();
list.push(67);
list.unshift(232);
console.log(list);

