#Numeros em Python
Existem três tipos numericos em Python
.int
.float
.complex
As variaveis numéricas são criadas quando atribuimos valores a ela.

##Inteiro
Int é um numero inteiro, positivo ou negativo, sem valores decimais, e tem comprimento ilimitado.

inteiro = 10

##Flutuante
Float é um numero real, posito ou negativo com valores decimais e tem comprimento ilimitado.

flutuante = 10.2

##Complexo
Os números complexos são escritos com um 'j' como representando a parte imaginária.

complexo = 10+5j

##Conversão de tipos
Podemos converter qualquer tipo de variavel em qualquer outro tipo de variavel.

x = 1    # int
y = 2.8  # float
z = 1j   # complex

#convert from int to float:
a = float(x)

#convert from float to int:
b = int(y)

#convert from int to complex:
c = complex(x)

print(a)
print(b)
print(c)

print(type(a))
print(type(b))
print(type(c))


##Numeros aleatórios
Python não tem uma função que gera numeros randonicos, mas tem um módulo integrado chamando de random que pode ser usado para gerar numeros aletórios.

import random
print(random.randrange(1,10))