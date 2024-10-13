// Addition
function add(a, b) {
      return a + b;
}
// Subtraction
  function subtract(a, b) {
return a - b;
}
// Multiplication
function  multiply(a, b) {
     return a * b;
}
// Division
 function divide(a, b) {
    if (b !== 0) {
          return a / b;
     }  else {
         return 'Division by zero is not allowed';
    }
}
console.log(add(5, 3));        
console.log(subtract(5, 3));   
console.log(multiply(5, 3));   
console.log(divide(5, 3));    
console.log(divide(5, 0));    
