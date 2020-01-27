import React, {Component} from "react";

export default class Services extends Component{
    render(){
        return(
            <div>
                <section className="my-services" id="services">
                    <h2 className="section__title section__title--services">
                        What I Do
                    </h2>
                    <div className="services">
                        <div className="service">
                            <h3>Software Developer</h3>
                            <p>
                                I specialise in building rest APIs with Express, MySQL, MongoDB and NodeJS
                                Tools i use include GIT, BitBucket, Trello, Postman.
                            </p>
                        </div>
                        <div className="service">
                            <h3>Technical Writer</h3>
                            <p>Write documentation and articles using modern wrtiting tools for clarity and accuracy
                            Makes use of readthedocs, developerhub. Can also write in markdown and other writing langauges.
                            Tools i use include grammerly, googledocs
                            </p>
                        </div>
                        <div className="service">
                            <h3>Blockchain UX Writer</h3>
                            <p>User centered design in blockchain, user-research, modelling and use of tools such as UML
                            </p>
                        </div>
                    </div>
                    <a href="#work" className="btn">See My Work</a>
                </section>
            </div>
        )
    }
}