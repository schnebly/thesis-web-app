import React from 'react';

import './HomePage.styles.css';

import CardDirectory from '../../components/CardDirectory/CardDirectory';
import { Jumbotron, Container } from 'reactstrap';

const HomePage = () => (
    <div className='home-page'>
        <Jumbotron fluid>
            <Container fluid>
            <h2 className="display-3"> Distilling Public Data from Multiple Sources for Cybersecurity Applications</h2>
            <p className="lead">James Schnebly's Master's Thesis at University of Nevada, Reno</p>
            </Container>
        </Jumbotron>
        <CardDirectory />
    </div>
);
            

export default HomePage;