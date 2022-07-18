import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './exchanges.css'
import millify from 'millify';

const Exchanges = () => {

  const [currentUUID, setCurrentUUID] = useState('');
  const [show, setShow] = useState(false);

  const exchanges = [
    {
      id: 'asdads',
      coinrankingUrl: "https://coinranking.com/exchange/-zdvbieRdZ+binance",
      uuid: "-zdvbieRdZ",
      name: "Binance",
      iconUrl: "https://cdn.coinranking.com/mDTK5qrmq/binance.svg",
      numberOfMarkets: 3,
      ['24hVolume']: "776337030.2052088",
      rank: 1,
      marketShare: "12.22",
      verified: true,
      recommended: true,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa expedita quisquam ipsum, atque deserunt accusamus delectus nostrum beatae neque at iure veritatis dolorem, rem autem itaque mollitia suscipit nobis.'
    },
    {
      id: 'asddsa',
      coinrankingUrl: "https://coinranking.com/exchange/XHp8eCjIDc+zb",
      uuid: "XHp8eCjIDc",
      name: "ZB",
      iconUrl: "https://cdn.coinranking.com/mDTK5qrmq/binance.svg",
      lastTickerCreatedAt: 1546960123000,
      numberOfMarkets: 128,
      ['24hVolume']: "693976176.906341",
      rank:2,
      marketShare: "10.92",
      verified: false,
      recommended: false,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa expedita quisquam ipsum, atque deserunt accusamus delectus nostrum beatae neque at iure veritatis dolorem, rem autem itaque mollitia suscipit nobis.'
    },
  ];


  return (
    <>
      <div className='table_body'>
        <div className='table_header flex'>
          <span>Exchanges</span>
          <span>24h Trade Volume</span>
          <span>Markets</span>
          <span>Changes</span>
        </div>
        <motion.div layout className='table_row'>
          {exchanges.map((exchange, i) => (
            <div key={i}>
              <div 
              key={i} 
              style={{cursor: 'pointer'}} 
              className='table_row_head flex' onClick={() => {
                  setCurrentUUID(currentUUID === exchange.uuid ? '' : exchange.uuid);
                  setShow(!show);
                }}>
                <span className='flex' style={{columnGap: '10px'}}>
                  <img style={{width: '30px'}} src={exchange.iconUrl} alt="icon" />{exchange.name}
                </span>
                <span>${millify(exchange['24hVolume'])}</span>
                <span>{exchange.numberOfMarkets}</span>
                <span>{exchange.marketShare}%</span>
              </div>
              <motion.p
                layout
                animate={{height: currentUUID === exchange.uuid ? 'auto' : '0'}}  
                initial={{height: '0px'}}  
                exit={{height: '0'}}
                transition={{ ease: "easeOut", duration: .3 }}
                className={`table_row_des`}
              >
                {exchange.desc}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Exchanges;