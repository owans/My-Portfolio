import React from 'react';
import Header from "./common/Header";
import Introduction from "../Components/Introduction";
import Services from "../Components/Services";
import About from "../Components/About";
import Work from "../Components/Work";
import SpeakingEvents from "../Components/Speaking";
import Footer from "./common/Footer";

export default class Home extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Header/>
        <Introduction/>
        <Services/>
        <About/>
        <Work/>
        <SpeakingEvents/>
        <Footer/>
      </React.Fragment>
    )
  }
}
