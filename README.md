# React.js Learning Journey 

## Introduction
Welcome to my React.js learning journey! 🚀</br>
This repository is a collection of all the concepts, examples, and exercises I have learned while exploring React.js. It is intended to track my progress, organize my knowledge, and serve as a reference for future projects.

Feel free to explore, contribute, or suggest improvements!

---

## Overview
This repository is divided into sections, each corresponding to a major concept or topic in React.js. For each section, you will find:

- A summary of the topic </br>
- Key points and takeaways </br>
- Code examples and exercises </br>

---

## Sections
### **02. Javascript Refresher**
**What I Learned:** 

- *Control Structures and Loops*:</br>
    Learn how to implement decision-making and iteration in JavaScript using control structures like `if`, `else`, and loops.

- *Arrays and Array Methods*:</br>
    Explore JavaScript arrays and methods like `.map()`, `.filter()`, and `.reduce()` for data manipulation.
  
- *Variables, Objects, and Classes*:</br>
   Discover the different types of variables (`var`, `let`, `const`) and the concepts of objects and classes for object-oriented programming.

- *Import and Export in JavaScript*:</br>
   Learn how to organize and modularize your JavaScript code using `import` and `export`.

Folder: `02-javascript-refresher`</br>

---

### **03. React Essentials: Components, JSX, Props, State & More**
**What I Learned:**

- *Introduction to Components*:
    * Components are the building blocks of React applications. They can be created using functions or classes.
   ```JSX
      function Welcome() {
      return <h1>Hello, World!</h1>;
      }
  
      export default Welcome;
     ```
   * JSX allows combining HTML and JavaScript seamlessly.
    ```JSX
    const name = "John";
    const element = <h1>Welcome, {name}!</h1>;
    ```

- *Dynamic Content*:
    * React builds a **Component Tree** to manage updates efficiently.
    * Use dynamic values in JSX:
    ```JSX
    const userName = "Alice";
    const userAge = 25;
    
    function UserProfile() {
      return <p>{userName} is {userAge} years old.</p>;
    }
    ```
    * Dynamically set attributes:
     ```JSX
     const imageUrl = "profile.jpg";
     <img src={imageUrl} alt="Profile Picture" />;
     ```
- *Reusable Components with Props*:
    * Props enable passing data to components, making them reusable.
    ```JSX
    function Button(props) {
      return <button>{props.label}</button>;
    }
    
    // Usage:
    <Button label="Click Me" />;
    ```

    * Alternative prop syntaxes using destructuring:
    ```JSX
    function Button({ label }) {
      return <button>{label}</button>;
    }
    ```

- *Component Composition*:
    * Use the children prop to wrap components around other JSX elements.
    ```JSX
    function Card({ children }) {
      return <div className="card">{children}</div>;
    }
    
    // Usage:
    <Card>
      <h2>Title</h2>
      <p>Content inside the card.</p>
    </Card>;
     ```

- *Event Handling*:
    * Pass functions as `props` to handle events:
    ```JSX
    function MyButton({ onClick }) {
      return <button onClick={onClick}>Click Me</button>;
    }
    
    // Usage:
    <MyButton onClick={() => alert("Button clicked!")} />;
    ```
    * Pass custom arguments:
    ```JSX
    function greet(name) {
      alert(`Hello, ${name}!`);
    }
    
    <MyButton onClick={() => greet("Alice")} />;
    ```
- *State Management*:
    * Manage state with the `useState` hook:
    ```JSX
    import React, { useState } from "react";
    
    function Counter() {
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }
    ```
    * Conditional rendering:
    ```JSX
    function Message({ loggedIn }) {
      return loggedIn ? <p>Welcome Back!</p> : <p>Please Log In</p>;
    }
    ```
- *Styling*:
    * Combine CSS classes and dynamic styling:
    ```JSX
    function Button({ isPrimary }) {
      return (
        <button className={isPrimary ? "btn-primary" : "btn-secondary"}>
          Click Me
        </button>
      );
    }
    ```
- *Lists & Dynamic Rendering*:
    * Render lists dynamically using `.map()`:
    ```JSX
    const items = ["Apple", "Banana", "Cherry"];
    
    function ItemList() {
      return (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    ```
- *Component Optimization*:
    * Use Fragments to avoid extra DOM elements:
    ```JSX
    function List() {
      return (
        <>
          <h1>Header</h1>
          <p>Paragraph content</p>
        </>
      );
    }
    ```
    * Split components by feature or state for better organization.


- *Advanced Props Handling*:
    * Forward props to inner elements:
    ```JSX
    function Input(props) {
      return <input {...props} />;
    }
    
    // Usage:
    <Input type="text" placeholder="Enter your name" />;
    ```
    * Use default props:
    ```JSX
    function Button({ label = "Default" }) {
      return <button>{label}</button>;
    }
    
    // Usage:
    <Button />; // Outputs: Default
    ```

    Folder: `03-react-essentials`</br>






