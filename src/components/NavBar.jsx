import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
            <p className="navbar-brand" style={{color:'#FFF', fontSize:'25px',display: 'inline-flex'}}>The Solar System</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ml auto">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/Home" style={{color:'#FFF', fontSize:'25px'}}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Explore" style={{color:'#FFF', fontSize:'25px'}}>Explore</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Learn" style={{color:'#FFF', fontSize:'25px'}}>Learn</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/History" style={{color:'#FFF', fontSize:'25px'}}>History</Link>
                </li>
            </ul>
            </div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-success" type="submit">Search</button>
            </form>
        </div>
        </nav>
    </div>
  )
}

export default NavBar