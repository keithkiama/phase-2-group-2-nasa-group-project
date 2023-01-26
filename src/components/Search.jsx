import React,{useState} from 'react'

const Search = ({search,setSearch}) => {
 const handleSearch=(event) => {setSearch(event.target.value)}
  return (
    <div>
      <form className="d-flex" role="search">
                <input className="form-control me-2" type="text" placeholder="Search" value={search} onChange={handleSearch} aria-label="Search"/>
                {/* <button className="btn btn-success" type="submit">Search</button> */}
            </form>
      {/* <input className='bg-light' type="text" placeholder='search' value={search} onChange={handleSearch} /> */}
    </div>
  )

}

export default Search