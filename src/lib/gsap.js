import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { browser } from '$app/environment';

// Register plugins once globally - only in browser context
if (browser) {
	gsap.registerPlugin(ScrollTrigger, Draggable);
}

export { gsap, ScrollTrigger, Draggable };
