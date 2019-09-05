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
import Status from './Status';
import Clock from './Clock';




export default class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <div className="top">
                <Container>
                    <div>
                        <Clock />
                        <h1 className="RoomName">Alpha</h1>
                    </div>
                </Container>
                <Container>
                    <Status />
                </Container>

            </div>
        );
    }
}