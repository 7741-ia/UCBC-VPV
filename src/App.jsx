import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Services from './pages/Services';
import Security from './pages/Security';
import Contact from './pages/Contact';
import AlertBanner from './components/AlertBanner';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Router>
        {showAlert && (
          <AlertBanner 
            message="bonjour et bienvenue dans notre site ici vous serez informe de tous ceux qui concerne les vpn(value protections volonteers)"
            onClose={() => setShowAlert(false)}
          />
        )}
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/security" element={<Security />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

