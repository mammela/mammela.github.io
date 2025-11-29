import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { useContent } from '../context/ContentContext';

const Home: React.FC = () => {
    const { content } = useContent();

    return (
        <>
            <Header />
            <Hero />

            {/* Services Showcase */}
            <section id="services" style={{
                padding: '6rem 0',
                background: 'linear-gradient(180deg, #0a0a0a 0%, #121212 100%)',
                position: 'relative'
            }}>
                <div className="container">
                    <h2 style={{
                        textAlign: 'center',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        marginBottom: '1rem',
                        background: 'linear-gradient(135deg, #fff 0%, var(--accent-color) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        Palvelumme
                    </h2>
                    <p style={{ textAlign: 'center', color: '#888', marginBottom: '4rem', fontSize: '1.1rem' }}>
                        Ammattitaitoista sähkötyötä kaikissa tilanteissa
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {/* Service Card 1 */}
                        <a href="/electrical-services" style={{ textDecoration: 'none' }}>
                            <div className="service-card">
                                <div className="service-card-image" style={{
                                    backgroundImage: 'url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)',
                                    height: '200px',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '10px 10px 0 0'
                                }} />
                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                                        Sähköpalvelut
                                    </h3>
                                    <p style={{ color: '#aaa', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                        Sähköasennukset, valaistusratkaisut, saneeraukset ja huolto. Kaikki sähkötyöt ammattitaidolla.
                                    </p>
                                    <span className="service-link">Lue lisää →</span>
                                </div>
                            </div>
                        </a>

                        {/* Service Card 2 */}
                        <a href="/ev-charging" style={{ textDecoration: 'none' }}>
                            <div className="service-card">
                                <div className="service-card-image" style={{
                                    backgroundImage: 'url(https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)',
                                    height: '200px',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '10px 10px 0 0'
                                }} />
                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                                        Sähköautolataus
                                    </h3>
                                    <p style={{ color: '#aaa', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                        Turvallinen ja tehokas latausratkaisu kotiin ja taloyhtiöille. Dynaamisella kuormanhallinnalla.
                                    </p>
                                    <span className="service-link">Lue lisää →</span>
                                </div>
                            </div>
                        </a>

                        {/* Service Card 3 */}
                        <a href="/heat-pumps" style={{ textDecoration: 'none' }}>
                            <div className="service-card">
                                <div className="service-card-image" style={{
                                    backgroundImage: 'url(https://images.unsplash.com/photo-1614631446501-abcf76949734?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)',
                                    height: '200px',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '10px 10px 0 0'
                                }} />
                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                                        Ilmalämpöpumput
                                    </h3>
                                    <p style={{ color: '#aaa', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                        Asennus, huolto ja kunnossapito. Säästä lämmityskustannuksissa ja paranna sisäilman laatua.
                                    </p>
                                    <span className="service-link">Lue lisää →</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <style>{`
                    .service-card {
                        background: #1a1a1a;
                        border-radius: 10px;
                        overflow: hidden;
                        border: 1px solid #333;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        position: relative;
                    }

                    .service-card::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(135deg, transparent 0%, rgba(57, 255, 20, 0.1) 100%);
                        opacity: 0;
                        transition: opacity 0.4s ease;
                        pointer-events: none;
                    }

                    .service-card:hover {
                        transform: translateY(-10px);
                        border-color: var(--accent-color);
                        box-shadow: 0 20px 40px rgba(57, 255, 20, 0.2);
                    }

                    .service-card:hover::before {
                        opacity: 1;
                    }

                    .service-card:hover .service-card-image {
                        transform: scale(1.1);
                    }

                    .service-card-image {
                        transition: transform 0.4s ease;
                    }

                    .service-link {
                        color: var(--accent-color);
                        font-weight: 600;
                        display: inline-flex;
                        align-items: center;
                        gap: 0.5rem;
                        transition: gap 0.3s ease;
                    }

                    .service-card:hover .service-link {
                        gap: 1rem;
                    }
                `}</style>
            </section>

            <Section
                data={content.sections.ev}
                imageSrc="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            />
            <Section
                data={content.sections.ac}
                imageSrc="https://images.unsplash.com/photo-1614631446501-abcf76949734?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                reversed
            />
            <Section
                data={content.sections.smartHome}
                imageSrc="https://images.unsplash.com/photo-1558002038-1091a166111c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;
