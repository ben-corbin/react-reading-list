import {Link} from 'react-router-dom'

function BooksList(props) {
  const { books } = props

  return (
    <>
      <h2>Books</h2>
      <ul className="books-list">
        {books.map(book => {
          return <li className="book" key={book.id}>
            <h3>{book.title}</h3>
            <Link to={`/books/${book.id}`} state={{book}}>
              View
              </Link>
          </li>
        })}
      </ul>
    </>
  )
}

export default BooksList