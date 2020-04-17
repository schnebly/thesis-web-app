import React from 'react';

import { Input, Button } from 'reactstrap';

import './SignIn.styles.css';



class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({email: '', password: ''});
        // } catch (error) {
        //     console.log(error);
        // }

        alert('sign in detected');
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                
                <form onSubmit={this.handleSubmit}>
                    <Input name='email' type= 'email' label='email' onChange={this.handleChange} value={this.state.email} required placeholder='Email' />
                    <Input name='password' type='password' label='password' onChange={this.handleChange} value={this.state.password} required placeholder='Password' />
                    <div className='buttons'>
                        <Button type='submit' value='Submit Form'>Sign in</Button>
                        {/* <CustomButton isGoogleSignIn onClick={singInWithGoogle}>Sign in with Google</CustomButton> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;