// a promise on declaration takes two callbacks resolve and reject
// a promise object has 2 properties -
// state = (resolved or rejected)
// result = (value or Error)

let promise = new Promise(function (resolve, reject){
	console.log('loading...')
	setTimeout(() => resolve('done'),2000)
});


// state & result are private and can only be accessed by
// - then(resultHandlingCallback, errorHandlingCallback) -> (to handle result error or both)
// - catch(errorHandlingCallback) -> (to handle error)
// - finally() -> (to pass error/result to next handler)

promise.then(
	function (result){
		console.log(result);
	},
	function (error){
		console.log(error)
	}
)

let newProm = new Promise((resolve,reject) => {
	setTimeout(() => reject(new Error("Error")), 5000)
})
.finally(()=> console.log("promise ready..."))
.catch(error => console.log(error))
.then((result, error)=>{
	console.table([
	["inPromise","After Promise","time difference","setTimeout"],
	["loading...", "done", "2", "2"],
	["loading...", "promise ready...", "3", "5"]
])
})
.finally(() => console.log("coz both timers start at almost same time coz async"));
;

// ---------------------------------------------------------------------------