import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/pieces'>Pieces</Link></li>
            <li><Link to='/tags'>Tags</Link></li>
        </ul>
    )
}

export default Navbar;