/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/images/banner.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        clifford: '#da373d',
        "primary-color": "#B68C5A",
        "red": "#F00"
      }
    }
  },
  plugins: [require("daisyui")],
}

