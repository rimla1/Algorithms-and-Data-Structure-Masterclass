class Student {
  constructor(firstName, secondName, year) {
    (this.firstName = firstName),
      (this.secondName = secondName),
      (this.grade = year);
  }
}

const student1 = new Student("Almir", "Muminovic", 4);
const student2 = new Student("Amel", "Muminovic", 4);

console.log(student1.grade);
console.log(student2.firstName);
