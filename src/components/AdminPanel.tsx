import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useContent } from '../context/ContentContext';
import { useNavigate } from 'react-router-dom';
import { Save, LogOut, Key } from 'lucide-react';

const AdminPanel: React.FC = () => {
    const { isAuthenticated, login, logout, changePin } = useAuth();
    const { content, updateContent, resetContent } = useContent();
    const navigate = useNavigate();

    const [pinInput, setPinInput] = useState('');
    const [error, setError] = useState('');

    // Edit state
    const [editedContent, setEditedContent] = useState(content);
    const [newPin, setNewPin] = useState('');
    const [confirmPin, setConfirmPin] = useState('');

    // Sync edited content when content changes (e.g. on load)
    React.useEffect(() => {
        setEditedContent(content);
    }, [content]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (login(pinInput)) {
            setError('');
        } else {
            setError('Väärä PIN-koodi');
        }
    };

    const handleSave = () => {
        updateContent(editedContent);
        alert('Sisältö tallennettu!');
    };

    const handleChangePin = () => {
        if (newPin !== confirmPin) {
            alert('PIN-koodit eivät täsmää');
            return;
        }
        if (newPin.length < 4) {
            alert('PIN-koodin tulee olla vähintään 4 merkkiä');
            return;
        }
        // We need the old pin to change it, but since we are already logged in, 
        // we can assume the user knows it or we can just update it directly since we are in a protected route?
        // The changePin function requires oldPin.
        // Let's ask for old pin or just assume we can overwrite if we are authenticated.
        // Ideally we should ask for old pin again for security, but for this simple app:
        // We will just use the stored pin from localStorage to verify "oldPin" internally if we had access,
        // but the context requires oldPin.
        // Let's just prompt for current PIN.
        const currentPin = prompt('Syötä nykyinen PIN-koodi vahvistaaksesi:');
        if (currentPin && changePin(currentPin, newPin)) {
            alert('PIN-koodi vaihdettu!');
            setNewPin('');
            setConfirmPin('');
        } else {
            alert('Väärä nykyinen PIN-koodi');
        }
    };

    if (!isAuthenticated) {
        return (
            <div style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#121212'
            }}>
                <form onSubmit={handleLogin} className="card" style={{ width: '100%', maxWidth: '400px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Ylläpito</h2>
                    <input
                        type="password"
                        placeholder="Syötä PIN-koodi"
                        value={pinInput}
                        onChange={e => setPinInput(e.target.value)}
                        style={{ textAlign: 'center', fontSize: '1.5rem', letterSpacing: '5px' }}
                    />
                    {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</p>}
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Kirjaudu</button>
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#666',
                            width: '100%',
                            marginTop: '1rem',
                            textDecoration: 'underline'
                        }}
                    >
                        Takaisin etusivulle
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem', backgroundColor: '#121212', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1>Hallintapaneeli</h1>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button onClick={() => navigate('/')} className="btn">Siirry sivustolle</button>
                        <button onClick={logout} className="btn" style={{ borderColor: 'red', color: 'red' }}>
                            <LogOut size={18} /> Kirjaudu ulos
                        </button>
                    </div>
                </div>

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
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button onClick={handleSave} className="btn btn-primary">Tallenna muutokset</button>
                            <button onClick={resetContent} className="btn" style={{ borderColor: 'orange', color: 'orange' }}>Palauta oletukset</button>
                        </div>
                    </div>

                    {/* Settings */}
                    <div className="card" style={{ height: 'fit-content' }}>
                        <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Key size={24} color="var(--accent-color)" /> Asetukset
                        </h2>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3>Vaihda PIN-koodi</h3>
                            <label style={{ display: 'block', marginTop: '1rem' }}>Uusi PIN</label>
                            <input
                                type="password"
                                value={newPin}
                                onChange={e => setNewPin(e.target.value)}
                            />
                            <label>Vahvista uusi PIN</label>
                            <input
                                type="password"
                                value={confirmPin}
                                onChange={e => setConfirmPin(e.target.value)}
                            />
                            <button onClick={handleChangePin} className="btn">Vaihda PIN</button>
                        </div>

                        <div>
                            <h3>Yhteystiedot</h3>
                            <label>Sähköposti (lomakkeen kohde)</label>
                            <input
                                value={editedContent.contactEmail}
                                onChange={e => setEditedContent({ ...editedContent, contactEmail: e.target.value })}
                            />
                            <button onClick={handleSave} className="btn btn-primary">Päivitä sähköposti</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
