import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
    const { content } = useContent();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const payload = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch('https://default992b6348438747abb4411dcdfc58c8.88.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/63592b68592f45d1ae53ed5479c71f17/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=drRzWkvTKLp6BHPZ8a_4XKYaaX7XZH2phmbP_CV6u2Q', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setStatus('sent');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                console.error('Failed to send message', response.statusText);
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" style={{ padding: '6rem 0', backgroundColor: '#151515' }}>
            <div className="container">
                <h2 className="section-title" style={{ display: 'block', margin: '0 auto 3rem auto' }}>Ota yhteyttä</h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
                    {/* Owners Section */}
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h3 style={{ marginBottom: '2rem', color: 'var(--accent-color)' }}>Tiimimme</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
                            {content.owners.map((owner, index) => (
                                <div key={index} className="card" style={{ textAlign: 'center' }}>
                                    <div style={{
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        backgroundColor: '#333',
                                        margin: '0 auto 1rem auto',
                                        border: '2px solid var(--accent-color)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Placeholder for image */}
                                        {(owner.imagePlaceholder.startsWith('/') || owner.imagePlaceholder.startsWith('data:')) ? (
                                            <img
                                                src={owner.imagePlaceholder}
                                                alt={owner.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <span style={{ fontSize: '2rem', color: '#666' }}>
                                                {owner.name.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                    <h4 style={{ color: '#fff' }}>{owner.name}</h4>
                                    <p style={{ color: '#888', fontSize: '0.9rem' }}>{owner.role}</p>
                                    {owner.phone && <p style={{ color: '#ccc', fontSize: '0.9rem', marginTop: '0.5rem' }}>{owner.phone}</p>}
                                    {owner.email && <p style={{ color: '#ccc', fontSize: '0.9rem' }}><a href={`mailto:${owner.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{owner.email}</a></p>}
                                    {owner.address && <p style={{ color: '#888', fontSize: '0.8rem', marginTop: '0.5rem' }}>{owner.address}</p>}
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Yhteystiedot</h4>
                            <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>
                                <strong>Puhelin:</strong> <a href="tel:+358504064664" style={{ color: '#fff', textDecoration: 'none' }}>050 406 4664</a>
                            </p>
                            <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>
                                <strong>Instagram:</strong> <a href="https://instagram.com/basicelectric_oy" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>@basicelectric_oy</a>
                            </p>
                            <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '1rem', fontStyle: 'italic' }}>
                                Käytä yhteydenottolomaketta tai soita suoraan!
                            </p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <form onSubmit={handleSubmit} className="card">
                            <h3 style={{ marginBottom: '1.5rem' }}>Lähetä viesti</h3>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Nimi</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Sähköposti</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Viesti</label>
                                <textarea
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Lähetetään...' : status === 'sent' ? 'Lähetetty!' : 'Lähetä'}
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
