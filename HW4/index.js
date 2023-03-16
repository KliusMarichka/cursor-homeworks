const students = [
'Олександр',
'Ігор',
'Олена',
'Іра',
'Олексій',
'Світлана'
];

const themes = [
'Диференційне рівняння',
'Теорія автоматів',
'Алгоритми і структури даних'
];

const marks = [
4,
5,
5,
3,
4,
5
];

const girls = [];
const boys = [];
const pair = [];


for (let i = 0; i < students.length; i++) {
    let name = students[i];
    
     if (name[name.length-1] === 'а'){
     girls.push(name);
     } else {
     boys.push(name);
     }
}
console.log(boys);
console.log(girls);
//const pairs = getPairs(students);
//console.log(pairs);

