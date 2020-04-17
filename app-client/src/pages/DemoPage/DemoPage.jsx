import React from 'react';

import './DemoPage.styles.css';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Button, Row } from 'reactstrap';

class DemoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
            algorithm: 'Algorithm',
            dropdownOpen: false
        };
    }

    toggle = () => {
        const { dropdownOpen } = this.state;
    
        this.setState({dropdownOpen: !dropdownOpen});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        alert('API POST');
    }

    changeAlgo = (event) => {
        this.setState({algorithm: event.target.value});
    }

    render() {
        return (
            <div className='demo-page'>
                <form onSubmit={this.handleSubmit}>
                    <Input type='text' placeholder='Input Text Here'/>
                    <Row>
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
                        <Button type='submit'>Summarize</Button>
                    </Row>
                    
                </form>
            </div>
        )
    }

}

export default DemoPage;