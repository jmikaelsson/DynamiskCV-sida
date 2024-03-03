import React from 'react';
import { onWord } from "on-awesome";
import './home.css';
import signatur from "./img/signatur.png";
import { Link } from "react-router-dom"



export default function Home() {


    onWord = (thingToDo) => {
        const expectedList = ['j', 'o', 's', 'e', 'f', 'i', 'n']
        let actualList = [];
        let currentIndex = 0;
        const reset = () => {
            actualList = [];
            currentIndex = 0;
        };
        const isJosefin = () => actualList.join('') === expectedList.join('')
        const onKeyUp = (event) => {
            const key = event.key.toLowerCase();
            if (key === expectedList[currentIndex]) {
                actualList.push(key);
                currentIndex++;
            }
            else {
                reset();
            }

            if (isJosefin()) {
                thingToDo();
                reset();
            }
        };
        document.addEventListener('keyup', onKeyUp)
        const cleanUp = () => {
            document.removeEventListener('keyup', onKeyUp)
        };
        return {
            cleanUp,
        };
    }

    return (
        onWord(() => alert("ps. jag älskar choklad!")),
        <>
            <div className='body-container' id='coloredDiv'>
                <article className="start">
                    <Link to="/About">
                        <section className="welcome-text">
                            <h1>Välkommen</h1>
                            <h4>Kul att du har hittat hit!</h4>
                            <p>jag är en student som studerar systemutveckling med fokus på .NET-teknologier med kunskaper inom artificiell
                                intelligens.</p>
                            <img src={signatur} alt="Josefin Mikaelsson" />
                        </section>
                    </Link>
                </article>

            </div>
        </>
    );

}