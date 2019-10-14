import React, { Component } from 'react';
import { Button, Col, Row, } from 'reactstrap';
//import img from './images/2.jpg';
import img from './image/img';
import DashboardService from './DashboardService'

const myhouse = "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg";

class Dashboard extends Component {
  _dashboardService = new DashboardService();
  constructor(props) {
    super(props)
    this.state = {
      // images: img.properties,
      // image: img.properties[0]
      //username: "phuonganh",
      UserName:"",
      images: {},
      mainimages: {},
      subimages: [],
      scoremainimgs: [1, 2, 3],
      scoresubimgs: [1, 2, 3, 4, 5],
      scoremainImg: "",
      scoresubImg: "",
      rating: "",
      imagepath: "",
      indexsubimg: 0



    }

  }
  componentDidMount() {
    const username = localStorage.getItem('username')
    this.getImages(username)
  }

  getImages(userName) {

    this._dashboardService.getImages(userName)
      .then((result) => {
        console.log(result)
        if (result.Message === "Success") {
          this.setState({
            images: result.Data,
            mainimages: result.Data.MainImage,
            subimages: result.Data.SubImages,
            UserName:userName
          }, () => {
            console.log(this.state.mainimages);
            console.log(this.state.subimages[0]);
            console.log(this.state.UserName)

          })
        }
      })
      .catch((err) => {
        console.log("error" + err)
      });
  }
  postImages(userName, data) {
    var data = this.state.images

    this._dashboardService.postImages(userName, data)
      .then((result) => {
        if (result.Message === "Success") {
          this.getImages(this.state.UserName)
        }
      })
  }
  prevSubImg() {
    console.log("prev")
    if (this.state.indexsubimg > 0) {
      const newIndex = this.state.indexsubimg - 1
      this.setState({
        indexsubimg: newIndex
      })
    }

  }
  nextSubImg() {
    console.log("next")
    if (this.state.indexsubimg < this.state.subimages.length - 1) {
      const newIndex = this.state.indexsubimg + 1
      this.setState({
        indexsubimg: newIndex
      })
    }

  }
  scoreSubImg(event) {
    // console.log(event)
    var newsubImg = this.state.subimages
    newsubImg[this.state.indexsubimg].Rating = event

    this.setState({
      subimages: newsubImg
    }, () => { console.log(this.state.subimages) })
  }
  scoreMainImg(event) {
    // console.log(event)
    var newArray = this.state.mainimages
    newArray.Rating = event
    this.setState({
      mainimages: newArray,

    }, () => { console.log(this.state.mainimages) })

  }
  render() {
    return (
      <div className="container">
        <Row>
          <Col>
            <img style={{ width: '100%', height: 'auto' }} src={this.state.mainimages.ImagePath} />
            <div className="container" >
              <Button color={this.state.mainimages != null ? this.state.mainimages.Rating === 1 ? "primary" : "gray" : "primary"} onClick={() => this.scoreMainImg(this.state.scoremainimgs[0])} disabled={this.state.mainimages.Rating !== 0}>{this.state.scoremainimgs[0]}</Button>
              <Button color={this.state.mainimages != null ? this.state.mainimages.Rating === 2 ? "primary" : "gray" : "primary"} onClick={() => this.scoreMainImg(this.state.scoremainimgs[1])} disabled={this.state.mainimages.Rating !== 0}>{this.state.scoremainimgs[1]}</Button>
              <Button color={this.state.mainimages != null ? this.state.mainimages.Rating === 3 ? "primary" : "gray" : "primary"} onClick={() => this.scoreMainImg(this.state.scoremainimgs[2])} disabled={this.state.mainimages.Rating !== 0}>{this.state.scoremainimgs[2]}</Button>
            </div>
          </Col>

          <Col >

            <img style={{ width: "50%", height: 'auto' }} src={this.state.subimages.length > 0 ? this.state.subimages[this.state.indexsubimg].ImagePath :""} />
            <div className="container" >
              <Button color={this.state.subimages.length > 0 ? this.state.subimages[this.state.indexsubimg].Rating === 1 ? "primary" : "red" : "primary"} onClick={() => this.scoreSubImg(this.state.scoresubimgs[0])} >{this.state.scoresubimgs[0]}</Button>
              <Button color={this.state.subimages.length > 0 ? this.state.subimages[this.state.indexsubimg].Rating === 2 ? "primary" : "red" : "primary"} onClick={() => this.scoreSubImg(this.state.scoresubimgs[1])} >{this.state.scoresubimgs[1]}</Button>
              <Button color={this.state.subimages.length > 0 ? this.state.subimages[this.state.indexsubimg].Rating === 3 ? "primary" : "red" : "primary"} onClick={() => this.scoreSubImg(this.state.scoresubimgs[2])} >{this.state.scoresubimgs[2]}</Button>
              <Button color={this.state.subimages.length > 0 ? this.state.subimages[this.state.indexsubimg].Rating === 4 ? "primary" : "red" : "primary"} onClick={() => this.scoreSubImg(this.state.scoresubimgs[3])} >{this.state.scoresubimgs[3]}</Button>
              <Button color={this.state.subimages.length > 0 ? this.state.subimages[this.state.indexsubimg].Rating === 5 ? "primary" : "red " : "primary"} onClick={() => this.scoreSubImg(this.state.scoresubimgs[4])} >{this.state.scoresubimgs[4]}</Button>

            </div>
            <div className="container" >
              <Button className="previous" onClick={() => this.prevSubImg()} disabled={this.state.indexsubimg === 0}>&laquo;Prev</Button>
              <Button className="next" onClick={() => this.nextSubImg()} disabled={this.state.indexsubimg === this.state.subimages.length - 1}>Next  &raquo;</Button>
            </div>
          </Col>
        </Row>
        <div className="container" >
          <Button className="previous" onClick={() => this.postImages(this.state.username)} >&laquo;Prev</Button>
          <Button className="next" onClick={() => this.postImages(this.state.UserName)} disabled={this.state.indexsubimg < this.state.subimages.length - 1 || this.state.mainimages.Rating === 0 } >Next  &raquo;</Button>
        </div>
      </div >
    )
  }
}

export default Dashboard;
