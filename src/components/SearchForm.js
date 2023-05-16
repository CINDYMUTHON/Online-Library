import React, { useRef, useEffect} from 'react';
import "./SearchForm.css";

const SearchForm = ({setSearch, search}) => {
const searchText = useRef('');


  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchText.current.value);
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type = "text" className='form-control' placeholder={search===""?'Search for a Book' : search} ref = {searchText} />
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;