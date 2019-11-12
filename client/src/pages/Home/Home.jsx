import React, { Component } from "react";
// Components

import HomeNavBar from "../../components/HomeNavBar/HomeNavBar";
import HomeMainCarousel from "../../components/HomeMainCarousel/HomeMainCarousel";
import HomeFilter from "../../components/HomeFilter/HomeFilter";
import HomeReviewCarousel from "../../components/HomeReviewCarousel/HomeReviewCarousel";
import HomeTravelCarousel from "../../components/HomeTravelCarousel/HomeTravelCarousel";
import Adviser from "../../components/HomeAdviser/HomeAdviser";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <HomeNavBar />
        <HomeMainCarousel />
        <HomeFilter />
        <HomeTravelCarousel />
        <HomeReviewCarousel/>
        <Adviser />
      </>
    );
  }
}

export default Home;
