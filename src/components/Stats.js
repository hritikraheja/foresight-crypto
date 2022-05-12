import React, {Component} from "react";
import '../css/Stats.css'

class Stats extends Component{
    render(){
        return(
            <div id="stats">
                <div id="stat">
                    <p id="statData">5000</p>
                    <hr id= "statLine"></hr>
                    <p id="statHead">Total Trades</p>
                </div>
                <div id="stat">
                    <p id="statData">500</p>
                    <hr id= "statLine"></hr>
                    <p id="statHead">Active Users</p>
                </div>
                <div id="stat">
                    <p id="statData">₹1,00,000</p>
                    <hr id= "statLine"></hr>
                    <p id="statHead">Rewards Distributed</p>
                </div>
                <div id="stat">
                    <p id="statData">5000+</p>
                    <hr id= "statLine"></hr>
                    <p id="statHead">Downloads</p>
                </div>
            </div>
        );
    }
}

export default Stats;