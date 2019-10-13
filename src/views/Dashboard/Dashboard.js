import React, { Component } from 'react';
import { Button, Col, Row, } from 'reactstrap';
//import img from './images/2.jpg';
import img from './image/img';

const myhouse = "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg";
// const myimg = [
//   {
//     index: 1,
//     picture: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg",
//     subitem: [{
//       subindex: 1,
//       subpicture: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg",
//     },
//     {
//       subindex: 2,
//       subpicture: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg",
//     }
//     ]

//   },
//   {
//     index: 2,
//     picture: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg",
//     subitem: [
//       {
//         subindex: 1,
//         subpicture: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg",
//       },
//       {
//         subindex: 2,
//         subpicture: "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg",
//       }
//     ]
//   }
// ]
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myPic: img.images
    }
    console.log(this.state.myPic)
  }
  prevImg() {
    console.log("prev")
  }
  nextImg() {
    console.log("next")
  }
  render() {
    return (
      <div className="container">
        <Row>
          <Col>
            <img style={{ width: '100%', height: 'auto' }} src={myhouse} />
            <div className="container" >
              <Button color="primary">Đẹp</Button>
              <Button color="primary">Xấu</Button>
              <Button color="primary">Bình thường</Button>
            </div>
            <div className="container" >
              <Button className="previous" onClick={() => this.prevImg()}>&laquo;Prev</Button>
              <Button className="next" onClick={() => this.nextImg()} >Next  &raquo;</Button>
            </div>

          </Col>

          <Col >

            <img style={{ width: "50%", height: 'auto' }} src={myhouse} />
            <div className="container" >
              <Button color="primary">1</Button>
              <Button color="primary">2</Button>
              <Button color="primary">3</Button>
              <Button color="primary">4</Button>
              <Button color="primary">5</Button>
              <Button color="primary">Loại</Button>
            </div>
            <div className="container" >
              <Button className="previous">&laquo;Prev</Button>
              <Button className="next">Next  &raquo;</Button>
            </div>


          </Col>

        </Row>

      </div >
    )
  }
}

export default Dashboard;
