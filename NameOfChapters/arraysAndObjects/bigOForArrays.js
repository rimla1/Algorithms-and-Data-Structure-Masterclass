let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];

names.push("Almir"); // O(1) - last index in array
names.push("Amel"); // O(n) - First index in array has to rewrite other indexesx
console.log(names);
