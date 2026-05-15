export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        panel: '0 24px 80px rgba(15, 23, 42, 0.24)',
      },
      colors: {
        brand: {
          orange: '#f97316',
          cream: '#f8e7d8',
          brown: '#4b2f15',
          dark: '#1b1208',
        },
        surface: '#19130c',
        panel: '#2a1f14',
      },
    },
  },
  plugins: [],
};
