import React, { Component, useEffect } from 'react'
import Header from "./Component/Header/Header";
import "./App.styles.scss";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import BusinessMap from './Component/Map/Map';
import Contact from "./Component/Contact/contact";
import ListGridMap from "./Component/ListGridMap/listGrid"
import { Route, Switch, Redirect } from "react-router-dom";
import WelcomeVoiceByAI from './Component/AI/AI';
/* 
import { connect } from 'react-redux';
import { get_nearest_business } from './Redux/ActionCreator'; 
 */

/* const mapStateToProps = (state) => {
  return {
    business: state.business,
  }
};

const mapDispatchToProps = dispatch => ({
  getNearestBusiness: (category, location, latitude, longitude, price, keywords) => dispatch(get_nearest_business(category, location, latitude, longitude, price, keywords))
})

 */
const App = () => {


  return (
    <div className="App">
      <WelcomeVoiceByAI />
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/Home'><Home /></Route>
        <Route exact path='/about'><About /></Route>
        <Route exact path='/contact'><Contact /></Route>
        <Route exact path='/listMapGrid'><ListGridMap /></Route>
        <Route exact path='/map'><BusinessMap /></Route>
        <Redirect to='/' component={<Home />} />
      </Switch>
    </div>
  );
}

export default App;
