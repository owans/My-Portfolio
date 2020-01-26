import React, {Component} from "react";
import IntroImage from "../img/owans1a.png";

export default class Introduction extends Component{
    render(){
        return(
            <div>
                <section className="intro" id="home">
                    <h1 className="section__title section__title--intro">
                        Hi, I am <strong>Owanate Amachree</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro">
                        Software Developer &&amp; Technical Writer
                    </p>
                    <img src={IntroImage} alt="Owans Smiling" className="intro__img"></img>
                </section>       
            </div>
        )
    }
}