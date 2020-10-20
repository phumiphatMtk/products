import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { grid, list } from "../../redux/actions";
import { Button, Container, Card, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home.scss";
import { getMethod } from "../../service";

class index extends Component {
  state = {
    products: [],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    const url = "https://cc-mock-api.herokuapp.com/product";
    getMethod(url).then((response) => {
      const products = response.data;
      this.setState({ products });
    });
  }

  gotoDetail = (id) => {
    window.location.href = "/" + id;
  };

  render() {
    return (
      <div className="my-5">
        <Container>
          <div className="box-cart">
            <Button variant="primary" className="mr-3">
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
            </Button>
            {this.props.cart.length > 0 ? (
              <span className="num-cart">{this.props.cart.length}</span>
            ) : (
              ""
            )}
          </div>
          <div align="right" className="my-3">
            <Button
              variant={this.props.view ? "secondary" : "default"}
              className="mr-3"
              onClick={() => this.props.grid()}
            >
              <FontAwesomeIcon icon={["fas", "th-large"]} />
            </Button>
            <Button
              variant={this.props.view ? "default" : "secondary"}
              onClick={() => this.props.list()}
            >
              <FontAwesomeIcon icon={["fas", "list-ul"]} />
            </Button>
          </div>
          <hr />
          {this.props.view ? (
            <div className="grid">
              <Row>
                {this.state.products.map((item, index) => (
                  <Col lg={3} className="mt-3" key={index}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={item.image_url}
                        width="200"
                        height="200"
                      />
                      <Card.Body>
                        <Card.Title>
                          <h5>{item.name.substring(0, 15) + "..."}</h5>
                        </Card.Title>
                        <Card.Text>
                          {item.description.substring(0, 100) + "..."}
                        </Card.Text>
                        <Card.Text className="text-price mt-3">
                          ฿{item.price}
                        </Card.Text>
                        <Link to={`/` + item._id}>
                          <Button variant="secondary" block>
                            Detail
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ) : (
            <div className="list">
              {this.state.products.map((item, index) => (
                <Row className="box-products" key={index}>
                  <Col>
                    <div className="box-img">
                      <Image src={item.image_url} rounded width="200" />
                    </div>
                  </Col>
                  <Col xs={8}>
                    <h5 className="title">{item.name}</h5>
                    <p className="content">{item.description}</p>
                  </Col>
                  <Col align="right">
                    <div className="text-price">฿{item.price}</div>
                    <br />
                    <Link to={`/` + item._id}>
                      <Button variant="secondary">Detail</Button>
                    </Link>
                  </Col>
                </Row>
              ))}
            </div>
          )}
        </Container>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    counter: state.counter,
    view: state.view,
    cart: state.cart,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    grid: () => {
      dispatch(grid());
    },
    list: () => {
      dispatch(list());
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(index);
