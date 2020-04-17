import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  
import { Link } from 'react-router-dom';

import './Header.styles.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({isOpen: !this.isOpen});
    } 

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">James Thesis</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.isOpen} navbar>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/twitter-bot/">Bot Detection</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/TF-IDF/">TF-IDF</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/cosine/">Cosine Similarity</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/entropy/">Entropy</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/pointer-generator/">Pointer-Generator</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/web-app/">Web App</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/demo/">Demo</NavLink>
                        </NavItem>

                    </Nav>

                        <Link className='user-link' to='/signin'>{this.props.sessionUser ? "Sign Out" : "Sign In"}</Link>
                    
                    </Collapse>
                </Navbar>
            </div>
        );
    }
    
}

export default Header;

