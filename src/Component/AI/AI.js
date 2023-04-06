import React from 'react';
import Speech from 'react-speech';
import { GiArtificialIntelligence } from "react-icons/gi";
import "./AI.styles.scss"
import { Container } from 'reactstrap';

const style = {
  play: {
    button: {
      width: '100',
      height: '50',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'yellow',
      border: 'solid 1px rgba(255,255,255,1)',
      borderRadius: 6
    },
  }
};

const WelcomeVoiceByAI = () => {
  
  return (
      <div  className='ai'>
        <Speech text="Welcome! I can help you to locate any business offices nearest to your location"  volume="1" />
      </div>
  )
}

export default WelcomeVoiceByAI;