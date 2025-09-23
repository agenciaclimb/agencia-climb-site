import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import CriacaoSites from './pages/CriacaoSites';
import CRM from './pages/CRM';
import LigIA from './pages/LigIA';
import Desenvolvimento from './pages/Desenvolvimento';
import Bitrix24 from './pages/Bitrix24';
import Sobre from './pages/Sobre';
import Depoimentos from './pages/Depoimentos';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/criacao-sites" element={<CriacaoSites />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/ligia" element={<LigIA />} />
            <Route path="/desenvolvimento" element={<Desenvolvimento />} />
            <Route path="/bitrix24" element={<Bitrix24 />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/depoimentos" element={<Depoimentos />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

