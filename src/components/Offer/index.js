import React, { useState } from 'react';
import {
    OfferContainer,
    OfferTextWrapper,
    OfferH2,
    OfferH3,
    OfferP,
    OfferTabWrapper,
    OfferPWrapper,
    OfferH3Grid,
    OfferGrid,
    OfferGridItem,
    OfferGridNumber,
    OfferGridP
} from './OfferElement';
import {
    Tabs as OfferTabs,
    TabPanel as OfferTabPanel
} from "react-web-tabs";
import { OfferTabList } from './OfferElement';
import { OfferTab } from './OfferElement';

const OfferSection = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <OfferContainer id='offer'>
            <OfferTextWrapper>
                <OfferH2>oferta.</OfferH2>
                <OfferH3>Nasza współpraca przy tworzeniu domu idealnego zaczyna się od analizy Twoich potrzeb.</OfferH3>
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
            <OfferH3Grid>Jak projektujemy?</OfferH3Grid>
            <OfferGrid>
                <OfferGridItem className="item-1">
                    <OfferGridNumber>1</OfferGridNumber>
                </OfferGridItem>
                <OfferGridItem className="item-2">
                    <OfferGridP><span>kontakt</span>Zadzwoń lub napisz do nas maila z zapytaniem o ofertę. W swojej wiadomości zawrzyj jak najwięcej informacji co do swoich oczekiwań (jeżeli oczywiście już takie masz) i danych, np. inspiracji z sieci, rysunków budowlanych, zdjęć miejsca. Im więcej będziemy wiedzieć o twoich potrzebach, tym rzetelniejsza będzie oferta. Wycena usługi projektowej jest skomplikowana - bierzemy pod uwagę nie tylko metraż pomieszczeń, ale też trudność aranżacji i wybrany przez ciebie styl.</OfferGridP>
                </OfferGridItem>
                <OfferGridItem className="item-3">
                    <OfferGridP><span>umowa</span> Jeżeli zaakceptujesz ofertę, podpiszemy umowę, która zapewni formalne bezpieczeństwo obu stron transakcji.</OfferGridP>
                </OfferGridItem>
                <OfferGridItem className="item-4">
                    <OfferGridNumber>2</OfferGridNumber>
                </OfferGridItem>
                <OfferGridItem className="item-5">
                    <OfferGridNumber>3</OfferGridNumber>
                </OfferGridItem>
                <OfferGridItem className="item-6">
                    <OfferGridP><span>ankieta i rozmowa</span>To kolejny, bardzo ważny element całego procesu, który wystartuje koncepcję naszego wnętrza. Zależnie od twoich preferencji, ankietę możemy wypełnić wspólnie podczas spotkania lub możesz to zrobić z rodziną w zaciszu swojego domu (ankieta w formie elektronicznej). W ankiecie odpowiesz na podstawowe pytania dot. twoich potrzeb, ale pojawią się też już te bardziej szczegółowe. Wszystko inne, co ciężko jest ubrać w tekst, omówimy na spotkaniu.</OfferGridP>
                </OfferGridItem>
                <OfferGridItem className="item-7">
                    <OfferGridP><span>moodboard</span>Projektowanie rozpoczynamy od wybrania przykładowych materiałów, mebli i inspiracji, które stworzą tzw. moodboard - tablicę materiałów i inspiracji. Takie zestawienie pokaże jak elementy wnętrza, kolory i formy łączą się ze sobą. Możemy ja łatwo modyfikować i wprowadzać nowe cechy.</OfferGridP>
                </OfferGridItem>
                <OfferGridItem className="item-8">
                    <OfferGridNumber>4</OfferGridNumber>
                </OfferGridItem>
                <OfferGridItem className="item-9">
                    <OfferGridNumber>5</OfferGridNumber>
                </OfferGridItem>
                <OfferGridItem className="item-10">
                    <OfferGridP><span>układ</span>Równocześnie zajmujemy się przygotowaniem dla ciebie układu funkcjonalnego twojego wnętrza, czyli rzutu poziomego, wskazującego, gdzie będą stały najważniejsze meble i ile miejsca zajmą zabudowy, a ile zostanie przestrzeni swobodnej.</OfferGridP>
                </OfferGridItem>
                <OfferGridItem className="item-11">
                    <OfferGridP><span>model 3d</span>Następnie zaczynamy tworzyć MODEL 3D na podstawie wcześniej podjętych decyzji. Jest to najlepsza forma prezentacji powstającego projektu - pokażemy jak w przestrzeni wyglądają nasze pomysły i wybrane meble. Praca nad modelem zajmuje najwięcej czasu. Zazwyczaj zaczynamy od jednego z pomieszczeń (najważniejszego), a po wprowadzeniu twoich uwag zabieramy się za kolejne, unikając błędów i stosując wytyczne z poprzedniego.</OfferGridP>
                </OfferGridItem>
                <OfferGridItem className="item-12">
                    <OfferGridNumber>6</OfferGridNumber>
                </OfferGridItem>
                <OfferGridItem className="item-13">
                    <OfferGridNumber>7</OfferGridNumber>
                </OfferGridItem>
                <OfferGridItem className="item-14">
                    <OfferGridP><span>dobór materiałów</span>Kiedy model jest już gotowy i w większości zatwierdzamy, wybieramy konkretne materiały, meble i oświetlenie. Praca w modelu na hipotetycznych decyzjach pozwalała na szybkie zmiany, teraz już podjęte decyzje wprowadzamy w życie. Zależnie od formy naszej współpracy (na miejscu w Szczecinie lub zdalnie), spotykamy się w wybranych hurtowniach i wybieramy materiały porównując je ze sobą.</OfferGridP>
                </OfferGridItem>
                <OfferGridItem className="item-15">
                    <OfferGridP><span>skład</span>Kiedy wszystkie decyzje są już podjęte, zaczynamy prace nad rysunkami technicznymi i inną dokumentacją twojego projektu. Po wykonaniu tego zadania projekt drukujemy i składamy w dwóch egzemplarzach.</OfferGridP>
                </OfferGridItem>
                <OfferGridItem className="item-16">
                    <OfferGridNumber>8</OfferGridNumber>
                </OfferGridItem>
                <OfferGridItem className="item-17">
                    <OfferGridNumber>9</OfferGridNumber>
                </OfferGridItem>
                <OfferGridItem className="item-18">
                    <OfferGridP><span>finał</span>Projekt jest ukończony! Otrzymasz go w formie drukowanej i elektronicznej. Jeżeli masz życzenie, pokierujemy cię do sprawdzonych fachowców od wykończenia i stolarki.</OfferGridP>
                </OfferGridItem>
            </OfferGrid>
        </OfferContainer >
    )
}

export default OfferSection;