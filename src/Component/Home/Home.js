import React from 'react'
import Header from '../Header/Header'
import HomeHeader from '../Header/Header1'
import BusinessCards from '../Business_Cards/Cards'
const Home = (props) => {
  return (
    <div>
      <HomeHeader sendTrascript={props.sendTrascript}/>
    </div>
  )
}

export default Home;