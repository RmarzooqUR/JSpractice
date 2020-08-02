var flag = true     //old
let flag1 = true

/*  undefined is given by
    browsers when the variable
    is not defined - different from null
*/
const flag2 = null


// ------------------this is a function expression---------------

document.getElementById('button').onclick = function () {
    if (flag) {
        document.getElementById('content').innerHTML = 'hello'
        flag = false
    } else {
        document.getElementById('content').innerHTML = ''
        flag = true
    }
};
// the ; at the end just terminates the assignment statement

document.getElementById('button2').onclick = function(){
    let firstName = document.getElementById('input1').value;
    let lastName = document.getElementById('input2').value;
    let fullName = firstName +" "+ lastName;

    document.getElementById('output').innerHTML = fullName;
}

// array methods 
/* .join(char) - join the array and output a string
               with the joining character is char
                */
// .indexOf('element') 
// .push() | .pop()
// .concat(['aasf','b', 20])
/* .includes() - also a string method - 
                 find the passed parameter in string or array
                */
/* template strings with `the age is ${age}` - 
            as python string formatting
            */

let age = 20
list = [age, age+3, `the age is ${age}`]
console.log(list)

// type conversion
// "100" + 100  - not allowed
let value = 200
console.log(Number('100')+ value)     // works
console.log(typeof value)

/* labels - only search for lableName above
            the break/continue labelName statement
            */
outerlabel: for (let index = 0; index < 10; index++) {
    for (let index2 = 0; index2 < 10; index2++) {
        console.log(`index1 - ${index}, index2 ${index2}`);
        continue outerlabel;       
    }
}

// JS switch statements can be grouped and the checks are always strict
document.getElementById('browser').oninput = function () {
    let browser = document.getElementById('browser').value
    switch (browser) {
        case 'Mozilla':
        case 'Chrome':
        case 'Safari':
        case 'Edge':
            document.getElementById('result').innerHTML = 'we support this browser';
            break;
        case 'Internet Explorer' :
            document.getElementById('result').innerHTML = 'this browser is not supported';
            break;
        default:
            document.getElementById('result').innerHTML = 'this browser is not supported';
            break;
    }
}

// alert(), prompt() and confirm()
/* alert - returns undefined | 
    prompt - returns a string of anything
    that was typed in the prompt
*/


// if same variable is declared 
// within function block and out of it
// the inner variable is used

// we can call funcs of func exprs as a
// parameter of another func - called callbacks
let callbacks = function (question, yes, no){
    if(confirm(question)) yes()
    else no()
}

let showTrue = function(){
    document.getElementById('result-2').innerHTML = 'you confirmed yes'
}
let showFalse = function(){
    document.getElementById('result-2').innerHTML = 'you cancelled'
}
