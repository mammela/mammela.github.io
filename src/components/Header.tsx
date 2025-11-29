import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header style={{
            backgroundColor: 'rgba(18, 18, 18, 0.95)',
            position: 'fixed',
            width: '100%',
            zIndex: 1000,
            borderBottom: '1px solid #333'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <Zap color="var(--accent-color)" size={32} fill="var(--accent-color)" />
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', letterSpacing: '1px' }}>
                        BASIC <span style={{ color: 'var(--accent-color)' }}>ELECTRIC</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="desktop-menu" style={{ display: 'none' }}>
                    <a href="#ev-chargers" style={{ marginLeft: '2rem', color: '#fff', fontWeight: 500 }}>Lataus</a>
                    <a href="#air-conditioners" style={{ marginLeft: '2rem', color: '#fff', fontWeight: 500 }}>Ilmalämpöpumput</a>
                    <a href="#smart-home" style={{ marginLeft: '2rem', color: '#fff', fontWeight: 500 }}>Älykoti</a>
                    <a href="#contact" className="btn" style={{ marginLeft: '2rem', padding: '0.5rem 1rem' }}>Ota yhteyttä</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', color: '#fff', display: 'block' }}
                    className="mobile-toggle"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    width: '100%',
                    backgroundColor: '#1a1a1a',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    borderBottom: '2px solid var(--accent-color)'
                }}>
                    <a href="#ev-chargers" onClick={() => setIsOpen(false)} style={{ color: '#fff', fontSize: '1.2rem' }}>Lataus</a>
                    <a href="#air-conditioners" onClick={() => setIsOpen(false)} style={{ color: '#fff', fontSize: '1.2rem' }}>Ilmalämpöpumput</a>
                    <a href="#smart-home" onClick={() => setIsOpen(false)} style={{ color: '#fff', fontSize: '1.2rem' }}>Älykoti</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="btn" style={{ textAlign: 'center' }}>Ota yhteyttä</a>
                </div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
