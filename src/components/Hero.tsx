import React from 'react';
import { useContent } from '../context/ContentContext';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    const { content } = useContent();

    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <h1 className="animate-fade-in" style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    marginBottom: '1rem',
                    textShadow: '0 0 20px rgba(57, 255, 20, 0.3)'
                }}>
                    {content.hero.title}
                </h1>
                <p className="animate-fade-in" style={{
                    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                    color: '#ccc',
                    marginBottom: '3rem',
                    animationDelay: '0.2s'
                }}>
                    {content.hero.subtitle}
                </p>
                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <a href="#contact" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
                        Pyydä tarjous
                    </a>
                </div>
            </div>

            <a href="#ev-chargers" style={{
                position: 'absolute',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#fff',
                animation: 'bounce 2s infinite'
            }}>
                <ChevronDown size={40} />
            </a>

            <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
          40% {transform: translateY(-20px) translateX(-50%);}
          60% {transform: translateY(-10px) translateX(-50%);}
        }
      `}</style>
        </section>
    );
};

export default Hero;
