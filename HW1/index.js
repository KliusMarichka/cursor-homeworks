let wire = 15.678;
let pliers = 123.965;
let screwdriver = 90.2345;

console.log(Math.max(wire, pliers,screwdriver));
console.log(Math.min(wire, pliers,screwdriver));

let sum = wire + pliers + screwdriver;
console.log(sum);

let floorSum = Math.floor(wire) + Math.floor(pliers) + Math.floor(screwdriver);
console.log(floorSum);

console.log(Math.round(floorSum/100)*100);

function getRoundSum () {
if (floorSum%2==0) {
    return true;
}
}

console.log(getRoundSum());

let purchasePayment= 500;

let change = purchasePayment - (wire + pliers + screwdriver);

console.log(change);

console.log((sum/3).toFixed(2));

let randomDiscountPersentage = Math.round(Math.random() *99) + 1;

console.log(randomDiscountPersentage);

// 1 Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми

let discountSum = (sum * randomDiscountPersentage) / 100;

console.log(discountSum);

let totalPay = sum - discountSum;

console.log(totalPay.toFixed(2));

// 2 Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

let netProfit = totalPay - (sum/2);

console.log(netProfit.toFixed(2));

document.writeln(`Максимальна ціна: ${Math.max(wire, pliers,screwdriver)} грн
Мінімальна ціна: ${Math.min(wire, pliers,screwdriver)} грн
Загальна вартість: ${sum} грн
Загальна вартість, округлена до меншого: ${floorSum} грн
Сума товарів, округлена до сотень: ${Math.round(floorSum/100)*100} грн
Total price of the products is an even number: ${getRoundSum()}
Сума решти після оплати 500 грн: ${change} грн
Середнє значення цін, округлене до другого знаку: ${(sum/3).toFixed(2)}`);