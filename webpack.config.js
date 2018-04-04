
export default function (webpackConfig) {
  webpackConfig.module.rules.push({
    test: /\.atpl$/i,
    use: [
      {
        loader: require.resolve('atpl-loader'),
      },
    ],
  });
  return webpackConfig;
}
