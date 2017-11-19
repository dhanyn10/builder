import React, { Component } from 'react';
import './App.css';
import {
    Container, Row, Col
} from 'reactstrap';

import {
    BrowserRouter
} from 'react-router-dom';

import {
    Helmet
} from 'react-helmet';

import Navigasi from './Navigasi.jsx';
import Sidebar from './Sidebar.jsx';
import Komponen from './Komponen.jsx';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Helmet>
                    <meta charSet="utf-8"/>
                </Helmet>
                <Navigasi/>
                <Container fluid>
                    <Row>
                        <Col md="12">
                            <Komponen/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
