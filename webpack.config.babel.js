const babelQuery = {
  presets: [
    [
      'env',
      {
        targets: {
          browsers: ['last 2 versions'],
          ie: 11
        },
        modules: false,
        useBuiltIns: true,
        exclude: ['transform-async-to-generator', 'syntax-trailing-function-commas', 'transform-regenerator'],
        debug: true
      }
    ]
  ]
};

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/vendor.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            query: babelQuery
          }
        ]
      }
    ]
  }
};
