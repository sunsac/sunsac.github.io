import React from 'react';

export default function Section({ title, children }) {
    return (
        <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{
                fontSize: '1rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: 'var(--space-md)',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '0.5rem'
            }}>
                {title}
            </h2>
            <div style={{ paddingLeft: '0.5rem' }}>
                {children}
            </div>
        </section>
    );
}
