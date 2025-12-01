import React, { useEffect, useState } from 'react';
import { useContent } from '../context/ContentContext';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    const { content } = useContent();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section style={{
            height: '120vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            background: 'radial-gradient(circle at 50% 50%, rgba(57, 255, 20, 0.05) 0%, rgba(18, 18, 18, 1) 70%), linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
            overflow: 'hidden'
        }}>
            {/* Animated Background Grid */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
                    linear-gradient(rgba(57, 255, 20, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(57, 255, 20, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                animation: 'gridMove 20s linear infinite',
                opacity: 0.3
            }} />

            {/* Floating Particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>

            <div className="container" style={{
                textAlign: 'center',
                zIndex: 1,
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: 'transform 0.1s ease-out'
            }}>
                {/* Logo with Glow Effect */}
                <div className="animate-fade-in" style={{
                    marginBottom: '3rem',
                    animation: 'float 3s ease-in-out infinite'
                }}>
                    <img
                        src="/logo.png"
                        alt="Basic Electric"
                        style={{
                            maxWidth: '600px',
                            width: '90%',
                            height: 'auto',
                            filter: 'drop-shadow(0 0 30px rgba(57, 255, 20, 0.6)) drop-shadow(0 0 60px rgba(57, 255, 20, 0.3))',
                            animation: 'pulse 4s ease-in-out infinite'
                        }}
                    />
                </div>

                <h1 className="animate-fade-in" style={{
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    marginBottom: '1.5rem',
                    background: 'linear-gradient(135deg, #fff 0%, var(--accent-color) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 700,
                    animationDelay: '0.2s',
                    textAlign: 'center'
                }}>
                    {content.hero.title}
                </h1>

                <p className="animate-fade-in" style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    color: '#ccc',
                    marginBottom: '3rem',
                    maxWidth: '800px',
                    margin: '0 auto 3rem auto',
                    lineHeight: 1.6,
                    animationDelay: '0.4s'
                }}>
                    {content.hero.subtitle}
                </p>

                <div className="animate-fade-in" style={{
                    animationDelay: '0.6s',
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <a href="#contact" className="btn btn-primary btn-hero">
                        Pyydä tarjous
                    </a>
                    <a href="#services" className="btn btn-secondary btn-hero">
                        Palvelumme
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a href="#services" style={{
                position: 'absolute',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'var(--accent-color)',
                animation: 'bounce 2s infinite',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                gap: '0.5rem'
            }}>

            </a>

            <style>{`
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes pulse {
                    0%, 100% { 
                        filter: drop-shadow(0 0 30px rgba(57, 255, 20, 0.6)) drop-shadow(0 0 60px rgba(57, 255, 20, 0.3));
                    }
                    50% { 
                        filter: drop-shadow(0 0 40px rgba(57, 255, 20, 0.8)) drop-shadow(0 0 80px rgba(57, 255, 20, 0.5));
                    }
                }

                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
                    40% { transform: translateY(-20px) translateX(-50%); }
                    60% { transform: translateY(-10px) translateX(-50%); }
                }

                @keyframes particleFloat {
                    0% {
                        transform: translateY(100vh) scale(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) scale(1);
                        opacity: 0;
                    }
                }

                .particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: var(--accent-color);
                    border-radius: 50%;
                    animation: particleFloat linear infinite;
                    box-shadow: 0 0 10px var(--accent-color);
                }

                .btn-hero {
                    font-size: 1.1rem;
                    padding: 1rem 2.5rem;
                    transition: all 0.3s ease;
                }

                .btn-hero:hover {
                    transform: translateY(-5px);
                }

                .btn-secondary {
                    background-color: transparent;
                    border: 2px solid #fff;
                    color: #fff;
                }

                .btn-secondary:hover {
                    background-color: #fff;
                    color: var(--bg-color);
                    border-color: #fff;
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
                }

                @media (max-width: 768px) {
                    .btn-hero {
                        width: 100%;
                        max-width: 300px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
