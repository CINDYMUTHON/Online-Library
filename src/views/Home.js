import { useEffect, useState } from "react"
import React from 'react'
import Header from '../components/Header'
import Login from '../components/Login';
import Bookshelf from "../components/BookShelf";
import { Routes, Route } from 'react-router-dom';
import SearchForm from "../components/SearchForm";
import App from '../components/Footer';

function Home() {
  const [books, setBooks] = useState();
  const [search, setSearch] = useState("");
  const [loggedInUser, setLoggedInUser] = useState();
    useEffect(()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search==="" ? "search+terms": search}`)
        .then(r=>r.json())
        .then(r=>setBooks(r.items))
        .catch(e=>console.log(e))
    },[search]);
    function addToList(book){
        fetch(`http://localhost:8001/users/${loggedInUser.id}`,{method:"PATCH",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({...loggedInUser, bookshelf:[...loggedInUser.bookshelf,book]})})
      .then(r=>r.json())
      .then(r=>setLoggedInUser(r))
      .catch(e=>console.log(e))
    }
    function removeFromList(book){
      fetch(`http://localhost:8001/users/${loggedInUser.id}`,{method:"PATCH",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({...loggedInUser, bookshelf:loggedInUser.bookshelf.filter(b => b.id !== book.id)})})
      .then(r=>r.json())
      .then(r=>setLoggedInUser(r))
      .catch(e=>console.log(e))
    }
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element = {<>
          <div className='header-content flex flex-c text-center'>
                <h2 className='header-title text-capitalize text-black'>Find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3 text-black'>This is an application to help you search for a book with the Books:<br/> Author, Title or The Year Of Publication! <br /> HAPPY READING!! </p>
                <SearchForm setSearch={setSearch} search={search}/>
            </div> 
            {search!==""?<Bookshelf fn={addToList} books={books} cn="add"/> : <></>}
        </>}/>
        <Route path = "/login" element = {<Login setLoggedInUser={setLoggedInUser}/>} />
        <Route path = "/bookshelf" element = {loggedInUser && <Bookshelf books={loggedInUser.bookshelf} cn="remove" fn={removeFromList} setLoggedInUser={setLoggedInUser}/>} />
      </Routes>
      <App />
    </main>
  )
}

export default Home