// How Many Hundreds?

const howManyHundreds = function (num) {
  return Math.floor(num / 100);
};

console.log(howManyHundreds(1000), "===", 10);
console.log(howManyHundreds(894), "===", 8);
console.log(howManyHundreds(520), "===", 5);
console.log(howManyHundreds(99), "===", 0);
console.log(howManyHundreds(0), "===", 0);


// LoopyLighthouse BattyBeacon
const loopyLighthouse = function (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);


// Looping Range
const range = function (start, end, step) {
  if (
    Number.isNaN(start) ||
    Number.isNaN(end) ||
    Number.isNaN(step) ||
    start > end ||
    step <= 0
  ) {
    return [];
  }
  let myArray = [];
  for (let i = start; i <= end; i += step) {
    myArray.push(i);
  }
  return myArray;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 3, 4));


// Array concat
const concat = function (array1, array2) {
  return array1.concat(array2);
};

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);


// Array merge
const merge = function (array1, array2) {
  return array1.concat(array2).sort();
};

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
console.log(merge([7, 8, 9, 1, 2, 6], []), "=?", [1, 2, 6, 7, 8, 9]);


// Trash to Treasure
const smartGarbage = function (trash, bins) {
  // Your code in here ...
  bins[trash] += 1;
  return(bins);
};

console.log(smartGarbage("recycling", { waste: 10, recycling: 10, compost: 10 }));


// Rooting for You



// Trying another method
const judgeVegetable = function (vegetables, metric) {
  /* let max = 0;
  let name = "";
  for (const veggie of vegetables) {
    if (veggie[metric] > max) {
      max = veggie[metric];
      name = veggie.submitter;
    }
  }*/
  let max = Math.max(vegetables.map(o => o.metric), 0);
  console.log(max);
  let name = vegetables[max].submitter;
  return name;
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "plumpness";

console.log(judgeVegetable(vegetables, metric));

// vegetables.indexOf(