module.exports = {
  theme: {
    extends: {
      colors: {
        primary: '#2196f3',
        accent: '#03a9f4',
        secondary: '#4caf50'
      },
    }
  },
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
}