import React from 'react';

import './DemoPage.styles.css';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Button, Row, FormGroup, Form, Label, Col} from 'reactstrap';

class DemoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
            algorithm: 'Select Algorithm',
            dropdownOpen: false,
            outputSummary: 'The generated summary will appear here...'
        };
    }

    toggle = () => {
        const { dropdownOpen } = this.state;
        this.setState({dropdownOpen: !dropdownOpen});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if (this.state.algorithm === 'Select Algorithm') {
            alert('Please select an algorithm from the dropdown menu');
            return;
        }
        console.log(this.state);
        alert('API POST');

        this.setState({outputSummary: "Example Output Summary"});
    }

    changeAlgo = (event) => {
        this.setState({algorithm: event.target.value});
    }

    handleChange = (event) => {
        this.setState({inputText: event.target.value, outputSummary: 'The generated summary will appear here...'});
    }

    render() {
        return (
            <div className='demo-page'>
                <h1 className='demo-title'>Text Summarization Demo</h1>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <h3>Input Text</h3>
                    <Input type="textarea" name="text" id="inputText" rows="10" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret>
                                    {this.state.algorithm}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem value='TF-IDF' onClick={this.changeAlgo}>TF-IDF</DropdownItem>
                                    <DropdownItem value='Entropy' onClick={this.changeAlgo}>Entropy</DropdownItem>
                                    <DropdownItem value='NER' onClick={this.changeAlgo}>NER</DropdownItem>
                                    <DropdownItem value='TextRank' onClick={this.changeAlgo}>TextRank</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Button type='submit' color="primary">Summarize</Button>
                        </Col>
                    </Row>
                </FormGroup>
                </Form>
                <h3>Output Summary</h3>
                <div className='output-div'>
                    {this.state.outputSummary}
                </div>
            </div>
        )
    }

}

export default DemoPage;