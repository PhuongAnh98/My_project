import React, { Component } from 'react';
import { Badge, Button, ButtonDropdown, ButtonGroup, ButtonToolbar, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Progress, Row, Table, } from 'reactstrap';
import img from './images/2.jpg';
import Img from "./Img";
const images = './images/2.jpg';
class Dashboard extends Component {


  render() {
    return (
      <div className="container">
        <Row>
          <Col>
            <Card>
              <h3>original image</h3>
              <img style={{ width: "50%"}} src={img} />
              <Col>
                <Button>Pre</Button>
                <Button>Next</Button>
              </Col>
            </Card>

          </Col>
          <Col >
            <Card>
              <h3>original image</h3>
              <img style={{ width: "50%" }} src={img} />
              <Button>Pre</Button>
              <Button>Next</Button>
            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}

export default Dashboard;
