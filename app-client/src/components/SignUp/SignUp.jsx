import React from 'react';

import {Input, Button} from 'reactstrap';

import './SignUp.styles.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password, confirmPassword } = this.state;

        alert('sign up detected');
    }

    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit ={this.handleSubmit}>
                    <Input
                        type='email'
                        name='email'
                        value={this.email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                        placeholder='Email'
                    />
                    <Input
                        type='password'
                        name='password'
                        value={this.password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                        placeholder='Password'
                    />
                    <Input
                        type='password'
                        name='confirmPassword'
                        value={this.confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                        placeholder='Confirm Password'
                    />

                    <div className='buttons'>
                        <Button type='submit'>Sign Up</Button>
                    </div>  
                </form>
            </div>
        )
    }
}

export default SignUp;