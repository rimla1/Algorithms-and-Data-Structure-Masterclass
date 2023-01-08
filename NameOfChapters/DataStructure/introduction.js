class Student {
  constructor(firstName, secondName, year) {
    (this.firstName = firstName),
      (this.secondName = secondName),
      (this.grade = year),
      (this.absence = 0),
      (this.scores = []);
  }
  fullName() {
    console.log(`My name is ${this.firstName} ${this.secondName}`);
    return `My name is ${this.firstName} ${this.secondName}`;
  }
  lateToClass() {
    this.absence++;
  }
  report() {
    console.log(
      `Absence of student ${this.firstName} ${this.secondName} is: ${this.absence}`
    );
  }
  addScore(score) {
    this.scores.push(score);
    console.log(this.scores);
    return this.scores;
  }
  average() {
    let sum = this.scores.reduce((a, b) => a + b);
    let average = sum / this.scores.length;
    console.log(average);
    return average;
  }

  static enrollStudents() {
    console.log("Enrolling students");
    return "ENROLLING STUDENTS";
  }
}

const student1 = new Student("Almir", "Muminovic", 4);
const student2 = new Student("Amel", "Muminovic", 4);

student1.addScore(95);
student1.addScore(75);
student1.addScore(100);
student1.average();
