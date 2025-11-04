const config = {
	content: [
	  "./src/**/*.{html,js,svelte,ts}",
	  "!./src/**/*.{test,spec}.{js,ts}",
	  "!./node_modules/**"
	],

	theme: {
	  extend: {},
	},

	plugins: [],
	darkMode: 'class',
  };

  module.exports = config;
