import React,{useContext,useState} from 'react';
import Booklist from './Booklist';
import { BookContext } from './BookContext';
import './Book.css'

function Book() {
    const [books,setbooks]=useContext(BookContext);
  return (
    <div className='listbooks'>
      {books.map(item=><Booklist name={item.name} price={item.price}/>)}
    </div>
  )
}

export default Book
