console.log("Tutorial 12");
console.log("In this tutoruial we will learn about arrays methods map, filter and reduce");

//map
let items = [56, 79, 81, 23, 6];
let newitems = items.map((element) => {
    return element ** 2;
})
console.log(newitems);

//filter
const even = (v) => {
    if (v % 2 == 0) {
        return true
    }
    return false
}
console.log(items.filter(even));

//reduce
let a=[1,2,3,6,8];
const red=(a,b)=>{
    return a+b;
}
console.log(a.reduce(red));

//array.from method
console.log(Array.from("Noraiz"));