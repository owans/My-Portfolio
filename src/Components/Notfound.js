import React, {Component} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default class Notfound extends Component{
    render(){
        return(
            <div>
                <Header/>
                <h3>Oops! Page not found</h3>
                <Footer/>
            </div>
        )
    }
}