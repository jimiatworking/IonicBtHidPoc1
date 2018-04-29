"# IonicBtHiPoc"

* Add jQuery as global for webpack use under
  * node_modules/@ionic/app-scripts/config/webpack.config.js
  * Add below code into plugins:[], both devConfig and prodConfig
    new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
    })
