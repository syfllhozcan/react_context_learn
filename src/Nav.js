import React, { useContext } from 'react';
import {BookContext} from './BookContext'
import './Nav.css';

function Nav() {
    const [books,setbooks]=useContext(BookContext)
  return (
    <div className='navbar'>
      <h1>LOGO</h1>
      <p>Kitaplıktaki kitap sayısı : {books.length}</p>
    </div>
  )
}

export default Nav
