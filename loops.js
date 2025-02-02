console.log("Tutorial 3");
console.log("Loops in Js");

//we use loops for performing repititive tasks
let n = 50;
for (i = 0; i < 100; i++) {
    console.log(n + i);
}
let car = {
    corolla: 2003,
    civic: "Red",
    isnew: false,
    showered: "no"
}

/* for in loop
is used to print keys or elements of objects*/
for (const key in car) {

    const element = car[key];
    console.log(key, element);
}

/* for of loop
is called as iterator of  objects such as arrays, strings,sets etc*/
for (const b of "b10medical") {
    console.log(b);
}

/* for each loop
is used for arrays to execute a function on each element*/
let arr=[1,2,3,4,5];
arr.forEach((no,index)=> {
    console.log(index,no);
});