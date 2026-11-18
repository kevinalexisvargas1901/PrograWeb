import React from 'react'
import "./Header.css"
import gamelogo from "../../assets/gamelogo.png"

const Header = () => {
  return (
    <header className="header-container">
        <img src={gamelogo} alt="Logo de la Serie Naruto" className="logo" />
        <p className="subtitle">«winter»</p>
    </header>
  )
}

export default Header