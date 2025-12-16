import React from 'react';
import Section from '../components/Section';

export default function Home() {
    return (
        <div style={{ padding: '2rem 0' }}>
            <header style={{ marginBottom: '4rem' }}>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: '900',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-serif)'
                }}>
                    I am a<br />
                    <span style={{ color: 'var(--primary)' }}>Researcher &<br />Developer</span>
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-muted)',
                    maxWidth: '500px',
                    lineHeight: '1.6'
                }}>
                    Simplicity is the ultimate sophistication. I build intelligent agents and performant web systems.
                    Based in the Cloud.
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <button style={{
                        padding: '1rem 2rem',
                        background: 'none',
                        border: '2px solid var(--text-main)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        cursor: 'pointer'
                    }}>
                        View My Work
                    </button>
                </div>
            </header>

            {/* Kept minimal as requested - removed detailed bio/experience lists for now 
          to match the "too private" request. Could add them back in a "About" page later if needed.
      */}

        </div>
    );
}
