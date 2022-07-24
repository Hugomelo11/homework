// What are the seven databasr paradigms?
// 1. Key Value
// 2. Wide Column
// 3. Document
// 4. Relational
// 5. Graph
// 6. Search
// 7. Multi Model


// Create a function that takes a base number and an exponent number and returns the calculation.
function pow(base, power) {
    let p =1;
    for (let i=1; i<base; i++) {
      p = power * base;
    }
    return p;
  }

  console.log(pow(4,3))

  // option two - not copied
  // function calculation (x,y) {
  //   x ** y
  // }
  // console.log(calculation(5,5))


  //Create a function that takes an array and a string as arguments and returns the index of the string.

//   function returnIndx(arry) {
      
//       let arry = [];
//       for (let i = 0; i<arry.length; i++)
//       return (indexOf(array[i]))
   
// }
// console.log(returnIndx(arry))


 




// Create a function that takes an array and returns the types of values (data types) in a new array
//   let arr = ["1", 2, false, true];
//   let newArray = [];
//   function dataTypes(arr) {
//     for (i = 0; i < arr.length; i += 1) {
//       let y = typeof (arr[i])
//       newArr = [...newArr, y]
//     }
//     return newArr;
//   }
//   dataTypes(arr);
//   console.log(newArr);




