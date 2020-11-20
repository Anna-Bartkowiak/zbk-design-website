import React, { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // db.collection("contacts").add({
        //     email: email,
        //     password: password
        // })
        //     .then(() => {
        //         alert('Wiadomość wysłana');
        //     })

        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;