import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Accordion</Link>
            <Link to="/search" className="item">Search</Link>
            <Link to="/dropdown" className="item">Dropdown</Link>
            <Link to="/translate" className="item">Translate</Link>
        </div>
    )
}

export default Navbar;