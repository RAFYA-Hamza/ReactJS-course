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
### **1. Javascript Refresher**
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

### **2. React Essentials: Components, JSX, Props, State & More**
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

    ---

### **3. Styling React components**
**What I Learned:**

- *Splitting CSS Code Across Multiple Files*:
    * Organized styling by separating CSS into multiple files for scalability and better readability.
    ```CSS
       /* Header.css */
    .header {
      background-color: #f4f4f4;
      padding: 1rem;
      text-align: center;
    }

    ```
    ```JSX
    import './Header.css';

    function Header() {
      return <div className="header">Welcome to My App</div>;
    }
    ```
- *Styling React Apps with Inline Styles*:
    * Quick and dynamic but harder to maintain for large projects.
    ```JSX
    const buttonStyle = {
      backgroundColor: "blue",
      color: "white",
      padding: "0.5rem 1rem",
    };
    
    function Button() {
      return <button style={buttonStyle}>Click Me</button>;
    }
    ```

- *Dynamic & Conditional Styling with CSS Files & CSS Classes*:
    * Changing styles dynamically based on props or state.
    ```JSX
    function Button({ isPrimary }) {
      return (
        <button className={isPrimary ? "btn-primary" : "btn-secondary"}>
          Click Me
        </button>
      );
    }
    ```

- *Scoping CSS Rules with CSS Modules*:
    * CSS Modules ensure styles are scoped to components.
    ```CSS
        /* Button.module.css */
    .btn {
      background-color: #007bff;
      color: white;
      padding: 0.5rem 1rem;
    }

    ```
    ```JSX
    import styles from './Button.module.css';
    
    function Button() {
      return <button className={styles.btn}>Click Me</button>;
    }
    ```
- *Introducing "Styled Components" (Third-party Package)*:
    * Write CSS-in-JS for component-scoped styling.
    ```JSX
    import styled from "styled-components";
    
    const Button = styled.button`
      background-color: blue;
      color: white;
      padding: 0.5rem 1rem;
    `;
    
    function App() {
      return <Button>Click Me</Button>;
    }
    ```

- *Introducing Tailwind CSS For React App Styling*:
    * Utility-first framework that simplifies styling with pre-defined classes.
    ```JSX
    function Button() {
      return <button className="bg-blue-500 text-white py-2 px-4">Click Me</button>;
    }
    ```
- *Tailwind: Media Queries & Pseudo Selectors*:
    * Responsive design with utility classes.
    ```JSX
    <button className="bg-blue-500 hover:bg-blue-700 sm:bg-green-500">
      Click Me
    </button>
    ```


 Folder: `06-styling-react-components`</br>

    ---


### **4. Working with Refs & Portals**
**What I Learned:**




- *Accessing DOM Elements with Refs*:
    * Refs are used to directly access and manipulate DOM elements.
    * Use `React.createRef()` or the `useRef` hook in functional components.
    * Ideal for focusing inputs, measuring DOM nodes, or triggering animations.

    ```JSX
    import React, { useRef } from "react";
    
    function FocusInput() {
      const inputRef = useRef();
    
      const handleFocus = () => {
        inputRef.current.focus(); // Directly access the input DOM element
      };
    
      return (
        <div>
          <input ref={inputRef} type="text" placeholder="Click the button to focus me!" />
          <button onClick={handleFocus}>Focus Input</button>
        </div>
      );
    }
    
    export default FocusInput;
    ```
    
- *Managing Values with Refs*:
    * Refs can store mutable values that persist across renders without causing re-renders.
    * Useful for managing data like timers or previous values.
    ```JSX
    import React, { useRef, useState } from "react";
    
    function Timer() {
      const timerRef = useRef(null);
      const [count, setCount] = useState(0);
    
      const startTimer = () => {
        if (!timerRef.current) {
          timerRef.current = setInterval(() => setCount((prev) => prev + 1), 1000);
        }
      };
    
      const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
      };
    
      return (
        <div>
          <h1>Timer: {count}</h1>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
        </div>
      );
    }
    
    export default Timer;

    ```

- *Exposing API Functions from Components*:
    * `useImperativeHandle` (used with `forwardRef`) allows you to expose specific methods or properties of a component to parent components.
    * Helps create controlled APIs while keeping the internal logic encapsulated.
    ```JSX
    import React, { useRef, forwardRef, useImperativeHandle } from "react";

    const CustomInput = forwardRef((props, ref) => {
      const inputRef = useRef();
    
      useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        },
        clear: () => {
          inputRef.current.value = "";
        },
      }));
    
      return <input ref={inputRef} type="text" placeholder="Controlled input" />;
    });
    
    function App() {
      const inputRef = useRef();
    
      return (
        <div>
          <CustomInput ref={inputRef} />
          <button onClick={() => inputRef.current.focus()}>Focus</button>
          <button onClick={() => inputRef.current.clear()}>Clear</button>
        </div>
      );
    }
    
    export default App;

    ```

- *Detaching DOM Rendering from JSX Structure with Portals*:
    * Portals allow you to render components outside of the parent DOM hierarchy.
    * Useful for modals, tooltips, or any UI elements that need to escape CSS or DOM constraints.
    ```JSX
    import React from "react";
    import ReactDOM from "react-dom";
    
    function Modal({ isOpen, onClose, children }) {
      if (!isOpen) return null;
    
      return ReactDOM.createPortal(
        <div style={modalStyles}>
          <div style={contentStyles}>
            {children}
            <button onClick={onClose}>Close</button>
          </div>
        </div>,
        document.getElementById("modal-root")
      );
    }
    
    const modalStyles = {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    
    const contentStyles = {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "5px",
    };
    
    export default function App() {
      const [isOpen, setIsOpen] = React.useState(false);
    
      return (
        <div>
          <h1>React Portals Example</h1>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <h2>Modal Content</h2>
          </Modal>
        </div>
      );
    }

    ```
    HTML Setup for Portals:
    ```html
    html
    Copier le code
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Portal</title>
      </head>
      <body>
        <div id="root"></div>
        <div id="modal-root"></div>
      </body>
    </html>
    ```

 Folder: `07-working-with-refs-portals`</br>

    ---






