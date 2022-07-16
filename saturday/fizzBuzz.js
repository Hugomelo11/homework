// The FizzBuzz problem is a classic test given in coding interviews. The task is simple: Print integers 1 to N, but print "Fizz" if an integer is divisible by 3, "Buzz" if an integer is divisible by 5, and "FizzBuzz" if an integer is divisible by both 3 and 5.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) 
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  }
  else console.log(i)
}
fizzBuzz(15)

// second option

function FizzBuzz(n) {
    let results = []
    for (let i=1; i<=n; i++) {
        if (i%3===0 && i%5===0){ 
            results.push("FizzBuzz")
        } else
        if (i%3===0){
            results.push("Fizz")
        } else 
        if (i%5===0){
            results.push("Buzz")
        }
        else
        results.push(i)
    }
    return results
}

let finalResult= FizzBuzz(15)
console.log (finalResult)















