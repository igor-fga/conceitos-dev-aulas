module.exports = {
  //presets: Conjuntos de configurações criadas por terceiros
  presets: [
    '@babel/preset-env', //Converter o javascript baseado no ambiente da nossa aplicação. ele convert somente o que os browser não entende.
    '@babel/preset-react' //Ele que entende o HTML dentro do javascript.
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};