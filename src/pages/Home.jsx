import React from 'react';
import Section from '../components/Section';

import homeBackgroundImage from '../assets/home_page.png';

export default function Home() {
    return (
        <div style={{
            padding: '4rem',
            backgroundImage: `url(${homeBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start' // Centering the content horizontally as well
        }}>
            <header style={{
                marginBottom: '2rem',
                background: 'rgba(255, 255, 255, 0.1)', // Glass background
                backdropFilter: 'blur(12px)',            // Blur effect
                WebkitBackdropFilter: 'blur(12px)',      // Safari support
                padding: '3rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                maxWidth: '800px',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left'
            }}>
                <h1 style={{
                    fontSize: '4.5rem',
                    fontWeight: '900',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em',
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-serif)',
                    color: '#fff',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)' // Subtle text shadow for white text
                }}>
                    This is my<br />
                    <span style={{
                        color: '#60A5FA', // Lighter, glowing blue
                        textShadow: '0 0 20px rgba(96, 165, 250, 0.5)' // Glow effect
                    }}>
                        Little Knowledge Reservoir
                    </span>
                </h1>
                <p style={{
                    fontSize: '1.5rem',
                    color: 'rgba(255, 255, 255, 0.9)', // High contrast white
                    maxWidth: '600px',
                    lineHeight: '1.6',
                    fontWeight: '500',
                    textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                }}>
                    Simplicity is the ultimate sophistication.
                </p>
            </header>

            {/* Keeping the note in source but cleaner */}
        </div>
    );
}
