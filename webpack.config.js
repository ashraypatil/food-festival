const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;



module.exports = {
  plugins: [ new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: "static", // the report outputs to an HTML file in the dist folder
  })
],  
  mode: 'development', // Set the mode to 'development'
  entry: {
  app: "./assets/js/script.js",
  events: "./assets/js/events.js",
  schedule: "./assets/js/schedule.js",
  tickets: "./assets/js/tickets.js"
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
  },
  // ...other Webpack configuration options
};
