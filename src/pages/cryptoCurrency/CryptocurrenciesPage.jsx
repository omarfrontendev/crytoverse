import React from 'react'
import Cryptocurrencies from '../../components/crptos/Cryptocurrencies';

import './cryptos.css';
const CryptocurrenciesPage = () => {
  return (
    <Cryptocurrencies count={100}/>
  )
}

export default CryptocurrenciesPage;