import {compose} from "redux"

function removeSpaces(string){
    return string.split(" ").join("-")
}
function repeatString(string){
    return string+string
}
function convertToUpper(string){
    return string.toUpperCase()
}
const input="abc def ghi"
const composedFunction=compose(removeSpaces,repeatString,convertToUpper)
console.log(composedFunction(input))
 