import React from 'react'
import './Booklist.css'

function Booklist({name, price}) {
  return (
    <div className='books'>
      <h3>{name}</h3>
      <p>{price}</p>   
    </div>
  )
}

export default Booklist
