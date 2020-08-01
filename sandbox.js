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