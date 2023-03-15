let number1;
let number2;


while (!(Number.isInteger(number1)) || number1<0) {
    number1 = +prompt("Ціле число, будь ласка");
} 

while (!(Number.isInteger(number2)) && (!number2 || number1>=number2)) {
    number2 = +prompt("Ще одне ціле число, будь ласка");
} 

let skipEven = confirm('Пропускати парні числа?');
let sum = 0;

while (number1 < number2) {
    if ((skipEven == true && (number1 % 2) !== 0)) {
        number1 = number1 + 2;
        sum = sum + number1;
    } else {
        sum = sum + number1;
        number1 = number1 + 1;
    }
}

if (skipEven == true && (number2 % 2) == 0) {
    console.log(sum-number2);
} else {
    console.log(sum+number2);
}
  

/*let number1 = +prompt("Ціле число, будь ласка");
let N = Number.isInteger(number1) ? number1 : document.writeln('Try again');
console.log(N);

let number2 = +prompt("Ще одне ціле число, будь ласка");
let M = Number.isInteger(number2) ? number2 : document.writeln('Try again');
console.log(M);

let skipEven = confirm('Пропускати парні числа?');
let sum = 0;

while (N < M) {
    if ((skipEven == true && (N % 2) !== 0)) {
        N = N + 2;
        sum = sum + N;
    } else {
        sum = sum + N;
        N = N + 1;
    }
}

if (skipEven == true && (M % 2) == 0) {
    console.log(sum-M);
} else {
    console.log(sum+M);
}*/


