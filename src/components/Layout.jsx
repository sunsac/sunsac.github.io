import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { getPost } from '../utils/posts';

import easyImage from '../assets/easy.png';
import hardImage from '../assets/hard.png';

export default function Layout() {
    const location = useLocation();
    const year = new Date().getFullYear();
    const [isMoving, setIsMoving] = useState(false);

    useEffect(() => {
        let timeoutId;

        const handleMouseMove = () => {
            setIsMoving(true);

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsMoving(false);
            }, 200); // Revert to easy.png after 200ms of no movement
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timeoutId);
        };
    }, []);

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

    // Check if we are viewing an HTML post
    const isHtmlPost = React.useMemo(() => {
        const match = location.pathname.match(/^\/blog\/([^/]+)$/);
        if (match) {
            const slug = match[1];
            const post = getPost(slug);
            return post && post.type === 'html';
        }
        return false;
    }, [location.pathname]);

    if (isHtmlPost) {
        return <Outlet />;
    }

    return (
        <>
            <aside>
                <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                    <img
                        src={isMoving ? hardImage : easyImage}
                        alt="Sunsac"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            margin: '0 auto 1rem',
                            objectFit: 'cover',
                            transition: 'transform 0.2s ease',
                            transform: isMoving ? 'scale(1.1)' : 'scale(1)',
                            border: '2px solid var(--border-color, #e5e7eb)'
                        }}
                    />
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
