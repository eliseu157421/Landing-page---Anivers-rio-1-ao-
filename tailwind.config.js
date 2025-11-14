/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-beige': '#FBF9F6', // Soft, warm off-white
        'brand-rose': '#DABCB9', // Antique rose for accents
        'brand-gold': '#EADDC6', // Light, elegant gold
        'brand-dark': '#634543', // Warm dark brown for text and footer
        'brand-green': '#22c55e', // CTA green
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
