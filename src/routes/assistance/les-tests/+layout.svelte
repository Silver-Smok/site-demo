<script>
	import DocumentationSidebar from '$lib/components/DocumentationSidebar.svelte';
	import DocumentationSidebar2 from '$lib/components/DocumentationSidebar2.svelte';

	let { children } = $props();

	const navigation = [
		{
			title: 'Mise en route',
			color: 'blue',
			children: [
				{ title: 'Enregistrer vos identifiants (mes préférences)', url: '/assistance/les-tests/mise-en-route/identifiants' },
				{ title: 'Stocks, franchises et entités', url: '/assistance/les-tests/mise-en-route/stocks' },
				{ title: 'Configuration des mails', url: '/assistance/les-tests/mise-en-route/mails' },
				{ title: 'Configuration des factures', url: '/assistance/les-tests/mise-en-route/factures' },
				{ title: 'Configuration des SMS', url: '/assistance/les-tests/mise-en-route/sms' },
				{ title: 'Modes de paiements', url: '/assistance/les-tests/mise-en-route/paiements' },
				{ title: 'Utilisateurs (rôles et permissions)', url: '/assistance/les-tests/mise-en-route/utilisateurs' },
				{ title: 'Produits', url: '/assistance/les-tests/mise-en-route/produits' }
			]
		},
		{
			title: 'Configuration avancée',
			color: 'blue',
			children: [
				{ title: 'Fiches clients', url: '/assistance/les-tests/configuration-avancee/fiches-clients' },
				{ title: 'Gestion des poches', url: '/assistance/les-tests/configuration-avancee/poches' },
				{ title: 'Dépenses', url: '/assistance/les-tests/configuration-avancee/depenses' },
				{ title: 'Gamme Produits', url: '/assistance/les-tests/configuration-avancee/gamme-produits' },
				{ title: 'Requêtes', url: '/assistance/les-tests/configuration-avancee/requetes' },
				{ title: 'Messagerie', url: '/assistance/les-tests/configuration-avancee/messagerie' },
				{ title: 'Challenges', url: '/assistance/les-tests/configuration-avancee/challenges' },
				{ title: 'Règles Panier', url: '/assistance/les-tests/configuration-avancee/regles-panier' },
				{ title: 'Site internet', url: '/assistance/les-tests/configuration-avancee/site-internet' }
			]
		},
		{
			title: 'Utilisation',
			color: 'blue',
			children: [
				{
					title: 'Gestion des stocks',
					color: 'cyan',
					children: [
						{ title: 'Achats', url: '/assistance/les-tests/utilisation/stocks/achats' },
						{ title: 'Réassorts', url: '/assistance/les-tests/utilisation/stocks/reassorts' },
						{ title: 'Arrivages', url: '/assistance/les-tests/utilisation/stocks/arrivages' },
						{ title: 'Transferts', url: '/assistance/les-tests/utilisation/stocks/transferts' },
						{ title: 'Inventaires', url: '/assistance/les-tests/utilisation/stocks/inventaires' },
						{ title: 'Commandes Boutiques', url: '/assistance/les-tests/utilisation/stocks/commandes-boutiques' }
					]
				},
				{
					title: 'Gestion des ventes',
					color: 'cyan',
					children: [
						{ title: 'Créer une vente', url: '/assistance/les-tests/utilisation/ventes/creer-vente' },
						{ title: 'Retour / Échanges', url: '/assistance/les-tests/utilisation/ventes/retours-echanges' },
						{ title: 'Clôturer la journée', url: '/assistance/les-tests/utilisation/ventes/cloturer-journee' }
					]
				}
			]
		},
		{
			title: 'Comptabilité',
			color: 'blue',
			children: []
		}
	];
</script>

<div class="flex min-h-screen bg-white dark:bg-gray-900">
	<DocumentationSidebar2 {navigation} />

	<!-- Main content -->
	<main class="flex-1">
		{@render children()}
	</main>
</div>
