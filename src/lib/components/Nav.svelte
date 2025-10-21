<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let menuOpen = $state(false);
	let darkMode = $state(false);
	let menuElement;

	const navigation = [
		{ href: '/', label: 'Accueil' },
		{ href: '/fonctionnalite', label: 'Fonctionnalités' },
		{ href: '/entreprise', label: 'Entreprise' },
		// { href: '/offres', label: 'Offres' },
		// { href: '/assistance', label: 'Assistance' },
		{ href: '/contact', label: 'Contact' }
	];

	function toggleMenu() {
		if (window.innerWidth < 768) {
			if (!menuOpen) {
				// Ouvre le menu
				menuOpen = true;
				// Attend que le DOM soit mis à jour
				setTimeout(() => {
					gsap.fromTo(
						menuElement,
						{
							opacity: 0,
							y: -20,
							height: 0
						},
						{
							opacity: 1,
							y: 0,
							height: 'auto',
							duration: 0.3,
							ease: 'power3.out'
						}
					);
				}, 10);
			} else {
				// Ferme le menu avec animation
				closeMenuWithAnimation();
			}
		} else {
			// Sur desktop, toggle simple
			menuOpen = !menuOpen;
		}
	}

	function closeMenuWithAnimation() {
		// Anime la fermeture uniquement sur mobile
		if (window.innerWidth < 768 && menuOpen) {
			// Ajoute overflow hidden pour masquer le contenu pendant l'animation
			gsap.set(menuElement, { overflow: 'hidden' });
			
			gsap.to(menuElement, {
				opacity: 0,
				y: -20,
				height: 0,
				duration: 0.4,
				ease: 'power1.in',
				onComplete: () => {
					menuOpen = false;
					// Réinitialise les styles pour la prochaine ouverture
					gsap.set(menuElement, { opacity: 1, y: 0, height: 'auto', overflow: 'visible' });
				}
			});
		}
	}

	function toggleDarkMode() {
		darkMode = !darkMode;
		if (darkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('color-theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('color-theme', 'light');
		}
	}

	// Initialize dark mode from localStorage
	$effect(() => {
		if (typeof window !== 'undefined') {
			const savedTheme = localStorage.getItem('color-theme');
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			darkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
			if (darkMode) {
				document.documentElement.classList.add('dark');
			}
		}
	});
</script>

<nav class="bg-white border-gray-200 dark:bg-gray-900">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<!-- Logo -->
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="/notif-logo.png" class="h-8" alt="SilverStock Logo" />
			<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
				SilverStock
			</span>
		</a>

		<!-- Mobile menu button and dark mode toggle -->
		<div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
			<!-- Dark Mode Toggle -->
			<button
				onclick={toggleDarkMode}
				type="button"
				class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
			>
				{#if darkMode}
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
						></path>
					</svg>
				{:else}
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
					</svg>
				{/if}
			</button>

			<!-- Mobile menu toggle button -->
			<button
				onclick={toggleMenu}
				type="button"
				class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-default"
				aria-expanded={menuOpen}
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
		</div>

		<!-- Navigation Menu -->
		<div
			bind:this={menuElement}
			class="items-center justify-between w-full md:flex md:w-auto md:order-1 {menuOpen
				? ''
				: 'hidden'}"
			id="navbar-default"
		>
			<ul
				class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
			>
				{#each navigation as navItem}
					<li>
						<a
							href={navItem.href}
							onclick={closeMenuWithAnimation}
							class="block py-2 px-3 rounded md:p-0 {$page.url.pathname === navItem.href
								? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'
								: 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}"
							aria-current={$page.url.pathname === navItem.href ? 'page' : undefined}
						>
							{navItem.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
