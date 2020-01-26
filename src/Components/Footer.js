import React, {Component} from "react";
// import Link from "react-dom";

export default class About extends Component{
    render(){
        return(
            <div>
                <footer className="footer" >
                    
                    <a href="mailto:amachreeowanate@gmail.com" className="footer__link">
                        amachreeowanate@gmail.com
                    </a>
                
                    <span className="social-list">
                        <li className="social-list__item">
                            <a className="social-list__link" href="https://github.com/owans"><i className="fab 
                            fa-github"></i>
                            </a>
                        </li>
                        <li className="social-list__item">
                            <a className="social-list__link" href="https://twitter.com/owans"><i className="fab 
                            fa-twitter"></i>
                            </a>
                        </li>
                        <li className="social-list__item">
                            <a className="social-list__link" href="https://medium.com/@amachreeowanate"><i className="fab 
                            fa-medium"></i>
                            </a>
                        </li>
                        <li className="social-list__item">
                            <a className="social-list__link" href="https://linkedin.com/in/missowans"><i className="fab 
                            fa-linkedin"></i>
                            </a>
                        </li>
                    </span>
                </footer>
            </div>
        )
    }
}