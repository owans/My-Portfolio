import React, {Component} from "react";

export default class Header extends Component{
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
                </section>       
            </div>
        )
    }
}