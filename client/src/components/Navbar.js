import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/tags'>Tags</NavLink></li>
            <li><NavLink to='/upload'>Upload</NavLink></li>
        </ul>
    )
}

export default Navbar;