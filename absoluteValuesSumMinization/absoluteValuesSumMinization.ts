/*function absoluteValuesSumMinimization(a: number[]): number {
   
   return Math.abs()
}*/

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
function FirstFactorial(num) { 

  // code goes here
  if(num === 0){ num = 1}
  else {
    num = num * FirstFactorial(num-1)
  }
  return num; 

}
   
// keep this function call here 
console.log(FirstFactorial(5));