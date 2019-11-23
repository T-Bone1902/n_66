import React, { Component } from "react";
// Components
import HomeNavBar from "../../components/HomeNavBar/HomeNavBar";
import HomeMainCarousel from "../../components/HomeMainCarousel/HomeMainCarousel";
import HomeFilter from "../../components/HomeFilter/HomeFilter";
import HomeReviewCarousel from "../../components/HomeReviewCarousel/HomeReviewCarousel";
import HomeTravelCarousel from "../../components/HomeTravelCarousel/HomeTravelCarousel";
import HomeAdviser from "../../components/HomeAdviser/HomeAdviser";
import HomeEarth from "../../components/HomeEarth/HomeEarth";
import Footer from "../../components/Footer/Footer";
import message from "./images/comment-dots-solid.svg";
import "./Home.scss";
// import Join from "../socketClient/Join";
import Chat from "../socketClient/Chat";
class Home extends Component {
  state = {
    system: false,
    name: "",
    room: ""
  };

  render() {
    const { currentUser } = this.props;
    console.log(currentUser);
    return (
      <>
        <div
          className="MessageButton"
          onClick={() => this.setState({ system: !this.state.system })}
        >
          <img src={message} alt="message" />
        </div>
        <div
          className={
            this.state.system ? " messageIn" : "messageInOpen messageIn"
          }
        >
          <Chat />
        </div>
        <HomeNavBar currentUser={this.props.currentUser} />
        <HomeMainCarousel />
        <HomeFilter
          HomeSelect1={this.props.HomeSelect1}
          HomeSelect2={this.props.HomeSelect2}
          HomeSelect3={this.props.HomeSelect3}
          HomeSearch={this.props.HomeSearch}
        />
        <HomeTravelCarousel />
        <HomeAdviser />
        <HomeEarth />
        <HomeReviewCarousel />
        <Footer />
      </>
    );
  }
}

export default Home;
