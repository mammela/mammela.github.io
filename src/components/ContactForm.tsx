import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
    const { content } = useContent();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate sending email
        setTimeout(() => {
            console.log(`Email sent to ${content.contactEmail}`, formData);
            setStatus('sent');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
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
                                        <span style={{ fontSize: '2rem', color: '#666' }}>?</span>
                                    </div>
                                    <h4 style={{ color: '#fff' }}>{owner.name}</h4>
                                    <p style={{ color: '#888', fontSize: '0.9rem' }}>{owner.role}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <p style={{ color: '#ccc' }}>Sähköposti: <a href={`mailto:${content.contactEmail}`}>{content.contactEmail}</a></p>
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
