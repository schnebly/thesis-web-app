import React from 'react';

import { Row, Col } from 'reactstrap';

import './SignInPage.styles.css';
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';

const SignInPage = () => (
    <div className='sign-in-page'>
        <Row>
            <Col>
                <SignIn />
            </Col>
            <Col>
                <SignUp />
            </Col>
        </Row>
    </div>
)


export default SignInPage;