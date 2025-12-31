export function parseFrontmatter(text) {
    const pattern = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = text.match(pattern);
    if (!match) return { data: {}, content: text };

    const yaml = match[1];
    const content = match[2];

    const data = {};
    yaml.split('\n').forEach(line => {
        const parts = line.split(':');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const value = parts.slice(1).join(':').trim();
            // Remove quotes if present
            data[key] = value.replace(/^['"](.*)['"]$/, '$1');
        }
    });

    return { data, content };
}

export function parseHtmlMetadata(html) {
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : 'Untitled';

    const getMeta = (name) => {
        const match = html.match(new RegExp(`<meta\\s+name=["']${name}["']\\s+content=["'](.*?)["']`, 'i'));
        return match ? match[1] : '';
    };

    const description = getMeta('description');
    const date = getMeta('date') || new Date().toISOString().split('T')[0];
    const category = getMeta('category') || 'Uncategorized';

    return {
        title,
        description,
        date,
        category,
        content: html,
        type: 'html'
    };
}

export function getPosts() {
    const mdModules = import.meta.glob('/src/content/*.md', { query: '?raw', eager: true });
    const htmlModules = import.meta.glob('/src/content/*.html', { query: '?raw', eager: true });

    const posts = [];

    // Process Markdown files
    for (const path in mdModules) {
        const { default: raw } = mdModules[path];
        const { data, content } = parseFrontmatter(raw);
        const slug = path.split('/').pop().replace('.md', '');
        posts.push({
            slug,
            ...data,
            content,
            type: 'markdown'
        });
    }

    // Process HTML files
    for (const path in htmlModules) {
        const { default: raw } = htmlModules[path];
        const metadata = parseHtmlMetadata(raw);
        const slug = path.split('/').pop().replace('.html', '');
        posts.push({
            slug,
            ...metadata
        });
    }

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPost(slug) {
    const posts = getPosts();
    return posts.find(post => post.slug === slug);
}
