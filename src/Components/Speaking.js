import React, {Component} from "react";
import {Link} from "react-router-dom";
import SpeakerPortfolio1 from "../img/speaker_portfolio_1.png";
import SpeakerPortfolio2 from "../img/speaker_portfolio_2.png";

export default class Speak extends Component{
    render(){
        return(
            <div>
                <section className="my-work" id="speak">
                    <h2 className="section__title section__title--work">Speaking Engagements</h2>
                    <p className="section__subtitle section__subtitle--work">Volunteer/Community</p>

                    <div className="portfolio">
                        <Link to="/speaking" href="#" className="portfolio__item">
                            <img src={SpeakerPortfolio1} alt="My Portfolio" className="portfolio__img"></img>
                        </Link>
                        <Link to="/speaking_2" className="portfolio__item">
                            <img src={SpeakerPortfolio2} alt="My Portfolio" className="portfolio__img"></img>
                        </Link>
                    </div>
                </section>
            </div>
        )
    }
}