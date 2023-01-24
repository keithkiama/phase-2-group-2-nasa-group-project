import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
            <p className="navbar-brand">The Solar System</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ml auto">

                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Explore">Explore</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Learn">Learn</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/History">History</Link>
                </li>
            </ul>
            <form className="d-flex" role="search">

                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            </div>
        </div>
        </nav>
    </div>
  )
}

export default NavBar