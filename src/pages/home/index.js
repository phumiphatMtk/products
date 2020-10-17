import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/actions";

class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Count test {this.props.counter}</h1>
        <button onClick={() => this.props.setIncrement(5)}>+</button>
        <button onClick={() => this.props.setDecrement()}>-</button>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    setIncrement: (nr) => {
      dispatch(increment(nr));
    },
    setDecrement: (nr) => {
      dispatch(decrement(nr));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(index);
