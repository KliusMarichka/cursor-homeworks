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



// Задача 3

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
