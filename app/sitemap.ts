import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://gauravchandak.com/blog/${post.slug}`,
    lastModified: post.publishedAt.split(' ')[0],
  }));

  const routes = ['', '/blog'].map(
    (route) => ({
      url: `https://gauravchandak.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
