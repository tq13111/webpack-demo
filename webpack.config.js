const base = require("./webpack.base.js");
module.exports = {
  ...base,
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  mode: "development",
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // `dart-sass` 是首选
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
};
