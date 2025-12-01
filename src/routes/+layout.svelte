<script>
	import '../app.postcss';
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	// Masquer le footer sur les sous-routes de /assistance/les-tests
	let showFooter = $derived(!$page.url.pathname.startsWith('/assistance/les-tests'));
</script>

<Nav />

<div class="pt-16">
	{@render children()}
</div>

{#if showFooter}
	<Footer />
{/if}
