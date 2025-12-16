import React from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../utils/posts';

export default function BlogList() {
    const posts = getPosts();

    return (
        <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-lg)' }}>Blog</h1>
            <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                {posts.map(post => (
                    <Link to={`/blog/${post.slug}`} key={post.slug} style={{
                        display: 'block',
                        padding: 'var(--space-md)',
                        backgroundColor: 'var(--bg-card)',
                        borderRadius: 'var(--radius)',
                        textDecoration: 'none',
                        border: '1px solid transparent',
                        transition: 'border-color 0.2s'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                    >
                        <h2 style={{ margin: '0 0 var(--space-sm) 0', color: 'var(--text-main)' }}>{post.title}</h2>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 'var(--space-sm)' }}>{post.date}</div>
                        <p style={{ color: 'var(--text-muted)', margin: 0 }}>{post.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
