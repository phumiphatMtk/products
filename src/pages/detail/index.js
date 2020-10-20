import React, { Component } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { getMethod } from "../../service";
import { Link } from "react-router-dom";
import "./detail.scss";

export default class index extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    this.setState({ id: this.props.match.params.id });
    this.getDetail(this.props.match.params.id);
  }

  getDetail(id) {
    const url = "https://cc-mock-api.herokuapp.com/product/" + id;
    getMethod(url).then((response) => {
      const data = response.data;
      data.num = 1;
      this.setState({ data });
    });
  }

  increment = () => {
    const data = this.state.data;
    data.num = data.num + 1;
    this.setState({ data });
  };

  decrement = () => {
    const data = this.state.data;
    if (data.num >= 1) {
      data.num = data.num - 1;
      this.setState({ data });
    } else {
      data.num = data.num;
      this.setState({ data });
    }
  };

  render() {
    const props = this.state.data;
    return (
      <div className="my-5 detail">
        <Container>
          <Row>
            <Col xs={4}>
              <Image src={props.image_url} rounded width="300" />
            </Col>
            <Col sx={8}>
              <h3>{props.name}</h3>
              <p>{props.description}</p>
              <div className="mt-5 text-price">฿{props.price}</div>
              <div className="mt-3 add-cart">
                <div className="d-flex justify-content-start align-items-center">
                  <div>
                    <Button variant="primary" onClick={this.decrement}>
                      -
                    </Button>
                  </div>
                  <div className="num-add">{props.num}</div>
                  <div>
                    <Button variant="primary" onClick={this.increment}>
                      +
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Button variant="secondary" className="mr-3">
                  Add to Cart
                </Button>
                <Link to="/">
                  <Button variant="primary">Back to product list</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
