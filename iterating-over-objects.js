/*
const someObject = { name: "Pollo", sound: "Pock pock", name: "test", sound: "test1" };

const keysOfSomeObject = Object.keys(someObject);

for (const key of keysOfSomeObject) {
  const value = someObject[key];

  console.log(key, value); // Will output "name", "Pollo" and "sound", "Pock pock"
}

const someObject1 = { name: "Pollo", sound: "Pock pock", name: "test", sound: "test1" };

const valuesOfSomeObject = Object.values(someObject1);

console.log(valuesOfSomeObject); // ["Pollo", "Pock Pock"]

for (const value of valuesOfSomeObject) {
  console.log(value); // Will output "Pollo" and "Pock pock"
}


const someObject2 = { name: "Pollo", sound: "Pock pock", name: "test", sound: "test1"};

for (const key in someObject2) {
  const value = someObject2[key];

  console.log(key, value); // Will output "name", "Pollo" and "sound", "Pock pock"
}
*/

const steel = {
  name: "1084",
  type: "Carbon Steel",
  composition: {
    iron: 98.45,
    carbon: 0.8,
    manganese: 0.6,
    phosphorus: 0.08,
    sulfur: 0.06,
  },
  forging_min_temp: 900,
  forging_max_temp: 1200,
};

/*
for (const key in steel.composition) {
  console.log(key);
};

const output = [];
const composition = steel.composition;
for (const key in composition) {
  output.push(key);
};
console.log(output);
*/

// const keysOfSteelComposition = Object.keys(steel.composition);
// console.log(Object.keys(steel.composition));

let sum = 0;
/*
let valuesOfSteelComposition = []
valuesOfSteelComposition = Object.values(steel.composition);

for (value of valuesOfSteelComposition) {
  sum = sum + value;
}

console.log(sum);*/

/*
for (const key in steel.composition) {
  sum += steel.composition[key];
}

console.log(sum);
*/

let sum = 0;

/*
const keysOfsteel = Object.keys(steel);
const valuesOfsteel = Object.values(steel);

for (key in keysOfsteel) {
  if (typeof valuesOfsteel[key] === 'number' || typeof valuesOfsteel[key] === 'string') {
    sum += 1;
  };
};
*/

for (const key in steel) {
  if (typeof steel[key] === 'string' || typeof steel[key] === 'number') {
      sum++;
    };
  };

console.log(sum);
