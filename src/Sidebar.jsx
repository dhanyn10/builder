import React from 'react';

import {
    NavLink
} from 'react-router-dom';

import {
    Nav,
    Card,
    CardBody
} from 'reactstrap';

class Sidebar extends React.Component
{
    render()
    {
        return(
            <Card>
                <Nav className="nav-stacked" vertical>
                    <NavLink className="nav-link" exact to="/" activeClassName="bg-success text-white">Beranda</NavLink>
                    <NavLink className="nav-link" exact to="#" activeClassName="bg-success text-white">halaman1</NavLink>
                    <NavLink className="nav-link" exact to="#" activeClassName="bg-success text-white">halaman2</NavLink>
                </Nav>
            </Card>
        );
    }
}

export default Sidebar;