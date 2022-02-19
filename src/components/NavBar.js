import React from 'react'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <header>
        <div className="d-flex flex-colunm flex-md-row p-3 border-bottom bg-secondary text-white">
            <h4 className="mr-md-auto">
                <a href="/" className="text-decoration-none texte-white">COUMBA</a>
            </h4>
            <nav className="btn-group">
              <Link to="/" className="btn btn-light">Acceuil</Link>
              <Link to="search" className="btn btn-light">Recherche</Link>
            </nav>
        </div>
       
    </header>
  )
}
