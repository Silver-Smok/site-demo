<script>
    /**
     *     Exemple d'utilisation
     *
     * 	let buttonAttributs = {
     *  href: '#',
     *   text: "Commencez aujourd'hui",
     *   };
     *
     */

    let { buttonAttributs = {} } = $props();
</script>

<a
    href={buttonAttributs.href}
    class="inline-block rounded bg-[#2594E4] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#2528e4] focus:outline-none focus:ring focus:ring-yellow-400"
>
    {buttonAttributs.text}
</a>