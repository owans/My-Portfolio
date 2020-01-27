import React, {Component} from "react";
import {Link} from "react-router-dom";
import Portfolio1 from "../img/portfolio-01.png";
import Portfolio2 from "../img/portfolio-02.png";
import Portfolio3 from "../img/technical-image.png";

export default class Work extends Component{
    render(){
        return(
            <div>
                <section className="my-work" id="work">
                    <h2 className="section__title section__title--work">My Work</h2>
                    <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

                    <div className="portfolio">
                        <Link to="/portfolio_1" href="#" className="portfolio__item">
                            <img src={Portfolio1} alt="My Portfolio" className="portfolio__img"></img>
                        </Link>
                        <Link to="/portfolio_2" href="#" className="portfolio__item">
                            <img src={Portfolio2} alt="My Portfolio" className="portfolio__img"></img>
                        </Link>
                        <Link to="/technical_writing_portfolio" className="portfolio__item">
                            <img src={Portfolio3} alt="My Portfolio" className="portfolio__img"></img>
                        </Link>
                    </div>
                </section>
            </div>
        )
    }
}