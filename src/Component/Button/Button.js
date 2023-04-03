import React from 'react'
import "./Button.styles.scss";

const BlsButton = ({ children }) => {
  return (
    <button className='bls_btn' >
      <span className='btn_child'>{ children }</span>
    </button>
  )
}

export default BlsButton;