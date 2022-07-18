import React from 'react'

import './cards.css'

const Card = (props) => {
  return (
    <div className={`card ${props.class}`}>
      {props.children}
    </div>
  )
}

export default Card