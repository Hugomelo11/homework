// Write a function to convert temperatures from Fahrenheit to Celsius.

function tempConvert(celsius) {
    
    let fahrenheit = celsius * 9/5 + 32
    
    return fahrenheit;
  }
  console.log(tempConvert(12));


// Write a function that converts USD to any other currency of choice.

function moneyConvert(dollar) {
     let real = dollar * 5.41
     return real;

}
console.log(moneyConvert(120));


// You are given 2 arrays, one called shoppingList and one called cart.
// Create a new version of shoppingList where the items in the cart have been removed.

 

const shoppingList = { dairy: 'milk', fruits: 'pineapple', poultry: 'Chicken' }
const allProps = Object.values(shoppingList)
console.log(allProps)


// given a sentence reverse order: "the sky is blue" -> "euld si yks eht"

// function reverseString(str) {

//     let newString = "the sky is blue";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }


// const string = prompt('the sky is blue');

// const result = reverseString(string);
// console.log(result);
