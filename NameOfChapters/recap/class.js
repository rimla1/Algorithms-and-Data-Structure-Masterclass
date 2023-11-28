class Student {
    constructor(name, surname, year){
        this.name = name
        this.surname =surname
        this.grade = year
    }
}

const firstStudent = new Student("Almir", "Muminovic")
const secondStudent = new Student("Rimla", "Muminovic", 3)
console.log(firstStudent.name, secondStudent.surname, secondStudent.grade)