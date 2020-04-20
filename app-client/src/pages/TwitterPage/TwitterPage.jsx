import React from 'react';

import './TwitterPage.styles.css';

import { Jumbotron, Container, Button } from 'reactstrap';
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/entry.webpack';

import paper  from '../../Schnebly-CCWC-2019.pdf';

class TwitterPage extends React.Component {
    constructor() {
        super();

        this.state = {
            numPages: null,
            pageNumber: 1,
        };
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }

    goToPrevPage = () => {
        if (this.state.pageNumber === 1) {
            return;
        }
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    }
    goToNextPage = () => {
        if (this.state.pageNumber === 6) {
            return;
        }
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div className='twitter-page'>
                <Jumbotron fluid>
                    <Container fluid>
                    <h1 className="display-3">Random Forest Twitter Bot Classifier</h1>
                    <p className="lead">A published research paper on using the random forest machine learning algorithm in order to classify twitter accounts as genuine or fake</p>
                    </Container>
                </Jumbotron>
                <Container>
                    <Document file={paper} onLoadSuccess={this.onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} width={1100} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                    <Button onClick={this.goToPrevPage} style={{margin: '2%'}}>Prev</Button>
                    <Button onClick={this.goToNextPage}>Next</Button>
                </Container>
            </div>
        );
    } 
};

export default TwitterPage;