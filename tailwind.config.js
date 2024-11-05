/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          light: '#87CEEB',
          deep: '#00BFFF',
          blue: '#87CEFA',
          powder: '#B0E0E6',
          alice: '#F0F8FF',
          steel: '#4682B4',
          cornflower: '#6495ED',
          dodger: '#1E90FF',
          cerulean: '#007BA7',
        },
      },
      backgroundImage: {
        'custom-image': "url('/public/Hero.png')",
      },
    },
  },
  plugins: [],
}

