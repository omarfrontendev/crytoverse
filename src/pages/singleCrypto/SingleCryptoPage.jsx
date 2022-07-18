import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../../api';
import { BiDollarCircle } from 'react-icons/bi';
import { CgHashtag } from 'react-icons/cg';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { MdOutlineCelebration } from 'react-icons/md';
import HTMLReactParser from 'html-react-parser';
import Chart from './Chart';
import Spinner from '../../UI/Spinner';
import millify from 'millify';

import './CryptoDetails.css';

const SingleCryptoPage = () => {

  const { crptoID } = useParams();
  const [currentCoin, setCurrentCoin] = useState({});
  const [timePeriod, setTimePeriod] = useState('7d');
  const [coinHistory, setCoinHistory] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const time = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];

  const stats = [
    {title: 'Price to USD', value: `${currentCoin?.price}`, icon: <BiDollarCircle/>},
    {title: 'Rank', value: `${currentCoin?.rank}`, icon: <CgHashtag/>},
    {title: '24h Volume', value: `${currentCoin['24hVolume']}`, icon: <AiOutlineThunderbolt/>},
    {title: 'Market Cap', value: `${currentCoin?.marketCap}`, icon: <BiDollarCircle/>},
    {title: 'All-time-high(daily avg.)', value: `${currentCoin?.allTimeHigh?.price}`, icon: <MdOutlineCelebration/>},
  ]

  useEffect(() => {
    setIsLoading(true);
    getData(`coin/${crptoID}`, timePeriod).then(({ data }) => {
      setIsLoading(false);
      setCurrentCoin(data.data.coin);
    });
    getData(`coin/${crptoID}/history`, timePeriod).then(({ data }) => {
      setCoinHistory(data.data);
    })
  }, [timePeriod]);

  if(isLoading) return <Spinner />


  return (
    <>
      <div className='coin_details_title flex space_between'>
        <div>
          <h2 className="coin_title">{currentCoin.name} ({currentCoin.symbol}) Price</h2>
          <p className='coin_subtitle'>
            {currentCoin.name} live price in us dollars.
            View Value Statistics, market cap and asupply.
          </p>
        </div>
        <img src={currentCoin?.iconUrl || "data:image/jpeg;base64,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"} alt="" />
      </div>
      <Chart coinHistory={coinHistory} currentPrice={currentCoin.price} coinName={currentCoin.name}/>
      <div className='coin_value_statistics '>
        <div className="select_box">
          <select value={timePeriod} onChange={e => setTimePeriod(e.target.value)}>
            {time.map((data,i) => <option key={i} value={data}>{data}</option>)}
          </select> 
        </div>
        <div className="statistics_container flex space_between">
          <div className="statistics">
            <h3>{currentCoin.name} Value Statistics</h3>
            <p>on overview showing the stats of {currentCoin.name}</p>
            <ul>
              {stats.map((s, i) => (
                <li key={i} className='flex space_between'>
                  <span className='coin_state_title flex'>{s.icon}{s.title}</span>
                  <span className='coin_state_value'>{s.value !== 'undefined' ? millify(s.value) : ''}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="statistics">
            <h3>Other Statistics</h3>
            <p>on overview showing the stats of all cryptocurrencies</p>
            <ul>
              {stats.map((s, i) => (
                <li key={i} className='flex space_between'>
                  <span className='coin_state_title flex'>{s.icon}{s.title}</span>
                  <span className='coin_state_value'>{s.value !== 'undefined' ? millify(s.value) : ''}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='cion_desc_links flex'>
        <div className="coin_desc">
          <h3>What is {currentCoin.name}?</h3>
          {HTMLReactParser(`${currentCoin.description}`)}
        </div>
        <div className='coin_links'>
          <h2>{currentCoin.name} Links</h2>
          <ul>
            {currentCoin.links && currentCoin.links.map((link, i) => (
              <li key={i} className='flex space_between'>
                <span>{link.type}</span>
                <a href={link.url} target='_blank'>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SingleCryptoPage