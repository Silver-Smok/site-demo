<script>
	import { superForm } from 'sveltekit-superforms';
	import { gsap, Draggable } from '$lib/gsap';
	import { onMount } from 'svelte';

	let { data } = $props();

	let defaultModal = $state(false);
	let formContainer; // Le wrapper qui contient SVG + form
	let formElement; // Le div du formulaire pour le glow
	let textContainer;
	let sectionContainer;
	
	onMount(() => {
		gsap.registerPlugin(Draggable);
		// Animation d'apparition de la section
		gsap.from(sectionContainer, {
			opacity: 0,
			duration: 0.6,
			ease: 'power2.out'
		});

		// Animation d'apparition du texte depuis la gauche
		gsap.from(textContainer, {
			opacity: 0,
			x: -50,
			duration: 0.8,
			delay: 0.3,
			ease: 'power3.out'
		});

		// Animation d'apparition du formulaire depuis la droite
		gsap.from(formContainer, {
			opacity: 0,
			x: 50,
			duration: 0.8,
			delay: 0.3,
			ease: 'power3.out',
			onComplete: () => {
				// Animation de glow bounce sur le formulaire après l'apparition
				gsap.to(formElement, {
					boxShadow: '0 0 40px 10px var(--glow-color)',
					duration: 1.5,
					ease: 'power1.inOut',
					yoyo: true,
					repeat: -1
				});

				// Rendre le formulaire draggable après l'animation d'apparition
				Draggable.create(formContainer, {
					type: 'x,y',
					edgeResistance: 0.65,
					inertia: false,
					cursor: 'grab',
					trigger: formElement,
					// Ne pas permettre le drag depuis les éléments de formulaire
					dragClickables: false,
					onClick: function(e) {
						// Empêcher le drag si on clique sur un input, textarea ou button
						const target = e.target;
						if (target.tagName === 'INPUT' || 
						    target.tagName === 'TEXTAREA' || 
						    target.tagName === 'BUTTON' ||
						    target.closest('form')) {
							return false;
						}
					},
					onPress: function(e) {
						// Ne pas démarrer le drag si on appuie sur un élément de formulaire
						const target = e.target;
						if (target.tagName === 'INPUT' || 
						    target.tagName === 'TEXTAREA' || 
						    target.tagName === 'BUTTON') {
							return false;
						}
					},
					onDragStart: function() {
						gsap.to(formElement, {
							scale: 1.05,
							duration: 0.2,
							ease: 'power2.out'
						});
					},
					onDragEnd: function() {
						gsap.to(formElement, {
							scale: 1,
							duration: 0.3,
							ease: 'power2.out'
						});
						// Revenir à la position initiale avec un effet élastique
						gsap.to(formContainer, {
							x: 0,
							y: 0,
							duration: 0.8,
							ease: 'elastic.out(1, 0.5)'
						});
					}
				});
			}
		});
	});

	const { form, errors, enhance, constraints } = superForm(data.form, {
		onResult: ({ result }) => {
			if (result.type === 'success') {
				defaultModal = true;
			}
		}
	});

	// Handle modal backdrop keyboard events for accessibility
	function handleBackdropKeydown(event) {
		if (event.key === 'Escape' || event.key === 'Enter') {
			defaultModal = false;
		}
	}
</script>

<svelte:head>
	<title>Contact - SilverStock</title>
	<meta
		name="description"
		content="Contactez-nous pour une démonstration personnalisée de SilverStock et découvrez comment notre solution peut transformer votre entreprise."
	/>
</svelte:head>

