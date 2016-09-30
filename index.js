function iterativeLog(array){
  array.forEach((element, i) => {
console.log(`${i}: ${element}`)
})
}
/*
function blah(array){
  array.forEach((a, b) => {console.log("blah")})
}
*/

function iterate(callback){
var arr = [1, 2, 3];
arr.forEach(callback)
return arr
}

function doToArray(array, callback){
  array.forEach(callback)
}