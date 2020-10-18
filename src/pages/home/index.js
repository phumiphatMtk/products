import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/actions";
import { Button } from "react-bootstrap";

class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Count test {this.props.counter}</h1>
        <Button variant="primary" onClick={() => this.props.setIncrement(5)}>
          +
        </Button>{" "}
        <Button variant="primary" onClick={() => this.props.setDecrement()}>
          -
        </Button>{" "}
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
