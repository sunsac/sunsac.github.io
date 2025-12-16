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
            data[key] = value;
        }
    });

    return { data, content };
}

export function getPosts() {
    const modules = import.meta.glob('/src/content/*.md', { query: '?raw', eager: true });
    const posts = [];

    for (const path in modules) {
        const { default: raw } = modules[path];
        const { data, content } = parseFrontmatter(raw);
        const slug = path.split('/').pop().replace('.md', '');
        posts.push({
            slug,
            ...data,
            content
        });
    }
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPost(slug) {
    const posts = getPosts();
    return posts.find(post => post.slug === slug);
}
