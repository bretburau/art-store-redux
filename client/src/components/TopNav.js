import React from 'react'
// import { NavLink } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

const TopNav = () => {
    return(
        <Navbar color="light" light expand="md">
            <NavItem>
                <NavLink href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='/tags'>Tags</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='/upload'>Upload</NavLink>
            </NavItem>
        </Navbar>
    )
}

export default TopNav;