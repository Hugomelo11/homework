// task 1
function homework(x,y){
    return (x + y)
}
let addition = (homework(5,6))
console.log(addition);

//task 2
let vehicle = {
    make: 'Porsche',
    model: 'Cayenne GTS',
}
vehicle.year = '2008'

console.log(vehicle.make);
console.log(vehicle.model);
console.log(vehicle.year);
console.log(vehicle);


//function in an array?

function firstElement(array){
    console.log(array[0])
}
let weekdays = ['monday', 'tuesday', 'wednesday']
firstElement(weekdays);


let arrayH = ['bread', 'butter', 'oil']
let fruit = ['apple', 'bananas']
function getElement (arr, i) {
    return arr[i]
}
console.log(getElement(fruit, 1));

let car = 'this'