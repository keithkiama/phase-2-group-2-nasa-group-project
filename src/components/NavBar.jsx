import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
            <p className="navbar-brand" style={{color:'#FFF', fontSize:'10mm',display: 'inline-flex'}}>The Solar System</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml auto">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/" style={{color:'#FFF', fontSize:'25px'}}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/learn" style={{color:'#FFF', fontSize:'25px'}}>Learn</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/explore" style={{color:'#FFF', fontSize:'25px'}}>Explore</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/history" style={{color:'#FFF', fontSize:'25px'}}>History</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        <Outlet/>
    </div>
  )
}

export default NavBar