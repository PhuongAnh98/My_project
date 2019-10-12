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

              <img style={{ width: '100%', height: 'auto' }} src={img} />
              <div>
                <Button color="primary">Đẹp</Button>
                <Button color="primary">Xấu</Button>
                <Button color="primary">Bình thường</Button>
              </div>
              <div>
                <Button >Prev</Button>
                <Button >Next</Button>
              </div>
            </Card>

          </Col>
          <Col >
            <Card>  
              <img style={{ width: "50%", height: 'auto' }} src={img} />
              <div  class="container" >
                <Button color="primary">1</Button>
                <Button color="primary">2</Button>
                <Button color="primary">3</Button>
                <Button color="primary">4</Button>
                <Button color="primary">5</Button>
                <Button color="primary">Loại</Button>

              </div>
              <div>
                <Button>Prev</Button>
                <Button>Next</Button>
              </div>

            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}

export default Dashboard;
