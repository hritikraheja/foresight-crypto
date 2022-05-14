import React, { Component } from "react";
import "../css/WhoAreWe.css";
import vision from "../images/ourVision.png";
import aboutUs from "../images/aboutUs.png";
import mission from "../images/ourMission.png";

class WhoAreWe extends Component {
  render() {
    return (
      <div id="whoAreWe">
        <p id="whoAreWeHead">Who are we</p>
        <div id="traits">
          <div id="trait">
            <img id="traitImg" src={vision}></img>
            <p id="traitHead">Our Vision</p>
            <p id="traitSubHead">
              We have the vision to become an integral part of the Crypto
              community and expand our engagement with it.
            </p>
          </div>
          <div id="trait"  className="midTrait">
            <img id="traitImg" src={aboutUs}></img>
            <p id="traitHead">About Us</p>
            <p id="traitSubHead">
              We offer online predictions and crypto-currencies and reward the
              user accordingly. Users can win by bidding on the currency
              fluctuations.
            </p>
          </div>
          <div id="trait">
            <img id="traitImg" src={mission}></img>
            <p id="traitHead">Our Mission</p>
            <p id="traitSubHead">
              We are creating a unique space in the Crypto spectrum. By
              rewarding opinions every time, it brings us closer to our mission
              each day.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhoAreWe;
