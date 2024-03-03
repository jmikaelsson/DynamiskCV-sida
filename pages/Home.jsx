import './home.css';

export default function Home() {
    return (
        <>
            <article className="start">
                <section className="welcome-text">
                    <h1>Välkommen</h1>
                    <h4>Kul att du har hittat hit!</h4>
                    <p>jag är en student som studerar systemutveckling med fokus på .NET-teknologier med kunskaper inom artificiell
                        intelligens.</p>
                    <img src="img/signatur.png" alt="Josefin Mikaelsson" />
                </section>
            </article>
            <article className="container-box">
                <section className="info-text">
                    <div className="text">
                        <h1>Vem är jag?</h1>
                        <h2>
                            Jag är en aktiv person som trivs bäst utomhus och mår som bäst när jag är omgiven av naturen.
                            Genom min orienteringspassion styrde jag mina steg mot Jämtland, där jag inte bara fann kärleken utan också
                            mitt
                            rätta hem.
                        </h2>
                    </div>
                    <div>
                        <a className="button" href="about.html">Mer om mig</a>
                    </div>
                </section>
            </article>
            <article className="container">
                <div className="rubrik">
                    <h1>Mina senaste projekt</h1>
                </div>
                <section className="prodject">
                    <div className="imgBox">
                        <img src="img/database-schema-1895779_1280.png" alt="bild med kod" />
                    </div>
                    <div className="contentBox">
                        <div className="content">
                            <h3>Individuellt databasprojekt</h3>
                            <p>Projekt där det skulle byggas en databas för en skola</p>
                            <div>
                                <a className="button" href="portfolio.html#popup-labb5">mer info</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="prodject">
                    <div className="imgBox">
                        <img src="img/code-820275_1280.jpg" alt="bild med kod" />
                    </div>
                    <div className="contentBox">
                        <div className="content">
                            <h3>OOP Arv</h3>
                            <p>Övning på objektorienterat arv.</p>
                            <div>
                                <a className="button" href="portfolio.html#popup-labb3">mer info</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="prodject">
                    <div className="imgBox">
                        <img src="img/code-938776_1280.png" alt="bild med kod" />
                    </div>
                    <div className="contentBox">
                        <div className="content">
                            <h3>Projekt i grupp</h3>
                            <p>En bankapplikation med inloggning, kontohantering, valutastöd, sparkonton, lån och transaktionsloggar.</p>
                            <div>
                                <a className="button" href="portfolio.html#popup-labb4">mer info</a>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}