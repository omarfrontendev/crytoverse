import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBarChartSquare } from 'react-icons/bi';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { BsMoonStarsFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';


const Sidebar = ({ openMenu,themeMode, toggleThemt }) => {
  return (
    <aside className={`${openMenu ? 'showMenu' : ''}`}>
      <div className="sidebar">
        <NavLink to='/' className='logo flex'>
            <img src='#' alt='logo'/>
            <span>Crytoverse</span>
        </NavLink>
        <ul className='flex'>
          <li>
            <NavLink 
              className={(navData) => 'flex ' + (navData.isActive ? 'active' : '')}
            to='/'>
              <AiOutlineHome/>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={(navData) => 'flex ' + (navData.isActive ? 'active' : '')}
            to='/cryptocurrencies'>
              <BiBarChartSquare/>
              Cryptocurrencies
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={(navData) => 'flex ' + (navData.isActive ? 'active' : '')}
            to='/exchanges'>
              <RiExchangeDollarFill/>
              Exchanges
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={(navData) => 'flex ' + (navData.isActive ? 'active' : '')}
            to='/news'>
              <BsFillLightbulbFill/>
              News
            </NavLink>
          </li>
          <li onClick={toggleThemt}>
            <button className={`toggle_theme ${themeMode}`}>
              <span className='light'><FiSun/></span>
              <span className='dark'><BsMoonStarsFill /></span>
              <span className='bullet'></span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar