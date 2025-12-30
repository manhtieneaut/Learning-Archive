import { useState } from 'react';
import './search.scss';

const Search = ({ onSearch }) => {
  const [searchKey, setSearchKey] = useState('');

  const handleSearch = () => {
    onSearch(searchKey);
  };

  return (
    <div className='search-section'>
      <div className="search-block">
        <input
          type="text"
          placeholder="Search"
          maxlength="256"
          className="search-input"
          value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
        <button className="search-button" onClick={handleSearch}></button>
      </div>
    </div>
  );
};

export default Search;