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
// Завдання 1
const girls = [];
const boys = [];
const pair1 = [];
const pair2 = [];
const pair3 = [];
const pair = [[], [], []];

function getPairs() {
    for (let i = 0; i < students.length; i++) {
        let name = students[i];
        
        if (name[name.length-1] === 'а'){
        girls.push(name);
        } else {
        boys.push(name);
        }
    }

    for (let i = 0; i < boys.length; i++) {
    pair[i].push(boys[i]);
    pair[i].push(girls[i]);
    }
    return pair
}

const pairs = getPairs();
console.log(pairs);

// Завдання 2
