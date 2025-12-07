import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Lock, LogOut, Save, Fingerprint } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const AdminPanel: React.FC = () => {
    const { isAuthenticated, hasPasskey, login, logout, changePin, registerPasskey, loginWithPasskey } = useAuth();
    const { content, updateContent } = useContent();
    const [pinInput, setPinInput] = useState('');
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState<'content' | 'settings'>('content');

    // Settings state
    const [oldPin, setOldPin] = useState('');
    const [newPin, setNewPin] = useState('');
    const [confirmPin, setConfirmPin] = useState('');
    const [pinMessage, setPinMessage] = useState('');

    // Content editing state
    const [editedContent, setEditedContent] = useState(content);

    // Sync edited content when content changes
    React.useEffect(() => {
        setEditedContent(content);
    }, [content]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (login(pinInput)) {
            setPinInput('');
            setError('');
        } else {
            setError('Väärä PIN-koodi');
        }
    };

    const handleChangePin = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPin !== confirmPin) {
            setPinMessage('Uudet PIN-koodit eivät täsmää');
            return;
        }
        if (newPin.length < 4) {
            setPinMessage('PIN-koodin tulee olla vähintään 4 numeroa');
            return;
        }
        if (changePin(oldPin, newPin)) {
            setPinMessage('PIN-koodi vaihdettu onnistuneesti');
            setOldPin('');
            setNewPin('');
            setConfirmPin('');
        } else {
            setPinMessage('Vanha PIN-koodi on väärin');
        }
    };

    const handleSaveContent = () => {
        updateContent(editedContent);
        alert('Muutokset tallennettu!');
    };

    if (!isAuthenticated) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                padding: '2rem'
            }}>
                <div style={{
                    backgroundColor: '#1a1a1a',
                    padding: '2rem',
                    borderRadius: '15px',
                    border: '1px solid #333',
                    width: '100%',
                    maxWidth: '400px',
                    textAlign: 'center'
                }}>
                    <Lock size={48} color="var(--accent-color)" style={{ marginBottom: '1.5rem' }} />
                    <h2 style={{ marginBottom: '1.5rem', color: '#fff' }}>Ylläpitokirjautuminen</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            value={pinInput}
                            onChange={(e) => setPinInput(e.target.value)}
                            placeholder="Syötä PIN-koodi"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                marginBottom: '1rem',
                                borderRadius: '5px',
                                border: '1px solid #333',
                                backgroundColor: '#000',
                                color: '#fff',
                                fontSize: '1.2rem',
                                textAlign: 'center'
                            }}
                        />
                        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                backgroundColor: 'var(--accent-color)',
                                color: '#000',
                                border: 'none',
                                borderRadius: '5px',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            Kirjaudu
                        </button>
                    </form>

                    {hasPasskey && (
                        <button
                            onClick={() => loginWithPasskey()}
                            style={{
                                marginTop: '1rem',
                                padding: '0.8rem',
                                width: '100%',
                                backgroundColor: '#333',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <Fingerprint size={20} />
                            Kirjaudu FaceID / TouchID:llä
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Ylläpito</h1>
                <button
                    onClick={logout}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: '#333',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    <LogOut size={18} /> Kirjaudu ulos
                </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <button
                    onClick={() => setActiveTab('content')}
                    style={{
                        padding: '0.8rem 1.5rem',
                        backgroundColor: activeTab === 'content' ? 'var(--accent-color)' : '#1a1a1a',
                        color: activeTab === 'content' ? '#000' : '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Sisällönhallinta
                </button>
                <button
                    onClick={() => setActiveTab('settings')}
                    style={{
                        padding: '0.8rem 1.5rem',
                        backgroundColor: activeTab === 'settings' ? 'var(--accent-color)' : '#1a1a1a',
                        color: activeTab === 'settings' ? '#000' : '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Asetukset
                </button>
            </div>

            {activeTab === 'settings' ? (
                <div style={{ backgroundColor: '#1a1a1a', padding: '2rem', borderRadius: '15px', border: '1px solid #333', maxWidth: '600px' }}>

                    <div style={{ marginBottom: '2rem', borderBottom: '1px solid #333', paddingBottom: '2rem' }}>
                        <h2 style={{ marginBottom: '1.5rem', color: '#fff' }}>Turvallisuus</h2>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <p style={{ color: '#aaa', marginBottom: '1rem' }}>
                                Voit ottaa käyttöön FaceID:n tai TouchID:n nopeampaa kirjautumista varten.
                            </p>
                            <button
                                onClick={async () => {
                                    const success = await registerPasskey();
                                    if (success) alert('FaceID/TouchID otettu käyttöön!');
                                    else alert('Käyttöönotto epäonnistui. Varmista että laitteesi tukee biometristä tunnistusta.');
                                }}
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    backgroundColor: 'var(--accent-color)',
                                    color: '#000',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <Fingerprint size={20} />
                                {hasPasskey ? 'Päivitä FaceID/TouchID' : 'Ota käyttöön FaceID/TouchID'}
                            </button>
                        </div>
                    </div>

                    <h2 style={{ marginBottom: '1.5rem', color: '#fff' }}>Vaihda PIN-koodi</h2>
                    <form onSubmit={handleChangePin}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Vanha PIN</label>
                            <input
                                type="password"
                                value={oldPin}
                                onChange={(e) => setOldPin(e.target.value)}
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#000', color: '#fff' }}
                            />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Uusi PIN</label>
                            <input
                                type="password"
                                value={newPin}
                                onChange={(e) => setNewPin(e.target.value)}
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#000', color: '#fff' }}
                            />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Vahvista uusi PIN</label>
                            <input
                                type="password"
                                value={confirmPin}
                                onChange={(e) => setConfirmPin(e.target.value)}
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#000', color: '#fff' }}
                            />
                        </div>
                        {pinMessage && <p style={{ color: pinMessage.includes('onnistuneesti') ? 'var(--accent-color)' : 'red', marginBottom: '1rem' }}>{pinMessage}</p>}
                        <button
                            type="submit"
                            style={{
                                padding: '0.8rem 1.5rem',
                                backgroundColor: 'var(--accent-color)',
                                color: '#000',
                                border: 'none',
                                borderRadius: '5px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            Vaihda PIN
                        </button>
                    </form>
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Content Editor */}
                    <div className="card">
                        <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Save size={24} color="var(--accent-color)" /> Sisällön muokkaus
                        </h2>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3>Hero-osio</h3>
                            <label style={{ display: 'block', marginTop: '1rem' }}>Otsikko</label>
                            <input
                                value={editedContent.hero.title}
                                onChange={e => setEditedContent({ ...editedContent, hero: { ...editedContent.hero, title: e.target.value } })}
                            />
                            <label>Alaotsikko</label>
                            <input
                                value={editedContent.hero.subtitle}
                                onChange={e => setEditedContent({ ...editedContent, hero: { ...editedContent.hero, subtitle: e.target.value } })}
                            />
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3>Sähköautolataus</h3>
                            <label>Otsikko</label>
                            <input
                                value={editedContent.sections.ev.title}
                                onChange={e => setEditedContent({ ...editedContent, sections: { ...editedContent.sections, ev: { ...editedContent.sections.ev, title: e.target.value } } })}
                            />
                            <label>Sisältö</label>
                            <textarea
                                rows={4}
                                value={editedContent.sections.ev.content}
                                onChange={e => setEditedContent({ ...editedContent, sections: { ...editedContent.sections, ev: { ...editedContent.sections.ev, content: e.target.value } } })}
                            />
                            <label>Kuva</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
                                <img src={editedContent.sections.ev.image || '/placeholder-1.png'} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                setEditedContent(prev => ({
                                                    ...prev,
                                                    sections: {
                                                        ...prev.sections,
                                                        ev: { ...prev.sections.ev, image: reader.result as string }
                                                    }
                                                }));
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                                <button
                                    onClick={() => setEditedContent(prev => ({ ...prev, sections: { ...prev.sections, ev: { ...prev.sections.ev, image: '/placeholder-1.png' } } }))}
                                    className="btn"
                                    style={{ fontSize: '0.8rem', padding: '0.5rem' }}
                                >
                                    Palauta oletus
                                </button>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3>Ilmalämpöpumput</h3>
                            <label>Otsikko</label>
                            <input
                                value={editedContent.sections.ac.title}
                                onChange={e => setEditedContent({ ...editedContent, sections: { ...editedContent.sections, ac: { ...editedContent.sections.ac, title: e.target.value } } })}
                            />
                            <label>Sisältö</label>
                            <textarea
                                rows={4}
                                value={editedContent.sections.ac.content}
                                onChange={e => setEditedContent({ ...editedContent, sections: { ...editedContent.sections, ac: { ...editedContent.sections.ac, content: e.target.value } } })}
                            />
                            <label>Kuva</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
                                <img src={editedContent.sections.ac.image || '/placeholder-2.png'} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                setEditedContent(prev => ({
                                                    ...prev,
                                                    sections: {
                                                        ...prev.sections,
                                                        ac: { ...prev.sections.ac, image: reader.result as string }
                                                    }
                                                }));
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                                <button
                                    onClick={() => setEditedContent(prev => ({ ...prev, sections: { ...prev.sections, ac: { ...prev.sections.ac, image: '/placeholder-2.png' } } }))}
                                    className="btn"
                                    style={{ fontSize: '0.8rem', padding: '0.5rem' }}
                                >
                                    Palauta oletus
                                </button>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3>Älykoti</h3>
                            <label>Otsikko</label>
                            <input
                                value={editedContent.sections.smartHome.title}
                                onChange={e => setEditedContent({ ...editedContent, sections: { ...editedContent.sections, smartHome: { ...editedContent.sections.smartHome, title: e.target.value } } })}
                            />
                            <label>Sisältö</label>
                            <textarea
                                rows={4}
                                value={editedContent.sections.smartHome.content}
                                onChange={e => setEditedContent({ ...editedContent, sections: { ...editedContent.sections, smartHome: { ...editedContent.sections.smartHome, content: e.target.value } } })}
                            />
                            <label>Kuva</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
                                <img src={editedContent.sections.smartHome.image || '/placeholder-3.png'} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                setEditedContent(prev => ({
                                                    ...prev,
                                                    sections: {
                                                        ...prev.sections,
                                                        smartHome: { ...prev.sections.smartHome, image: reader.result as string }
                                                    }
                                                }));
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                                <button
                                    onClick={() => setEditedContent(prev => ({ ...prev, sections: { ...prev.sections, smartHome: { ...prev.sections.smartHome, image: '/placeholder-3.png' } } }))}
                                    className="btn"
                                    style={{ fontSize: '0.8rem', padding: '0.5rem' }}
                                >
                                    Palauta oletus
                                </button>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem', borderTop: '1px solid #333', paddingTop: '2rem' }}>
                            <h2 style={{ marginBottom: '1.5rem' }}>Alasivujen kuvat</h2>

                            {/* EV Charging Subsite */}
                            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>Sähköautolataus (Alasivu)</h3>
                            <label>Hero-kuva</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                <img src={editedContent.subsites.ev.hero} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setEditedContent(prev => ({ ...prev, subsites: { ...prev.subsites, ev: { ...prev.subsites.ev, hero: reader.result as string } } }));
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                            </div>
                            <label>Kotilataus-kuva</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                <img src={editedContent.subsites.ev.homeCharging} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setEditedContent(prev => ({ ...prev, subsites: { ...prev.subsites, ev: { ...prev.subsites.ev, homeCharging: reader.result as string } } }));
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                            </div>
                            <label>Taloyhtiö-kuva</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                <img src={editedContent.subsites.ev.housingAssociation} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setEditedContent(prev => ({ ...prev, subsites: { ...prev.subsites, ev: { ...prev.subsites.ev, housingAssociation: reader.result as string } } }));
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                            </div>

                            {/* Electrical Services Subsite */}
                            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)', marginTop: '2rem' }}>Sähköpalvelut (Alasivu)</h3>
                            <label>Hero-kuva</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                <img src={editedContent.subsites.electrical.hero} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setEditedContent(prev => ({ ...prev, subsites: { ...prev.subsites, electrical: { ...prev.subsites.electrical, hero: reader.result as string } } }));
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                            </div>
                            <label>Showcase 1</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                <img src={editedContent.subsites.electrical.showcase1} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setEditedContent(prev => ({ ...prev, subsites: { ...prev.subsites, electrical: { ...prev.subsites.electrical, showcase1: reader.result as string } } }));
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                            </div>
                            <label>Showcase 2</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                <img src={editedContent.subsites.electrical.showcase2} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setEditedContent(prev => ({ ...prev, subsites: { ...prev.subsites, electrical: { ...prev.subsites.electrical, showcase2: reader.result as string } } }));
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                            </div>
                            <label>Showcase 3</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                <img src={editedContent.subsites.electrical.showcase3} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setEditedContent(prev => ({ ...prev, subsites: { ...prev.subsites, electrical: { ...prev.subsites.electrical, showcase3: reader.result as string } } }));
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                            </div>

                            {/* Heat Pumps Subsite */}
                            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)', marginTop: '2rem' }}>Ilmalämpöpumput (Alasivu)</h3>
                            <label>Hero-kuva</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                <img src={editedContent.subsites.heatPumps.hero} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setEditedContent(prev => ({ ...prev, subsites: { ...prev.subsites, heatPumps: { ...prev.subsites.heatPumps, hero: reader.result as string } } }));
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                            </div>
                            <label>Detail-kuva</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                <img src={editedContent.subsites.heatPumps.detail} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setEditedContent(prev => ({ ...prev, subsites: { ...prev.subsites, heatPumps: { ...prev.subsites.heatPumps, detail: reader.result as string } } }));
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                            </div>

                            {/* Automation Subsite */}
                            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)', marginTop: '2rem' }}>Automaatio (Alasivu)</h3>
                            <label>Hero-kuva</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                <img src={editedContent.subsites.automation.hero} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setEditedContent(prev => ({ ...prev, subsites: { ...prev.subsites, automation: { ...prev.subsites.automation, hero: reader.result as string } } }));
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                            </div>
                            <label>Valaistus-kuva</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                <img src={editedContent.subsites.automation.lighting} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setEditedContent(prev => ({ ...prev, subsites: { ...prev.subsites, automation: { ...prev.subsites.automation, lighting: reader.result as string } } }));
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                            </div>
                            <label>Lämmitys-kuva</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                <img src={editedContent.subsites.automation.heating} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setEditedContent(prev => ({ ...prev, subsites: { ...prev.subsites, automation: { ...prev.subsites.automation, heating: reader.result as string } } }));
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                            </div>

                            {/* Professionals Subsite */}
                            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)', marginTop: '2rem' }}>Ammattilaiset (Alasivu)</h3>
                            <label>Hero-kuva</label>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
                                <img src={editedContent.subsites.professionals.hero} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => setEditedContent(prev => ({ ...prev, subsites: { ...prev.subsites, professionals: { ...prev.subsites.professionals, hero: reader.result as string } } }));
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3>Tiimi</h3>
                            {editedContent.owners.map((owner, index) => (
                                <div key={index} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #333', borderRadius: '8px' }}>
                                    <h4 style={{ marginBottom: '1rem' }}>{owner.name}</h4>
                                    <label>Nimi</label>
                                    <input
                                        value={owner.name}
                                        onChange={e => {
                                            const newOwners = [...editedContent.owners];
                                            newOwners[index] = { ...newOwners[index], name: e.target.value };
                                            setEditedContent({ ...editedContent, owners: newOwners });
                                        }}
                                    />
                                    <label>Rooli</label>
                                    <input
                                        value={owner.role}
                                        onChange={e => {
                                            const newOwners = [...editedContent.owners];
                                            newOwners[index] = { ...newOwners[index], role: e.target.value };
                                            setEditedContent({ ...editedContent, owners: newOwners });
                                        }}
                                    />
                                    <label>Puhelin</label>
                                    <input
                                        value={owner.phone || ''}
                                        onChange={e => {
                                            const newOwners = [...editedContent.owners];
                                            newOwners[index] = { ...newOwners[index], phone: e.target.value };
                                            setEditedContent({ ...editedContent, owners: newOwners });
                                        }}
                                    />
                                    <label>Sähköposti</label>
                                    <input
                                        value={owner.email || ''}
                                        onChange={e => {
                                            const newOwners = [...editedContent.owners];
                                            newOwners[index] = { ...newOwners[index], email: e.target.value };
                                            setEditedContent({ ...editedContent, owners: newOwners });
                                        }}
                                    />
                                    <label>Osoite/Info</label>
                                    <input
                                        value={owner.address || ''}
                                        onChange={e => {
                                            const newOwners = [...editedContent.owners];
                                            newOwners[index] = { ...newOwners[index], address: e.target.value };
                                            setEditedContent({ ...editedContent, owners: newOwners });
                                        }}
                                    />
                                    <label>Kuva</label>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
                                        <img src={owner.imagePlaceholder} alt="Preview" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%' }} />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        const newOwners = [...editedContent.owners];
                                                        newOwners[index] = { ...newOwners[index], imagePlaceholder: reader.result as string };
                                                        setEditedContent({ ...editedContent, owners: newOwners });
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                        <button
                                            onClick={() => {
                                                const newOwners = [...editedContent.owners];
                                                newOwners[index] = { ...newOwners[index], imagePlaceholder: `/owner-${index + 1}.png` };
                                                setEditedContent({ ...editedContent, owners: newOwners });
                                            }}
                                            className="btn"
                                            style={{ fontSize: '0.8rem', padding: '0.5rem' }}
                                        >
                                            Palauta oletus
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                onClick={handleSaveContent}
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    backgroundColor: 'var(--accent-color)',
                                    color: '#000',
                                    border: 'none',
                                    borderRadius: '5px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}
                            >
                                Tallenna muutokset
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
