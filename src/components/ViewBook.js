import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"

function ViewBook() {
  const [book, setBook] = useState(false)

  // const location = useLocation()

  // useEffect(() =>{
  //   if(location.state) {
  //     setBook(location.state.book)
  //   }
  // }, [location])

  const params = useParams()
  useEffect(function(){
    fetch(`http://localhost:4000/books/${params.id}`)
    .then(res => res.json())
    .then(json => {
      setBook(json)
    })
  },[params])
  
  if (!book) {
    return <p>Loading</p>
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.genre}</p>
      <p>{book.author}</p>
    </div>
  )
}

export default ViewBook