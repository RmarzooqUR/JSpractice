let what = 1
let newObject = {
    what,
    0       :   "zero",
    "hello" :   "how are you",
    1       :   "one",
    for     :   "this is ok",
}

console.log(newObject)

// objects are stored in memory and the var its assigned to points to the object
// copying with '=' only creates a new var that points to same object

// to copy an object we use object.assign
let copy = Object.assign({}, newObject)
console.log(copy)

// reachability
// when there are relationships b/w objects if reachability is the existence of path to other objects
// if an object is non reachable(overwritten or set null) - its garbage and is deleted from mem.

// this & new 
// this is evaluated at runtime and is not bound i.e. it can take the value of the object it resides n
// objects are always truthy - [ if(0) -false but if(new Number(0)) -true]
function User(name){
    this.name = name;
    this.isAdmin = false;
}

function isAdminFunc(){
    if (this.isAdmin) {
        return true
    }
    return false
}

let current = new User('Allo')
current.isAdminFunc = isAdminFunc;
console.log(current)
console.log(current.isAdminFunc())

// primitives also have methods like string.toUpperCase and num.toFixed(n)
// null and undefined have no methods

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ES6 Computed property names
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// use [expression] to set the expression as a property name

let i=0;
let obj = {
    ['foo'+ ++i]:i,
    ['foo'+ ++i]:i,
    ['foo'+ ++i]:i,
    ['foo'+ ++i]:i,
    ['foo'+ ++i]:i,
}