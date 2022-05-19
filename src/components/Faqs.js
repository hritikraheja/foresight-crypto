import React, { Component } from "react";
import "../css/Faqs.css";

class Faqs extends Component {

  componentDidMount = ()=>{
    var mobileResolution = window.matchMedia("(max-width : 480px)");
    if(mobileResolution.matches){
      var b = document.getElementById('faq-content-7');
      b.classList.remove('show');
      var d = document.getElementById('faqlist2');
      var c = d.getElementsByClassName('accordion-button')[0];
      c.classList.add("collapsed");
    }

  }
  render() {
    return (
      <div id="faqSection">
          <p id="faqHead">FAQs</p>
          <p id="faqSubHead">Need Help? Find the topic you are looking for...</p>
        <div id="faqs">
          <div class="accordion accordion-flush faqlist" id="faqlist1">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-1"
                >
                  How to place your bid on Foresight app?
                </button>
              </h2>
              <div
                id="faq-content-1"
                class="accordion-collapse collapse show"
                data-bs-parent="#faqlist1"
              >
                <div class="accordion-body">
                  To place a bid amount on the Foresight app - First, select the
                  question and the category, then decide your foresight amount
                  by adjusting the mil points.<br></br>Complete this by swiping
                  either left or right based on your answer and its probability.
                  Tap on the trade button, and your bid will get successfully
                  placed.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-2"
                >
                  How to check your result on Foresight?
                </button>
              </h2>
              <div
                id="faq-content-2"
                class="accordion-collapse collapse"
                data-bs-parent="#faqlist1"
              >
                <div class="accordion-body">
                  Foresight results get declared on the app and its social media
                  platform around noon.
                  <br /> You can check your results on the app by going to the
                  winner section and seeing the final standings( Your position
                  on the leader board is directly proportional to your winning
                  amount).
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-3"
                >
                  Why am I facing a problem in placing my bid?
                </button>
              </h2>
              <div
                id="faq-content-3"
                class="accordion-collapse collapse"
                data-bs-parent="#faqlist1"
              >
                <div class="accordion-body">
                  This problem can occur because of two main reasons :-
                  <ul>
                    <li>
                      Your bidding amount is more than the remaining mil points.
                    </li>
                    <li>
                      The probability of your answer is more than the actual mil
                      points submitted.
                    </li>
                  </ul>
                  If the issue persists, you can directly contact us on our
                  social media platforms.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-4"
                >
                  What categories are available for bidding?
                </button>
              </h2>
              <div
                id="faq-content-4"
                class="accordion-collapse collapse"
                data-bs-parent="#faqlist1"
              >
                <div class="accordion-body">
                  There are many categories on Foresight on which you can place
                  your bid.
                  <br /> For instance- IPL, Fun, Crypto, and Stocks.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-5"
                >
                  How many mil points will I receive?
                </button>
              </h2>
              <div
                id="faq-content-5"
                class="accordion-collapse collapse"
                data-bs-parent="#faqlist1"
              >
                <div class="accordion-body">
                  You will receive the exact amount of mil points placed on the
                  bidding (It also implies that you will lose the same amount of
                  mil points if your answer is incorrect).
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-6"
                >
                  Where will I receive the winning amount?
                </button>
              </h2>
              <div
                id="faq-content-6"
                class="accordion-collapse collapse"
                data-bs-parent="#faqlist1"
              >
                <div class="accordion-body">
                  The winning amount will be credited directly to your
                  UPI-linked account, and you can edit your UPI id and number by
                  going to the profile section.
                  <br />
                  <br /> Make sure that your UPI number and ID are valid. In the
                  case of incorrect UPI, the winning amount won’t get
                  transferred to you. Terms and Conditions apply.
                </div>
              </div>
            </div>
          </div>
          <div class="accordion accordion-flush faqlist" id="faqlist2">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-7"
                >
                  I have lost all my Mil points. How will I continue my
                  predictions?
                </button>
              </h2>
              <div
                id="faq-content-7"
                class="accordion-collapse collapse show"
                data-bs-parent="#faqlist2"
              >
                <div class="accordion-body">
                  If you have lost all your Mil Points because of wrong
                  predictions in different categories, you need to wait for the
                  weekly reset.
                  <br />
                  The weekly reset gives an equal opportunity for all the
                  players on the Foresight app. It ensures a limited advantage
                  for placing bids and predictions and provides the optimum
                  number of Mil points.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-8"
                >
                  How many Mil Points will I get in the weekly reset?
                </button>
              </h2>
              <div
                id="faq-content-8"
                class="accordion-collapse collapse"
                data-bs-parent="#faqlist2"
              >
                <div class="accordion-body">
                  The number of Mil Points assigned to you in the weekly reset
                  depends on your performance during that week. For instance,
                  players who have won more points will receive more Mil credits
                  and vice versa.
                  <br />
                  The weekly reset is subject to change and comes with terms and
                  conditions.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-9"
                >
                  How can I win more on Foresight?
                </button>
              </h2>
              <div
                id="faq-content-9"
                class="accordion-collapse collapse"
                data-bs-parent="#faqlist2"
              >
                <div class="accordion-body">
                  You can win more on the Foresight App by getting the basics
                  right.
                  <ul>
                    <li>
                      Keep yourself updated with the latest events for correct
                      predictions.
                    </li>
                    <li>
                      Upgrade your game by spending more time on the app. It
                      will help you to analyze the events in various categories.
                    </li>
                    <li>
                      Read this Blog! (P.S. specifically curated for the big
                      winners like you.)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-10"
                >
                  I am not able to log in and facing repetitive errors.
                </button>
              </h2>
              <div
                id="faq-content-10"
                class="accordion-collapse collapse"
                data-bs-parent="#faqlist2"
              >
                <div class="accordion-body">
                  If you are facing trouble logging into your account, it might
                  be because you are using an old version of the app. Go to the
                  play store and update the app to the latest version to resolve
                  the issue.
                  <br />
                  (If the problem persists, you can try reinstalling the app
                  from the play store.)
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-11"
                >
                  Can I report bugs and discrepancies in the app?
                </button>
              </h2>
              <div
                id="faq-content-11"
                class="accordion-collapse collapse"
                data-bs-parent="#faqlist2"
              >
                <div class="accordion-body">
                  You can always reach out to us on our designated support
                  email.
                  <br />
                  Furthermore, the system of our app continuously detects and
                  improves the interface.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-content-12"
                >
                  Do I need to have trading knowledge for using Foresight?
                </button>
              </h2>
              <div
                id="faq-content-12"
                class="accordion-collapse collapse"
                data-bs-parent="#faqlist2"
              >
                <div class="accordion-body">
                  You don't need to be a trader or specialist for placing
                  predictions on Foresight.
                  <br />
                  Anyone with a general curiosity and great predictions game can
                  join the app and start earning real rewards.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faqs;
