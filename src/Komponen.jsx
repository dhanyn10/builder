import React from 'react';
import {
    Route
} from 'react-router-dom';

import {
    Container, Row, Col
} from 'reactstrap';

import Beranda from './halaman/Beranda.jsx';

class Komponen extends React.Component
{
    render()
    {
        return(
            <div>
                <Route path="/" component={Beranda}/>
            </div>
        );
    }
}

export default Komponen;