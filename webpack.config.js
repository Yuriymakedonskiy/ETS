const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // Ensure this path is correct
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'), // Change 'dist' to 'build' or another directory if needed
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'public'), // Serve from 'public' directory
    historyApiFallback: true, // Ensure all 404s are routed to index.html
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use the index.html from 'public'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Turns CSS into CommonJS
          'sass-loader',  // Compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|jpe?g|svg|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'src/images/[name][ext]'
        }
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
