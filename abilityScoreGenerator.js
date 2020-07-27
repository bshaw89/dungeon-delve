let fighter = {
  hp: 10,
  atk: 3,
  ac: 15,
  dam: Math.floor(Math.random() * Math.floor(6) + 1)
}

let skeleton = {
  hp: 6,
  atk: 2,
  ac: 12,
  dam: Math.floor(Math.random() * Math.floor(6) + 1)
}

// const attack = (foe) => {
//   console.log(`Damage: ${fighter.dam}`);
//   console.log(`Damage: ${fighter.dam}`);
//   // while (foe.hp > 0) {

//   //   // foe.hp - fighter.dam;
//   //   foe.hp = foe.hp - fighter.dam;
//   //   console.log(foe.hp);
//   // } 
//   // return 'Foe defeated!';
// }

const rollScore = () => {
  let rolls = [];
  let roll1 = Math.floor(Math.random() * Math.floor(6) + 1);
  let roll2 = Math.floor(Math.random() * Math.floor(6) + 1);
  let roll3 = Math.floor(Math.random() * Math.floor(6) + 1);
  let roll4 = Math.floor(Math.random() * Math.floor(6) + 1);
  rolls.push(roll1);
  rolls.push(roll2);
  rolls.push(roll3);
  rolls.push(roll4);
  let sortedRolls = rolls.sort();
  sortedRolls.shift();
  
  const sum = rolls.reduce(function(a, b) {
    return a + b;
  }, 0);

  return sum;
}

const abilityScores = () => {
  let scoresTotal = []
  let num = 1;
  
  while (num <= 6) {
    scoresTotal.push(rollScore());
    num++;
  }
  return scoresTotal;
}

console.log(abilityScores());