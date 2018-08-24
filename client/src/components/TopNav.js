import React from 'react'
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


    export default class TopNav extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        render() {
          return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav pills className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/upload/">Upload</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/tags">Tags</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
        }
      }

// <Nav>
        //     <NavItem>
        //         <NavLink href='/'>Home</NavLink>
        //     </NavItem>
        //     <NavItem>
        //         <NavLink href='/tags'>Tags</NavLink>
        //     </NavItem>
        //     <NavItem>
        //         <NavLink href='/upload'>Upload</NavLink>
        //     </NavItem>
        // </Nav>