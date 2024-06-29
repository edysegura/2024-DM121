const personName = "Edy Segura";
console.log(`Hello ${personName}, welcome to JS!`);

const numberA = 11;
const numberB = 31;

const total = numberA + numberB;
console.log("The total is: " + total);

console.log("The numberA variable is: ", typeof numberA);

// prettier-ignore
const nameList = [
  'Grimmjow',
  'Luffy',
  'Goku',
  'Saitama'
]

function print(text) {
  console.log(text);
}

const xyz = print;
console.log("😁", xyz.name);

nameList.forEach(print);
