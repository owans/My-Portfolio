import React from 'react';
// import './App.css';
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Introduction/>
      </div>
    )
  }
}
