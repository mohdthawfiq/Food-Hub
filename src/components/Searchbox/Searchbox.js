import React, { useState } from "react";
import style from './Searchbox.module.scss'

function Searchbox() {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText);
    setSearchText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Recipies"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default Searchbox;
