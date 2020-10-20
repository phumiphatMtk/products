import React, { Component } from "react";
import "./cart.scss";
import { connect } from "react-redux";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class index extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.setState({ data: this.props.cart });
  }

  deleItem = (index) => {
    const arr = this.state.data;
    arr.splice(index, 1);
    this.setState({ data: arr });
  };

  render() {
    return (
      <div className="cart my-5">
        <Container>
          <h3 align="center">CART DETAIL</h3>
          <div className="list mt-3">
            {this.props.cart.map((item, index) => (
              <Row className="box-products" key={index}>
                <Col>
                  <div className="box-img">
                    <Image src={item.image_url} rounded width="200" />
                  </div>
                </Col>
                <Col xs={4}>
                  <p className="content">{item.name}</p>
                </Col>
                <Col xs={4}>
                  <p className="content">x{item.num}</p>
                </Col>
                <Col align="right">
                  <div className="text-price">฿{item.price}</div>
                  <br />
                  <Button variant="danger" onClick={() => this.deleItem(index)}>
                    Delete
                  </Button>
                </Col>
              </Row>
            ))}
          </div>
          <div align="center" className="mt-5">
            <Link to="/">
              <Button variant="primary">Home page</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(index);
