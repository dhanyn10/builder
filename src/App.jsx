import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter
} from 'react-router-dom';

import {
    Helmet
} from 'react-helmet';

import Komponen from './Komponen.jsx';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Helmet>
                    <meta charSet="utf-8"/>
                </Helmet>
                <Komponen/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
