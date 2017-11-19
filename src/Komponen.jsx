import React from 'react';
import {
    Route
} from 'react-router-dom';
import Beranda from './halaman/Beranda.jsx';
import Bootstrap from './halaman/Bootstrap.jsx';

class Komponen extends React.Component
{
    render()
    {
        return(
            <div>
                <Bootstrap/>
                <Route exact path="/" component={Beranda}/>
            </div>
        );
    }
}

export default Komponen;