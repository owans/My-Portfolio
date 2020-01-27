import React from "react";
import firstImage from "../img/owans.png";
import SpeakerPortfolioImage2 from "../img/speaker_portfolio_2.png";
import SpeakerPortfolioDetails from "../img/speaker_portfolio_2.png";
import Footer from "./common/Footer";

export default class SecondSpeakingItem extends React.Component{
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
                        Speaking on <strong>UML</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro">
                        DevFest Port Harcourt, 2019
                    </p>
                    <a href="https://medium.com/@amachreeowanate/devfestph19-highlights-9115652d8bce" className="intro__img">
                   <img src={SpeakerPortfolioImage2} alt="First Portfolio" ></img>
                   </a>
                </section>

                <div class="portfolio-item-individual">
                    <p>Spoke at #devfestph19 on Creating User Visualizations with UML Use Case Diagrams              
                    </p>
                        <img src={SpeakerPortfolioDetails} alt=""></img>
                    <p>The importance of UML at the beginning of the project phase, 
                       <br></br>Tools to use to get started on UML
                    </p>
                    
                    <a href="https://medium.com/@amachreeowanate/devfestph19-highlights-9115652d8bce">
                        <button className="portfolio__button">Checkout Event on Medium</button>
                    </a>
                </div>
                <Footer/>
            </div>
        )
    }
}