class Student {
    constructor(name, surname, year){
        this.name = name
        this.surname =surname
        this.grade = year
        this.absence = 0
        this.scores = []
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

    addScore(score){
        this.scores.push(score)
    }

    calculateAverage(){
        let scores = this.scores
        let sum = 0
        for(let i = 0; i < scores.length; i++){
            sum += scores[i]
        }
        let average = sum / scores.length
        return average
    }

}

const firstStudent = new Student("Almir", "Muminovic", 4)
const secondStudent = new Student("Rimla", "Muminovic", 3)

