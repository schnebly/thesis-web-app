import React from 'react';

import './SignInPage.styles.css';

class SignInPage extends React.Component {
    constructor() {
        super();

        this.state = {
            something: null
        }
    }

    render() {
        return (
            <div className='sign-in-page'>
                This is the Sign In Page!
            </div>
        )
    }
}

export default SignInPage;