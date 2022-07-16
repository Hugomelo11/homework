// given a sentence reverse order: "the sky is blue" -> "euld si yks eht"

function reverseString(str) {

    let str = "the sky is blue";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}



const result = reverseString(string);
console.log(result);