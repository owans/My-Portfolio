import React from "react";
import firstImage from "../img/owans.png";
import PortfolioImage2 from "../img/portfolio-02.png";
import PortfolioDetails from "../img/portfolio-02.png";
import Footer from "./common/Footer";

export default class SecondPortfolioItem extends React.Component{
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
                <section className="intro" id="home">
                    <h1 className="section__title section__title--intro">
                        Project <strong>Owatimer</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro">
                        A timing app for employees
                    </p>
                    <a href="https://owatimer.herokuapp.com" className="intro__img">
                   <img src={PortfolioImage2} alt="First Portfolio" ></img>
                   </a>
                </section>

                <div class="portfolio-item-individual">
                    <p>Owatimer keeps track of employee leave,offs
                    absence, etc of an organization.                
                    </p>
                        <img src={PortfolioDetails} alt=""></img>
                    <p>Employees can request for timeoff with valid reason on Owatimer and be approved by the manager/admin
                        Admin can approve/reject timeoff on behalf of the company. 
                       <br></br>Employees timeoffs are tracked and users can only request timeoff based on allocation for the year.
                    </p>
                    <p>Request for timeoffs
                    <br></br>Keep track of all employee leave request.
                    </p>
                    <a href="https://owatimer.herokuapp.com">
                        <button className="portfolio__button">Checkout App</button>
                    </a>
                </div>
                <Footer/>
            </div>
        )
    }
}