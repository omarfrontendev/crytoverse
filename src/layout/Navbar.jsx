import React from 'react'

const Navbar = ({ setOpenMenu, openMenu }) => {

  return (
    <nav className={`${openMenu ? 'showMenu' : ''}`}>
      <button className={`menuBtn ${openMenu ? 'showMenu' : ''}`} onClick={() => setOpenMenu(!openMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="logo">
        Crytoverse
      </div>
    </nav>
  )
}

export default Navbar