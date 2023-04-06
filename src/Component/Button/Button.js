import React from 'react'
import "./Button.styles.scss";

const BlsButton = ({ children, type }) => {
  return (
    <button className='bls_btn' type={type}>
      <span className='btn_child'>{ children }</span>
    </button>
  )
}

export default BlsButton;