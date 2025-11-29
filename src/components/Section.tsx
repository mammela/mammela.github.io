import React from 'react';
import type { SectionContent } from '../types';

interface SectionProps {
    data: SectionContent;
    imageSrc: string;
    reversed?: boolean;
}

const Section: React.FC<SectionProps> = ({ data, imageSrc, reversed = false }) => {
    return (
        <section id={data.id} style={{ padding: '6rem 0', backgroundColor: reversed ? 'var(--secondary-bg)' : 'transparent' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: reversed ? 'row-reverse' : 'row',
                    alignItems: 'center',
                    gap: '4rem',
                    flexWrap: 'wrap'
                }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>{data.title}</h2>
                        <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '2rem', whiteSpace: 'pre-line' }}>
                            {data.content}
                        </p>
                        <button className="btn">Lue lisää</button>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <div style={{
                            position: 'relative',
                            padding: '10px',
                            border: '2px solid var(--accent-color)',
                            borderRadius: '10px'
                        }}>
                            <img
                                src={imageSrc}
                                alt={data.title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '5px',
                                    display: 'block',
                                    filter: 'grayscale(20%) contrast(110%)',
                                    transition: 'filter 0.3s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%) contrast(100%)'}
                                onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(20%) contrast(110%)'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;
