import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Badge, Button, ButtonDropdown, ButtonGroup, ButtonToolbar, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Progress, Row, Table, } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { Slide } from 'react-slideshow-image';
import logo from '../../../src/assets/img/brand/1.jpg'

const slideImages = [
  '../../../src/assets/img/brand/1.jpg',
  '../../../src/assets/img/brand/2.jpg',
  '../../../src/assets/img/brand/3.jpg',
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
const Slideshow = () => {
  return (
    <div className="slide-container">
      {/* <img src={logo} /> */}
      <Slide {...properties}>
        <div className="each-slide" style={{width: '300px', height: '300px'}} resizeMode="cover">
          <img src={logo} />
        </div>
        <div className="each-slide" style={{width: '300px', height: '300px'}} resizeMode="cover">
          <img src={logo} />
        </div>
        <div className="each-slide" style={{width: '300px', height: '300px'}} resizeMode="cover">
          <img src={logo} />
        </div>
      </Slide>
    </div>
  )
}
class Dashboard extends Component {

  render() {

    return (
      <div className="animated fadeIn">
        <Slideshow>

        </Slideshow>

      </div>
    );
  }
}

export default Dashboard;
