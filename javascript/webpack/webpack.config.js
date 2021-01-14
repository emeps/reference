const path = require('path') //CommonJS  - não é ES6

module.exports ={
    mode:'production', // Dois modos: development  ou production
    entry: './src/index.js', //Arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'public','assets','js'),
        filename: 'bundle.js'
    }, //Configuração do arquivo de saida
    module:{
        rules:[{
            exclude: /node_modules/,
            test:/ \.js$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/env']
                }
            }
        }]
    },
    devtool:'source-map'// Mapea
}