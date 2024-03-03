import React, { useEffect, useState } from 'react';
import './About.css';
import PhotoOfMe from './img/josefin-stor.jpg';
import minPhotoMe from './img/20230325_142027.jpg'
import blommor from './img/blommor.jpg'
import baka from './img/baka.jpg'
import familj from './img/felixjosefinagnes12.jpg'

export default function About() {

    const [color, setColor] = useState("#fff");

    const changeColor = () => {
        if (color !== "#fff") {
            setColor("#fff");
        } else {
            setColor("#64685238");
        }
    }

    useEffect(() => {
        document.getElementById("coloredDiv").style.backgroundColor = color;
    }, [color]);


    return (
        <div className='body-container' id='coloredDiv'>
            <div className='margin-top'></div>
            <article className="container" >
                <section className="om-mig">
                    <h1>Vem är jag?</h1>
                    <h2>
                        Josefin heter jag. Bor i Lit, utanför Östersund med min familj. Som består av mig, min sambo,
                        våran dotter på 1,5 år och våran jämthund.
                    </h2>
                    <p>
                        Att vara ute i naturen, särskilt under fjällvandringar, är något jag verkligen uppskattar.
                        Den friska luften, det vidsträckta landskapet och känslan av äventyr ger mig en oslagbar glädje.
                        Naturen är mitt fristad där jag finner ro och inspiration.
                    </p>
                    <p>
                        Men när jag inte är ute och utforskar naturen, hittar du mig garanterat i köket, redo att
                        skapa magi. Att baka är en passion jag håller nära hjärtat. Doften av nygräddade bullar eller
                        en perfekt tårta är som musik för mina sinnen.
                    </p>
                    <p>
                        Utöver det älskar jag att spendera tid i trädgården, där jag nyligen har funnit kärlek
                        för dahlior. Att se dem blomstra ger mig en glädje som är svår att beskriva.
                    </p>
                    <p>
                        Familjen och vännerna är mitt allt. Tiden vi spenderar tillsammans är ovärderlig för mig.
                        Från skrattfyllda middagar till lugna stunder av samvaro - det är i deras närvaro jag känner
                        mig hel.
                    </p>
                    <div className="summering">
                        <h3>
                            Så det är jag - en naturälskare som älskar fjällen, en passionerad hemmabagare, en
                            trädgårdsentusiast med en nyfunnen passion för dahlior och en person som värdesätter
                            tid med mina nära och kära över allt annat.
                        </h3>
                    </div>
                </section>
                <section className="photo">
                    <img src={PhotoOfMe} alt="Bild mig (Josefin) och min dotter" />
                </section>
            </article>
            <article className="container-2">
                <section className="fyra-bilder">
                    <div><img src={minPhotoMe} alt="Bild på Josefin och hennes dotter på fjället" /></div>
                    <button onClick={changeColor}>
                        <img src={blommor} alt="Bild på en Dahliabukett" />
                    </button>
                    <div><img src={baka} alt="Bild på en jordgubbstårta" /></div>
                    <div><img src={familj} alt="Bild på Josefin och hennes familj" /></div>
                </section>
                <section className="studier">
                    <h1>Vad gör jag?</h1>
                    <h3>För närvarande studerar jag för att bli Systemutvecklare inom .NET med AI-kompetens genom Edugrade.</h3>
                    <p>
                        Denna utbildning
                        öppnar dörrar till den spännande världen av mjukvaruutveckling, där jag inte bara utforskar de robusta
                        möjligheterna
                        inom .NET-plattformen utan även integrerar avancerade AI-tekniker. Tack vare Edugrades omfattande läroplan och
                        praktiska
                        tillvägagångssätt får jag den kompetens som behövs för att skapa framtidssäkra och intelligenta IT-lösningar.
                    </p>
                    <a className="button" href="portfolio.html">Se vad jag har byggt!</a>
                    <a className="button" href="https://edugrade.com/yh-utbildning/program/systemutvecklarenet-med-ai-kompetens/">Läs
                        mer om utbildningen</a>
                </section>
            </article>
        </div>
    );
}