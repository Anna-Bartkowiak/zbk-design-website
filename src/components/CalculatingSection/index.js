import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import {
    CalculatingContainer,
    CalculatingBackground,
    CalculatingText,
    CalculatingH2,
    CalculatingImg,
    CalculatingForm,
    CalculatingFormSubmit,
    CalculatingInputs,
    CalculatingLabel,
    CalculatingInput,
    CalculatingBtnWrapper
} from './CalculatingElements';


const CalculatingSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    const initialState = {
        area: '',
        rooms: ''
    };

    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log("submitted");
        console.log(state);

        for (let key in state) {
            if (state[key] === '') {
                setError(`Wpisz ${key}`)
                return
            }
        }
        setError('');
    };

    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({ ...prev, [inputName]: value }));

    };

    return (
        <CalculatingContainer id="pricing">
            <CalculatingText>
                <CalculatingH2>
                    ciekawi cię ile wyniesie projekt<br />twojego mieszkania?
                </CalculatingH2>
            </CalculatingText>

            <CalculatingBackground>
                <CalculatingImg />

                <CalculatingForm>
                    <CalculatingFormSubmit onSubmit={handleSubmit}>
                        <CalculatingInputs>
                            <CalculatingLabel htmlFor="area">Powierzchnia w m2</CalculatingLabel>
                            <CalculatingInput
                                type="text"
                                name="area"
                                value={state.area}
                                onChange={handleInput}
                            />

                            <CalculatingLabel htmlFor="rooms">Ilosć pomieszczeń</CalculatingLabel>
                            <CalculatingInput
                                type="number"
                                name="rooms"
                                value={state.rooms}
                                onChange={handleInput}
                            />
                        </CalculatingInputs>
                    </CalculatingFormSubmit>

                    <CalculatingBtnWrapper>
                        <Button
                            to='/'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            bigger="true"
                            fontbigger="true">
                            oblicz
                        </Button>
                    </CalculatingBtnWrapper>
                </CalculatingForm>

            </CalculatingBackground>

        </CalculatingContainer>
    )
}

export default CalculatingSection;