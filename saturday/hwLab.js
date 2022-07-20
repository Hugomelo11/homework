// given a sentence reverse order: "the sky is blue" -> "euld si yks eht"

let str = 'the sky is blue'; // this str is in Global Scope


function reverseString(str) {
    let originalArray = str.split('')  // turns 'str' string into an array (reverseArray)
    
    jointStr = ''                       // this will be our final reverse string
    
    for (let i = originalArray.length -1; i >= 0; i--){      // initializing the posistion of the string and sub 1 letter each time
        jointStr += originalArray[i]  // aff the letter at the index i to the end of jointStr
    }
    return jointStr
     
}
// console.log(reverseString(str)); // this is the "str" in the global scope

console.log(reverseString("the sky is blue"));