import React,{Component} from "react";
import '../css/TradingCoins.css';
import binance from '../images/bianceCoim.png'
import bitcoin from '../images/bitcoin.png'
import cardano from '../images/cardano.png'
import ethereum from '../images/ethereum.png'
import solana from '../images/solana.png'

class TradingCoins extends Component{
    render(){
        return(
            <div id="tradingCoins">
                <p id="tradingCoinsHead">Trade in Popular Coins</p>
                <div id="coins">
                    <img id="coin"src={bitcoin}></img>
                    <img id="coin" src={ethereum}></img>
                    <img id="coin" src={binance}></img>
                    <img id="coin" src={solana}></img>
                    <img id="coin" src={cardano}></img>
                </div>
            </div>
        )
    }
}

export default TradingCoins