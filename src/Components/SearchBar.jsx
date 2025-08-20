import  { useState } from 'react';
import './SearchBar.css';
const SearchBar = () => {
let [search, setSearch] = useState('');

  return (
    <div className="search-bar">
        <div className="InputContainer">
            <input  list='search'  value={search} onChange={(e)=> setSearch(e.target.value)} type="text" placeholder="Search..." />
        </div>
  
            <datalist id="search" className='search'>
                <option value="Forts" />
                <option value="Languages" />
                <option value="Paintings" />
                <option value="Music" />
                <option value="Hidden Places" />
                <option value="Traditional Cloths" />
            </datalist>
          <div className="explore-btn">
            <button className="button">
                <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                Explore
            </button>
          </div>

    </div>
  );
};

export default SearchBar;