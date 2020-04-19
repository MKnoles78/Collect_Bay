const path = require("path");

module.exports = {
  entry: "./index.ts",
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  output: {
    library: "Customsearch",
    filename: "customsearch.min.js",
    path: path.resolve(__dirname, "dist")
  },
  node: {
    childProcess: "empty",
    fs: "empty",
    crypto: "empty"
  },
  module: {
    rules: [
      {
        test: /node_modules[\\/]google-auth-library[\\/]src[\\/]crypto[\\/]node[\\/]crypto/,
        use: "null-loader"
      },
      {
        test: /node_modules[\\/]https-proxy-agent[\\/]/,
        use: "null-loader"
      },
      {
        test: /node_modules[\\/]gcp-metadata[\\/]/,
        use: "null-loader"
      },
      {
        test: /node_modules[\\/]gtoken[\\/]/,
        use: "null-loader"
      },
      {
        test: /node_modules[\\/]pkginfo[\\/]/,
        use: "null-loader"
      },
      {
        test: /node_modules[\\/]semver[\\/]/,
        use: "null-loader"
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  mode: "production",
  plugins: []
};
