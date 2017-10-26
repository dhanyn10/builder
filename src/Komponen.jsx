import React from 'react';
import {
    Route
} from 'react-router-dom';
import Beranda from './halaman/Beranda.jsx';

class Komponen extends React.Component
{
    render()
    {
        return(
            <div>
                <Route exact path="/" component={Beranda}/>
            </div>
        );
    }
}

export default Komponen;