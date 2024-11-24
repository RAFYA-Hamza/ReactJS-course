/*
    -> Import & Export 
*/

// To import differet variable using import, there is a different methods.

// import { apiKey, password as code } from "./util.js";

// Imported like an object
import * as util from "./util.js";

console.log(util.apiKey);
/*---------------------------------------------------------------------------*/

/*
    -> Revisiting Variables, Values & operators
*/

// -> In javascript not allowed to name the variable using lowercase, -, some specific caracters
// -> The best practice it's to use camelCase

const userMessage = "Hello world!";
let userName = "Hamza RAFYA";

console.log(userMessage);
console.log(userName);

console.log(10 === 10);
console.log(10 * 10);

function greetUser(userName, userMessage) {
  console.log("User Name:", userName);
  console.log("Message:", userMessage);

  return "Hi! I'm " + userName + ". " + userMessage;
}

console.log(greetUser(userName, userMessage));

// -> We can also declare an Arrow function

export default (userName, userMessage) => {
  console.log("Hello!");

  return userName + userMessage;
};

// -> We can combine differents types of variables in one variable using the objects
// -> Using Objects can create a differents variables using key-value

const user = {
  name: "Hamza",
  age: 25,
  greet() {
    console.log("Hello!");
    console.log(this.name);
  },
};

console.log(user.age);
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello! under class");
  }
}

const user1 = new User("Hamza RAFYA", 25);

console.log(user1);
/*---------------------------------------------------------------------------*/

/*
    -> Arrays & Arrays Methods
*/

const hobbies = ["Sports", "Cooking", "Reading"];

console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === "Working");
console.log(index);

// -> Transform array to object or change own types
const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log("Edited Hobbies", editedHobbies);

// -> Destructring arrays to variables
const [firstName, lastName] = ["Hamza", "RAFYA"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

console.log("Destructing array");
console.log(firstName);
console.log(lastName);

console.log("Destructing object");
const { name: dName, age } = user;
console.log(dName);
console.log(age);

// -> Spread operator, it mean pull out arrays into one array
const newHobbies = ["Reading"];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const extendedUser = {
  isAdmin: true,
  ...user,
};
console.log(extendedUser);
/*---------------------------------------------------------------------------*/

/*
    -> Control Structers
*/

const password = prompt("Your password");

if (password === "Hello") {
  console.log("Hello works");
} else if (password === "hello") {
  console.log("hello works");
} else {
  console.log("Access not granted.");
}

for (const hobby of hobbies) {
  console.log(hobby);
}

function handleTimeout() {
  console.log("Timed out!");
}

const handleTimeout2 = () => {
  console.log("Timed out ... again!");
};

setTimeout(handleTimeout, 1000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log("More timing out...");
}, 5000);

function greeter(greeterFn) {
  greeterFn();
}

greeter(() => console.log("Passed function"));
