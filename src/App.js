import './style/App.css';
import Navbar from './navbar';
import Connection from './pages/connection';
import Propos from './pages/propos';
import Home from './pages/Home';
import Boutique from './pages/boutique';
import Inscription_producteur from './pages/inscription-producteur';
import Inscription_boucher from './pages/inscription-boucher';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Connection" element={<Connection />} />
          <Route path="/Propos" element={<Propos />} />
          <Route
            path="/inscription-producteur"
            element={<Inscription_producteur />}
          />
          <Route path="/Boutique" element={<Boutique />} />
          <Route
            path="/inscription-boucher"
            element={<Inscription_boucher />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
