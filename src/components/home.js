import React, { Component } from 'react';
import { Link } from "react-router";

import Carousel from 'react-bootstrap/Carousel';
import Pilot from "../images/pilot.png";
import Accountant from "../images/youngaccountants.jpg";
import School from "../images/school.png";


class Home extends Component{
    render(){
        return(
            <div>
            <Carousel className="width-height">
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={School}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>The World Of Excellency</h3>
      <p>Your Child's future is our priority. <br/> <span style={{fontSize: 18}}><Link to="/enroll">&rarr; Enroll Today</Link></span></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pilot}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Represent The Whole World Through <span> <Link to="contacts">Us </Link>On A Single Click</span></h3>
      <p>Bon Voyage</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Accountant}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Stand Amongst The Many</h3>
      <p>Then You Let <span> <Link to="enroll">Us</Link></span> Grow</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}

export default Home;