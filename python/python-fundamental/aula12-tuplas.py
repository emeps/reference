# Tuplas é uma coleção ordenada e imutavel.
thistuple = ("apple", "banana", "cherry")
print(thistuple)

# Acessando item da tupla.
print(thistuple[1])

# Indexação negativa
# significa que começa pelo final
print(thistuple[-1])
# Podemos especificar um faixa que queremos pegar, igual a lista
print(thistuple[2:5])
# faixa negativa
print(thistuple[-4:-2])

# Alterando valores da tupla
# Depois que as tuplas são criadas não é possivel alterar os valores dela.
# Mas ha alteranativas para realizar tal feito
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)
print(x)
# Podemos percorrer a tuplas por for
for x in thistuple:
  print(x)
# Verificando se o item exsite
if "apple" in thistuple:
  print("Yes, 'apple' is in the fruits tuple")
# Comprimento da tupla
print(len(thistuple))
# Para criar um tupla com um item basta adicionar uma virgula no final
espaco = ("vetoria",)
# Como as tuplas são imutaveis logo não é possivel remover um item da tupla
# Mas podemos excluir completamente.
del espaco
# Para juntar duas tuplas utiliza o sinal de +
tupla1 = (1,2,3,4)
tupla2 = (5,6,7,8,9,0)
tuplaPrincipal = tupla1 + tupla2
print(tuplaPrincipal)
# É possivel criar um tupla com construtor tuple()
thisTupla = thistuple((2,3,3,3,2,2,2))
print(thisTupla)
# Metodos adicionais são:
# count() - conta o numero de vezes que um elemento aparece na tupla
# index() - informa qual indice o valor pertence.