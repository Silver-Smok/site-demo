<script>
	import { superForm } from 'sveltekit-superforms';
	import { Button, Modal } from 'flowbite-svelte';
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/Draggable';
	import { onMount } from 'svelte';

	
	let defaultModal = false;
	export let data;
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
</script>

<svelte:head>
	<title>Contact - SilverStock</title>
	<meta
		name="description"
		content="Contactez-nous pour une démonstration personnalisée de SilverStock et découvrez comment notre solution peut transformer votre entreprise."
	/>
</svelte:head>

<section bind:this={sectionContainer} class="dark:bg-gray-900 py-20 lg:py-[120px] overflow-hidden relative z-10 min-h-screen">
	<div class="container">
		<div class="flex flex-wrap lg:justify-between -mx-4">
			<div class="w-full lg:w-1/2 xl:w-6/12 px-4">
				<div bind:this={textContainer} class="max-w-[570px] mb-12 lg:mb-0 px-10">
					<span class="block mb-4 dark:text-gray-50 font-semibold"> Contactez Nous </span>
					<h2
						class="
							dark:text-white
							mb-6
							uppercase
							font-bold
							text-3xl
							"
					>
						COMMENCEZ À PRENDRE EN MAIN VOTRE NOUVEL AVENIR PROFESSIONNEL
					</h2>
					<p class=" dark:text-gray-300 leading-relaxed mb-9">
						Vous avez des questions ? Vous souhaitez en savoir plus sur nos services ? N'hésitez pas
						à nous contacter via ce formulaire pour bénéficier d'une démonstration personnalisée.
					</p>
				</div>
			</div>
			<div class="w-full lg:w-1/2 xl:w-5/12 px-4">
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
<Modal title="Formulaire soumis" bind:open={defaultModal} autoclose>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		Votre message nous a été soumis avec succes.
	</p>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		Nous feront notre maximum pour vous répondre dans les plus brefs délais.
	</p>
	<svelte:fragment slot="footer">
		<Button>Retour</Button>
	</svelte:fragment>
</Modal>

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
