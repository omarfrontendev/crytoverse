import React, { useEffect, useState } from 'react'
import { getData } from '../../api'
import CryptosList from './CryptosList';

const Cryptocurrencies = ({ count }) => {

  const[isLoading, setIsLoading] = useState(false)
  const [crptos, setCrypros] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getData('coins', count).then(({ data }) => {
      setCrypros(data.data.coins);
      setFilteredCoins(data.data.coins);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setFilteredCoins(crptos);
    const filtering = crptos.map(coin => {
      if(coin.name.toLowerCase().includes(searchName.toLocaleLowerCase())) {
        return coin;
      }else {
        return false
      }
    });
    setFilteredCoins(filtering)
  }, [searchName])

  return (
    <>
      {count !== 10 && <input className='search_input' placeholder='Search Cryptocurrency...' type='text' onChange={e => setSearchName(e.target.value)}/>}
      <CryptosList crptos={filteredCoins} isLoading={isLoading} />
    </>
  )
}

export default Cryptocurrencies