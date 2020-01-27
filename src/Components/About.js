import React, {Component} from "react";
import SecondImage from "../img/owans2.png";

export default class About extends Component{
    render(){
        return(
            <div>
                <section className="about-me" id="about">
                    <h2 className="section__title section__title--about"> Who I am</h2>
                    <p className="section__subtitle section__subtitle--about">Software Developer and Technical Writer based out of Port Harcourt, Nigeria</p>

                    <div className="about-me__body">
                        <p>Owanate Amachree hails from Rivers State in Nigeria</p>
                        <p>She is a Software Developer, Technical Writer and a Blockchain UX Researcher. 
                            She has been in the tech space for over 2years running, enjoys games like scrabble, loves to volunteer and travel. 
                            She's an outgoing individual who believes in the power of unity, hence her love for team work and passion for open source.
                        </p>
                    </div>
                    <img src={SecondImage} alt="Owans Standing" className="about-me__img"></img>
                </section>
            </div>
        )
    }
}