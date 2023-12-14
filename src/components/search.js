import React from 'react';
import "../style.css";

const Search = ({search, setInput}) => {

  const inputHandler=(e)=>{
    setInput(e.target.value);
  };

  return (

    <div className='search'>
      <input type="text" name="search" onChange={inputHandler}/>
      <button onClick={search}>search</button>
    </div>
  )
}

export default Search;  
