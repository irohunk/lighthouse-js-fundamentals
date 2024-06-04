/**
 * Add four (4) numbers.
 */
const addFourNumbers = function(num1, num2, num3, num4) {

    // Code your solution here.

    let sum; // A variable for us to store the total in.

    // Use the addition operator to add up our numbers.
    sum = num1 + num2 + num3 + num4;

    // Return the total we calculated.
    return sum;

};

console.log(addFourNumbers(1, 1, 1, 1)); // Expected: 4
console.log(addFourNumbers(0, 0, 0, 0)); // Expected: 0
console.log(addFourNumbers(1, 2, 3, 4)); // Expected: 10
console.log(addFourNumbers(100, -12, 36, -99)); // Expected: 25




// Kata 1 - Sum the Largest Numbers
const sumLargestNumbers = function (data) {
  // Put your solution here
  data.sort(function (a, b) {
    return a - b;
  });
  let sum = data[data.length - 1] + data[data.length - 2];
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));



// Kata 2 - Conditional Sums
const conditionalSum = function (values, condition) {
  // Your code here
  let sum = 0;
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        sum += values[i];
      }
    }
  } else if (condition === "odd") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) {
        sum += values[i];
      }
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));


// Kata 3 - Vowels
const numberOfVowels = function (data) {
  // Put your solution here
  let count = 0;
  const word = [];
  for (let i = 0; i < data.length; i++) {
    word.push(data.charAt(i));
  }
  for (let j = 0; j < word.length; j++) {
    if (
      word[j] === "a" ||
      word[j] === "e" ||
      word[j] === "i" ||
      word[j] === "o" ||
      word[j] === "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));


// Kata 4 - Instructor's name
const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let longestName = "";
  for (let i = 0; i < instructors.length; i++) {
    if (
      longestName === "" ||
      instructors[i].name.length > longestName.name.length
    ) {
      longestName = instructors[i];
    }
  }
  return longestName;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ]),
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ]),
);



// Kata 5 - Percent Encoded String
const urlEncode = function (text) {
  // Put your solution here
  text = text.trim();
  const textArray = [];
  for (let i = 0; i < text.length; i++) {
    textArray.push(text.charAt(i));
  }
  for (let j = 0; j < textArray.length; j++) {
    if (textArray[j] == " ") {
      textArray[j] = "%20";
    }
  }
  let finalSentence = textArray.join("");
  return finalSentence;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));



// Kata 6 - Kata 6 - In the Air Tonight
const checkAir = function (samples, threshold) {
  // Code here!
  let dirtyCount = 0;
  for (let sample of samples) {
    if (sample === "dirty") {
      dirtyCount++;
    }
  }
  if (dirtyCount / samples.length >= threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3,
  ),
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(
    ["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"],
    0.9,
  ),
);


// Kata 7 - We're Rooting For You!
const judgeVegetables = function (vegetables, metric) {
  let max = 0;
  let name = "";
  for (const veggie of vegetables) {
    if (veggie[metric] > max) {
      max = veggie[metric];
      name = veggie.submitter;
    }
  }
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

console.log(judgeVegetables(vegetables, 'redness'));
console.log(judgeVegetables(vegetables, 'plumpness'));