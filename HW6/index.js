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

    // console.log(students[0].name, students[1].name, students[2].name);

// Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів
// для конкретного студента. Назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

// let keys = Object.keys(students[0]);
// console.log(keys);

// console.log(students[0].subjects, students[1].subjects, students[2].subjects);


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
