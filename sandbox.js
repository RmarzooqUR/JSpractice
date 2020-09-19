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

// declared funcs can be called before they are declared

// func exprs cant, but they can be used outside and a
// their blocks as they are variables
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

// ======================================================================
// arrow functions - single line - dont have their own this, therefore better use in classes
// multi line with curly brackets
let name = n => n*2         //one argument n
let sayHi = () => 'hello'   //no argument
let sayHello = (a,b) =>{    //with arguments
    return 'hi'
}

console.log(name(2))
console.log(sayHi())
console.log(sayHello(10,20))

let multiply= () =>{
    a = document.getElementById('in').value
    b = document.getElementById('in-1').value
    document.getElementById('result-3').innerHTML = a*b
}




// =================================================
// JS Closure
// =================================================
// js closure is when an inner function can acces its surrounding state
// or lexical scope even after the outer function has returned

// used to emulate private methods and variables (with IIFE - immediately invoked fun expr)

let outerFunc = function(){
	let privateVar = 0
	let privateMethod = (add) => privateVar += add;

	return {
		increment: function(){
			privateMethod(1)	
		},
		decrement: function(){
			privateMethod(-1)
		} ,
		value : function (){return privateVar;}
	}
};

counter = outerFunc();		//counter is now instance of outerFunc

// also
let addN = (a) => {
	return function(b){
		return a+b
	}
}

let add5 = addN(5)
console.log(add5(2))

let add10 = addN(10)
console.log(add10(21))

// event loop resides between stack and the task queue 
// and pushes any task in the task queue when the stack is empty

/*

__________					____________
|		  | 				|callback/	|		
|		  | <-event	->		|task		|
|Stack	  |   loop			|queue		|
|		  | 				|			|
|		  | 				|			|
----------					------------

__________
|		  |
|browser  |
|web	  |
|api	  |
|		  |
----------

/*