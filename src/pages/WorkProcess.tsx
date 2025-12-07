import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, FileText, Hammer, CheckCircle, ClipboardCheck } from 'lucide-react';

const WorkProcess: React.FC = () => {
    const steps = [
        {
            icon: <Phone size={40} color="var(--accent-color)" />,
            title: "1. Tarpeen Kartoitus ja Tarjouspyyntö",
            content: [
                { subtitle: "Asiakkaan Tarve", text: "Asiakas ottaa yhteyttä ja kuvailee tarpeensa (esim. uuden pistorasian asennus, sähköauton latausasema, remontti)." },
                { subtitle: "Kohteen Arviointi", text: "Urakoitsija käy kohteessa tai pyytää riittävät tiedot (kuvat, pohjapiirrokset) työn laajuuden arvioimiseksi." },
                { subtitle: "Määräysten Tarkastus", text: "Tarkastetaan, mitä sähköturvallisuusmääräyksiä (esim. SFS 6000) ja rakennusmääräyksiä kohteessa on noudatettava." },
                { subtitle: "Tarjouksen Laadinta", text: "Laaditaan kirjallinen tarjous, joka sisältää työ- ja materiaalikustannukset sekä arvioidun aikataulun." }
            ]
        },
        {
            icon: <FileText size={40} color="var(--accent-color)" />,
            title: "2. Sopimus ja Suunnittelu",
            content: [
                { subtitle: "Sopimuksen Hyväksyntä", text: "Asiakkaan hyväksyttyä tarjouksen syntyy sitova työsopimus." },
                { subtitle: "Toteutussuunnittelu", text: "Pienissä töissä suunnittelu on yksinkertaista. Suurissa kohteissa (esim. uudisrakennus tai laaja remontti) laaditaan viralliset sähkösuunnitelmat ja kytkentäkaaviot." },
                { subtitle: "Laitteiden Hankinta", text: "Tilaus tehdään tarvittavista materiaaleista ja komponenteista." },
                { subtitle: "Aikataulutus", text: "Työn aloituspäivä ja välitavoitteet sovitaan asiakkaan kanssa." }
            ]
        },
        {
            icon: <Hammer size={40} color="var(--accent-color)" />,
            title: "3. Työn Suorittaminen",
            content: [
                { subtitle: "Työn Aloitus", text: "Asentaja saapuu kohteeseen ja suorittaa työn suunnitelmien ja sähköalan standardien mukaisesti." },
                { subtitle: "Määräysten Noudattaminen", text: "Työ tehdään aina voimassa olevien turvallisuusmääräysten mukaisesti." },
                { subtitle: "Välivaiheen Tarkastukset", text: "Isommissa kohteissa tehdään välitarkastuksia (esim. kaapelointien ja kotelointien asennusvaiheessa), ennen kuin rakenteet suljetaan." },
                { subtitle: "Asiakasviestintä", text: "Mahdollisista muutoksista tai yllättävistä ongelmista tiedotetaan asiakkaalle viiveettä." }
            ]
        },
        {
            icon: <CheckCircle size={40} color="var(--accent-color)" />,
            title: "4. Käyttöönottotarkastus ja Mittaukset",
            content: [
                { subtitle: "Tarkastus ja Mittaukset", text: "Kun työ on valmis, suoritetaan käyttöönottotarkastus. Tähän sisältyy silmämääräinen tarkastus sekä lakisääteiset sähkömittaukset, kuten eristysvastus- ja suojamaadoitusmittaukset." },
                { subtitle: "Testaus", text: "Varmistetaan, että kaikki laitteet ja kytkennät toimivat aiotulla tavalla." },
                { subtitle: "Vian Korjaus", text: "Jos mittauksissa havaitaan puutteita, ne korjataan välittömästi ennen työn luovutusta." }
            ]
        },
        {
            icon: <ClipboardCheck size={40} color="var(--accent-color)" />,
            title: "5. Luovutus ja Dokumentointi (Pöytäkirja)",
            content: [
                { subtitle: "Työn Luovutus", text: "Työ luovutetaan asiakkaalle. Asentaja ohjeistaa laitteiden (esim. uusi keskus, älylaitteet) käyttöön." },
                { subtitle: "Laskutus", text: "Toimitetaan lopullinen lasku, jossa eritellään työ ja materiaalit." },
                { subtitle: "Pöytäkirjan Toimitus", text: "Asiakkaalle toimitetaan käyttöönottotarkastuspöytäkirja. Pöytäkirja on virallinen todiste siitä, että sähkötyö on suoritettu asianmukaisesti ja turvallisesti." },
                { subtitle: "Takuu", text: "Työstä myönnetään sopimuksen mukainen takuu." }
            ]
        }
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#121212', color: '#fff' }}>
            <Header />

            {/* Hero Section */}
            <div style={{
                padding: '120px 20px 60px',
                textAlign: 'center',
                background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Sähkötyöprojektin Eteneminen</h1>
                <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '800px', margin: '0 auto' }}>
                    Sähkötyöprojekti etenee systemaattisesti viiden vaiheen kautta, jotta varmistetaan sekä työn laatu että turvallisuus.
                </p>
            </div>

            {/* Steps Section */}
            <div className="container" style={{ padding: '60px 20px' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            gap: '2rem',
                            marginBottom: '4rem',
                            position: 'relative'
                        }}>
                            {/* Connecting Line */}
                            {index < steps.length - 1 && (
                                <div style={{
                                    position: 'absolute',
                                    left: '20px',
                                    top: '60px',
                                    bottom: '-60px',
                                    width: '2px',
                                    backgroundColor: '#333',
                                    zIndex: 0
                                }} />
                            )}

                            {/* Icon */}
                            <div style={{
                                flexShrink: 0,
                                width: '42px',
                                height: '42px',
                                backgroundColor: '#1a1a1a',
                                border: '2px solid var(--accent-color)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1,
                                boxShadow: '0 0 15px rgba(57, 255, 20, 0.2)'
                            }}>
                                {step.icon}
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1 }}>
                                <h2 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>{step.title}</h2>
                                <div style={{ display: 'grid', gap: '1.5rem' }}>
                                    {step.content.map((item, i) => (
                                        <div key={i} style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid #333' }}>
                                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>{item.subtitle}</h3>
                                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div style={{
                        marginTop: '4rem',
                        padding: '2rem',
                        backgroundColor: 'rgba(57, 255, 20, 0.05)',
                        border: '1px solid var(--accent-color)',
                        borderRadius: '10px',
                        textAlign: 'center'
                    }}>
                        <p style={{ fontSize: '1.1rem', color: '#fff' }}>
                            Pöytäkirjan säilyttäminen on asiakkaalle tärkeää mahdollisten vakuutus- tai myöhempien korjaustilanteiden varalta.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default WorkProcess;
