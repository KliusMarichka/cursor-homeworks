// Задача 1
const randomNumbers = [];

function getRandomArray (length, min, max) {
for (i=0; i<length; i++) {
randomNumbers.push(Math.floor(Math.random()* (max - min) + min))
}
return randomNumbers
}

console.log(getRandomArray(15, 1, 100));

// Задача 2

/*const numRow =[];
function getModa (...numbers) {
  numbers.filter ((number) => {
    if (number % parseInt(number) === 0) {
      numRow.push(number)
    }
    return numRow
  })    
  const sorted = numRow.sort((a, b) => a - b)
  return sorted
  let num1;
  let num2 = 0;
  let num3;
    for (i = 0; i<numRow.length; i++) {
      num1 = numRow[i];
      if (num1 = numRow[i+1]) {
      num2 = num2 + 1;
      } else {

      }
  }
}
console.log(getModa(2, 34, 2, 56.1, 3, 2, 3.1, 78));
*/

// Задача 3
let count;
const numNums =[];
function getAverage (...numbers) {
  numbers.filter ((number) => {
    if (number % parseInt(number) === 0) {
      numNums.push(number)
    }
    return numNums
    })    
  let averageNum = numNums.reduce((prevNumber, number) => {
    const res = prevNumber + number;
    return res 
  }, 0)/ numNums.length
  return averageNum
  }
  
  console.log(getAverage(6, 2, 3.1, 2, 2.1, 2));

  // Задача 5
  function filterEvenNumbers(...numbers) {
    const evenNums = numbers.filter((number) => {
      return number % 2 === 0
    })
    return evenNums
  }

  console.log(filterEvenNumbers(1, 2, 5, 6, 3, 8, 10, 12));

