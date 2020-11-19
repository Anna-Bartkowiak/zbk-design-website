import React from 'react'
import { ResultContainer, ResultWrapper, ResultCard, ResultH1, ResultP, ResultSpan, ResultP1, ResultP2, ResultLinkWrapper, ResultLinks } from './ResultElements';

export const Result = () => {
    return (
        <ResultContainer>
            <ResultWrapper>
                <ResultCard>
                    <ResultH1>dla powierzchni:</ResultH1>
                    <ResultP>
                        <ResultSpan>65m2</ResultSpan>
                    </ResultP>
                    <ResultP1>Koszt projektu wyniesie:</ResultP1>
                    <ResultP>
                        od <ResultSpan>5525 zł</ResultSpan> do 8775zł
                    </ResultP>
                    <ResultP1>Koszt realizacji:</ResultP1>
                    <ResultP>
                        od <ResultSpan>5525</ResultSpan> zł do 8775zł
                    </ResultP>

                    <ResultP2>Biorąc pod uwagę lokalizację i średnią kosztów remontowych w danym regionie bez materiałów</ResultP2>

                    <ResultLinkWrapper>
                        <ResultLinks>nowe obliczenia</ResultLinks>
                        <ResultLinks>usuń</ResultLinks>
                    </ResultLinkWrapper>
                </ResultCard>

                <ResultCard>
                    <ResultH1>dla powierzchni:</ResultH1>
                    <ResultP>
                        <ResultSpan>65m2</ResultSpan>
                    </ResultP>
                    <ResultP1>Koszt projektu wyniesie:</ResultP1>
                    <ResultP>
                        od <ResultSpan>5525 zł</ResultSpan> do 8775zł
                    </ResultP>
                    <ResultP1>Koszt realizacji:</ResultP1>
                    <ResultP>
                        od <ResultSpan>5525</ResultSpan> zł do 8775zł
                    </ResultP>

                    <ResultP2>Biorąc pod uwagę lokalizację i średnią kosztów remontowych w danym regionie bez materiałów</ResultP2>

                    <ResultLinkWrapper>
                        <ResultLinks>nowe obliczenia</ResultLinks>
                        <ResultLinks>usuń</ResultLinks>
                    </ResultLinkWrapper>
                </ResultCard>

                <ResultCard>
                    <ResultH1>dla powierzchni:</ResultH1>
                    <ResultP>
                        <ResultSpan>65m2</ResultSpan>
                    </ResultP>
                    <ResultP1>Koszt projektu wyniesie:</ResultP1>
                    <ResultP>
                        od <ResultSpan>5525 zł</ResultSpan> do 8775zł
                    </ResultP>
                    <ResultP1>Koszt realizacji:</ResultP1>
                    <ResultP>
                        od <ResultSpan>5525</ResultSpan> zł do 8775zł
                    </ResultP>

                    <ResultP2>Biorąc pod uwagę lokalizację i średnią kosztów remontowych w danym regionie bez materiałów</ResultP2>

                    <ResultLinkWrapper>
                        <ResultLinks>nowe obliczenia</ResultLinks>
                        <ResultLinks>usuń</ResultLinks>
                    </ResultLinkWrapper>
                </ResultCard>
            </ResultWrapper>
        </ResultContainer>
    )
}

export default Result;