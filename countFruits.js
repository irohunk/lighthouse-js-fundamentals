const fruits = {
  apple: 42,
  banana: 20,
  cranberry: 13,
};

let sum = 0;

for (const value of Object.values(fruits)) {
  sum += value;
};
console.log(sum);
