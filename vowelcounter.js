
   let vowels = "aeiouAEIOU";
   let newarr=[];
   function vowelcounter(str) {
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            newarr.push(char);
            count++;
        }
    }
    return count;
}

let str1="Hello I am Aizz";
console.log("Vowel count is: ", vowelcounter(str1));
console.log("vowels found ", newarr)
