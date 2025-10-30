<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { gsap } from '$lib/gsap';

	let errorContainer;
	let errorCode;
	let errorMessage;
	let errorDetails;

	onMount(() => {
		// Animations d'entrée
		gsap.from(errorContainer, {
			opacity: 0,
			y: 50,
			duration: 0.8,
			ease: 'power3.out'
		});

		gsap.from(errorCode, {
			scale: 0,
			rotation: -180,
			duration: 1,
			delay: 0.3,
			ease: 'elastic.out(1, 0.5)'
		});

		gsap.from([errorMessage, errorDetails], {
			opacity: 0,
			y: 20,
			duration: 0.6,
			stagger: 0.2,
			delay: 0.6,
			ease: 'power2.out'
		});
	});
</script>

<svelte:head>
	<title>Erreur {$page.status} - SilverStock</title>
	<meta name="description" content="Une erreur s'est produite" />
</svelte:head>

<div class="min-h-screen flex items-center justify-center  dark:bg-gray-900 px-4">
	<div bind:this={errorContainer} class="max-w-2xl w-full text-center">
		<!-- Error Code avec animation -->
		<div bind:this={errorCode} class="mb-8">
			<div class="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-red-500 to-pink-600 shadow-2xl">
				<span class="text-6xl font-bold text-white">{$page.status}</span>
			</div>
		</div>

		<!-- Error Message -->
		<h1 bind:this={errorMessage} class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
			{#if $page.status === 404}
				Page Introuvable
			{:else if $page.status === 500}
				Erreur Serveur
			{:else if $page.status === 403}
				Accès Refusé
			{:else}
				Une Erreur s'est Produite
			{/if}
		</h1>

		<!-- Error Details -->
		<p bind:this={errorDetails} class="text-xl text-gray-600 dark:text-gray-400 mb-8">
			{#if $page.status === 404}
				La page que vous recherchez n'existe pas ou a été déplacée.
			{:else if $page.status === 500}
				Une erreur interne s'est produite. Nous travaillons à résoudre ce problème.
			{:else if $page.status === 403}
				Vous n'avez pas les permissions nécessaires pour accéder à cette page.
			{:else}
				{$page.error?.message || 'Une erreur inattendue s\'est produite.'}
			{/if}
		</p>

		<!-- Decorative Elements -->
		<div class="flex justify-center gap-4 mb-12">
			<div class="w-3 h-3 rounded-full bg-red-500 animate-bounce" style="animation-delay: 0ms;"></div>
			<div class="w-3 h-3 rounded-full bg-pink-500 animate-bounce" style="animation-delay: 150ms;"></div>
			<div class="w-3 h-3 rounded-full bg-purple-500 animate-bounce" style="animation-delay: 300ms;"></div>
		</div>

		<!-- Action Buttons -->
		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
			<a
				href="/"
				class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
				Retour à l'accueil
			</a>

			<button
				on:click={() => history.back()}
				class="inline-flex items-center gap-2 px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-200"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
				</svg>
				Page précédente
			</button>
		</div>

		<!-- Additional Help -->
		<div class="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
			<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
				Besoin d'aide ?
			</h3>
			<p class="text-gray-600 dark:text-gray-400 mb-4">
				Si le problème persiste, n'hésitez pas à nous contacter.
			</p>
			<div class="flex flex-wrap gap-3 justify-center">
				<a
					href="/contact"
					class="inline-flex items-center gap-2 px-6 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
					Nous contacter
				</a>
				
			</div>
		</div>

		<!-- Error Details for Development -->
		{#if $page.error?.message && import.meta.env.DEV}
			<details class="mt-8 text-left">
				<summary class="cursor-pointer text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
					Détails techniques (mode développement)
				</summary>
				<pre class="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg text-xs text-red-600 dark:text-red-400 overflow-auto">{$page.error.message}</pre>
			</details>
		{/if}
	</div>
</div>

<style>
	@keyframes bounce {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.animate-bounce {
		animation: bounce 1s infinite;
	}
</style>
