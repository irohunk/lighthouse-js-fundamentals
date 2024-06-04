const whereCanIPark = function (spots, vehicle) {
  // Code here!
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      const spot = spots[y][x];
      if (
        (vehicle === "motorcycle" && (spot === "R" ||
        spot === "S" || spot === "M"))
      ) {
        return [x, y];
      } else if (
        (vehicle === "small" && (spot === "R" || spot === "S"))
      ) {
        return [x, y];
      } else if (vehicle === "regular" && spot === "R") {
        return [x, y];
      } 
    }
  }
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular",
  ),
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small",
  ),
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle",
  ),
);




/* -------------------------------------------------- */

const multiDimensionalArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const arrsum = function (arrinp) {
  let sum = 0;
  for (let i = 0; i < arrinp.length; i++) {
    for (j = 0; j < arrinp[i].length; j++) {
      sum += arrinp[i][j];
    }
  }
  return sum;
};

console.log(arrsum(multiDimensionalArr));


/* -------------------------------------------------*/
const chooseStations = function (stations) {
  let goodStations = [];
  for (let i = 0; i < stations.length; i++) {
    if (
      stations[i][1] > 19 &&
      (stations[i][2] == "school" || stations[i][2] == "community centre")
    ) {
      goodStations.push(stations[i][0]);
    }
  }
  return goodStations;
};

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

console.log(chooseStations(stations));


// Create your pet
const pet = {
  // Add your object properties and/or methods here
  hunger: 0,
  energy: 0,
  playfulness: 0,
  feed: function () {
    pet.hunger++;
  },
  sleep: function () {
    pet.energy++;
  },
  play: function () {
    pet.playfulness++;
  },
  status: function () {
    console.log(
      "Pet Status - Hunger:" + 
      pet.hunger + 
      " Energy:" + 
      pet.energy + 
      " Playfulness:" + 
      pet.playfulness
    );
  },
};

pet.feed();
pet.sleep(); pet.sleep();
pet.play(); pet.play(); pet.play();
pet.status();


