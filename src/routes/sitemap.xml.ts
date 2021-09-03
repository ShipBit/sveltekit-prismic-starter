import { SITE_URL } from '$misc/constants';
import type { EndpointOutput } from '@sveltejs/kit';

export async function get(): Promise<EndpointOutput> {
	// TODO: add dynamic pages from prismic.io
	const staticPages = Object.keys(import.meta.glob('/src/routes/**/!(_)*.svelte'))
		.filter((page) => {
			const filters = ['slug]', '_', 'private', '/src/routes/index.svelte'];

			return !filters.find((filter) => page.includes(filter));
		})
		.map((page) => {
			return page
				.replace('/src/routes', SITE_URL)
				.replace('/index.svelte', '')
				.replace('.svelte', '');
		});

	return {
		body: render(staticPages),
		headers: {
			'Cache-Control': `max-age=0, s-max-age=${600}`,
			'Content-Type': 'application/xml'
		}
	};
}

// TODO: add lastmod from CI build time?
const render = (staticPages: Array<string>) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  <url>
    <loc>${SITE_URL}</loc>
    <priority>1</priority>
  </url>
${staticPages
	.map(
		(page: string) => `
  <url>
    <loc>${page}/</loc>
    <priority>${page.endsWith('datenschutz') || page.endsWith('impressum') ? 0.5 : 0.85}</priority>
  </url>`
	)
	.join('\n')}
</urlset>
`;
