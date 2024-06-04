// Question #1 Starter code
/* Create an empty object called someone, add properties for name and age after the object is created, then show the resulting object.*/
let someone = {};
someone = {
  name: "RK",
  age: "40"
};
console.log(someone);


// Question #2 Starter code
/* Create an object called gamer with properties for name, age, and highscore. Update the highscore property after to 9001, then show the resulting object.*/
let gamer = {
  name: "RK",
  age: 40,
  highscore: 9000,
};

gamer.highscore = 9001;
console.log(gamer);



// Question #3 Starter code
/* Create an object called car with properties for make, model, and year. Remove the key year from the object, then show the resulting object.*/
let car = {
  make: "Subaru",
  model: "Crosstrek",
  year: 2024,
};

delete car.year;

console.log(car);


// Question #4 Starter code
/* Print the value of the size property of the following object using square bracket notation and the variable called key at your disposal. */

const key = "size";

const coffee = {
  type: "latte",
  size: 400,
  cupType: "paper",
};

console.log(coffee[key]);


// Question #5 Starter code
/* Print the values of the mug object using a loop and the array called keys. */

const keys = ["color", "material"];

const mug = {
  size: 500,
  color: "red",
  material: "porcelain",
};

for (key of keys) {
  console.log(mug[key]);
}
