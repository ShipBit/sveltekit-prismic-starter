# sveltekit-prismic-starter

This project is an opinionated starter kit to create a fresh website powered by SvelteKit with several preconfigured dev goodies:

-   TypeScript
-   prettier & eslint
-   Tailwind, SASS, autoprefixer & html-minifier
-   Prismic.io Headless CMS
-   Netlify adapter
-   Matomo for Statistics
-   Dynamic Sitemap generation
-   favicons done right

Your TODOs:

-   change `name` in package.json to your project name
-   check & replace all occurences of 'TODO' in this project for customization & setup
-   use <https://realfavicongenerator.net/> to generate your favicons and put the output in /static. Override existing images
-   verify sitemap logic and paths in

## Developing

Install dependencies with `npm install` (or `pnpm install` or `yarn`), then start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

The project is setup to be configured to be deployed to Netlify. If you want to change this, use another [adapter](https://kit.svelte.dev/docs#adapters) for your target environment.

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
