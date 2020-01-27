import React, {Component} from "react";
import {Link} from "react-router-dom";
import Portfolio1 from "../img/portfolio-01.png";
import Portfolio2 from "../img/portfolio-02.jpg";
import Portfolio3 from "../img/portfolio-03.jpg";
import Portfolio4 from "../img/portfolio-04.jpg";
import Portfolio5 from "../img/portfolio-05.jpg";
import Portfolio6 from "../img/portfolio-06.jpg";
import Portfolio7 from "../img/portfolio-07.jpg";
import Portfolio8 from "../img/portfolio-08.jpg";
import Portfolio9 from "../img/portfolio-09.jpg";
import Portfolio10 from "../img/portfolio-10.jpg";


export default class Work extends Component{
    render(){
        return(
            <div>
                <section className="my-work" id="work">
                    <h2 className="section__title section__title--work">My Work</h2>
                    <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

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
                        <a href="#" className="portfolio__item">
                            <img src={Portfolio5} alt="My Portfolio" className="portfolio__img"></img>
                        </a>
                        <a href="#" className="portfolio__item">
                            <img src={Portfolio6} alt="My Portfolio" className="portfolio__img"></img>
                        </a>
                        <a href="#" className="portfolio__item">
                            <img src={Portfolio7} alt="My Portfolio" className="portfolio__img"></img>
                        </a>
                        <a href="#" className="portfolio__item">
                            <img src={Portfolio8} alt="My Portfolio" className="portfolio__img"></img>
                        </a>
                        <a href="#" className="portfolio__item">
                            <img src={Portfolio9} alt="My Portfolio" className="portfolio__img"></img>
                        </a>
                        <a href="#" className="portfolio__item">
                            <img src={Portfolio10} alt="My Portfolio" className="portfolio__img"></img>
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}