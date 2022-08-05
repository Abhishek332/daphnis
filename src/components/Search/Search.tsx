import React from 'react'
import "./Search.scss";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
    return (
        <div className="search">
            <BiSearchAlt2 size={30}/>
            <input type="text" />
            <button>Search</button>
        </div>
    )
}

export default Search