import React, {Component} from "react";
import firstImage from "../img/owans.png";

export default class Header extends Component{
    render(){
        return(
            <div>
                <header>
                    <div className="logo">
                        <img src={firstImage} alt="owans-logo"></img>
                     </div>
                <button className="nav-toggle" aria-label="toggle navigation">
                    <span className="hamburger"></span>
                </button>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">My Services</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">About Me</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">My Work</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Blog</a></li>
                    </ul>
                </nav>
                </header>
            </div>
        )
    }
}