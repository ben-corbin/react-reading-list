import { useState } from "react"

function AddBook(props) {

   const { books, setBooks } = props

   const [newBookData, setNewBookData] = useState({ 
     title: "",
     author: "",
     genre: "Horror",
   })

   function handleSubmit(event) {
     event.preventDefault()

     const options = {
      method: 'POST',
      headers : {
         'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        title: newBookData.title,
        author: newBookData.author,
        genre: newBookData.genre
      })
    }
 
   fetch("http://localhost:4000/books", options)
     .then(res => res.json())
     .then(json => {
       
       console.log("Book created!", json)
       setBooks( [...books, json])
 
       setNewBookData({
        title: "",
        author: "",
        genre: "Horror",
       })
 
     })
   }

   function handleChange(event){

    const inputName = event.target.name
    const inputValue = event.target.value
    
    if (inputName === "title") {
      setNewBookData({...newBookData, title: inputValue})
    }
    if (inputName === "author") {
      setNewBookData({...newBookData, author: inputValue})
    }
    if (inputName === "genre") {
      setNewBookData({...newBookData, genre: inputValue})
    }
   }

  return (
    <form class="form" onSubmit={handleSubmit}>
      <h2>Add Book</h2>

      <label>Title
        <input id="title" value={newBookData.title} name="title" type="text" required onChange={handleChange}/>
      </label>

      <label>Author
        <input id="author" value={newBookData.author} name="author" type="text" required onChange={handleChange} />
      </label>

      <label>Genre
        <select id="genre"value={newBookData.genre} name="genre" required onChange={handleChange}>
            <option>Horror</option>
            <option>Science Fiction</option>
            <option>Nonfiction</option>
            <option>History</option>
            <option>Thriller</option>
        </select>
      </label>
      
      <div>
        <button type="submit">
          Add
        </button>
      </div>
    </form>
  )
}

export default AddBook
