import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Instagram, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            background: 'linear-gradient(180deg, #0a0a0a 0%, #000 100%)',
            padding: '4rem 0 2rem 0',
            borderTop: '2px solid var(--accent-color)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
                    linear-gradient(rgba(57, 255, 20, 0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(57, 255, 20, 0.02) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
                opacity: 0.3,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Main Footer Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Logo and Description */}
                    <div>
                        <img
                            src="/logo.png"
                            alt="Basic Electric"
                            style={{
                                height: '60px',
                                width: 'auto',
                                marginBottom: '1.5rem',
                                filter: 'drop-shadow(0 0 15px rgba(57, 255, 20, 0.4))'
                            }}
                        />
                        <p style={{ color: '#888', lineHeight: 1.6, marginBottom: '1rem' }}>
                            Ammattitaitoista sähkötyötä Etelä-Suomessa. Sähköasennukset, ilmalämpöpumput ja sähköautolataus.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            color: 'var(--accent-color)',
                            marginBottom: '1.5rem',
                            fontSize: '1.1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            Palvelut
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.75rem' }}>
                                <Link to="/electrical-services" className="footer-link">Sähköpalvelut</Link>
                            </li>
                            <li style={{ marginBottom: '0.75rem' }}>
                                <Link to="/ev-charging" className="footer-link">Sähköautolataus</Link>
                            </li>
                            <li style={{ marginBottom: '0.75rem' }}>
                                <Link to="/heat-pumps" className="footer-link">Ilmalämpöpumput</Link>
                            </li>
                            <li style={{ marginBottom: '0.75rem' }}>
                                <a href="/#contact" className="footer-link">Ota yhteyttä</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{
                            color: 'var(--accent-color)',
                            marginBottom: '1.5rem',
                            fontSize: '1.1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            Yhteystiedot
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Phone size={18} color="var(--accent-color)" />
                                <a href="tel:+358504064664" className="footer-link">050 406 4664</a>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Instagram size={18} color="var(--accent-color)" />
                                <a href="https://instagram.com/basicelectric_oy" target="_blank" rel="noopener noreferrer" className="footer-link">
                                    @basicelectric_oy
                                </a>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <MapPin size={18} color="var(--accent-color)" />
                                <span style={{ color: '#888' }}>Etelä-Suomi</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid #222',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>
                        © {new Date().getFullYear()} Basic Electric Oy. Kaikki oikeudet pidätetään.
                    </p>

                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <Link to="/admin" style={{
                            color: '#333',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#666'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
                        >
                            <Lock size={14} />
                            Ylläpito
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-link {
                    color: #aaa;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .footer-link:hover {
                    color: var(--accent-color);
                    padding-left: 5px;
                }

                @media (max-width: 768px) {
                    footer > div > div:first-child {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
