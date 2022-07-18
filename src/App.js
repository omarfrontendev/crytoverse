import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Exchanges from './pages/exchanges/Exchanges';
import NewsPage from './pages/news/NewsPage';
import CryptocurrenciesPage from './pages/cryptoCurrency/CryptocurrenciesPage';
import SingleCryptoPage from './pages/singleCrypto/SingleCryptoPage';

import './Main.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index path='' element={<Home />}/>
        <Route path='/news' element={<NewsPage />}/>
        <Route path='/cryptocurrencies/*' element={<CryptocurrenciesPage />}/>
        <Route path='cryptocurrencies/:crptoID' element={<SingleCryptoPage/>}/>
        <Route path='/exchanges' element={<Exchanges />}/>
      </Route>
    </Routes>
  )
}

export default App
