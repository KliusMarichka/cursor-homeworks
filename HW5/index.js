// Задача 1
const randomNumbers = [];

function getRandomArray (length, min, max) {
for (i=0; i<length; i++) {
randomNumbers.push(Math.floor(Math.random()* (max - min) + min))
}
return randomNumbers
}

console.log(getRandomArray(15, 1, 100));

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

  // Задача 4

const numRow = [];

function getMedian(...numbers) {
  numbers.filter ((number) => {
    if (number % parseInt(number) === 0) {
      numRow.push(number)
    }
    return numRow
    })

  numRow.sort((a, b) => a - b)

  let length = numRow.length;
  if (length % 2 !==0) {
    medianIndex = Math.floor(length / 2);
    median = numRow[medianIndex];   
  } else {
    medianIndex = length / 2;
    median = (numRow[medianIndex] + numRow[medianIndex -1])/2;
  }
return median
}

console.log(getMedian(1, 2, 3, 4));

  // Задача 5
  function filterEvenNumbers(...numbers) {
    const evenNums = numbers.filter((number) => {
      return number % 2 === 0
    })
    return evenNums
  }

  console.log(filterEvenNumbers(1, 2, 5, 6, 3, 8, 10, 12));

// Задача 6
function getPositiveNumbers(...numbers) {
  const positivNums = numbers.filter((number) => {
    return number > 0
  })
  return positivNums
}

console.log(getPositiveNumbers(-1, 3, 2, 0, -4, 9, 6));

// Задача 7

function getDividedByFive(...numbers) {
  const byFiveNums = numbers.filter((number) => {
    return number % 5 === 0
  })
  return byFiveNums
}

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

