// function doubler(arr){
    
//     return arr.map(e => e*e);

let result=[];
function doubler(ar){
for(let i=0; i<ar.length;i++)
{
    if(i>0 && ar[i]==ar[i-1])
    {
        continue;
    }
    result.push((ar[i]*ar[i]))
}
return result;
}
let arr=[2,4,5,6,8];
console.log(doubler(arr));