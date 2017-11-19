import React, { Component } from 'react';
import './App.css';
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
                <Komponen/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
