console.log("Promises in Js is the promise of code execution");
let prom=new Promise((resolve,reject)=>{
    let random=Math.random();
    if (random<0.5){
        reject("Sorry promise rejected");
    }
    else {
        setTimeout(()=>{
            resolve("Great!! Promise resolved")
        },2000);
    }
})
let prom1=new Promise((resolve,reject)=>{
    let random=Math.random();
    if (random<0.5){
        reject("Sorry promise 1 rejected");
    }
    else {
        setTimeout(()=>{
            resolve("Great!! Promise 1 resolved")
        },1000);
    }
})
let prom2= Promise.all([prom,prom1]) //settledall() mein promise resolve ho ya reject apko status or value mil jy gi but in all() viceversa
prom2.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
});
//promise.race() promises ki race lgwaty jo sabsy pehly resolve ho ga value mil jy gi
//promise.any() first promise jo resolve ho ga
//promise.reject() to show the rejected promise
//promise.resolve() to show the resolved promise