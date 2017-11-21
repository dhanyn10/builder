import React from 'react';
/*minini style*/
import 'minini/style/global.css';
import 'minini/style/grid.css';
import 'minini/style/container.css';
import 'minini/style/responsive.css';
/*minini component*/
import 'minini/component/navbar.css';
export default class Index extends React.Component{
    render()
    {
        return(
            <div>
                <nav className="nav nav-g-sm bg-blue nav-sm text-white">
                    <ul className="navbar navnav">
                        <li className="nav-item">
                            <a cass="nav-link">link 1</a>
                        </li>
                        <li className="nav-item">
                            <a cass="nav-link">link 2</a>
                        </li>
                        <li className="nav-item">
                            <a cass="nav-link">link 3</a>
                        </li>
                    </ul>
                    <ul className="navbar navnav right">
                        <li className="nav-item">
                            <a cass="nav-link">right 1</a>
                        </li>
                        <li className="nav-item">
                            <a cass="nav-link">right 2</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}