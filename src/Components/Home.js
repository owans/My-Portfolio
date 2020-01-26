import React from 'react';
import Header from "../Components/Header";
import Introduction from "../Components/Introduction";
import Services from "../Components/Services";
import About from "../Components/About";
import Work from "../Components/Work";
import Footer from "../Components/Footer";

export default class Home extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Header/>
        <Introduction/>
        <Services/>
        <About/>
        <Work/>
        <Footer/>
      </React.Fragment>
    )
  }
}
