/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,jsx,html,js,ts}'],
  theme: {
    screens: {
      'xs': '400px',      // Custom screen for extra small devices
      'sm': '700px',      // Override default small screen breakpoint
      'md': '1024px',     // Medium screen (matches existing)
      'lg': '1280px',     // Large screen (matches existing)
      'xl': '1440px',     // Extra large screen
      '2xl': '1900px', 
    },
    colors: {
      'accent': '#011C33',
      'primary-white': '#ffffff',
      'accent-text': '#003E6B',
      'dark-text': '#18181B',
      'primary-gray': '#FBFBFB',
      'primary-gray-200': '#E4E4E7',
      'primary-gray-500': '#71717A',
      'accent-light-green': '#EBFFEB',
      'accent-text-green': '##175210',
      'accent-dark-green': '#00752B',
      'accent-light-blue': "#EBF4FF",
      'accent-text-blue': "#102652"
    },
    fontFamily: {
      sans: ['Avenir', 'sans-serif']
    },
  
  }
}

