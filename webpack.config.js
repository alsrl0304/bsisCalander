const path = require("path");

module.exports = {
  entry: {
    index: "./src/scripts/index.jsx",
    todolist: "./src/scripts/todolist.jsx",
  },
  output: {
    path: path.resolve(__dirname, "public/javascripts"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src/scripts")],
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  mode: "development",
};
