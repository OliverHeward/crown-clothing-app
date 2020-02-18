import React from 'react';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

import './Auth.scss';

const Auth = () => (
    <div className="auth">
        <SignIn/>
        <SignUp/>
    </div>
);

export default Auth;