<script context="module" lang="ts">
	// import Prismic from '@prismicio/client';
	// import { Client } from '$misc/client';

	export async function load() {
		// get data here from prismic that you want to pass to all pages
		//
		// const data = await Client.query(Prismic.Predicates.at('document.type', 'my-data'));

		return {
			props: {
				// data: data.results[0]
			}
		};
	}
</script>

<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import Matomo, { matomo } from '@dexlib/svelte-matomo';
	import { page as pageStore } from '$app/stores';
	import '../app.postcss';
	import { MATOMO_URL, MATOMO_SITE_ID } from '$misc/constants';

	// export let data: any;

	// setContext('data', {
	// 	data
	// });

	onMount(() => {
		registerMatomo();
	});

	function registerMatomo() {
		matomo.disableCookies();
		matomo.enableLinkTracking();
		matomo.trackPageView();
	}

	$: if ($pageStore) registerMatomo();
</script>

<Matomo {MATOMO_URL} {MATOMO_SITE_ID} />

<slot />
