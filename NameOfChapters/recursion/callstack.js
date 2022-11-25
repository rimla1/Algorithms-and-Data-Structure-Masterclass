function takeShower() {
  console.log("1. Showering!");
  return "Showering!";
}

function eatBreakfast() {
  let meal = cookFood();
  console.log("3. Eating: ", meal);
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  console.log(
    "2. items that we are eating: ",
    items[Math.floor(Math.random() * items.length)]
  );
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("4. Ok ready to go to work!");
}

wakeUp();
