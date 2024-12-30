import { useDispatch, useSelector, connect } from "react-redux";

import classes from "./Counter.module.css";
import { Component } from "react";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter);

//   const incrementHanlder = () => {
//     dispatch({
//       type: "increment",
//     });
//   };

//   const decrementHandler = () => {
//     dispatch({
//       type: "decrement",
//     });
//   };

//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div className={classes.buttons}>
//         <button onClick={incrementHanlder}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {
  incrementHanlder = () => {
    this.props.increment();
  };

  decrementHandler = () => {
    this.props.decrement();
  };

  toggleCounterHandler = () => {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div className={classes.buttons}>
          <button onClick={this.incrementHanlder.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);