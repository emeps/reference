# Um modulo é um conjunto de funções que vc deseja incluir em seu app
# Parar criar um modulo bsata salvar o codigo desejado em um arquivo com a extensão .py
def greeting(name):
  print("Hello, " + name)

# Usando modulo
from platform import system
import nome_do_arquivo
nome_do_arquivo.greeting('Casa')

#Variaveis no modulo
# modulos podem conter funções, listas... qualquer tipo de dado.
# mymodule.py
person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
}
#Em arquivo principal
import mymodule
a = mymodule.person1["age"]
print(a)

# Nomenando um modulo
import mymodule as mx
a = mx.person1['Age']
print(a)

#Modulo integrado
# Existem varios modulos embutidos nopython
import platform
x = platform.system()
print(x)

# Função dir()
# Lista todos os nomes de funções em um um modulo
import platform
x = dir(platform)
print(x)

# Importar do modulo
# Podemos importar apenas um função ou parte do modulo.
from mymodule import person1
print (person1["age"])