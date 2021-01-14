# Dictionaries
# É um coleção não ordenada, mutavel e indexada, são escrito dentro de par de chaves
# com valor.
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)

# Acessando Itens
# Pode-se acessar os itens de um dicionario referindo-se ao nome da chave entre colchetes.
x = thisdict["model"]
# Ou podemos acessar atraves do metodo chamado get()
x = thisdict.get("model")

# Alterar valores
# Podemos alterar o valor de um item especificdo referindo-se ao seu nome de chave:
thisdict["year"] = 2020

# Percorrer um dicionario
# Podemos percorrer um dict utilizando for.
# Quando percorrido o retorno será as chaves e tem um metodo que retorna os valores.
# Todos os nomes de chave no dicionário.
for x in thisdict:
    print(x)
# Todos os valores do dicionário.
for x in thisdict:
    print(thisdict[x])
# POdemos utilizar a função values() para retornar os valores de um dicionário.
for x in thisdict.values():
  print(x)
# Podemos utilizar a função items() para retornar a chave e o valor.
for x, y in thisdict.items():
  print(x, y)

# Verificando se a chave existe
# Utilizamos o in para verificar se existe ou não aquele valores.
if "model" in thisdict:
  print("Yes, 'model' is one of the keys in the thisdict dictionary")

# Comprimento do dicionarios
# Determinando o tamanho do dicionarios utilizando a função len()
print(len(thisdict))

# Adicionando Itens
# Podemos criar uma chave e atribuir o valor a ela.
thisdict["color"] = "blue"
print(thisdict)

# Removendo itens
# Existe varios metodos para remover itens
# pop() remove o item com o nome de chave especificada.
thisdict.pop("model")
# Removendo o ultimo item inserido
thisdict.popitem()
print(thisdict)
# Removendo uma chave com del
del thisdict["model"]
print(thisdict)
# Removendo o dict completamente.
del thisdict
# Esvaziar o dicionarios
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.clear()
print(thisdict)

# Copiando um dicionario
# Utilizando copy()
mydic = thisdict.copy()
print(mydic)
# utilizando dict()
mydic = dict(thisdict)
print(mydic)

# Dict Aninhado
# Podemos aninhar dictionaries
myfamily = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
}
# Ou aninhando três dicionaries que ja existem em um dicnionarie.
child1 = {
  "name" : "Emil",
  "year" : 2004
}
child2 = {
  "name" : "Tobias",
  "year" : 2007
}
child3 = {
  "name" : "Linus",
  "year" : 2011
}
myfamily = {
  "child1" : child1,
  "child2" : child2,
  "child3" : child3
}

# Construtor Dict
# Podemos criar um dictionaries utilizando o construtor dict
thisdict = dict(brand="Ford", model="Mustang", year=1964)
print(thisdict)

# Outros metodos de Dictionaries:
# clear()	    Removes all the elements from the dictionary
# copy()      Returns a copy of the dictionary
# fromkeys()	Returns a dictionary with the specified keys and value
# get()	    Returns the value of the specified key
# items() 	Returns a list containing a tuple for each key value pair
# keys()	    Returns a list containing the dictionary's keys
# pop()	    Removes the element with the specified key
# popitem()	Removes the last inserted key-value pair
# setdefault()	Returns the value of the specified key. If the key does not exist: insert the key, with the specified value
# update()	Updates the dictionary with the specified key-value pairs
# values()	Returns a list of all the values in the dictionary