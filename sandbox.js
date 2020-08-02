var flag = true     //old
let flag1 = true
const flag2 = null      //undefined is given by browsers when the variable is not defined - different from null 
document.getElementById('button').onclick = function () {
    if (flag) {
        document.getElementById('content').innerHTML = 'hello'
        flag = false
    } else {
        document.getElementById('content').innerHTML = ''
        flag = true
    }
}


document.getElementById('button2').onclick = function(){
    let firstName = document.getElementById('input1').value;
    let lastName = document.getElementById('input2').value;
    let fullName = firstName +" "+ lastName;

    document.getElementById('output').innerHTML = fullName;
}

// array methods 
// .join(char) - join the array and output a string with the joining character is char
// .indexOf('element') 
// .push() | .pop()
// .concat(['aasf','b', 20])
// .includes() - also a string method - find the passed parameter in string or array

// template strings with `the age is ${age}` - as python string formatting

let age = 20
list = [age, age+3, `the age is ${age}`]
console.log(list)

// type conversion
// "100" + 100  - not allowed
let value = 200
console.log(Number('100')+ value)     // works
console.log(typeof value)

// labels - only search for lableName above the break/continue labelName statement

outerlabel: for (let index = 0; index < 10; index++) {
    for (let index2 = 0; index2 < 10; index2++) {
        console.log(`index1 - ${index}, index2 ${index2}`);
        continue outerlabel;       
    }
}