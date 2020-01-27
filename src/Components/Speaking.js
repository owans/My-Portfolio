import React, {Component} from "react";
import {Link} from "react-router-dom";
import Portfolio1 from "../img/portfolio-01.jpg";
import Portfolio2 from "../img/portfolio-02.jpg";
import Portfolio3 from "../img/portfolio-03.jpg";
import Portfolio4 from "../img/portfolio-04.jpg";

export default class Speak extends Component{
    render(){
        return(
            <div>
                <section className="my-work" id="work">
                    <h2 className="section__title section__title--work">Speaking Engagements/Community</h2>
                    <p className="section__subtitle section__subtitle--work">Community Contributions</p>

                    <div className="portfolio">
                        <Link to="/portfolio1" href="#" className="portfolio__item">
                            <img src={Portfolio1} alt="My Portfolio" className="portfolio__img"></img>
                        </Link>
                        <a href="#" className="portfolio__item">
                            <img src={Portfolio2} alt="My Portfolio" className="portfolio__img"></img>
                        </a>
                        <a href="#" className="portfolio__item">
                            <img src={Portfolio3} alt="My Portfolio" className="portfolio__img"></img>
                        </a>
                        <a href="#" className="portfolio__item">
                            <img src={Portfolio4} alt="My Portfolio" className="portfolio__img"></img>
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}