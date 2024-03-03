import { Routes, Route, HashRouter } from 'react-router-dom';
import Navigation from './compnents/Navigations';
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './compnents/Footer';


export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/CV" element={<CV />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
        </main>

        <footer className='App-footer'>
          <Footer />

        </footer>
      </div>
    </HashRouter>
  );
}

