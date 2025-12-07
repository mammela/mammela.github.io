import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Shield, Zap, Home, Building2, Check } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const EVCharging: React.FC = () => {
    const { content } = useContent();

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
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${content.subsites.ev.hero}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#fff' }}>
                            Sähköauton <span style={{ color: 'var(--accent-color)' }}>Latausasemat</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#e0e0e0' }}>
                            Turvallinen, tehokas ja älykäs latausratkaisu kotiin ja taloyhtiöille.
                        </p>
                    </div>
                </section>

                {/* Why Get a Charging Station - from basicelectric.fi */}
                <section style={{ padding: '5rem 0', backgroundColor: '#121212' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem', color: '#fff' }}>
                            Miksi hankkia sähköauton latauspiste?
                        </h2>
                        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#888', marginBottom: '3rem' }}>
                            Lähde: <a href="https://basicelectric.fi/saumlhkoumlautolataus.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}>Basic Electric Oy</a>
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div style={{ padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '15px', border: '1px solid #333' }}>
                                <Shield size={48} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Turvallisuus edellä</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '1rem' }}>
                                    Sähköauton lataukseen tarkoitettu latauspiste on turvallinen valinta. Se on palo- ja henkilöturvallinen.
                                </p>
                                <p style={{ color: '#ccc', lineHeight: '1.6', fontStyle: 'italic' }}>
                                    Tavallinen pistorasia voi pitkäaikaisessa latauskäytössä vaurioitua tai jopa sulaa sekä aiheuttaa henkilövahinkoja.
                                </p>
                            </div>
                            <div style={{ padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '15px', border: '1px solid #333' }}>
                                <Zap size={48} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Täysi akku aamulla</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                    Latauspisteen avulla varmistat, että akku on yön aikana latautunut täyteen. Hyödynnä kiinteistösi koko kapasiteetti dynaamisella kuormanhallinnalla.
                                </p>
                            </div>
                            <div style={{ padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '15px', border: '1px solid #333' }}>
                                <Home size={48} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Helppo asennus</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                    Tarjoamme "avaimet käteen" -asennuksen. Hoidamme kaiken suunnittelusta käyttöönottoon, jotta sinä voit nauttia huolettomasta latauksesta.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section style={{ padding: '5rem 0', backgroundColor: '#0a0a0a' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem', color: '#fff' }}>
                            Ratkaisut jokaiseen tarpeeseen
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                            {/* Home Charging */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <img
                                        src={content.subsites.ev.homeCharging}
                                        alt="Kotilataus"
                                        style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                    />
                                </div>
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Omakotitaloon</h3>
                                    <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                        Oma latausasema tekee sähköautoilusta vaivatonta. Herää joka aamu täydellä akulla. DEFA Power ja muut huippulaitteet takaavat luotettavuuden ja älykkäät ominaisuudet, kuten pörssisähköohjauksen.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                            Kiinteä kaapeli tai pistorasia
                                        </li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                            Älykäs sovellusohjaus
                                        </li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                            5 vuoden takuu
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Housing Association */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap-reverse' }}>
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Taloyhtiöille</h3>
                                    <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                        Skaalautuvat ratkaisut taloyhtiöiden tarpeisiin. Hoidamme kaiken kartoituksesta laskutukseen. Älykäs kuormanhallinta varmistaa, että kiinteistön sähköliittymä riittää kaikille.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                            Reilu laskutus käyttäjän mukaan
                                        </li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                            Dynaaminen kuormanhallinta
                                        </li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                            Etähallinta ja valvonta
                                        </li>
                                    </ul>
                                </div>
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ position: 'relative' }}>
                                        <Building2 size={64} color="var(--accent-color)" style={{ position: 'absolute', top: '-32px', right: '-32px', zIndex: 10, filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }} />
                                        <img
                                            src={content.subsites.ev.housingAssociation}
                                            alt="Taloyhtiölataus"
                                            style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Installation Package Details */}
                <section style={{ padding: '5rem 0', backgroundColor: '#121212' }}>
                    <div className="container">
                        <div style={{
                            backgroundColor: '#1a1a1a',
                            borderRadius: '20px',
                            padding: '3rem',
                            border: '1px solid #333',
                            maxWidth: '900px',
                            margin: '0 auto'
                        }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff', textAlign: 'center' }}>
                                Defa Power 11kW asennus<br />
                                <span style={{ color: 'var(--accent-color)', fontSize: '1.5rem' }}>latausaseman perusasennuspaketti 1790€ </span>
                            </h2>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                                {[
                                    "Sähköinen etäkartoitus",
                                    "Max. 50 ajokm ja laitteen perusasennukseen kuuluvat työtunnit",
                                    "Max 10 metriä sähkökaapelia pinta-asennuksena sähkökeskukselta latausasemalle",
                                    "Latausaseman asentamisen seinään",
                                    "Tarvittavat kiinnitystarvikkeet",
                                    "Vikavirtasuoja ja automaattinen johdonsuoja",
                                    "Latausvirta säädettynä asennuskohteen mukaan",
                                    "Latausaseman toiminnan varmistaminen",
                                    "Latausaseman luovutus ja käytön opastus asiakkaalle",
                                    "Takuu laitteelle ja asennukselle on 3 vuotta"
                                ].map((item, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#ccc', fontSize: '1.1rem' }}>
                                        <div style={{ marginTop: '5px', color: 'var(--accent-color)' }}>
                                            <Check size={20} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #333', textAlign: 'center' }}>
                                <p style={{ color: '#aaa', marginBottom: '1rem', fontStyle: 'italic' }}>
                                    Asennuksen lisätyöt veloitetaan erikseen suoraan asiakkaalta ennalta sovitun kustannusarvion mukaisesti.
                                </p>
                                <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                                    Asennus 22kW <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>+300€ alkaen</span>
                                </p>
                                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                                    Hinnat voimassa toistaiseksi. Pidätämme oikeuden hinnanmuutoksiin.
                                </p>
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

export default EVCharging;
