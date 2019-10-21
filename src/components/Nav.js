import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

const NavigationMeny = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    const linkColor = { color: '#12fe06', fontStyle: 'italic' }
    return (
        <div className="nav-cent">
            <Nav tabs >
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle nav caret style={linkColor}>
                        USLUGE
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>STOMATOLOGIJA</DropdownItem>
                        <Link to="/Konzervativna">
                            <DropdownItem style={linkColor}> Konzervativna stomatologija</DropdownItem>
                        </Link>
                        <Link to="/estetska">
                            <DropdownItem style={linkColor}> Estetska stomatologija</DropdownItem>
                        </Link>
                        <Link to="/decija">
                            <DropdownItem style={linkColor}> Dečija stomatologija</DropdownItem>
                        </Link>
                        <Link to="/hirurgija">
                            <DropdownItem style={linkColor}> Oralna hirurgija</DropdownItem>
                        </Link>
                        <Link to="/paradontologija">
                            <DropdownItem style={linkColor}> Paradontologija</DropdownItem>
                        </Link>
                        <DropdownItem header>PROTETIKA</DropdownItem>
                        <Link to="/protetika">
                            <DropdownItem style={linkColor}> Porculanske plombe</DropdownItem>
                            <DropdownItem style={linkColor}> Metalokeramičke krunice i mostovi</DropdownItem>
                            <DropdownItem style={linkColor}> Implantologija</DropdownItem>
                        </Link>
                        <DropdownItem header>ORTODONCIJA</DropdownItem>
                        <Link to="/ortodoncija">
                            <DropdownItem style={linkColor}> Mobilni ortodonski aparati</DropdownItem>
                            <DropdownItem style={linkColor}> Fiksni ortodonski aparati</DropdownItem>
                        </Link>
                    </DropdownMenu>
                </Dropdown>
                <Link to="/galerija">
                    <NavItem>
                        <NavLink style={linkColor}>GALERIJA</NavLink>
                    </NavItem>
                </Link>
            </Nav>
        </div>
    );
}

export default NavigationMeny;
