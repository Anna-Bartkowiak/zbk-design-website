import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
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

const SignIn = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(
        submitForm,
        validate
    );


    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"></Icon>
                </FormWrap>
                <FormContent>
                    <Form action="#" onSubmit={handleSubmit}>
                        <FormH1>Zapisz się na newsletter</FormH1>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormInput
                            type='email'
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p>{errors.email}</p>}
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput
                            type='password'
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            required
                        />
                        {errors.password && <p>{errors.password}</p>}
                        <FormButton type='submit'>Wyślij</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </Container>
        </>
    );
};

export default SignIn;
