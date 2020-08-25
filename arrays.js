// arrays are objects
newInt = [1,2,3,4,"21", 0,-32]
newIntAsObject = {      //same as above
    0:1,
    1:2,
    2:3,
    3:4,
    4:"43",
    'length':5,
}
// ===============================================================
exam = {
    qualAge: 12,
    eligible(candidate){
        return candidate.age > this.qualAge;
    }
}

newArr = [
    { id: 3, name:'marzqooq', age: 12},
    { id: 2, name:'marzqooq', age: 13},
    { id: 4, name:'marzqooq', age: 17},
    { id: 1, name:'marzqooq', age: 18},
    { id: 5, name:'marzqooq', age: 10},
    { id: 6, name:'marzqooq', age: 32},
]
// searching(find, filter)
console.log(newArr.find(item => exam.eligible(item),exam),
    "find only gets the first matching element")

console.log(newArr.filter(exam.eligible,exam),
    "filter gets all the matching elements")


    // sorting(sort)
console.log(newInt.sort((a,b)=>a-b))


// operations (map, reduce, reverse, split, join)

// map - apply fn on every element and add the result to the variable
let eligibleArr = newArr.map(item => exam.eligible(item))
console.log(eligibleArr)

// reduce - the arr elements to a single val
let maxAge = newArr.reduce(
    (max, item) => (max === undefined || item.age > max) ? item.age : max,
    []);
console.log(maxAge);