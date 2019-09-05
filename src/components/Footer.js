import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './RoomStyle.css';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';



export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <div>
                <div className="footer">
                    <Container>
                        <NavbarBrand className="footerContent">Next</NavbarBrand>
                        <NavbarBrand className="footerContent2">Available <span id="afterthing">after 5:00pm</span></NavbarBrand>
                    </Container>
                </div>
            </div>
        );
    }
}