module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'svg-inline-loader',
          },
        ],
      },
    ],
  },
};
