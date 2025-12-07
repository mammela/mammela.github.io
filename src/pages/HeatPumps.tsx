import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Thermometer, Wind, Settings, CheckCircle } from 'lucide-react';

const HeatPumps: React.FC = () => {
    return (
        <>
            <Header />
            <div style={{ paddingTop: '80px' }}>
                {/* Hero Section */}
                <section style={{
                    position: 'relative',
                    height: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1614631446501-abcf76949734?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#fff' }}>
                            Ilmalämpöpumput
                        </h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#e0e0e0' }}>
                            Säästä lämmityskuluissa ja paranna asumismukavuutta ympäri vuoden.
                        </p>
                    </div>
                </section>

                {/* Info Grid */}
                <section style={{ padding: '5rem 0', backgroundColor: '#121212' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                            {/* Maintenance */}
                            <div style={{ padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '15px', border: '1px solid #333' }}>
                                <Settings size={40} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Huolto ja Ylläpito</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '1rem' }}>
                                    Säännöllinen huolto varmistaa laitteen tehokkuuden ja pitkän iän. Muista kotitalousvähennys!
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#ccc' }}>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <CheckCircle size={16} color="var(--accent-color)" /> Kotitalouksissa 4 vuoden välein
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <CheckCircle size={16} color="var(--accent-color)" /> Yrityksissä 1 vuoden välein
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <CheckCircle size={16} color="var(--accent-color)" /> Kennoston ja suodattimien puhdistus
                                    </li>
                                </ul>
                            </div>

                            {/* Sizing */}
                            <div style={{ padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '15px', border: '1px solid #333' }}>
                                <Wind size={40} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Oikea Mitoitus</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '1rem' }}>
                                    Valitse oikea teholuokka asuntosi koon mukaan (normaali huonekorkeus):
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#ccc' }}>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                        <strong>09/25 sarja:</strong> 30-80 m²
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                        <strong>12/35 sarja:</strong> 40-120 m²
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                        <strong>18/50 sarja:</strong> 100-200 m²
                                    </li>
                                </ul>
                            </div>

                            {/* Winter Use */}
                            <div style={{ padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '15px', border: '1px solid #333' }}>
                                <Thermometer size={40} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Talvikäyttö</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                    Nykyaikaiset pumput toimivat tehokkaasti myös kovilla pakkasilla. Laitteisto huolehtii kompressorin esilämmityksestä.
                                </p>
                                <p style={{ color: '#aaa', lineHeight: '1.6', marginTop: '1rem' }}>
                                    <strong>Vinkki:</strong> Jos sammutat laitteen yli -25°C pakkasella, käynnistä se uudelleen vasta kun lämpötila nousee yli -15°C.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Detailed Content Section */}
                <section style={{ padding: '5rem 0', backgroundColor: '#0a0a0a' }}>
                    <div className="container">
                        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <img
                                    src="/ilmalampopumppu-asennettuna.png"
                                    alt="Ilmalämpöpumppu asennettuna"
                                    loading="lazy"
                                    style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                />
                            </div>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>Miksi valita ilmalämpöpumppu?</h2>
                                <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                    Ilmalämpöpumppu on erinomainen lisälämmönlähde, joka pienentää lämmityslaskua ja parantaa sisäilman laatua. Kesällä se toimii tehokkaana viilentäjänä.
                                </p>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Basic Electricin vinkit:</h3>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <strong>Sijoittelu:</strong> Sokkeloiset tilat vaativat huolellista suunnittelua lämmön leviämisen varmistamiseksi.
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <strong>Sulatus:</strong> Ulkoyksikön sulatusjakso on normaali toiminto, jonka aikana sisäyksikkö voi puhaltaa viileää. Tämä ei ole vika.
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <strong>Jäätyminen:</strong> Jos ulkoyksikkö jäätyy pahasti, käytä sulatukseen lämmintä vettä (esim. kastelukannulla). Älä hakkaa jäätä mekaanisesti!
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactForm />
                <Footer />
            </div>
        </>
    );
};

export default HeatPumps;
