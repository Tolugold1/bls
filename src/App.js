import React, { useEffect, useState } from 'react'
import Header from "./Component/Header/Header";
import "./App.styles.scss";
import Home from "./Component/Home/Home";
import BusinessMap from './Component/Map/Map';
import ListGridMap from "./Component/ListGridMap/listGrid"
import { Route, Routes } from "react-router-dom";
import WelcomeVoiceByAI from './Component/AI/AI';
import IndividualBusiness from "./Component/Business_Cards/individualBusiness";
import Footer from './Component/Footer/Footer';
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

/*   const [ defaultCard, setDefaultCard ] = useState([]);

  useEffect(() => {
    const ftDefault = () => {
      fetch('htt')
    }
  }) */

  return (
    <div className="App">
      <Header />
      <WelcomeVoiceByAI />
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path="/Home/:cardId" element={<IndividualBusiness />} />
        <Route path='/listMapGrid' element={<ListGridMap />}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <div style={{marginTop: "auto", bottom: '0px', top:"auto"}}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
