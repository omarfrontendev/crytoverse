import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { GlobalStyle, lightTheme, darkTheme } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';

import './layout.css';
import Navbar from './Navbar';

const Layout = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [themeMode, setThemeMode] = useState('dark');

  const toggleThemt = () => {
    themeMode === 'dark' ? setThemeMode('light') : setThemeMode('dark');
  };

  const TheMode = themeMode === 'dark' ? darkTheme : lightTheme
  
  return (
    <ThemeProvider theme={TheMode}>
      <GlobalStyle/>
      <div className='layout'>
        <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu}/>
        <div className={`layout_container ${openMenu ? 'showMenu' : ''}`}>
          <Sidebar openMenu={openMenu} toggleThemt={toggleThemt} themeMode={themeMode}/>
          <main className={`${openMenu ? 'showMenu' : ''}`}>
            <Outlet/>
          </main>
        </div>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default Layout