import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';
import Home from './pages/Home';
import EVCharging from './pages/EVCharging';
import ElectricalServices from './pages/ElectricalServices';
import HeatPumps from './pages/HeatPumps';
import Automation from './pages/Automation';
import Professionals from './pages/Professionals';
import WorkProcess from './pages/WorkProcess';
import Prices from './pages/Prices';
import AdminPanel from './components/AdminPanel';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ContentProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ev-charging" element={<EVCharging />} />
            <Route path="/electrical-services" element={<ElectricalServices />} />
            <Route path="/heat-pumps" element={<HeatPumps />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/professionals" element={<Professionals />} />
            <Route path="/work-process" element={<WorkProcess />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Router>
      </ContentProvider>
    </AuthProvider>
  );
};

export default App;
