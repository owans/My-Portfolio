import React from "react";
import firstImage from "../img/owans.png";
import PortfolioImage1 from "../img/portfolio-01.png";
import PortfolioDetails from "../img/portfolio-01.png";
import Footer from "./common/Footer";

export default class PortfolioItem extends React.Component{
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
                        Project <strong>KoloSave</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro">
                        A savings app
                    </p>
                    <a href="https://kolosave.herokuapp.com" className="intro__img">
                   <img src={PortfolioImage1} alt="First Portfolio" ></img>
                   </a>
                </section>

                <div class="portfolio-item-individual">
                    <p>Kolosave is a clone of the piggy bank savings app, 
                        users can save any amount directly deducted 
                        from their bank accounts and earn interest on it
                    </p>
                        <img src={PortfolioDetails} alt=""></img>
                    <p>Kolosave (formerly piggybank.ng) helps you stop excessive
                        spending by allowing you save and invest money you would
                        normally be tempted to spend.
                    </p>
                    <p>Earn Over 10% Interests On Savings.
                    <br></br>Earn Over 13% Return On Investments.
                    </p>
                </div>
                <Footer/>
            </div>
        )
    }
}