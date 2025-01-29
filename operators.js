console.log("Tutorial 2");
console.log("Operators in Js");
let a=78;
let b=56;
// Arithmetic operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b); //exponentiation i.e a to the power b

// comparison operators
/* ==, >=, <=, !=,
 ===, !==, <, >,? */
if (a==b){
console.log("a is equal to b");
}
else (a!=b)
{
        console.log("a is not equal to b");  
};
let c=16;
let d=3;
 if (c<d)
    {
    console.log("c is smaller than d");
    }
    else if (c>d)
        {
            console.log("c is grater than d");
            };
let e=9;
let f="9";
console.log("e == f", e==f);
console.log("e !== f", e!==f);
console.log("e === f", e===f);
console.log("e !== f", e!==f);
console.log("Hey I am NorAiz");
//ternary operator
n=a>b? (a-b):(b-a);
console.log(n);
//logical operators
// &&, ||, !
g=a==b && b==a? (a+b): (a*b);
console.log(g);
z=a==b || b!=a? (a/b): (a*b);
console.log(z);
//Assignment operators
a+=3;
console.log(a);
a-=3;
console.log(a);
a*=3;
console.log(a);
a%=3;
console.log(a);

