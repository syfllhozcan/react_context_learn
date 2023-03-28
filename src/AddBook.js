import React, { useContext, useState } from 'react';
import { BookContext } from './BookContext';
import './AddBook.css';

function AddBook() {
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [books, setbooks] = useContext(BookContext);
    const savebook = (e) => {
        e.preventDefault(); //refreş olmasını engeller yenilenmez
        setbooks(data => [...data, { name: name, price: 'TL ' + price }])
        setname(''); //eklendikten sonra input içini boş yaptık
        setprice('');
    }

    return (
        <div>
            <form onSubmit={savebook}>
                <input type="text" placeholder='Kitap adı..' value={name} onChange={(e) => setname(e.target.value)} />
                <input type="text" placeholder='Kitap fiyatı..' value={price} onChange={(e) => setprice(e.target.value)} />

                <button disabled={!name}>Kaydet</button>
            </form>
        </div>
    )
}

export default AddBook
