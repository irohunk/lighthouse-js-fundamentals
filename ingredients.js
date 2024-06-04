const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// Problem #1: Write a while loop that prints out the contents of ingredients.
let i = 0;

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Problem #2: Write a for loop that prints out the contents of ingredients:
for (ingredient of ingredients) {
  console.log(ingredient);
}

// Problem #3: Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let j = ingredients.length - 1; j >= 0; j--) {
  console.log(ingredients[j]);
}
