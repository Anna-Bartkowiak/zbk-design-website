import React, { useState } from 'react';
import SignIn from '../components/SignIn';
// import SignInSuccess from '../components/SignInSuccess';


export const SignInPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    };

    return (
        <>
            <SignIn />
            {!isSubmitted ? (
                <SignIn submitForm={submitForm} />)
                : <SignIn />}
        </>
    );
};

export default SignInPage;
