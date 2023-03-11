// Задача 3
function startCapital(name) {
   const letters = name.split('');
   const cut = name.substring(1);
   console.log(`${letters[0].toUpperCase()}${cut.toLowerCase()}`); 
}

startCapital('валЄрА');
