/* You are building a word count generator that will take a large string of text as input and output
 the words and the number of times they are present in the string. Your task is to write a function
  that can count the occurrences of each word in the string and return a Map containing each word's
   count. For simplicity, you can assume that the string only contains alphabetic characters and 
   spaces.*/






const str = 'I m very good man because my very is also good i'
function countOccurrences(str){
    const changeArr = str.toLowerCase().split(" ")
    const map = new Map()

    console.log(changeArr)
   for(let word of changeArr){
    if(map.has(word))
    map.set(Worker , count++)
   }
}
countOccurrences(str)