let pop = 3248
n = 6

function whenBuilt(pop, n) {
    let newPeople = n * 360
    let findPop = pop + newPeople
    return findPop
}
console.log(whenBuilt(pop,n))