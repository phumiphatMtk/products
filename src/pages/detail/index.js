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
      this.setState({ data });
    });
  }

  // gotoHome() {
  //   window.location.href = "/";
  // }

  render() {
    return (
      <div className="my-5 detail">
        <Container>
          <Row>
            <Col xs={4}>
              <Image src={this.state.data.image_url} rounded width="300" />
            </Col>
            <Col sx={8}>
              <h3>{this.state.data.name}</h3>
              <p>{this.state.data.description}</p>
              <div className="mt-5 text-price">฿{this.state.data.price}</div>
              <div className="mt-3 add-cart">
                <div className="d-flex justify-content-start align-items-center">
                  <div>
                    <Button variant="primary">-</Button>
                  </div>
                  <div className="num-add">1</div>
                  <div>
                    <Button variant="primary">+</Button>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Button variant="secondary" className="mr-3">
                  Add to Cart
                </Button>
                <Link to="/">
                  <Button variant="primary">
                    Back to product list
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
