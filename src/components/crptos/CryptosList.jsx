import React from 'react'
import SingleCrypto from './SingleCrypto';
import Spinner from '../../UI/Spinner';
import { AnimatePresence, motion } from 'framer-motion';

const CryptosList = ({ crptos, isLoading }) => {

  return (
    <div>
      <h3 className='amount'>currencies: {crptos.length}</h3>
      {isLoading ? <Spinner /> : 
          <motion.div 
          layout 
          className='cards_container'>
            <AnimatePresence>
                {crptos.map((crpto, i) =>
                  <SingleCrypto key={i} i={i} crpto={crpto}/>
                  )}
            </AnimatePresence>
          </motion.div>
        }
    </div>
  )
}

export default CryptosList