import path from 'node:path'

export default {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: (file) => {
        return path.resolve(file).includes(path.join('node_modules', 'vant')) ? 375 : 750
      },
      unitPrecision: 6,
      landscapeWidth: 1024,
      // exclude: [/node_modules\/vant/i]
    },
  },
}
