const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry point
  output: {
    filename: 'main.js', // The output file name
    path: path.resolve(__dirname, 'build'), // Ensure this matches your build output folder
  },
  mode: 'production', // Set to production for the final build
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // This will match .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel loader
        },
      },
      {
        test: /\.css$/, // For handling CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Add .jsx to resolve extensions
  },
  devtool: 'source-map', // Optional, for better debugging
};
