module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-img': "url('./Assets/img/LoginImage.png')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
