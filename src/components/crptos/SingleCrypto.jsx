import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../UI/Card';
import millify from 'millify';
import { motion } from 'framer-motion';

const SingleCrypto = ({ crpto, i }) => {

  return (
    <>
    {crpto && 
      <motion.div
        layout
        animate={{opacity: crpto ? 1 : 0 , scale: crpto ? 1 : 0}}  
        initial={{opacity: 0, scale: 0}}  
        exit={{opacity: 0, scale: 0, transition: .3}}  
        transition={{ duration: .3 }}
      >
        <Link key={i} to={`/cryptocurrencies/${crpto?.uuid}`}>
          <Card class={'currency'}>
            <div>
              <div className="header flex space_between">
                <h2 className='name'>{i + 1} {crpto?.name}</h2>
                <img style={{width:'30px', height: '30px'}} src={crpto?.iconUrl}/>
              </div>
              <div className="details">
                <span>Price: {millify(crpto?.price)}</span>
                <span>Market Cap: {millify(crpto?.marketCap)}</span>
                <span>Daily Change: {millify(crpto?.change)}%</span>
              </div>
            </div>
          </Card>
        </Link>
      </motion.div>
      }
    </>
  )
}

export default SingleCrypto