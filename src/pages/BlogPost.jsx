import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { getPost } from '../utils/posts';

export default function BlogPost() {
    const { slug } = useParams();
    const post = getPost(slug);

    if (!post) {
        return (
            <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
                <h1>Post not found</h1>
                <Link to="/blog">Back to blog</Link>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '65ch', margin: '0 auto' }}>
            <header style={{ marginBottom: 'var(--space-lg)', borderBottom: '1px solid var(--bg-card)', paddingBottom: 'var(--space-md)' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)', lineHeight: 1.2 }}>{post.title}</h1>
                <div style={{ color: 'var(--text-muted)' }}>{post.date}</div>
            </header>
            <div className="markdown-content">
                <Markdown>{post.content}</Markdown>
            </div>
            <div style={{ marginTop: 'var(--space-lg)', borderTop: '1px solid var(--bg-card)', paddingTop: 'var(--space-md)' }}>
                <Link to="/blog">&larr; Back to all posts</Link>
            </div>
        </div>
    );
}
