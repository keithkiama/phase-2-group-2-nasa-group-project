import React from 'react'

const Search = ({search,setSearch}) => {
 const handleSearch=(event) => {setSearch(event.target.value)}
  return (
    <div>
      <form style={{padding:'20px 0 20px 0',paddingLeft: '235px'}} className="d-flex bg-dark" role="search">
                <input style={{width:'60rem'}}className="form-control me-2" type="text" placeholder="Search" value={search} onChange={handleSearch} aria-label="Search"/>
                {/* <button className="btn btn-success" type="submit">Search</button> */}
            </form>
      {/* <input className='bg-light' type="text" placeholder='search' value={search} onChange={handleSearch} /> */}
    </div>
  )

}

export default Search