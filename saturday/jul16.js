let pop = 3248
n = 6

function whenBuilt(population, n) {
    let newPeople = n * 360
    let findPop = population + newPeople
    return findPop
}
console.log(whenBuilt(pop,n))