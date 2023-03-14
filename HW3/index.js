
// Задача 2
function getPow(number, power) {
    let numberPow;
    numberPow = number * number;
    for (let i=1; i<=power-2; i++) {
        numberPow = numberPow * number;
    }  
    console.log(numberPow);
}

getPow(3, 9);


//Задача 1

function getMaxDigit(number) {

    let strNum = number.toString();
    let digitsCount = strNum.length;
    let num;
    let num2;
    let maxNum;
    
    for (let i=0; i<digitsCount-1; i++) {
       
       num = strNum.charAt(i);
       num2 = strNum.charAt(i+1);
   
       if (num>=num2) {
           maxNum = num;       
       } else {
           maxNum = num2;
       }
    }
    console.log(maxNum);
}
getMaxDigit(1092);
   
// Задача 3
function startCapital(name) {
   const letters = name.split('');
   const cut = name.substring(1);
   console.log(`${letters[0].toUpperCase()}${cut.toLowerCase()}`); 
}

startCapital('валЄрА');

//Задача 4
let grossPay;
let netPay;

function countNetSalary(grossPay) {
    tax = ((grossPay*18)/100)+((grossPay*1.5)/100);
    netPay = grossPay - tax;
    console.log(netPay);
}

countNetSalary(10000);

//Задача 5

/*function getRandomNumber (num1, num2) {
    const random = Math.random(num1, num2)
    console.log(random);
}
getRandomNumber(0.02, 0.9);
*/

function getRandomInteger(n, m) {
    console.log(Math.floor(Math.random() * (m - n) + n));
}
getRandomInteger(3, 10);

//Задача 6

let result = 0;
let word;

function countLetters (word, L) {
    let position = word.indexOf(L);

    while (position !== -1) {
        result++
        position = word.indexOf(L, position + 1);
    }
    console.log(result);
}

countLetters("абабагаламага", "а");

