import sveltePreprocess from 'svelte-preprocess';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [
		// see https://github.com/sveltejs/svelte-preprocess
		sveltePreprocess({
			defaults: {
				style: 'scss'
			},
			scss: {
				includePaths: ['src'],
				outputStyle: 'compressed'
			},
			postcss: true
		})
	],
	kit: {
		target: '#svelte', // hydrate the <div id="svelte"> element in src/app.html
		adapter: netlifyAdapter(),
		// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
		vite: () => ({
			resolve: {
				alias: {
					$misc: path.resolve('./src/misc'),
					$data: path.resolve('./src/data')
				}
			}
		}),
		prerender: {
			enabled: true,
			pages: ['*']
		}
	}
};

export default config;
// Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
const mode = process.env.NODE_ENV;
const dev = mode === 'development';
process.env.TAILWIND_MODE = dev ? 'watch' : 'build';
