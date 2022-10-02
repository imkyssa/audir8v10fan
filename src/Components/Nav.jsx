import React from 'react'
import logo from "./Assets/audi_logo.png"

export default function Nav() {
  return (
    <nav>
      <img className='logo' src={logo} alt="Audi" />
    </nav>
  )
}
