const path = require("path");

module.exports = {
  entry: "./src/main.jsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"], // Use the React preset
            },
          },
        ],
        exclude: /node_modules/, // Exclude node_modules
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"], // Resolve these file extensions
  },
  output: {
    filename: "content.js", // Output filename
    path: path.resolve(__dirname, "..", "extension"), // Output path
  },
};
