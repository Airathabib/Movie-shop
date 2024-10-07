/** @type {import('tailwindcss').Config} */
export default {
	content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		 boxShadow: {
			'my-shadow': '0px 1px 8px 7px rgb(86 207 225 / 68%)'
		 },
		 backgroundColor: {
			'myBg': 'linear-gradient(272deg, #6d7ddd, #023a28)'
		 }
		},
  },
  plugins: [],
}

