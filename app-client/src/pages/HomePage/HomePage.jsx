import React from 'react';

import './HomePage.styles.css';

class HomePage extends React.Component {
    constructor() {
        super();

        this.state = {
            something: null
        }
    }

    render() {
        return (
            <div className='home-page'>
                This is the Home Page!
            </div>
        )
    }
}

export default HomePage;