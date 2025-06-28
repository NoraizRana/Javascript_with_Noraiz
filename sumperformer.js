function sum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            break;
        }
        
           sum += arr[i];
    }
    return sum;
}
let ar1=[1,3,5,-3,7];
console.log("The sum is " + sum(ar1));