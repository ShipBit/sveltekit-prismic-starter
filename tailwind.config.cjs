const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			// primary: {
			// 	light: '#AC2A65',
			// 	DEFAULT: '#85204D',
			// 	dark: '#5A1635'
			// },
			// main: '#666666'
			// ...
		},
		extend: {
			// fontFamily: {
			// 	vollkorn: ['Vollkorn', 'serif'],
			// 	dancing: ['"Dancing Script"', 'cursive']
			// }
		}
	},
	plugins: []
};

module.exports = config;
