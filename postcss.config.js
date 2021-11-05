// postcss.config.js

const autoprefixer = require('autoprefixer');
const cssnanoConfig = {
    autoprefixer: false,
    discardComments: {removeAll: true},
    svgo: true
};
const cssnano = require('cssnano')({
  preset: ['default', { cssnanoConfig }]
});

// import purgeJs from 'purgecss-from-js'
// import purgeHtml from 'purgecss-from-html'

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['**/*.html', '**/*.js'],
  css: ['city.css'],
  safelist: ['::-webkit-scrollbar', '::-webkit-scrollbar-thumb', '::-webkit-scroll-track'],
  extractors: [
    { extractor: purgeJs, extensions: ['js'] },
    { extractor: purgeHtml, extensions: ['html'] }
  ]
}

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [cssnano] : [])
  ],
};
