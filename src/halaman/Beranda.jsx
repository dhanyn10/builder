import React from 'react';
//import Typekit from 'typekit';
import {
    Container,
    Card,
    CardHeader,
    CardBody,
    Row
} from 'reactstrap';

import './css/Beranda.css';

class Beranda extends React.Component
{
    componentWillMount() {
        const script = document.createElement("script");
        script.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
        document.body.appendChild(script);
    }
    render()
    {
        return(
            <div>
                <Container fluid>
                    <Row>
                        <div className="col-lg-4">
                            <div
                                className="github-card"
                                data-github="dhanyn10"
                                data-width="400"
                                data-height="319"
                                data-theme="medium">
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <Card className="border-secondary">
                                <CardHeader className="bg-secondary text-white">Minini Framework</CardHeader>
                                <CardBody>
                                    Simple and small css framework, similar to miligram.css. 
                                    This framework pic color for elements from flatuicolors.com
                                    <hr/>
                                    <a className="btn btn-success btn-sm" target="_blank" href="https://github.com/dhanyn10/minini">Check to Github</a>
                                </CardBody>
                            </Card>
                            <Card className="border-secondary">
                                <CardHeader className="bg-secondary text-white">Blogger Templates</CardHeader>
                                <CardBody>
                                    Templates for blogspot blogger
                                    <hr/>
                                    <a className="btn btn-success btn-sm" target="_blank" href="https://github.com/dhanyn10/blogger-templates">Check to Github</a>
                                </CardBody>
                            </Card>
                            <Card className="border-secondary">
                                <CardHeader className="bg-secondary text-white">Simple chat SocketIO</CardHeader>
                                <CardBody>
                                    Simpe example realtime chat web based application with SocketIO
                                    <hr/>
                                        <a className="btn btn-success btn-sm" target="_blank" href="https://github.com/dhanyn10/simple-chat-socketio">Check to Github</a> | <a className="btn btn-outline-secondary btn-sm" target="_blank" href="https://d-chat.herokuapp.com/">Test it</a>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Beranda;