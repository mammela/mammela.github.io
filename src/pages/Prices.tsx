import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Clock, Calculator, AlertCircle } from 'lucide-react';

const Prices: React.FC = () => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#121212', color: '#fff' }}>
            <Header />

            {/* Hero Section */}
            <div style={{
                padding: '120px 20px 60px',
                textAlign: 'center',
                background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hinnasto</h1>
                <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '800px', margin: '0 auto' }}>
                    Sähköalan Palveluhinnasto (Sis. ALV 25,5%)
                </p>
                <p style={{ marginTop: '1rem', color: 'var(--accent-color)' }}>Voimassa toistaiseksi</p>
            </div>

            <div className="container" style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>

                {/* 1. Tuntiveloitus */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
                        <Clock /> 1. Tuntiveloitus
                    </h2>
                    <p style={{ marginBottom: '1rem', color: '#aaa' }}>Tuntiveloitus laskutetaan alkavilta 15 minuutin jaksoilta.</p>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#1a1a1a', borderRadius: '8px', overflow: 'hidden' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#252525', textAlign: 'left' }}>
                                    <th style={{ padding: '1rem', borderBottom: '1px solid #333' }}>Palvelutyyppi</th>
                                    <th style={{ padding: '1rem', borderBottom: '1px solid #333' }}>Hinta (sis. ALV 25,5%)</th>
                                    <th style={{ padding: '1rem', borderBottom: '1px solid #333', color: '#888' }}>Hinta (ALV 0%)</th>
                                    <th style={{ padding: '1rem', borderBottom: '1px solid #333' }}>Kuvaus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #333' }}>
                                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>Normaali Sähkötyö</td>
                                    <td style={{ padding: '1rem', color: 'var(--accent-color)', fontSize: '1.1rem' }}>75,00 €/h</td>
                                    <td style={{ padding: '1rem', color: '#888' }}>59,76 €/h</td>
                                    <td style={{ padding: '1rem' }}>Tyypilliset asennus-, huolto- ja korjaustyöt.</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #333' }}>
                                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>Älykoti ja Automaatio</td>
                                    <td style={{ padding: '1rem', color: 'var(--accent-color)', fontSize: '1.1rem' }}>99,00 €/h</td>
                                    <td style={{ padding: '1rem', color: '#888' }}>78,88 €/h</td>
                                    <td style={{ padding: '1rem' }}>Vaativammat työt, jotka liittyvät älykkäisiin järjestelmiin ja automaatioon.</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>Suunnittelu ja Konsultointi</td>
                                    <td style={{ padding: '1rem', color: 'var(--accent-color)', fontSize: '1.1rem' }}>75,00 €/h</td>
                                    <td style={{ padding: '1rem', color: '#888' }}>59,76 €/h</td>
                                    <td style={{ padding: '1rem' }}>Sähkösuunnittelu, dokumentointi ja tekninen neuvonta.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 2. Lisäveloitukset */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
                        <AlertCircle /> 2. Lisäveloitukset ja Minimimaksut
                    </h2>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#1a1a1a', borderRadius: '8px', overflow: 'hidden' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#252525', textAlign: 'left' }}>
                                    <th style={{ padding: '1rem', borderBottom: '1px solid #333' }}>Nimike</th>
                                    <th style={{ padding: '1rem', borderBottom: '1px solid #333' }}>Hinta (sis. ALV 25,5%)</th>
                                    <th style={{ padding: '1rem', borderBottom: '1px solid #333', color: '#888' }}>Hinta (ALV 0%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: 'Pienlaskutus / Minimiveloitus', price: '45,00 €', price0: '35,86 €' },
                                    { name: 'Päivystys (ark. 16–07)', price: 'Tuntiveloitus + 50%', price0: 'Tuntiveloitus + 50%' },
                                    { name: 'Päivystys (viikonloppu/pyhä)', price: 'Tuntiveloitus + 100%', price0: 'Tuntiveloitus + 100%' },
                                    { name: 'Matkakulu (Lähialue)', price: '25,00 €', price0: '19,92 €' },
                                    { name: 'Tuntityön pienmateriaalilisä', price: '15,00 €', price0: '11,95 €' },
                                    { name: 'Purku- ja Jätemaksu', price: '10,00 €', price0: '7,97 €' },
                                    { name: 'Matkakulu (Kauempana)', price: '0,94 € / km', price0: '0,75 € / km' },
                                    { name: 'Työkalujen ja mittalaitteiden käyttö', price: '37,65 €', price0: '30,00 €' },
                                ].map((item, index) => (
                                    <tr key={index} style={{ borderBottom: index === 7 ? 'none' : '1px solid #333' }}>
                                        <td style={{ padding: '1rem' }}>{item.name}</td>
                                        <td style={{ padding: '1rem', fontWeight: 'bold' }}>{item.price}</td>
                                        <td style={{ padding: '1rem', color: '#888' }}>{item.price0}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 3. Esimerkkilaskelma */}
                <div style={{ marginBottom: '2rem' }}>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
                        <Calculator /> 3. Esimerkkilaskelma
                    </h2>

                    <div style={{ backgroundColor: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Normaali Sähkötyö</h3>
                        <p style={{ marginBottom: '1.5rem', color: '#aaa' }}>Työ: Kolmen uuden pistorasian asennus keittiöön.</p>

                        <div style={{ display: 'grid', gap: '0.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #333' }}>
                                <span>Työaika (Normaali, 75,00 €/h)</span>
                                <span>2,5 h x 75,00 € = 187,50 €</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #333' }}>
                                <span>Matkakulu (Lähialue)</span>
                                <span>25,00 €</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #333' }}>
                                <span>Pienmateriaalilisä</span>
                                <span>15,00 €</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #333' }}>
                                <span>Materiaalit (Arvio: 80,00 € ALV 0%)</span>
                                <span>100,40 € (sis. ALV)</span>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0 0', marginTop: '0.5rem', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--accent-color)' }}>
                                <span>LOPULLINEN ARVIO (sis. ALV 25,5%)</span>
                                <span>327,90 €</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default Prices;
