import { join } from "path";

export default  ({mode}) => ({
  mode,
  entry: join(__dirname, "src"),
  output: {
    path: join(__dirname, "dist"),
    filename:
      mode === "development" ? "[name].js" : "[name].min.js",
    libraryTarget: "umd",
    library: "starWarsNames"
  },
  resolve: {
    extensions: [".js", ".json"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
});
