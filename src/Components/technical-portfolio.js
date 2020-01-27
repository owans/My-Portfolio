import React from "react";
import firstImage from "../img/owans.png";
import TechnicalPortfolioImage from "../img/technical-image.png";
import TechnicalPortfolioDetails from "../img/technical-image.png";
import Footer from "./common/Footer";

export default class TechnicalPortfolio extends React.Component{
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
                        My <strong>Technical Portfolio</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro">
                        Check out my technical writing
                    </p>
                    <a href="https://docs.google.com/document/d/1opigszri9WcK16APS-W-KMCBoQXbrdmRj7jXIC7A1VA/edit?usp=drive_web&ouid=118060742226525413051https://medium.com/@amachreeowanate/devfestph19-highlights-9115652d8bce" className="intro__img">
                   <img src={TechnicalPortfolioImage} alt="First Portfolio" ></img>
                   </a>
                </section>

                <div class="portfolio-item-individual">
                    <p>I began writing professionally in 2018              
                    </p>
                        <img src={TechnicalPortfolioDetails} alt=""></img>
                    <p>I'm experienced in writing Technical Articles, Documentation,
                         Copywriting, and User Research Writing.
                    </p>
                    
                    <a href="https://docs.google.com/document/d/1opigszri9WcK16APS-W-KMCBoQXbrdmRj7jXIC7A1VA/edit?usp=drive_web&ouid=118060742226525413051">
                        <button className="portfolio__button">Link To Technical Articles</button>
                    </a>
                </div>
                <Footer/>
            </div>
        )
    }
}