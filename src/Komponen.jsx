import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import Beranda from './halaman/Beranda.jsx';
import Navigasi from './Navigasi.jsx';

class Komponen extends React.Component
{
    render()
    {
        return(
            <div>
                <Navigasi/>
                <Switch>
                    <Route exact path="/" component={Beranda}/>
                </Switch>
            </div>
        );
    }
}

export default Komponen;