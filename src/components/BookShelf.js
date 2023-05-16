import React from "react";
import "./bookshelf.css";

function Bookshelf({ books, cn, fn, setLoggedInUser}) {
    
  return (
    <div className="bookshelf">
      <h2 class="well"> Your Book List </h2>
     {cn !== "add" && <button onClick={()=>setLoggedInUser()}> Log Out </button> }
      <ul class="d-flex flex-row">
        {books && books.map((book) => (
          <li key={book.id} class="p-2">
            <button className={cn} onClick={() => fn(book)}>
              {cn==="add"?"Add to":"Remove from"} Shelf
            </button>
            <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt="img" />
            <h5>{book.volumeInfo.title}</h5>
            <small>{book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}</small>
          </li>
        ))}
      </ul>
     </div>
  );
}
export default Bookshelf;