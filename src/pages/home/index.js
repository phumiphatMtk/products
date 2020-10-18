import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/actions";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home.scss";

class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="my-5">
        {/* <FontAwesomeIcon icon={["fas", "coffee"]} />
        <h1>Count test {this.props.counter}</h1>
        <Button variant="primary" onClick={() => this.props.setIncrement(5)}>
          +
        </Button>{" "}
        <Button variant="primary" onClick={() => this.props.setDecrement()}>
          -
        </Button>{" "} */}
        <Container>
          <div align="right" class="my-3">
            <Button variant="secondary" className="mr-3">
              <FontAwesomeIcon icon={["fas", "th-large"]} />
            </Button>
            <Button variant="secondary">
              <FontAwesomeIcon icon={["fas", "list-ul"]} />
            </Button>
          </div>
          <Row>
            <Col lg={3} className="mt-3">
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://freepik.cdnpk.net/img/logo-fb-en.png"
                />
                <Card.Body>
                  <Card.Title>
                    <h5>Garmin vivosport</h5>
                  </Card.Title>
                  <Card.Text>
                    Garmin vivosport สายรัดข้อมือเพื่อสุขภาพ สี 3 สี
                    เติมเต็มสไตล์
                    <div className="text-price mt-3">฿7,191.00</div>
                  </Card.Text>
                  <Button variant="secondary" block>
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className="mt-3">
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://freepik.cdnpk.net/img/logo-fb-en.png"
                />
                <Card.Body>
                  <Card.Title>
                    <h5>Garmin vivosport</h5>
                  </Card.Title>
                  <Card.Text>
                    Garmin vivosport สายรัดข้อมือเพื่อสุขภาพ สี 3 สี
                    เติมเต็มสไตล์
                    <div className="text-price mt-3">฿7,191.00</div>
                  </Card.Text>
                  <Button variant="secondary" block>
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className="mt-3">
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://freepik.cdnpk.net/img/logo-fb-en.png"
                />
                <Card.Body>
                  <Card.Title>
                    <h5>Garmin vivosport</h5>
                  </Card.Title>
                  <Card.Text>
                    Garmin vivosport สายรัดข้อมือเพื่อสุขภาพ สี 3 สี
                    เติมเต็มสไตล์
                    <div className="text-price mt-3">฿7,191.00</div>
                  </Card.Text>
                  <Button variant="secondary" block>
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className="mt-3">
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://freepik.cdnpk.net/img/logo-fb-en.png"
                />
                <Card.Body>
                  <Card.Title>
                    <h5>Garmin vivosport</h5>
                  </Card.Title>
                  <Card.Text>
                    Garmin vivosport สายรัดข้อมือเพื่อสุขภาพ สี 3 สี
                    เติมเต็มสไตล์
                    <div className="text-price mt-3">฿7,191.00</div>
                  </Card.Text>
                  <Button variant="secondary" block>
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className="mt-3">
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://freepik.cdnpk.net/img/logo-fb-en.png"
                />
                <Card.Body>
                  <Card.Title>
                    <h5>Garmin vivosport</h5>
                  </Card.Title>
                  <Card.Text>
                    Garmin vivosport สายรัดข้อมือเพื่อสุขภาพ สี 3 สี
                    เติมเต็มสไตล์
                    <div className="text-price mt-3">฿7,191.00</div>
                  </Card.Text>
                  <Button variant="secondary" block>
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
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
