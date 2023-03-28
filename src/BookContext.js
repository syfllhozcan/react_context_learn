import React,{useState,createContext} from 'react';

export const BookContext=createContext();
export const BookProvider=props=>{

    const [books, setbooks]=useState([
        {name:'ADIM KIRMIZI', price:'TL 55', id: 1 },
        {name:'HAYVAN ÇİFTLİĞİ', price:'TL 90', id: 2 },
        {name:'SİTEM', price:'TL 75', id: 3 },
    ])

    return <BookContext.Provider value={[books,setbooks]}>{props.children}</BookContext.Provider>
}