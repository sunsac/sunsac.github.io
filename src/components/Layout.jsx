import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
    const location = useLocation();
    const year = new Date().getFullYear();

    const navStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '2rem',
        marginBottom: '2rem'
    };

    const linkStyle = (path) => ({
        textDecoration: 'none',
        color: location.pathname === path ? 'var(--primary)' : 'var(--text-main)',
        fontWeight: location.pathname === path ? '600' : '400',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        borderBottom: 'none'
    });

    const isHome = location.pathname === '/';

    return (
        <>
            <aside>
                <div style={{ marginBottom: '1rem' }}>
                    {/* Placeholder for avatar if user wants one later */}
                    <div style={{
                        width: '120px',
                        height: '120px',
                        backgroundColor: '#e5e7eb',
                        borderRadius: '50%',
                        margin: '0 auto 1rem',
                        backgroundImage: 'url(https://via.placeholder.com/150)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} />
                    <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: '700' }}>Sunsac</h2>
                    <div style={{ color: 'var(--primary)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Researcher & Developer</div>
                </div>

                <nav style={navStyle}>
                    <Link to="/" style={linkStyle('/')}>Home</Link>
                    <Link to="/blog" style={linkStyle('/blog')}>Blog</Link>
                </nav>

                <footer style={{ marginTop: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                        &copy; {year} All rights reserved.
                    </div>
                </footer>
            </aside>

            <main style={{ padding: isHome ? 0 : 'var(--space-lg)' }}>
                {isHome ? (
                    <Outlet />
                ) : (
                    <div className="container">
                        <Outlet />
                    </div>
                )}
            </main>
        </>
    );
}
