let n = prompt('Будь ласка, введіть число');

if (Number.isInteger(n)) {
    console.log('Число ціле');
} else if (Number.isNaN(n)) {
    console.log('Це не число');
} else {
    console.log('Число неціле');
}

let m = +prompt('Будь ласка, введіть ще одне число');

if (Number.isInteger(m)) {
    console.log('Число ціле');
} else if (Number.isNaN(m)) {
    console.log('Це не число');
} else {
    console.log('Число неціле');
}

let areNumbersEven = confirm('Пропускати парні числа?');

//for (let ) {
//console.log()
//}