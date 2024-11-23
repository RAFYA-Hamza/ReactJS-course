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
    -> Import & Export 
*/
