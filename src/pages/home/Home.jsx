import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../../api';
import millify from 'millify';
import News from '../../components/news/News';
import Cryptocurrencies from '../../components/crptos/Cryptocurrencies';
import Spinner from '../../UI/Spinner';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './home.css';

const Home = () => {

  const [stats, setStats] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init();
    return () => {};
  }, [])

  useEffect(() => {
    setIsLoading(true);
    getData('coins', '1').then(({ data }) => {

      setIsLoading(false) 
      setStats(data.data.stats);

    });
  }, []);

  return (
    <>
      <div>
        <h2 className='title'>Global Crypto Stats</h2>
        {isLoading ? 
          <Spinner /> : 
          <div className="flex stats_container">
            <div 
              data-aos="fade-up" 
              // data-aos-duration='300' 
              className="box_state flex"
            >
              <div className="title">Total Cryptocurrencies</div>
              <span>{stats.total ? millify(stats.total) : '' }</span>
            </div>
            <div 
            data-aos="fade-up" 
            // data-aos-duration='300' 
            data-aos-delay='200' 
            className="box_state flex">
              <div className="title">Total Exchanges</div>
              <span>{stats.totalExchanges ? millify(stats.totalExchanges) : ''}</span>
            </div>
            <div 
            data-aos="fade-up" 
            // data-aos-duration='300' 
            data-aos-delay='300' 
            className="box_state flex">
              <div className="title">Total Market Cap</div>
              <span>{stats.totalMarketCap ? millify(stats.totalMarketCap) : ''}</span>
            </div>
            <div 
            data-aos="fade-up" 
            // data-aos-duration='300' 
            data-aos-delay='400'
             className="box_state flex">
              <div className="title">Total 24h Volume</div>
              <span>{stats.total24hVolume ? millify(stats.total24hVolume) : ''}</span>
            </div>
            <div 
            data-aos="fade-up" 
            // data-aos-duration='300'
            data-aos-delay='500' 
            className="box_state flex">
              <div className="title">Total Markets</div>
              <span>{stats.totalMarkets ? millify(stats.totalMarkets) : ''}</span>
            </div>
          </div>
        }
      </div>
      <div>
        <div className="flex space_between section_title">
          <h2 className='title'>Top 10 Cryptocurrencies in the world</h2>
          <Link style={{color: '#398ed0'}} to='/cryptocurrencies'>Show More</Link>
        </div>
        <Cryptocurrencies count={10}/>  
      </div>
      <div>
          <div className="flex space_between section_title">
          <h2 className='title'>Latest Crypto News</h2>
          <Link style={{color: '#398ed0'}} to='/news'>Show More</Link>
        </div>
        <News/>
      </div>
    </>
  )
}

export default Home