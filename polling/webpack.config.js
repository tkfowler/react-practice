module.exports = {
  entry: './app-client.js',
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules|app-server.js)/,
        loader: 'babel-loader'
      }
    ]
  }
};
