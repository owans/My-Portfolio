import React from 'react';
// import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from "./Components/Home";
import Header from "./Components/common/Header";
import Introduction from "./Components/Introduction";
import Portfolio1 from "./Components/Portfolio-item";
import Portfolio2 from "./Components/Portfolio-item2";
import SpeakingPortfolio1 from "./Components/Speaker-portfolio-item";
import SpeakingPortfolio2 from "./Components/Speaker-portfolio-item2";
import NotFound from "./Components/Notfound";

export default class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Switch>
              <Route exact path="/" render={(props) => <Home {...props} isAuthed={true} />}></Route>
              <Route exact path="/" render={(props) => <Header {...props} isAuthed={true} />}></Route>
              <Route exact path="/introduction" component={Introduction}></Route>
              <Route exact path="/portfolio1" component={Portfolio1}></Route>
              <Route exact path="/portfolio2" component={Portfolio2}></Route>
              <Route exact path="/speaking" component={SpeakingPortfolio1}></Route>
              <Route exact path="/speaking2" component={SpeakingPortfolio2}></Route>
              <Route component={NotFound}></Route>
        </Switch>
      </React.Fragment>
    )
  }
}
