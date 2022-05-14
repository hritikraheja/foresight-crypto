import React,{Component} from "react";
import '../css/PartOfCommunity.css';
import facebookLink from '../images/facebookLink.png';
import instagramLink from '../images/instagramLink.png';
import twitterLink from '../images/twitterLink.png';
import telegramLink from '../images/telegramLink.png';
import mediumLink from '../images/mediumLink.png';
import youtubeLink from '../images/youtubeLink.png';

class PartOfCommunity extends Component{
    render(){
        return(
            <div id="partOfCommunity">
                <p id="partOfCommunityHead">Be part of our Community</p>
                <div id="socialMediaLinks">
                    <img id="socialMediaLink" src={facebookLink}></img>
                    <img id="socialMediaLink" src={instagramLink}></img>
                    <img id="socialMediaLink" src={twitterLink}></img>
                    <img id="socialMediaLink" src={telegramLink}></img>
                    <img id="socialMediaLink" src={mediumLink}></img>
                    <img id="socialMediaLink" src={youtubeLink}></img>
                </div>
            </div>
        )
    }
}

export default PartOfCommunity;