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
                        <p>Owanate Amachree hails from Rivers State, Nigeria</p>
                        <p>She is a Software Developer and Technical Writer</p>
                    </div>
                    <img src={SecondImage} alt="Owans Standing" className="about-me__img"></img>
                </section>
            </div>
        )
    }
}