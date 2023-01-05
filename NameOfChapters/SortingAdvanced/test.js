let arrg = [10, 20];
let num = 21;

if (num > arrg[2]) {
  console.log("lol");
}

if (!(num > arrg[2])) {
  console.log("lolz");
}

arrg.push(undefined);
console.log(arrg);
console.log(arrg[2]);
