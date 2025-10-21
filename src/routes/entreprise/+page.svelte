<script>
	import Cta from '$lib/components/CTA.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	let titleElement;
	let paragraphs;
	let founderImage;
	let erpTitle;
	let erpBars;
	let analyticsCard;
	let managementCard;
	let erpImage;

	let presentation = {
		title: "SilverStock, qu'est-ce que c'est ?",
		content:
			"Issue d'un travail mené depuis 2015, l'application SilverStock est aujourd'hui à son stade le plus abouti et le plus fonctionnel. Développée par la synergie créée lors de brainstorming hebdomadaires entre les différents acteurs de deux entreprises de cigarette électronique (équipes de ventes, préparateurs de commandes, responsables des achats, pôle managérial...) et l'équipe de développement, ce projet s'est inscrit dans la modernisation de nos outils de gestion, jusqu'à en devenir un élément central et essentiel, nous ayant permis de nous démarquer des autres entreprises du secteur.",
		src: '/iconSilverBig.webp',
		alt: 'Vente'
	};

	let buttonCta = {
		href: '/contact',
		text: "Commencez aujourd'hui"
	};

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Animation du titre - slide depuis le haut avec fade
		gsap.from(titleElement, {
			opacity: 0,
			y: -50,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: titleElement,
				start: 'top 85%',
				toggleActions: 'play none none none'
			}
		});

		// Animation des paragraphes - apparition en cascade
		gsap.from(paragraphs.children, {
			opacity: 0,
			y: 30,
			duration: 0.8,
			stagger: 0.15,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: paragraphs,
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		// Animation de l'image du fondateur - zoom et rotation avec parallax
		gsap.from(founderImage, {
			opacity: 0,
			scale: 0.7,
			rotation: -8,
			duration: 1.2,
			ease: 'back.out(1.7)',
			scrollTrigger: {
				trigger: founderImage,
				start: 'top 85%',
				toggleActions: 'play none none none'
			}
		});

		// Effet parallax sur l'image pendant le scroll
		gsap.to(founderImage, {
			y: -50,
			ease: 'none',
			scrollTrigger: {
				trigger: founderImage,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1.5
			}
		});

		// === ANIMATIONS SECTION ERP/CRM ===

		// Animation du titre ERP/CRM - slide depuis la gauche
		gsap.from(erpTitle, {
			opacity: 0,
			x: -100,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: erpTitle,
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		// Animation des barres décoratives - croissance progressive
		gsap.from(erpBars.children, {
			width: 0,
			duration: 1,
			stagger: 0.15,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: erpBars,
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		// Animation de la carte Analytics - slide depuis la gauche
		gsap.from(analyticsCard, {
			opacity: 0,
			x: -80,
			duration: 0.8,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: analyticsCard,
				start: 'top 85%',
				toggleActions: 'play none none none'
			}
		});

		// Animation de la carte Management - slide depuis la gauche avec délai
		gsap.from(managementCard, {
			opacity: 0,
			x: -80,
			duration: 0.8,
			delay: 0.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: managementCard,
				start: 'top 85%',
				toggleActions: 'play none none none'
			}
		});

		// Animation de l'image ERP - apparition avec scale progressive au scroll
		gsap.fromTo(erpImage, 
			{
				opacity: 0,
				scale: 0.5
			},
			{
				opacity: 1,
				scale: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: erpImage,
					start: 'top 90%',
					end: 'top 50%',
					scrub: 1.5,
					toggleActions: 'play none none none'
				}
			}
		);
	});
</script>

<svelte:head>
	<title>Notre Histoire - SilverStock</title>
	<meta name="description" content="Découvrez l'histoire de SilverStock, une solution logicielle innovante développée depuis 2015 pour moderniser la gestion d'entreprise." />
</svelte:head>

<header class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold py-5">Notre histoire - SilverStock</h1>
	</div>
</header>
<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<section class="flex justify-center py-8 md:py-16 lg:py-32 shadow">
		<article class=" flex w-11/12 md:w-5/6 items-center justify-evenly flex-wrap gap-8 md:gap-0">
			<div class="flex flex-col gap-8 md:gap-12 lg:gap-20 w-full md:w-3/6">
				<div class="flex flex-col gap-5">
					<h3 bind:this={titleElement} class="text-2xl md:text-3xl self-center">
						Une Solution Logicielle Innovante pour Entreprises Modernes
					</h3>
				</div>
				<div bind:this={paragraphs} class=" flex flex-col gap-5">
					<p>
						Silver Stock est une entreprise innovante et en pleine croissance, spécialisée dans la
						création de solutions logicielles pour les entreprises. Fondée en 2014, nous avons
						travaillé dur pour développer notre produit phare, qui est maintenant commercialisé
						depuis plus d'un an.
					</p>
					<p>
						Notre équipe est composée de professionnels talentueux et passionnés, qui travaillent
						ensemble pour fournir des solutions de qualité supérieure à nos clients. Nous sommes
						fiers de notre culture d'entreprise dynamique et soudée, qui encourage la collaboration,
						l'innovation et la créativité.
					</p>
					<p>
						Chez Silver Stock, nous croyons que notre succès dépend de la réussite de nos clients.
						C'est pourquoi nous nous engageons à fournir des solutions logicielles sur mesure, qui
						répondent aux besoins spécifiques de chaque entreprise. Nous travaillons en étroite
						collaboration avec nos clients pour comprendre leurs défis et leurs objectifs, et nous
						nous efforçons de dépasser leurs attentes à chaque étape du processus.
					</p>
					<p>
						Notre histoire a commencé il y a quelques années, lorsque notre fondateur a identifié un
						besoin sur le marché pour une solution logicielle innovante. Il a réuni une équipe de
						professionnels talentueux et passionnés, et ensemble, ils ont travaillé dur pour
						développer notre produit phare. Aujourd'hui, nous sommes fiers de notre succès et nous
						sommes déterminés à continuer à innover et à fournir des solutions logicielles de
						qualité supérieure à nos clients.
					</p>
				</div>
			</div>
			<div class="py-5 w-full md:w-auto px-4 md:px-0">
				<img
					bind:this={founderImage}
					class="w-full max-w-[550px] h-auto mx-auto"
					src="/Mafrite.jpg"
					alt="Mossadegh AFRIT - Président Directeur Général"
				/>
			</div>
		</article>
	</section>

	<Cta buttonAttributs={buttonCta} tabCTA={presentation} />

	<section class="bg-white dark:bg-gray-900">
		<div class="container px-4 sm:px-6 py-10 mx-auto">
			<hr class="border-gray-200 my-8 md:my-12 dark:border-gray-700" />

			<div class="lg:flex lg:items-center py-6 md:py-10 gap-8">
				<div class="w-full space-y-8 md:space-y-12 lg:w-1/2">
					<div>
						<h1 bind:this={erpTitle} class="text-2xl md:text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
							Une application <br /> ERP / CRM
						</h1>

						<div bind:this={erpBars} class="mt-2">
							<span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
							<span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
							<span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
						</div>
					</div>

					<div bind:this={analyticsCard} class="md:flex md:items-start md:-mx-4">
						<span
							class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-6 h-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
								/>
							</svg>
						</span>

						<div class="mt-4 md:mx-4 md:mt-0">
							<h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
								Un outil analytique
							</h1>

							<p class="mt-3 text-gray-500 dark:text-gray-300">
								Nous avons mis l'accent lors du développement de SilverStock sur une multitude
								d'outils d’analyses statistiques. En temps réel ou sur une période donnée, nous
								pouvons avoir à disposition visuelle l'ensemble des ventes réalisées au sein de nos
								boutiques, les volumes de sortie de chacun des produits de notre catalogue, le
								nombre de nouveaux clients, de ventes réalisées, le bénéfice produit, le chiffre
								d'affaires global ou par magasin, et bien d'autres indicateurs essentiels à la bonne
								gestion d'une boutique, ou d'un réseau de magasins !
							</p>
						</div>
					</div>

					<div bind:this={managementCard} class="md:flex md:items-start md:-mx-4">
						<span
							class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-6 h-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
								/>
							</svg>
						</span>

						<div class="mt-4 md:mx-4 md:mt-0">
							<h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
								Un outil de gestion
							</h1>

							<p class="mt-3 text-gray-500 dark:text-gray-300">
								SilverStock intègre également un module ERP complet pour vous aider à gérer
								efficacement l'ensemble de vos opérations quotidiennes. Grâce à cet outil, vous
								pourrez gérer votre comptabilité, vos achats, vos stocks, votre production, vos
								ressources humaines et bien plus encore. Vous pourrez ainsi suivre en temps réel vos
								indicateurs de performance, planifier votre production, gérer vos commandes
								fournisseurs, suivre l'évolution de vos coûts et optimiser votre rentabilité. Avec
								SilverStock, vous disposerez d'un outil de gestion puissant et flexible pour piloter
								votre entreprise en toute sérénité.
							</p>
						</div>
					</div>
				</div>

				<div class="hidden md:flex lg:items-center lg:w-1/2 lg:justify-center mt-8 lg:mt-0 px-4">
					<img
						bind:this={erpImage}
						class="w-full max-w-md aspect-square object-cover rounded-full"
						src="erp.jpg"
						alt=""
					/>
				</div>
			</div>

			<hr class="border-gray-200 my-8 md:my-12 dark:border-gray-700" />
		</div>
	</section>
</main>