<section bind:this={sectionContainer} class="dark:bg-gray-900 py-20 lg:py-[120px] overflow-hidden relative z-10 min-h-screen">
	<div class="container mx-auto px-4">
		<div class="flex flex-wrap items-start gap-8 lg:gap-12">
			<div class="w-full lg:w-[45%] flex-shrink-0 ">
				<div bind:this={textContainer} class="max-w-[570px] mb-12 lg:mb-0 " >
					<span class="block mb-4 text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide"> Contactez Nous </span>
					<h2
						class="
							dark:text-white
							text-gray-900
							mb-6
							font-bold
							text-3xl
							sm:text-4xl
							lg:text-5xl
							leading-tight
							"
					>
						Commencez à prendre en main votre nouvel avenir professionnel
					</h2>
					<p class="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-9">
						Vous avez des questions ? Vous souhaitez en savoir plus sur nos services ? N'hésitez pas
						à nous contacter via ce formulaire pour bénéficier d'une démonstration personnalisée.
					</p>
		
				</div>
			</div>
			<div class="w-full lg:flex-1 lg:max-w-[550px]">
				<div class="relative" bind:this={formContainer}>
					<!-- SVG décoratifs EN ARRIÈRE-PLAN -->
					<div class="decorative-svg">
						<span class="absolute -top-10 -right-9">
							<img src="/svg/formSvg1.svg" alt="" />
						</span>
						<span class="absolute -right-10 top-[90px]">
							<img src="/svg/formSvg2.svg" alt="" />
						</span>
						<span class="absolute -left-7 -bottom-7">
							<img src="/svg/formSvg3.svg" alt="" />
						</span>
					</div>
					
					<!-- FORMULAIRE AU PREMIER PLAN -->
					<div
						bind:this={formElement}
						class="form-glow bg-white relative rounded-lg p-8 sm:p-12 shadow-lg"
					>
						<form method="POST" use:enhance>
						<div class="mb-6">
							<input
								name="name"
								type="text"
								bind:value={$form.name}
								{...constraints.name}
								placeholder="Nom"
								class="
										w-full
										rounded
										py-3
										px-[14px]
										{$errors.name ? 'border-red-500' : ''}
										border border-[f0f0f0]
										outline-none
										focus-visible:shadow-none
										focus:border-primary
										"
							/>
							{#if $errors.name}
								<div class="text-red-500 text-sm mb-4">{$errors.name[0]}</div>
							{/if}
						</div>
						<small></small>
						<div class="mb-6">
							<input
								name="email"
								type="email"
								bind:value={$form.email}
								{...constraints.email}
								placeholder="Email"
								class="
                        {$errors.email ? 'border-red-500' : ''}
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
							/>
							{#if $errors.email}
								<div class="text-red-500 text-sm mb-4">{$errors.email[0]}</div>
							{/if}
						</div>
						<div class="mb-6">
							<input
								name="phone"
								type="text"
								bind:value={$form.phone}
								{...constraints.phone}
								placeholder="Téléphone"
								class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        {$errors.phone ? 'border-red-500' : ''}

                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
							/>
							{#if $errors.phone}
								<div class="text-red-500 text-sm mb-4">{$errors.phone}</div>
							{/if}
						</div>
						<div class="mb-6">
							<textarea
								name="message"
								rows="6"
								bind:value={$form.message}
								{...constraints.message}
								placeholder="Votre Message"
								class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        {$errors.message ? 'border-red-500' : ''}

                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
							></textarea>
							{#if $errors.message}
								<div class="text-red-500 text-sm mb-4">{$errors.message}</div>
							{/if}
						</div>
						<div>
							<button
								type="submit"
								class="
                        w-full
                        bg-[#3056D3]
                        text-white
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
							>
								Envoyer
							</button>
						</div>
					</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Custom Modal -->
{#if defaultModal}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 dark:bg-gray-900/80"
		role="button"
		tabindex="0"
		aria-label="Fermer le modal"
		onclick={() => defaultModal = false}
		onkeydown={handleBackdropKeydown}
	>
		<div
			class="relative w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-700"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
			tabindex="-1"
			onclick={(e) => e.stopPropagation()}
			onkeydown={handleBackdropKeydown}
		>
			<!-- Modal header -->
			<div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
				<h3 id="modal-title" class="text-xl font-semibold text-gray-900 dark:text-white">
					Formulaire soumis
				</h3>
				<button
					type="button"
					class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
					onclick={() => defaultModal = false}
				>
					<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
					</svg>
					<span class="sr-only">Close modal</span>
				</button>
			</div>
			<!-- Modal body -->
			<div class="p-4 md:p-5 space-y-4">
				<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
					Votre message nous a été soumis avec succes.
				</p>
				<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
					Nous feront notre maximum pour vous répondre dans les plus brefs délais.
				</p>
			</div>
			<!-- Modal footer -->
			<div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
				<button
					type="button"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					onclick={() => defaultModal = false}
				>
					Retour
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.form-glow {
		/* Couleur bleue en light mode */
		--glow-color: rgba(59, 130, 246, 0.5);
		transition: box-shadow 0.3s ease;
		z-index: 10;
	}

	.form-glow:active {
		cursor: grabbing;
	}

	/* SVG décoratifs en arrière-plan - complètement séparés */
	.decorative-svg {
		position: absolute;
		inset: 0;
		z-index: 0;
		pointer-events: none;
	}

	/* Permettre la sélection dans les inputs */
	.form-glow input,
	.form-glow textarea,
	.form-glow button {
		user-select: text;
		cursor: auto;
	}

	.form-glow button {
		cursor: pointer;
	}

	:global(.dark) .form-glow {
		/* Couleur verte en dark mode */
		--glow-color: rgba(34, 197, 94, 0.5);
	}
</style>
