# Para abrir um arquivo utiliza a função open()
# Open() retorna um objeto de arquivo, que tem um read() metodo para eler o conteudo do arquivo
f = open('demon.txt','r')
print(f.read())
# Se o arquivo estiver localizado em outro local basta passar o caminho do arquivo

# read()
# Por padrão o read() retorna o texto inteiro, mas você também pode especificar quantos
# caracteres deseja retornar
f = open("demofile.txt", "r")
print(f.read(5))

# readline()
# Le a primeira linha linha do arquivo
f = open("demofile.txt", "r")
print(f.readline())
# Quando maior o numero de f.readline() mais linhas o python lerá
f = open("demofile.txt", "r")
for x in f:
  print(x)

# Fechando arquivos
# Um boa pratica sempre fechar o arquivo quando terminar de usa-lo
f = open("demofile.txt", "r")
print(f.readline())
f.close()
# Você deve sempre fechar seus arquivos; em alguns casos, devido ao armazenamento em buffer, as alterações feitas em um arquivo podem não aparecer até que você feche o arquivo.