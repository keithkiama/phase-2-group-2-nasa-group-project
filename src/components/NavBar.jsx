import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <p className="navbar-brand">The Solar System</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <p className="nav-link" aria-current="page">Home</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link">Explore</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link">Learn </p>
                </li>
                <li className="nav-item">
                    <p className="nav-link">History</p>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default NavBar