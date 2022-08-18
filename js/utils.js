function notANumber(value){
  return isNaN(value)  || value == ""
}
module.exports = notANumber

function calculateIMC(weight, height) {
  return (weight / ((height /100) ** 2)).toFixed(2)
} 
module.exports = calculateIMC
