function strappender(str){
    return str += " "+ str.split("").reverse().join(" ");
}

let strr="hello guys";      


console.log(strappender(strr));