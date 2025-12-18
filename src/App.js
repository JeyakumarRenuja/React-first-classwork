import Navbar from './components/navbar.jsx';
import '../src/assets/css/fontawesome.css';
import '../src/assets/css/templatemo-tale-seo-agency.css';
import '../src/assets/css/animate.css';
import '../src/assets/css/owl.css';
import '../src/assets/css/flex-slider.css';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import Faq from './pages/faq.jsx';
import Aboutus from './pages/aboutus.jsx';
import Contact from './pages/contact.jsx';  
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
