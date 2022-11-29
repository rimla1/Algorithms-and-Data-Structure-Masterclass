let rankedFlexBonus = 0;
let rankedSoloBonus = 0;

const playGame = (typeOfTheGame, resultOfGame) => {
  console.log(typeOfTheGame, resultOfGame);
  if (typeOfTheGame === "flex") {
    if (resultOfGame === "victory") rankedFlexBonus++;
    if (resultOfGame === "defeat") rankedFlexBonus--;
  }
  if (typeOfTheGame === "solo/duo") {
    if (resultOfGame === "victory") rankedSoloBonus++;
    if (resultOfGame === "defeat") rankedSoloBonus--;
  }
  return rankedSoloBonus;
};

console.log(playGame("solo/duo", "defeat"));
console.log(playGame("solo/duo", "defeat"));
console.log(playGame("solo/duo", "victory"));
console.log(playGame("flex", "defeat"));
console.log(playGame("flex", "defeat"));
console.log(playGame("flex", "defeat"));
console.log(playGame("solo/duo", "victory"));
console.log(playGame("solo/duo", "victory"));
// typeOfTheGame
// Win/Lose
