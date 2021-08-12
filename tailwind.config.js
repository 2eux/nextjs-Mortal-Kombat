module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://wallpapercave.com/wp/wp3298492.jpg')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
