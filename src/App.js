import React, { Component, useEffect, useState } from 'react'
import Header from "./Component/Header/Header";
import "./App.styles.scss";
import Home from "./Component/Home/Home";
import BusinessMap from './Component/Map/Map';
import ListGridMap from "./Component/ListGridMap/listGrid"
import { Route, Routes } from "react-router-dom";
import WelcomeVoiceByAI from './Component/AI/AI';
import IndividualBusiness from "./Component/Business_Cards/individualBusiness";
import Footer from './Component/Footer/Footer';
import MyDocument from './Component/pdf/pdf';

 
class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <WelcomeVoiceByAI />
        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path="/Home/:cardId" element={<IndividualBusiness />} />
          <Route path='/listMapGrid' element={<ListGridMap />}></Route>
          <Route path="/mydoc" element={<MyDocument />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <div style={{marginTop: "auto", bottom: '0px', top:"auto"}}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
