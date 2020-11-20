import React from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SigninElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"></Icon>
                </FormWrap>
                <FormContent>
                    <Form action="#">
                        <FormH1>Zapisz się na newsletter</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Wyślij</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </Container>
        </>
    );
};

export default SignIn;
