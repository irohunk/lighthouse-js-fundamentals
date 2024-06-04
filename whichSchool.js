let bethanyAge = Math.round(Math.random() * 4) + 13;
let danyAge = Math.round(Math.random() * 12);
let mariaAge = Math.round(Math.random() * 52) + 18;

// let placeholder = false

// Replace the placeholders with your own if conditions for each person.

// Conditions for Bethany
// console.log("Bethany's age is: " + bethanyAge);

if (bethanyAge < 13) {
  console.log("Bethany should go to Elementary School");
} else if (bethanyAge < 19) {
  console.log("Bethany should go to High School");
} else {
  console.log("Bethany should go to Lighthouse Labs");
}

// Conditions for Dany
// console.log("Dany's age is: " + danyAge);

if (danyAge > 18) {
  console.log("Dany should go to Lighthouse Labs");
} else if (danyAge > 12) {
  console.log("Dany should go to High School");
} else {
  console.log("Dany should go to Elementary School");
}

// Conditions for Maria
// console.log("Maria's age is: " + mariaAge);

if (mariaAge < 19 && mariaAge > 12) {
  console.log("Maria should go to High School");
} else if (mariaAge > 18) {
  console.log("Maria should go to Lighthouse Labs");
} else {
  console.log("Maria should go to Elementary School");
}
