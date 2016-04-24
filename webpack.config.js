var config = {
  name: 'server',
  target: 'node',
  entry: [
    '.entry.js'
  ],
  output: {
    path: '.',
    filename: 'da.js',
    libraryTarget : 'commonjs2'
  },
  module: {
    preLoaders : [
      { test : /\.(js|jsx)$/, loaders : ['eslint-loader'], include : './src' },
      { test: /\.json$/, loader: 'json'}
    ],
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' }
    ]
  }

};
