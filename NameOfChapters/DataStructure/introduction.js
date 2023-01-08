class Student {
  constructor(firstName, secondName, year) {
    (this.firstName = firstName),
      (this.secondName = secondName),
      (this.grade = year),
      (this.absence = 0);
  }
  fullName() {
    console.log(`My name is ${this.firstName} ${this.secondName}`);
  }
  lateToClass() {
    this.absence++;
  }
  report() {
    console.log(
      `Absence of student ${this.firstName} ${this.secondName} is: ${this.absence}`
    );
  }
}

const student1 = new Student("Almir", "Muminovic", 4);
const student2 = new Student("Amel", "Muminovic", 4);

student1.report();
student1.lateToClass();
student1.lateToClass();
student1.report();
