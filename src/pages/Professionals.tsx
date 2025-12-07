import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Building, Stethoscope, Car, Handshake } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Professionals: React.FC = () => {
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
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${content.subsites.professionals.hero}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#fff' }}>
                            Palvelut <span style={{ color: 'var(--accent-color)' }}>Ammattilaisille</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#e0e0e0' }}>
                            Luotettava kumppani isännöitsijöille, autoliikkeille ja terveydenhuollon toimijoille.
                        </p>
                    </div>
                </section>

                {/* Intro Section */}
                <section style={{ padding: '5rem 0', backgroundColor: '#121212' }}>
                    <div className="container">
                        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                            <Handshake size={64} color="var(--accent-color)" style={{ marginBottom: '2rem' }} />
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#fff' }}>
                                Yhteistyökumppanisi sähköasioissa
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: '#ccc', lineHeight: '1.8' }}>
                                Tarjoamme joustavaa ja asiantuntevaa palvelua yrityksille ja yhteisöille.
                                Ymmärrämme eri toimialojen erityisvaatimukset ja toimimme luotettavana sopimuskumppanina.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section style={{ padding: '5rem 0', backgroundColor: '#0a0a0a' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                            {/* Building Managers */}
                            <div style={{ padding: '2rem', backgroundColor: '#151515', borderRadius: '15px', border: '1px solid #333' }}>
                                <Building size={48} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Isännöitsijöille</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    Hoidamme asunto-osakeyhtiöiden pienet ja suuret sähkötyöt nopeasti ja vaivattomasti.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#ccc' }}>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                        Vikakorjaukset ja huollot
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                        Valaistuksen uusiminen
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                        Sähköautojen latauskartoitukset
                                    </li>
                                </ul>
                            </div>

                            {/* Medical Operators */}
                            <div style={{ padding: '2rem', backgroundColor: '#151515', borderRadius: '15px', border: '1px solid #333' }}>
                                <Stethoscope size={48} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Sairaalaympäristöt</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    Meillä on vankka kokemus työskentelystä vaativissa sairaala- ja terveydenhuoltoympäristöissä.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#ccc' }}>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                        Hygienia- ja turvallisuusosaaminen
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                        Häiriötön työskentely
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                        Erikoisjärjestelmät
                                    </li>
                                </ul>
                            </div>

                            {/* Car Dealerships */}
                            <div style={{ padding: '2rem', backgroundColor: '#151515', borderRadius: '15px', border: '1px solid #333' }}>
                                <Car size={48} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Autoliikkeille</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    Tarjoa asiakkaallesi kokonaisvaltainen palvelu sähköauton oston yhteydessä.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#ccc' }}>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                        Kotilatausaseman asennuspaketti
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                        Neuvonta ja opastus
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                        Kumppanuussopimukset
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

export default Professionals;
