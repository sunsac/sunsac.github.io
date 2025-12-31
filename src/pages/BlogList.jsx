import React from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../utils/posts';

export default function BlogList() {
    const allPosts = getPosts();
    const [selectedCategory, setSelectedCategory] = React.useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(allPosts.map(post => post.category).filter(Boolean))];

    // Filter posts
    const posts = selectedCategory === 'All'
        ? allPosts
        : allPosts.filter(post => post.category === selectedCategory);

    return (
        <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-lg)' }}>Blog</h1>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)', flexWrap: 'wrap' }}>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        style={{
                            padding: '6px 16px',
                            border: '1px solid',
                            borderColor: selectedCategory === category ? 'var(--primary)' : 'var(--border)',
                            borderRadius: '20px',
                            background: selectedCategory === category ? 'var(--primary)' : 'transparent',
                            color: selectedCategory === category ? 'white' : 'var(--text-muted)',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            transition: 'all 0.2s'
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

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
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
                            <span style={{
                                fontSize: '0.8rem',
                                padding: '2px 8px',
                                borderRadius: '12px',
                                backgroundColor: post.category === 'Tech' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                                color: post.category === 'Tech' ? '#3b82f6' : '#10b981',
                                border: `1px solid ${post.category === 'Tech' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(16, 185, 129, 0.2)'}`
                            }}>
                                {post.category || 'Uncategorized'}
                            </span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{post.date}</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', margin: 0 }}>{post.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
