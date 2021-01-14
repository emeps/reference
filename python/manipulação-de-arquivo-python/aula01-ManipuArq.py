# Python tem vairias funções para criar, ler, atualizar e excluir arquivos
# open()
# Principal função para trabalhar com abertura de arquivos é open()
# Existem quatro modos diferentes de abrir um arquivo
# r - ler, abre um arquivo para leitura, erro se o arquivo não existir
# a - anexar - abre um arquivo para anexar, criar o arquivo se ele nã oexistir
# w - gravar- abre um arquivo para gravação, criar se não existir
# x - criar - cria um arquivo especificado e retorna erro se existir

# Podemos definir se o arquivo é tratado como binario ou de texto
# t - texto
# b - binario (imagens)

# Para abrir um arquivo para leitura basta especificar o nome do arquivo
f = open('demonstracao.txt')
# ou
f = open('demonstracao.txt', "rt")
# #r leitura e t de texto
