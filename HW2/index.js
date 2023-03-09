let number1 = +prompt("Ціле число, будь ласка");
let N = Number.isInteger(number1) ? number1 : document.writeln('Try again');
console.log(N);

let number2 = +prompt("Ще одне ціле число, будь ласка");
let M = Number.isInteger(number2) ? number2 : document.writeln('Try again');
console.log(M);

let skipEven = confirm('Пропускати парні числа?');

let sum = 0;

while (N < M) {
    if (skipEven == true && (N % 2) == 0) {
        sum = sum + N;
        N = N + 2;
    } else {
        sum = sum + N;
        N = N + 1;
    }
}

if (skipEven == false && (N % 2) == 0) {
console.log(sum+M);
} else if ((M % 2) == 0) {
console.log(sum)
} else {
console.log(sum+M);
}


/*for (let j = (N + 1); j < (M - N) + 1; j++) {
console.log(N + j + M);
}

//while (i > m) {
    i = i++
if (skipEven == true, i % 2 != 0)  { 
    console.log(i);
    i = i + (i + 2);
} else {
    console.log(i+1)
    i = i + 2
}
}
*/
