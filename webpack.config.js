const path = require('path');

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, './src/index.tsx'),
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(css)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    fallback: {
      "path": false,
    },
  },
  output: {
    path: path.resolve(__dirname, './dist/hello-world-plugin'),
    filename: 'bundle.js',
    library: 'hello-world-plugin',
    libraryTarget: 'umd',
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
    },
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};