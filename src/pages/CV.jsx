import React from 'react';
import workData from '../erfarenheter.json'
import './cv.css';

export default function CV() {
    return (
        <>
            <div className='body-container'>
                <atricle className="main">
                    <article className="fakta-om-mig">
                        <h2>Fakta om mig:</h2>
                        <table>
                            <tr>
                                <th>Namn:</th>
                                <td>Josefin Mikaelsson</td>
                            </tr>
                            <tr>
                                <th>Ålder:</th>
                                <td>28 år</td>
                            </tr>
                            <tr>
                                <th>Bor:</th>
                                <td>Lit, utanför Östersund</td>
                            </tr>
                            <tr>
                                <th>Född:</th>
                                <td>Örnsköldsvik</td>
                            </tr>
                            <tr>
                                <th>Körkort:</th>
                                <td>B<br />Skoter</td>
                            </tr>
                            <tr>
                                <th>Språk:</th>
                                <td>Svenska<br />Engelska</td>
                            </tr>
                        </table>
                    </article>
                    
                    <article className="CV">
                        <h1>Mina erfarenheter!</h1>
                        <section className="utbildning">
                            <h2>Utbildning</h2>
                            <table>
                                {workData.utbildning.map((utb) => (
                                    <div key={(utb.id)}>
                                        <tr>
                                            <td id="info">
                                                <h3>{utb.namn}</h3>
                                                <h5>{utb.beskrivning}</h5>
                                                <h4>{utb.plats}</h4>
                                            </td>
                                            <td>{utb.år}<br/>{utb.exmen}</td>
                                        </tr>
                                    </div>
                                ))}
                            </table>
                        </section>

                        <section className="arbeten">
                            <h2>Arbetslivserfarenhet</h2>
                            <table>
                                {workData.arbeten.map((arb) => (
                                    <div key={(arb.id)}>
                                        <tr>
                                            <td id="info">
                                                <h3>{arb.namn}</h3>
                                                <h5>{arb.beskrivning}</h5>
                                                <h4>{arb.plats}</h4>
                                            </td>
                                            <td>{arb.år}</td>
                                        </tr>
                                    </div>
                                ))}
                            </table>
                        </section>
                    </article>
                </atricle>
                <div className="scroll-bild"></div>
                <artical className="CV">
                    <section className="andra-erfarenheter">
                        <h1>Övriga erfarenheter</h1>
                        <table>
                            {workData.aJobb.map((ajob) => (
                                <div key={(ajob.id)}>
                                    <tr>
                                        <td>
                                            {ajob.år}
                                            <p>
                                            {ajob.tillfälle1}<br/>
                                            {ajob.tillfälle2}<br/>
                                            {ajob.tillfälle3}
                                            </p>
                                        </td>
                                        <td id="info">
                                            <h3>{ajob.namn}</h3>
                                            <h5>{ajob.beskrivning}</h5>
                                            <h4>{ajob.plats}</h4>
                                        </td>

                                    </tr>
                                </div>
                            ))}
                        </table>
                    </section>
                </artical>
            </div>
        </>
    );
}