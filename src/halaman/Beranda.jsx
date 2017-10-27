import React from 'react';
import {
    //grid
    Container,
    Row,
    //card
    Card,
    CardHeader,
    CardBody,
    Button
} from 'reactstrap';

import './css/Beranda.css';

class Beranda extends React.Component
{
    render()
    {
        return(
            <div>
                <Container fluid>
                    <Row>
                        <div className="col-md-4">
                            <Card>
                                <CardHeader className="bg-secondary text-white">
                                    Minini Framework
                                </CardHeader>
                                <CardBody>
                                    Simple CSS Framework, similar to mini.css and miligram.css
                                    <hr/>
                                    <div className="btn-group">
                                        <Button className="btn btn-sm btn-danger">Developed</Button>
                                        <Button className="btn btn-sm btn-success">Open Source</Button>
                                        <Button className="btn btn-sm btn-success">Public</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <CardHeader className="bg-secondary text-white">
                                    Blogger Templates
                                </CardHeader>
                                <CardBody>
                                    Collection of Templates for blogspot blogger
                                    <hr/>
                                    <div className="btn-group">
                                        <Button className="btn btn-sm btn-secondary">Developed</Button>
                                        <Button className="btn btn-sm btn-success">Open Source</Button>
                                        <Button className="btn btn-sm btn-success">Public</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <CardHeader className="bg-secondary text-white">
                                    Alfa
                                </CardHeader>
                                <CardBody>
                                    Online CV maker for everyone
                                    <hr/>
                                    <div className="btn-group">
                                        <Button className="btn btn-sm btn-danger">Developed</Button>
                                        <Button className="btn btn-sm btn-danger">Closed Source</Button>
                                        <Button className="btn btn-sm btn-secondary">Private</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <CardHeader className="bg-secondary text-white">
                                    Laravel google login
                                </CardHeader>
                                <CardBody>
                                    Simple implementation third party service login with google
                                    <hr/>
                                    <div className="btn-group">
                                        <Button className="btn btn-sm btn-success">ready</Button>
                                        <Button className="btn btn-sm btn-success">Open Source</Button>
                                        <Button className="btn btn-sm btn-success">public</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <CardHeader className="bg-secondary text-white">
                                    Simple chat SocketIO
                                </CardHeader>
                                <CardBody>
                                    simple chat using socket.io, with several effects 
                                    <hr/>
                                    <div className="btn-group">
                                        <Button className="btn btn-sm btn-success">ready</Button>
                                        <Button className="btn btn-sm btn-success">Open Source</Button>
                                        <Button className="btn btn-sm btn-success">public</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <CardHeader className="bg-secondary text-white">
                                    MatematikaJS
                                </CardHeader>
                                <CardBody>
                                    Opensource Javascript Library that allows user in client side to make calculation 
                                    <hr/>
                                    <div className="btn-group">
                                        <Button className="btn btn-sm btn-secondary">developed</Button>
                                        <Button className="btn btn-sm btn-success">Open Source</Button>
                                        <Button className="btn btn-sm btn-success">public</Button>
                                    </div>
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