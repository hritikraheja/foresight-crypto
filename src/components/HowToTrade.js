import React, { Component } from "react";
import "../css/HowToTrade.css";
import step1Img from "../images/chooseTheCoin.png";
import step2Img from "../images/adjustTheSlider.png";
import step3Img from "../images/tradeIsPlaced.png";
import step4Img from "../images/checkTheResult.png";

class HowToTrade extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   var a;
  //   var b;
  //   if(this.state.activeStep == 0){
  //     a = document.getElementById('stepOneHeader');
  //     a.setAttribute('aria-expanded', true);
  //     a.classList.remove('collapsed');
  //     b = document.getElementById('stepDesc1');
  //     b.classList.add('show');
  //   }

  //   if(this.state.activeStep == 1){
  //     a = document.getElementById('stepTwoHeader');
  //     a.setAttribute('aria-expanded', true);
  //     a.classList.remove('collapsed');
  //     b = document.getElementById('stepDesc2');
  //     b.classList.add('show');
  //   }

  //   if(this.state.activeStep == 2){
  //     a = document.getElementById('stepThreeHeader');
  //     a.setAttribute('aria-expanded', true);
  //     a.classList.remove('collapsed');
  //     b = document.getElementById('stepDesc3');
  //     b.classList.add('show');
  //   }

  //   if(this.state.activeStep == 3){
  //     a = document.getElementById('stepFourHeader');
  //     a.setAttribute('aria-expanded', true);
  //     a.classList.remove('collapsed');
  //     b = document.getElementById('stepDesc4');
  //     b.classList.add('show');
  //   }
  // }

  render() {
    var activeStep = 0;
    var loadStep = (i) => {
      if (i === activeStep) {
        return;
      }

      var slidingEffect;
      if (i < activeStep) {
        slidingEffect = "stepImageSliderAnimationLeft";
      } else {
        slidingEffect = "stepImageSliderAnimationRight";
      }

      var headers = document.getElementsByClassName("stepHeader");
      for (let j = 0; j < headers.length; j++) {
        headers[j].setAttribute("aria-expanded", false);
        headers[j].classList.add("collapsed");
      }
      var stepDesc1 = document.getElementById("stepDesc1");
      var stepDesc2 = document.getElementById("stepDesc2");
      var stepDesc3 = document.getElementById("stepDesc3");
      var stepDesc4 = document.getElementById("stepDesc4");
      stepDesc1.classList.remove("show");
      stepDesc2.classList.remove("show");
      stepDesc3.classList.remove("show");
      stepDesc4.classList.remove("show");

      var stepImageSlider = document.getElementById("stepImageSlider");
      // var stepImg = document.createElement("img");
      // stepImg.setAttribute("id", "stepImg");

      var stepImg = document.getElementById('stepImg')
      if (i === 0) {
        stepImg.src = step1Img;
        activeStep = i;
      } else if (i === 1) {
        stepImg.src = step2Img;
        activeStep = 1;
      } else if (i === 2) {
        stepImg.src = step3Img;
        activeStep = 2;
      } else if (i === 3) {
        stepImg.src = step4Img;
        activeStep = 3;
      }

      // stepImageSlider.removeChild(stepImageSlider.lastChild);
      // stepImageSlider.appendChild(stepImg);

      stepImg.classList.add(slidingEffect);
      setTimeout(() => {
        setTimeout(() => {
          stepImg.classList.remove(slidingEffect);
        }, 300);
      }, 300);
    };
    return (
      <div id="howToTrade">
        <p id="howToTradeHead">How to trade</p>
        <div id="howToTradeSteps">
          <div id="steps">
            <div className="step" id="step1">
              <button
                className="stepHeader"
                id="stepOneHeader"
                type="button"
                data-toggle="collapse"
                data-target="#stepDesc1"
                aria-expanded="true"
                onClick={() => loadStep(0)}
              >
                <span id="stepNumber">1</span>
                <p id="stepHead">Choose the coin</p>
                <i
                  className="fa fa-angle-right"
                  id="iconRight"
                ></i>
                <i
                  className="fa fa-angle-down"
                  id="iconDown"
                ></i>
              </button>
              <p id="stepDesc1" className="stepDesc collapse show">
                Choose the cryptocurrency coin that you want to trade. You can
                trade among many popular coins like Bitcoin, Ethereum, Solana,
                Binance Coin and Cardano.
              </p>
            </div>
            <div className="step" id="step2">
              <button
                className="stepHeader collapsed"
                id="stepTwoHeader"
                type="button"
                data-toggle="collapse"
                data-target="#stepDesc2"
                aria-expanded="false"
                onClick={() => loadStep(1)}
              >
                <span id="stepNumber">2</span>
                <p id="stepHead">Adjust the sliders</p>
                <i
                  className="fa fa-angle-right"
                  id="iconRight"
                ></i>
                <i
                  className="fa fa-angle-down"
                  id="iconDown"
                ></i>
              </button>
              <p id="stepDesc2" className="stepDesc collapse">
                Adjust the Mil slider to fix the bidding amount. Slide it
                towards the right or left to decide the amount, and repeat the
                same process to predict whether the price of the coin will go up
                or down.
              </p>
            </div>
            <div className="step" id="step3">
              <button
                className="stepHeader collapsed"
                id="stepThreeHeader"
                type="button"
                data-toggle="collapse"
                data-target="#stepDesc3"
                aria-expanded="false"
                onClick={() => loadStep(2)}
              >
                <span id="stepNumber">3</span>
                <p id="stepHead">Trade is placed</p>
                <i
                  className="fa fa-angle-right"
                  id="iconRight"
                ></i>
                <i
                  className="fa fa-angle-down"
                  id="iconDown"
                ></i>
              </button>
              <p id="stepDesc3" className="stepDesc collapse">
                Congratulations! Your bid is successfully placed. Now, wait for
                the timer of 5 minutes to end, which will ultimately determine
                if the coin has fluctuated according to your opinion or not.
              </p>
            </div>
            <div className="step" id="step4">
              <button
                className="stepHeader collapsed"
                id="stepFourHeader"
                type="button"
                data-toggle="collapse"
                data-target="#stepDesc4"
                aria-expanded="false"
                onClick={() => loadStep(3)}
              >
                <span id="stepNumber">4</span>
                <p id="stepHead">Check the result</p>
                <i
                  className="fa fa-angle-right"
                  id="iconRight"
                ></i>
                <i
                  className="fa fa-angle-down"
                  id="iconDown"
                ></i>
              </button>
              <p id="stepDesc4" className="stepDesc collapse">
                Check the result to see whether your bid was right or wrong. If
                your bid for the fluctation was correct then the Mil points will
                get credited to your account immediately.
              </p>
            </div>
          </div>
          <div id="stepImageSlider">
            <img id="stepImg" src={step1Img}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default HowToTrade;
