import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router'
import {Link} from 'react-router-dom'
import './App.css';
import BooksList from './components/BooksList'
import AddBook from './components/AddBook'
import ViewBook from './components/ViewBook'

function App() {

  const [books, setBooks] = useState([])

  useEffect(function(){
    fetch('http://localhost:4000/books')
    .then(res => res.json())
    .then(json => {
      console.log(json)
      setBooks(json)
    })
  }, [])

  return (
    <div className="App">
      <h1>📚 Reading List</h1>
      <nav>
        <ul>
          <li>
            <Link to="/books">Books</Link>
            </li>
          <li>
            <Link to="/books/addbook">Add Book</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/books" element={<BooksList books={books} /> } />
        <Route path="/books/addbook" element={<AddBook books={books} setBooks={setBooks} /> } />
        <Route path="/books/:id" element={<ViewBook  />} />
      </Routes>
    </div>
  );
}

export default App;
