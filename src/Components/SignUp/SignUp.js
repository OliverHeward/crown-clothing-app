import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import { auth, createUserProfileDocument } from '../../Firebase/firebase.utils';

import './SignUp.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        // Array-Deconstruct state
        const { displayName, email, password, confirmPassword } = this.state;
        // If passwords do not match - alert and return out of function.
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try { 
            // Creates new user with email & password.
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            // Creates user profile from async function of user creation /w Email & Pass
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render() {
        // Array-Deconstruct state
        const { displayName, email, password, confirmPassword } = this.state; 
        return ( 
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <Input 
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required />
                     <Input 
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email Address"
                        required />
                     <Input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required />
                     <Input 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required />
                        <Button 
                            type="submit">Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;