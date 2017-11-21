import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import {
    Container, Row, Col
} from 'reactstrap';

import Beranda from './halaman/Beranda.jsx';
import mIndex from './halaman/minini/Index.jsx';

var minini = "minini";
class Komponen extends React.Component
{
    render()
    {
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Beranda}/>
                </Switch>
                <Switch>
                    <Route exact path={`${minini}/`} component={mIndex}/>
                </Switch>
            </div>
        );
    }
}

export default Komponen;