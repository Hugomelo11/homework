function assignGrade(gradeNumber) {
    let gradeLetter = "A";
  
    if (gradeNumber >= 90) {
      gradeLetter = "A";
    } else if (gradeNumber > 80 && gradeNumber < 89) {
      gradeLetter = "B";
    } else if (gradeNumber > 70 && gradeNumber < 79) {
      gradeLetter = "C";
    }
    return gradeLetter;
  }   
  console.log(assignGrade(90));
  

//   // Create a function that returns the number of true values in an array.

//   const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
//   function numbOfTimme(testArray){
//     for (let i = 0 ; i <= array.length ; i++)
//     console.log(testArray[i])
//   }
//   console.log(numbOfTimme(four))

  const arr = [true, false, false, true, false, false, false, true, true,
    true, false];
const count = arr.filter(Boolean).length;
console.log(count);















// 3. Create a function that converts a string to all uppercase letters and console.log the result (hint: string methods):
// let str = “WHAT a TIME to BE ALIVE!”





// function uppCase(str){
//   let str = ("WHAT a TIME to BE ALIVE!");
//   return str.toUpperCase;
// }
// console.log(allCaps(str));


// Gavin example

let fromDeep = 23
let inThePaint = 27
function teamTotal(fromDeep, inThePaint) {
  return fromDeep * 3 + inThePaint * 2
}
console.log(teamTotal(fromDeep,inThePaint));

// Juice example
function points (twoPoints, threePoints) {
  return twoPoints * 2 + threePoints * 3
}
console.log(points(23,37))


