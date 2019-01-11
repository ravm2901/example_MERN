module.exports={
  entry: './src/index.js',
  output:{
    path:__dirname + '/public/',
    filename: 'js/bundle.js'
  },



  module : {
    rules:[
      {
          test: /\.svg$/,
          use:[
            {
              loader: 'file-loader',
              options:{
                outputPath: './img',
                name: '[name].[ext]'
              }
            }
          ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
