module.exports = {
  outputDir: process.env.NODE_ENV === 'development' ? 'dist' : 'docs',
  assetsDir: './',
  productionSourceMap: false
}
