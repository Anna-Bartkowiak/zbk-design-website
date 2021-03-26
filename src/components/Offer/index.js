import React, { useState } from 'react';
import {
    OfferContainer,
    OfferTextWrapper,
    OfferH2,
    OfferH3,
    OfferP,
    OfferTabWrapper,
    OfferPWrapper
} from './OfferElement';
import {
    Tabs as OfferTabs,
    Tab as OfferTab,
    TabPanel as OfferTabPanel,
    TabList as OfferTabList
} from 'react-web-tabs';

const OfferSection = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <OfferContainer id='offer'>
            <OfferTextWrapper>
                <OfferH2>oferta.</OfferH2>
                <OfferH3>Nasza współpraca przy tworzeniu domu idealnego zaczyna się od analiza Twoich potrzeb.</OfferH3>
                <OfferP>Załóżmy, że nie masz ograniczeń, wyobraź sobie w jaki sposób funkcjonujesz w swoim domu na co dzień. Od wejścia do przedpokoju po pracy z zakupami, gdzie zwykle odkładasz buty, torebkę i klucze? Gdzie chciałbyś odwiesić kurtkę, rozpakować zakupy?
                </OfferP>
                <OfferP>Jeśli chciałbyś, usprawnić proces porządkowania, znamy na to kilka sposobów. Z entuzjazmem zajmujemy  się w wyszukiwaniu rozwiązań, których nie poznasz w programach remontowych lub sklepie budowlanym.</OfferP>
                <OfferP>Zapraszasz znajomych, jak spędzacie czas? Gdzie jest centrum imprezy, w kuchni, salonie? Gdzie spożywasz posiłki? W kuchni, jadalni a może gabinecie? Zapytamy o wiele innych ważnych kwestii, o to co lubisz, jak się ubierasz co robisz w wolnym czasie… Nie znasz odpowiedzi na niektóre z nich? Nie szkodzi. Dzięki wspólnej rozmowie odpowiedzi staną się oczywiste.</OfferP>
                <OfferP>Gotowy układ funkcjonalny typowego domu kupionego w internecie czasem całkiem zmodyfikujemy, aby obrał ostateczny kierunek na Twoje przyjemne życie.</OfferP>
            </OfferTextWrapper>
            <OfferTabWrapper>
                <OfferTabs
                // defaultTab="one"
                // onChange={(tabId) => { console.log(tabId) }}
                >
                    <OfferTabList>
                        <OfferTab
                            tabFor="one"
                            onClick={() => setActiveIndex(1)}
                            className={(activeIndex === 1 ? 'active ' : '')}>
                            co robimy
                        </OfferTab>
                        <OfferTab
                            tabFor="two"
                            onClick={() => setActiveIndex(2)}
                            className={(activeIndex === 2 ? 'active ' : '')}>
                            nadzór
                        </OfferTab>
                        <OfferTab
                            tabFor="three"
                            onClick={() => setActiveIndex(3)}
                            className={(activeIndex === 3 ? 'active ' : '')}>
                            pod klucz
                        </OfferTab>
                    </OfferTabList>
                    <OfferTabPanel tabId="one">
                        <OfferPWrapper>
                            <OfferP>Zdajemy sobie sprawę, że samodzielne urządzanie domu często Was przeraża. Wizja czasu który trzeba poświęcić oraz trudne wybory związane z poszukiwaniem najlepszych rozwiązań zniechęcają. </OfferP>
                            <OfferP>Dlatego od pierwszych etapów projektowania wnętrza zdejmujemy z Ciebie ten ciężar. To my wyszukujemy i selekcjonujemy pod kątem analiz, Twoich pomysłów i inspiracji wszystkie materiały, meble i wyposażenie. Przygotowujemy zestaw najlepszych rozwiązań, z których wybieramy z Tobą te najlepsze dla Ciebie.</OfferP>
                        </OfferPWrapper>
                    </OfferTabPanel>
                    <OfferTabPanel tabId="two">
                        <OfferPWrapper>
                            <OfferP>Wykonujemy projekt kompleksowy, który zawiera wszystkie informacje dla Ciebie i wykonawcy. Każdy, kto ma doświadczenie i fachową wiedzę zrealizuje go bez problemu.</OfferP>
                            <OfferP>Dodatkowo w opcji „ z nadzorem” nie będziesz musiał się zastanawiać od czego zacząć. Zorganizujemy proces remontu i urządzania, dopilnujemy harmonogramu i poprawiamy ewentualne błędy wykonawców. Ograniczymy Wasz stres, stracone nerwy i pieniądze.</OfferP>
                            <OfferP>Wsparcie, które od nas uzyskasz pozwoli na zrealizowanie projektu tak aby wnętrze nie różniło się od założeń projektowych, za które zapłaciliście.</OfferP>
                        </OfferPWrapper>
                    </OfferTabPanel>
                    <OfferTabPanel tabId="three">
                        <OfferPWrapper>
                            <OfferP>Nie masz ochoty albo czasu na to by dopilnować spraw na budowie? Wolałbyś w czasie remontu wyjechać na wakacje i jak w telewizji przyjechać do gotowego domu? W usłudze ” pod klucz” dopilnujemy całego remontu.</OfferP>
                            <OfferP>Zamówimy dla Ciebie wszystkie materiały, odbierzemy je od dostawców i przechowamy w naszym magazynie aby bezpieczne od zniszczeń i brudu wjechały na montaż we właściwym momencie.</OfferP>
                            <OfferP>Na naszej głowie pozostaną wszystkie problemy. Nie będziesz musiał stresować się znalezieniem odpowiedniej ekipy wykonawczej, stolarza, kamieniarza, glazurnika i tapeciarza, któremu warto zaufać i ma odpowiednie terminy i oczywiście dobrą cenę.</OfferP>
                            <OfferP>Możemy Cię całkowicie odciążyć i zmienić proces wykończenia mieszkania w pozytywne doświadczenie. Zapewniamy Ci rzetelne ekipy i materiały oraz nadzór nad nimi i logistykę dostaw i prac. Kontrolujemy cały proces, aby efekt finalny był dla Ciebie w pełni satysfakcjonujący i zgodny z projektem.</OfferP>
                        </OfferPWrapper>
                    </OfferTabPanel>
                </OfferTabs>
            </OfferTabWrapper>
        </OfferContainer >
    )
}

export default OfferSection;