const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];

// Task 1

function getSubjects(student) {
    let subjects = Object.keys(student.subjects);
    const everySubject = subjects.map((subject) => {
        const firstLetter = `${subject[0]}`
        return firstLetter.toUpperCase() + `${subject.substring(1)}`
    })

    for (let i = 0; i < everySubject.length; i++) {
       everySubject[i] = everySubject[i].replace('_', ' '); 
    }
    return everySubject
}

console.log(getSubjects(students[0]));

// Task 2

function getAverageMark(student) {
    const marksOfSubjects = Object.values(student['subjects']);
    let marks1 = Object.values(marksOfSubjects[0]);
    let marks2 = Object.values(marksOfSubjects[1]);
    let marks3 = Object.values(marksOfSubjects[2]);
    let allMarks = marks1.concat(marks2).concat(marks3);
    let averageMark = allMarks.reduce((prevNumber, number) => {
        const res = prevNumber + number;
        return res 
        }, 0)/ allMarks.length
    return averageMark.toFixed(2)
}
 
console.log(getAverageMark(students[0]));

// Task 3
 
function getStudentInfo (student) {
    let studentInfo = Object.entries(student);
    let info = Object.fromEntries(studentInfo);
    info['averageMark'] = getAverageMark(student);
    const infoOfTheStudent = [];
    infoOfTheStudent.push(info.name, info.course, info.averageMark);
    return infoOfTheStudent
}

console.log(getStudentInfo(students[2]));

// Task 4
function getStudentsNames(students) {
    const names = [];
    for (let i = 0; i < 3; i++){
        names.push(students[i].name)
    }
    const studentsNames = names.sort((a, b) => a < b ? -1 : 1 ); 
    return studentsNames
}

console.log(getStudentsNames(students));

// Task 5

function getBestStudent(students) {
    const arrOfStudentsAndMarks = [];    
    for (let i = 0; i < 3; i++){
        let tempArr = [];
        tempArr.push(getAverageMark(students[i]));
        tempArr.push(students[i].name);
        arrOfStudentsAndMarks.push(tempArr);
    }
    let bestMark = arrOfStudentsAndMarks.sort((a, b) => a > b ? -1 : 1);   
    return bestMark[0][1] 
}

console.log(getBestStudent(students));

// Task 6

let word;
let wordLetters = {};
let wasFound;

function calculateWordLetters(word) {
    word = word.split("");
    for (let i = 0; i<word.length; i++) {
        for (key in wordLetters) {
            if (word[i] === key) {
                wordLetters[word[i]] = wordLetters[word[i]] + 1;
                wasFound = true;
            break
            }
        }  
        if (!wasFound || Object.keys(wordLetters).length === 0 ) {
            wordLetters[word[i]] = 1;
        }  
    }
    return wordLetters
}

console.log(calculateWordLetters("тест"));