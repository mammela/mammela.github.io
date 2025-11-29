import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';
import Home from './pages/Home';
import EVCharging from './pages/EVCharging';
import AdminPanel from './components/AdminPanel';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ContentProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ev-charging" element={<EVCharging />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Router>
      </ContentProvider>
    </AuthProvider>
  );
};

export default App;
