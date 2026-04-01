<script>
	import CanvaEmbed from '$lib/components/CanvaEmbed.svelte';
</script>

<svelte:head>
	<title>Configuration des factures - SilverStock</title>
	<meta name="description" content="Découvrez comment configurer vos factures dans SilverStock" />
</svelte:head>

<main class="dark:bg-gray-900 dark:text-white">
	<!-- Hero Section with Gradient Background -->
	<section class="relative bg-gradient-to-br from-[#2594E4] to-[#2528e4] dark:from-[#1e3a8a] dark:to-[#1e1b4b] py-16 px-6 shadow-2xl">
		<div class="max-w-6xl mx-auto text-center">
			<div class="inline-block bg-white/20 dark:bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
				<span class="text-white text-sm font-semibold">Documentation</span>
			</div>
			<h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
				Configuration des factures
			</h1>
			<p class="text-xl text-white/90 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
				Maîtrisez la configuration complète de votre système de facturation avec cette présentation interactive
			</p>
		</div>
	</section>

	<!-- Content Section -->
	<section class="py-12 px-6 bg-white dark:bg-gray-900">
		<div class="max-w-6xl mx-auto">
			<!-- Info Cards Grid -->
			<div class="grid md:grid-cols-3 gap-6 mb-12">
				<div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg border border-blue-200 dark:border-gray-600">
					<div class="flex items-center gap-3 mb-3">
						<div class="bg-[#2594E4] p-2 rounded-lg">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</div>
						<h3 class="text-lg font-bold text-gray-800 dark:text-white">Automatisation</h3>
					</div>
					<p class="text-gray-700 dark:text-gray-300 text-sm">
						Automatisez votre processus de facturation et gagnez un temps précieux
					</p>
				</div>

				<div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg border border-purple-200 dark:border-gray-600">
					<div class="flex items-center gap-3 mb-3">
						<div class="bg-purple-500 p-2 rounded-lg">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<h3 class="text-lg font-bold text-gray-800 dark:text-white">Personnalisation</h3>
					</div>
					<p class="text-gray-700 dark:text-gray-300 text-sm">
						Configurez vos factures selon vos besoins et votre identité visuelle
					</p>
				</div>

				<div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg border border-green-200 dark:border-gray-600">
					<div class="flex items-center gap-3 mb-3">
						<div class="bg-green-500 p-2 rounded-lg">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 class="text-lg font-bold text-gray-800 dark:text-white">Conformité</h3>
					</div>
					<p class="text-gray-700 dark:text-gray-300 text-sm">
						Respectez les normes légales françaises de facturation automatiquement
					</p>
				</div>
			</div>

			<!-- Presentation Section with Side Description -->
			<div class="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
				<div class="grid lg:grid-cols-3 gap-0">
					<!-- Left sidebar with info -->
					<div class="lg:col-span-1 p-8 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 border-r border-gray-200 dark:border-gray-600">
						<div class="sticky top-8">
							<h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
								Présentation interactive
							</h2>
							<p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
								Naviguez dans cette présentation pour découvrir toutes les fonctionnalités de configuration des factures.
							</p>

							<div class="space-y-4 mb-6">
								<div class="flex items-start gap-3">
									<div class="bg-[#2594E4] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
									<div>
										<p class="font-semibold text-gray-800 dark:text-white text-sm">Paramètres généraux</p>
										<p class="text-xs text-gray-600 dark:text-gray-400">Numérotation, format, mentions</p>
									</div>
								</div>
								<div class="flex items-start gap-3">
									<div class="bg-[#2594E4] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
									<div>
										<p class="font-semibold text-gray-800 dark:text-white text-sm">Personnalisation visuelle</p>
										<p class="text-xs text-gray-600 dark:text-gray-400">Logo, couleurs, mise en page</p>
									</div>
								</div>
								<div class="flex items-start gap-3">
									<div class="bg-[#2594E4] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
									<div>
										<p class="font-semibold text-gray-800 dark:text-white text-sm">Options avancées</p>
										<p class="text-xs text-gray-600 dark:text-gray-400">TVA, remises, conditions</p>
									</div>
								</div>
							</div>

							<div class="bg-blue-50 dark:bg-gray-900/50 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
								<p class="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
									<svg class="w-4 h-4 text-[#2594E4]" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
									</svg>
									<span class="font-semibold">Astuce :</span>
								</p>
								<p class="text-xs text-gray-700 dark:text-gray-300 mt-1">
									Utilisez les flèches de navigation pour parcourir la présentation
								</p>
							</div>
						</div>
					</div>

					<!-- Right side with presentation -->
					<div class="lg:col-span-2 p-8">
						<CanvaEmbed
							src="https://www.canva.com/design/DAG3EV90LS0/sae42-I0dtV2MACWyZuM7Q/view?embed"
							title="Configuration des factures - SilverStock"
							linkUrl="https://www.canva.com/design/DAG3EV90LS0/sae42-I0dtV2MACWyZuM7Q/view?utm_content=DAG3EV90LS0&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
							linkText="Ouvrir en plein écran sur Canva"
						/>
					</div>
				</div>
			</div>

			<!-- Bottom CTA Section -->
			<div class="mt-12 bg-gradient-to-r from-[#2594E4] to-[#2528e4] dark:from-[#1e3a8a] dark:to-[#1e1b4b] rounded-2xl p-8 text-center shadow-2xl">
				<h3 class="text-2xl font-bold text-white mb-3">
					Besoin d'aide supplémentaire ?
				</h3>
				<p class="text-white/90 mb-6 max-w-2xl mx-auto">
					Consultez notre documentation complète ou contactez notre équipe support pour un accompagnement personnalisé
				</p>
				<div class="flex flex-wrap gap-4 justify-center">
					<a
						href="/assistance"
						class="inline-block bg-white text-[#2594E4] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
					>
						Retour à l'assistance
					</a>
					<a
						href="/contact"
						class="inline-block bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all"
					>
						Contacter le support
					</a>
				</div>
			</div>
		</div>
	</section>
</main>
