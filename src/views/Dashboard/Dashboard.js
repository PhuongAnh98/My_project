import React, { Component } from 'react';
import { Badge, Button, ButtonDropdown, ButtonGroup, ButtonToolbar, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Progress, Row, Table, } from 'reactstrap';
import img from './images/2.jpg';

const images = './images/2.jpg';
const myhouse = "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg";
const myimg = [
  {
    index: '00',
    picture: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg",
    subitem: [{
      index: "10",
      subpicture: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg",
    },
    {
      index:"11",
      subpicture:"https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg",
    }
    ]

  },
  {
    index:"01",
    picture:"https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg",
    subitem:[
      {
        index:"12",
        subpicture: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg",
      },
      {
        index:"13",
        subpicture:"https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg",
      }
    ]
  }
]
class Dashboard extends Component {
constructor(props){
  super(props)
  this.state = {
    myPic : myimg
  }
  console.log(this.state.myPic)
}

  render() {
    return (
      <div className="container">
        <Row>

          <Col>
            <div>
              <img style={{ width: '100%', height: 'auto' }} src={myhouse} />
              <div className="container" >
                <Button color="primary">Đẹp</Button>
                <Button color="primary">Xấu</Button>
                <Button color="primary">Bình thường</Button>
              </div>
              <div className="container" >
                <Button >Prev</Button>
                <Button >Next</Button>
              </div>
            </div>

          </Col>
          <Col >
            <div>
              <img style={{ width: "50%", height: 'auto' }} src={img} />
              <div className="container" >
                <Button color="primary">1</Button>
                <Button color="primary">2</Button>
                <Button color="primary">3</Button>
                <Button color="primary">4</Button>
                <Button color="primary">5</Button>
                <Button color="primary">Loại</Button>

              </div>
              <div className="container" >
                <Button>Prev</Button>
                <Button>Next</Button>
              </div>

            </div>
          </Col>

        </Row>

      </div>
    )
  }
}

export default Dashboard;
