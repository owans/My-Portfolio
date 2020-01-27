import React, {Component} from "react";
import Footer from "./common/Footer";
import firstImage from "../img/owans.png";
import NotFoundImage from "../img/undraw_no_data.svg";

export default class Notfound extends Component{
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.onChange = this.onChange.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onChange(e) {
        const navToggle = document.querySelector('.nav-toggle');        
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
        });  
    }

    onRemove(e){
        const navLinks = document.querySelectorAll('.nav__link')
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
            })
        })
    }

    componentDidMount() {
        this.onChange();
        this.onRemove();
    }
      
      
    render(){
        return(
            <div>
                <header>
                    <div className="logo">
                        <img src={firstImage} alt="owans-logo"></img>
                     </div>
                <button className="nav-toggle" onChange={this.onChange} onRemove={this.onRemove} aria-label="toggle navigation">
                    <span className="hamburger"></span>
                </button>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="/#home" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="/#services" className="nav__link">My Services</a></li>
                        <li className="nav__item"><a href="/#about" className="nav__link">About Me</a></li>
                        <li className="nav__item"><a href="/#work" className="nav__link">My Work</a></li>
                        <li className="nav__item"><a href="/#speak" className="nav__link">Speaking Engagement</a></li>
                    </ul>
                </nav>
                </header>
                <a href="#" className="notfound__item">Oops! Page Not Found
                    <img src={NotFoundImage} alt="Page Not Found Image" className="notfound__img"></img>
                </a>
                <Footer/>
            </div>
        )
    }
}