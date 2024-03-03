import { useRef} from 'react';
import { onWord } from "on-awesome"; 
import emailjs from '@emailjs/browser';
import josefin from './img/josefin-profil.jpg'
import './contact.css';

const Contact = () => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tuat47k', 'template_7nhz4nf', form.current, {
        publicKey: 'nU5uo9Fp60Zm2LfjC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

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
      <div className='margin-top'></div>
      <div className='body-container' id='coloredDiv'>
        <article className="container">
          <section className="photo">
            <img src={josefin} alt="Bild på Josefin" />
          </section>
          <section className="contactForm">
            <h1>Kontakta mig</h1>
            <h3>Har du några funderingar, förfrågningar eller allmänt intresserad om mig.
              Tvivla inte att kontakta mig.</h3>

            <form ref={form} onSubmit={sendEmail} className="formBox" action="/submit.html" method="post">
              <div className="inputBox w50">
                <input type="text" id="firstname" name="firstname" required />
                <span>Förnamn</span>
              </div>
              <div className="inputBox w50">
                <input type="text" id="lastname" name="lastname" required />
                <span>Efternamn</span>
              </div>
              <div className="inputBox w50">
                <input type="email" id="email" name="email" required />
                <span>Email</span>
              </div>
              <div className="inputBox w50">
                <input type="text" id="pnumber" name="pnumber" required />
                <span>Mobilnummer</span>
              </div>
              <div className="inputBox w100">
                <textarea id="subject" name="subject" required></textarea>
                <span>Skriv ditt medelande här</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" value="Skicka" />
              </div>
            </form>
          </section>
        </article>
      </div>
    </>
  );
}

export default Contact;