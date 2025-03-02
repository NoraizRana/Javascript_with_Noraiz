console.log("Tutorial 15");
console.log("In this tutoruial we will calculate the factorial of given number");
let a=7;
function fact(n) {
  let f=1;
    for (let i = 1; i <= n; i++) {
        f=f*i;
    }
    return f;
  }
  console.log(fact(7));