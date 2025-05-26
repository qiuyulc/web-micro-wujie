export default {
  'src/**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
  'src/**/*.{less,css}': ['stylelint --fix'],
};
