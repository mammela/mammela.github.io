import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Smartphone, Zap, Shield, Wifi } from 'lucide-react';

const Automation: React.FC = () => {
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
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1558002038-1091a166111c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#fff' }}>
                            Älykoti ja <span style={{ color: 'var(--accent-color)' }}>Automaatio</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#e0e0e0' }}>
                            Tee kodistasi älykäs, energiatehokas ja turvallinen Shelly-ratkaisuilla.
                        </p>
                    </div>
                </section>

                {/* Benefits Section */}
                <section style={{ padding: '5rem 0', backgroundColor: '#121212' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem', color: '#fff' }}>
                            Miksi valita älykoti?
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                            <div style={{ padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '15px', border: '1px solid #333' }}>
                                <Zap size={48} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Energiansäästö</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                    Seuraa sähkönkulutusta reaaliajassa ja optimoi laitteiden käyttö pörssisähkön hinnan mukaan. Säästä rahaa automaattisesti.
                                </p>
                            </div>
                            <div style={{ padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '15px', border: '1px solid #333' }}>
                                <Smartphone size={48} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Helppo hallinta</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                    Ohjaa valaistusta, lämmitystä ja muita laitteita suoraan puhelimellasi tai äänikomennoilla. Kaikki hallinnassa yhdestä paikasta.
                                </p>
                            </div>
                            <div style={{ padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '15px', border: '1px solid #333' }}>
                                <Shield size={48} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Turvallisuus</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                    Saat ilmoituksen heti, jos kotonasi havaitaan liikettä, vesivuoto tai savua. Voit reagoida tilanteisiin välittömästi missä tahansa oletkin.
                                </p>
                            </div>
                            <div style={{ padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '15px', border: '1px solid #333' }}>
                                <Wifi size={48} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Langaton vapaus</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                    Shelly-laitteet toimivat langattomasti WiFi-verkossa. Ei tarvetta kalliille keskusyksiköille tai suurille kaapelointitöille.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions Detail Section */}
                <section style={{ padding: '5rem 0', backgroundColor: '#0a0a0a' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem', color: '#fff' }}>
                            Ratkaisut arjen ongelmiin
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                            {/* Lighting Control */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                        alt="Älykäs valaistus"
                                        style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                    />
                                </div>
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Älykäs valaistus</h3>
                                    <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                        Unohditko valot päälle? Ei hätää. Älykkäällä valaistuksella voit sammuttaa valot etänä tai ajastaa ne toimimaan auringonlaskun mukaan.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                            Automaattinen syttyminen ja sammuminen
                                        </li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                            Himmennys ja värisävyn säätö
                                        </li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                            Liiketunnistus
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Heating Control */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap-reverse' }}>
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Lämmityksen optimointi</h3>
                                    <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                        Säästä lämmityskuluissa tinkimättä mukavuudesta. Shelly-releillä voit ohjata lämminvesivaraajaa, lattialämmitystä tai pattereita pörssisähkön halvimpien tuntien mukaan.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                            Pörssisähköohjaus
                                        </li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                            Etäohjaus ja ajastus
                                        </li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></div>
                                            Lämpötilan seuranta
                                        </li>
                                    </ul>
                                </div>
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                        alt="Lämmityksen ohjaus"
                                        style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                    />
                                </div>
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

export default Automation;
