import React, { Component } from "react";
import foresightLogo from "../images/foresightLogoNavbar.png";
import "../css/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md  d-flex" id="top-navigation">
        <div className="navbar-header">
          <img
            className="navbar-brand"
            src={foresightLogo}
            href="#"
            id="foresightLogo"
            alt="LOGO"
          ></img>
          <button
            id="toggle-btn"
            class="navbar-toggler btn btn-default"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="navbar-toggler-icon glyphicon glyphicon-align-justify"></i>
            {/* <span class="navbar-toggler-icon glyphicon gyphicon-chevron-right text-dark"></span> */}
          </button>
        </div>
        <div class="collapse navbar-collapse text-center" id="navbarNav">
          <ul
            class="navbar-nav"
            id="navigation"
          >
            <li class="nav-item">
              <a class="nav-link" href="#" id="nav-lnks">
                HOME
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#gs" id="nav-lnks">
                HOW TO TRADE
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="nav-lnks">
                COMMUNITY
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="nav-lnks">
               ABOUT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="nav-lnks">
                CONTACT
              </a>
            </li>
          </ul>
          </div>
          <a>
            <button
              className="btn btn-default btn-coming-soon"
              id="btn-download">
              COMING SOON
            </button>
          </a>
      </nav>
    );
  }
}

export default NavBar;
