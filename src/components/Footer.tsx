import React from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: '#0a0a0a', padding: '3rem 0', borderTop: '1px solid #222' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>BASIC ELECTRIC</h3>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Basic Electric Oy. Kaikki oikeudet pidätetään.</p>
                </div>

                <div>
                    <Link to="/admin" style={{ color: '#333', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem' }}>
                        <Lock size={14} />
                        Ylläpito
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
