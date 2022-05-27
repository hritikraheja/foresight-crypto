import React, {Component} from "react";
import image from '../images/homeImg.png'

import '../css/Home.css'

class Home extends Component{
    render(){
        return(
            <div id="home">
                <div id="homeLeft">
                    <p id="homeHead">Trade<br></br>the Future</p>
                    <p id="homeSubHead">The Future of Trading is now here.<br></br>Earn Daily money by Rapid Predictions.</p>
                    <a href="http://eepurl.com/hUZqtj" target="_blank"><button id="homeButton">Join the waitlist</button></a>
                </div>
                <div id="homeRight">
                    <img id="homeImg" src={image}></img>
                </div>
            </div>
        );
    }
}

export default Home;