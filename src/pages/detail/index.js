import React, { Component } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { getMethod } from "../../service";
import './detail.scss';

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
      console.log(this.state.data);
    });
  }

  render() {
    return (
      <div className="my-5 detail">
        <Container>
          <Row>
            <Col xs={4}>
              <Image src={this.state.data.image_url} rounded width="300"/>
            </Col>
            <Col sx={8}>
              <h3>{this.state.data.name}</h3>
              <p>{this.state.data.description}</p>
              <div className="mt-5 text-price">฿{this.state.data.price}</div>
              <Button variant="secondary" className="mt-3">
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
