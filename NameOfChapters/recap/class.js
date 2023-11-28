class Student {
    constructor(name, surname, year){
        this.name = name
        this.surname =surname
        this.grade = year
        this.absence = 0
    }

    greeting(){
        return `Hello, ${this.name} ${this.surname}, welcome to year ${this.grade}`
    }

    markAbsence(){
        this.absence += 1
        if(this.absence > 3){
            return 'You have been removed from school!'
        }
        return `${this.name} ${this.surname} has been absence: ${this.absence}`
    }

}

const firstStudent = new Student("Almir", "Muminovic", 4)
const secondStudent = new Student("Rimla", "Muminovic", 3)
firstStudent.greeting()
secondStudent.greeting()
firstStudent.markAbsence()
firstStudent.markAbsence()
firstStudent.markAbsence()
firstStudent.markAbsence()
