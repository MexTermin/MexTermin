module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/src'
    : '/',
    entry: {
        app: 'path/to/main.js'
    },
  };