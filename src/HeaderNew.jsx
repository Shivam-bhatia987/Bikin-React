import { Component } from "react";
import React from "react";
import "./style.css";

class Header1 extends Component {
    render(){
        return <div>
  <header id="header" className="fixed-top">
  <div className="container d-flex align-items-center justify-content-between">
  <h1 className="logo"><a href="index.html">Bikin</a></h1>
  <nav id="navbar" className="navbar">
  <ul>
  <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
          </li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
  </ul>
  <i className="bi bi-list mobile-nav-toggle"></i>
  </nav>
  </div>

  </header>
           
            
                  </div>
    }
}
export default Header1