import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Lightbulb, Zap, Home, PenTool } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const ElectricalServices: React.FC = () => {
    const { content } = useContent();

    return (
        <>
            <Header />
            <div style={{ paddingTop: '80px' }}>
                {/* Hero Section */}
                <section style={{
                    position: 'relative',
                    height: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${content.subsites.electrical.hero}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#fff' }}>
                            Sähköpalvelut
                        </h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#e0e0e0' }}>
                            Ammattitaitoiset sähköasennukset koteihin ja yrityksiin.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section style={{ padding: '5rem 0', backgroundColor: '#121212' }}>
                    <div className="container">
                        <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>Palvelumme</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                            {/* Service 1 */}
                            <div style={{ backgroundColor: '#1a1a1a', padding: '2rem', borderRadius: '10px', border: '1px solid #333' }}>
                                <Zap size={40} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Sähköasennukset</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                    Teemme kaikki kodin sähkötyöt pistorasioiden lisäyksestä koko talon sähköistykseen. Noudatamme aina uusimpia sähköturvallisuusmääräyksiä.
                                </p>
                            </div>

                            {/* Service 2 */}
                            <div style={{ backgroundColor: '#1a1a1a', padding: '2rem', borderRadius: '10px', border: '1px solid #333' }}>
                                <Lightbulb size={40} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Valaistusratkaisut</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                    Suunnittelemme ja toteutamme energiatehokkaat LED-valaistukset sisälle ja ulos. Älykäs valaistuksen ohjaus tuo mukavuutta ja säästöä.
                                </p>
                            </div>

                            {/* Service 3 */}
                            <div style={{ backgroundColor: '#1a1a1a', padding: '2rem', borderRadius: '10px', border: '1px solid #333' }}>
                                <Home size={40} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Saneerauskohteet</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                    Keittiö- ja kylpyhuoneremonttien sähkötyöt sekä vanhojen sähköjärjestelmien uusiminen. Varmista kotisi turvallisuus nykyaikaisilla ratkaisuilla.
                                </p>
                            </div>

                            {/* Service 4 */}
                            <div style={{ backgroundColor: '#1a1a1a', padding: '2rem', borderRadius: '10px', border: '1px solid #333' }}>
                                <PenTool size={40} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Huolto ja Kunnossapito</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                    Sähkölaitteistojen määräaikaishuollot ja vianetsintä. Nopea apu sähkövikojen yllättäessä.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Image Showcase */}
                <section style={{ padding: '5rem 0', backgroundColor: '#0a0a0a' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <img
                                src={content.subsites.electrical.showcase1}
                                alt="Sähköasentaja työssä"
                                loading="lazy"
                                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                            />
                            <img
                                src={content.subsites.electrical.showcase2}
                                alt="Moderni valaistus"
                                loading="lazy"
                                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                            />
                            <img
                                src={content.subsites.electrical.showcase3}
                                alt="Toimiston sähköistys"
                                loading="lazy"
                                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                            />
                        </div>
                    </div>
                </section>

                <ContactForm />
                <Footer />
            </div>
        </>
    );
};

export default ElectricalServices;
