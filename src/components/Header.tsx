import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={{
            backgroundColor: scrolled ? 'rgba(18, 18, 18, 0.98)' : 'rgba(18, 18, 18, 0.95)',
            position: 'fixed',
            width: '100%',
            zIndex: 1000,
            borderBottom: scrolled ? '2px solid var(--accent-color)' : '1px solid #333',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            boxShadow: scrolled ? '0 4px 20px rgba(57, 255, 20, 0.1)' : 'none',
            transform: scrolled ? 'translateY(0)' : 'translateY(-100%)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: scrolled ? '70px' : '80px',
                transition: 'height 0.3s ease'
            }}>
                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <img
                        src="/logo.png"
                        alt="Basic Electric Logo"
                        style={{
                            height: scrolled ? '60px' : '80px',
                            width: 'auto',
                            transition: 'all 0.3s ease',
                            filter: 'drop-shadow(0 0 10px rgba(57, 255, 20, 0.3))'
                        }}
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="desktop-menu" style={{ display: 'none' }}>
                    <Link to="/electrical-services" className="nav-link">Sähköpalvelut</Link>
                    <Link to="/ev-charging" className="nav-link">Lataus</Link>
                    <Link to="/heat-pumps" className="nav-link">Ilmalämpöpumput</Link>
                    <Link to="/automation" className="nav-link">Älykoti</Link>

                    <Link to="/professionals" className="nav-link">Ammattilaisille</Link>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-glow">Ota yhteyttä</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        display: 'block',
                        transition: 'transform 0.3s ease'
                    }}
                    className="mobile-toggle"
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(90deg)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: scrolled ? '70px' : '80px',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'rgba(26, 26, 26, 0.98)',
                    backdropFilter: 'blur(10px)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    borderBottom: '2px solid var(--accent-color)',
                    animation: 'slideDown 0.3s ease-out'
                }}>
                    <Link to="/electrical-services" onClick={() => setIsOpen(false)} className="mobile-nav-link">Sähköpalvelut</Link>
                    <Link to="/ev-charging" onClick={() => setIsOpen(false)} className="mobile-nav-link">Lataus</Link>
                    <Link to="/heat-pumps" onClick={() => setIsOpen(false)} className="mobile-nav-link">Ilmalämpöpumput</Link>
                    <Link to="/automation" onClick={() => setIsOpen(false)} className="mobile-nav-link">Älykoti</Link>

                    <Link to="/professionals" onClick={() => setIsOpen(false)} className="mobile-nav-link">Ammattilaisille</Link>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }} className="btn btn-glow" style={{ textAlign: 'center' }}>Ota yhteyttä</a>
                </div>
            )}

            <style>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes glow {
                    0%, 100% {
                        box-shadow: 0 0 5px var(--accent-color), 0 0 10px var(--accent-color);
                    }
                    50% {
                        box-shadow: 0 0 10px var(--accent-color), 0 0 20px var(--accent-color), 0 0 30px var(--accent-color);
                    }
                }

                .nav-link {
                    margin-left: 2rem;
                    color: #fff;
                    font-weight: 500;
                    text-decoration: none;
                    position: relative;
                    padding: 0.5rem 0;
                    transition: color 0.3s ease;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: var(--accent-color);
                    transition: width 0.3s ease;
                }

                .nav-link:hover {
                    color: var(--accent-color);
                }

                .nav-link:hover::after {
                    width: 100%;
                }

                .mobile-nav-link {
                    color: #fff;
                    font-size: 1.2rem;
                    text-decoration: none;
                    padding: 0.5rem;
                    border-left: 3px solid transparent;
                    transition: all 0.3s ease;
                }

                .mobile-nav-link:hover {
                    color: var(--accent-color);
                    border-left-color: var(--accent-color);
                    padding-left: 1rem;
                }

                .btn-glow {
                    margin-left: 2rem;
                    padding: 0.5rem 1rem;
                    animation: glow 2s ease-in-out infinite;
                }

                @media (min-width: 768px) {
                    .desktop-menu { 
                        display: flex !important;
                        align-items: center;
                    }
                    .mobile-toggle { 
                        display: none !important; 
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;
