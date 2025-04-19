import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import MessageModal from './components/MessageModal/MessageModal';
//TODO use dotenv package here

// Import third-party CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';

// Import our custom CSS last to override third-party styles
import './styles/global.scss';

// Import components (we'll create these next)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import NotFound from './components/NotFound';

function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' })
  });
  return (
    <ModalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/devis" element={<Quote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <MessageModal />
        </div>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
