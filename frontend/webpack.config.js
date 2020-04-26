const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), //Arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }, // arquivo que vai ser gerado
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), //Caminho dos arquivos publicos da aplicação
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'}, //Vai pegar o css do css-loader e vai injetar no nosso html
          {loader: 'css-loader'}, //Ler o arquivo css e interpretar as importações que tem no arquivo como imagem
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i, //Quantos caracteres quiser no nome. Case sensitive  
        use: {
          loader: 'file-loader',
        }
      }
    ]
  }

};