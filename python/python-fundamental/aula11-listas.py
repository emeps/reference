# Coleções em Python.
# Existem quatro tipos de dados de coleção na liguação Python.
# Listas: é um coleção ordenada e mutavel
# Tuplas: é uma coleção ordenada e imutavel
# Set: é um coleção não ordenada e não indexada e imutavel
# Dicionario: é uma coleção não ordenada, mutavel e indexada

# Listas é uma coleção ordenada e mutavel, as lista sã oescritas com colchetes.
from typing import NewType


thelista = ["apple", "banana", "cherry"]
print(thelista) #imprime todos os elementos desta lista
# Podemos ter acesso aos dados da lista informando a posição ou indice dele.
print(thelista[1]) #imprime o elemnto na posição 1
# Lembre-se que a lista tem tamanho n e começa da posição 0 até a posição n-1
# Podemos obter informações passando indexação negativa, onde -1 é o ultimo elemento da lista.
print(thelista[-1])
# Assim como a string podemos fatiar a lista, especificando onde começar e onde terminar o intervalo.
print(thelista[1:2]) #imprime somente dado na posição 1
# Ocultando o o valor inicial, o intervalo começará no primeiro item:
print(thelista[:3])
# Podemos ocultar o valor final.
print(thelista[2:])
# Podemos alterar o valor do item da lista passando a posição dele.
thelista[0] = 'python'
print(thelista)
# Podemos percorrer todos os elementos da lista utilizando loop for
for x in thelista:
    print(x)
# Cada valor de x representa o valor da thelista na posição atual.
# Podemos também verificar se existem um tipo de dado no dentro da lista.
if "python" in thelista:
    print('Sim existe.')
# Podemos obter o tamanho da lista pela função len()
print(len(thelista))
# Para adicionar itens a lista basta utilizar a função .append()
thelista.append("Adicionado")
print(thelista)
# Para adicionar o item a lista especificando a posição que ele precisa esta 
# utiliza a função insert().
thelista.insert(2,"algebra")
print(thelista)
# Existem vários métodos para remover itens de um lista
# remove()
thelista.remove("python")
print(thelista)
# pop() - remove o indice especificado ou ultimo item se o indice não for especificado)
thelista.pop()
print(thelista)
# del - remove o indice se for especificado ou exclui a lista toda.
del thelista[0]
# ou
del thelista
# clear() - esvazia a lista
thelista.clear()
print(thelista)

# Copia de uma lista
# Podemos fazer uma copia de uma lista com a o copy()
thelista = ["apple", "banana", "cherry"]
minhaLista = thelista.copy()
print(minhaLista)
# Podemos fazer copia de duas lista utilizando o metodo list()
newlista = list(thelista)

# Junta duas lista
# Podemos usar o sinal de + para juntar duas ou mais lista
newlista1 = newlista + thelista
print(newlista1)
# Podemos juntar duas lista também utilizanndo laço for e append()
for x in thelista:
    newlista1.append(x)
print(newlista1)
# Outro metodo é utilizando extend()
newlista1.extend(thelista)
print(newlista1)

# Construtor List()
# Podemos contruir um lista a partir da função list()
thelista = list(("python","foreber","vetor","oito", "propriedade"))
print(thelista)

# Temos outros metodos para lista como:
# count() - conta o numeros de vezes que um elemento aparece
numerodevezes = thelista.count("python")
# index() - retorna os indices do valor especificado
posicao = thelista.index("python")
# reverse() - inverte os elementos da lista
thelista.reverse()
# sort() - organiza a lista por ordem crescente
thelista.sort()