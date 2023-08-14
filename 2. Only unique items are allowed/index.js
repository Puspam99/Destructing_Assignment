const arr = [1,2,3,4,5,6,4,3]

function uniqueNum(arr){
       const newSet = new Set(arr)
       return newSet     
}
console.log(uniqueNum(arr))