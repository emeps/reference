# Para vc gravar em um arquivo existente deve-se adicionar um parametro a open()
# a - anexar - ira anexar ao final do arquivo
# w - gravação - sobrescrevera qualquer conteudo existente

# Anexando
f = open("demofile2.txt", "a")
f.write("Now the file has more content!")
f.close()
#open and read the file after the appending:
f = open("demofile2.txt", "r")
print(f.read())

# Substituindo
f = open("demofile3.txt", "w")
f.write("Woops! I have deleted the content!")
f.close()
#open and read the file after the appending:
f = open("demofile3.txt", "r")
print(f.read())

# Criar um novo arquivo
# Para criar um novo arquivo utilizar open() com os seguintes parametros
# x - Criar
# a - anexar
# w - gravar

f = open("myfile.txt", "x")
# Retornar um arquivo vazio