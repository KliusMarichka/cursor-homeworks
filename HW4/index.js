const students = [
'Олександр',
'Ігор',
'Олена',
'Іра',
'Олексій',
'Світлана'
];

const topics = [
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
const pairArr = [[], [], []];

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
    pairArr[i].push(boys[i]);
    pairArr[i].push(girls[i]);
    }
    return pairArr
}

const pairs = getPairs();
console.log(pairs);

// Завдання 2

function givePairsTopics (){
    for (let i = 0; i < topics.length; i++) {
        let topic = topics[i];
        pairArr[i].push(topic);
    }
    return pairArr
}

givePairsTopics();

// Завдання 3
const studMarks = [[], [], [], [], [], []];

function giveStudentsMarks (){
    for (let i = 0; i < marks.length; i++) {
        let name = students[i];
        let mark = marks[i];
        studMarks[i].push(name);
        studMarks[i].push(mark);
    }
    return studMarks
}

const markedStudents = giveStudentsMarks();
console.log(markedStudents);

// Задача 4
let pairsGraded = []; 
function gradePairs (){
    for (let i = 0; i < 3; i++) {
        let gradedPair = pairArr[i];
        let grade = Math.floor(Math.random() * (6 - 1) + 1);
        pairsGraded.push(gradedPair);
        pairsGraded.push(grade);
    }
    return pairsGraded
}

console.log(gradePairs());