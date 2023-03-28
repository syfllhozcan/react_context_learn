import { BookProvider } from './BookContext';
import Nav from './Nav';
import AddBook from './AddBook';
import Book from './Book';
import './App.css';


function App() {
  return (
    <BookProvider>

      <div className="App">
        <Nav />
        <div className="book-div">
          <div>
            <h2>KİTAP LİSTESİ</h2>
            <Book />
          </div>
          <div>
            <AddBook />
          </div>
        </div>
      </div>
    </BookProvider>
  );
}

export default App;
