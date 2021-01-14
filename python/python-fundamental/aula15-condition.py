# O Python suporta as condições logicas usuais da matematica:
# _a_ == _b_ : igual
# _a_ != _b_ : diferente
# _a_ < _b_ : menor
# _a_ <= _b_ : menor ou igual
# _a_ > _b_ : maior 
# _a_ => _b_ : maior ou igual

# A declaração if é utilizando a palavra-chave if
a = 25
b = 30
if b > a:
    print("Sim, é maior.")
# O if testa a condição b > a caso seja verdade entra no primeiro bloco
# caso contrario ele não executanada.
# Assim como em todo o codigo Python, é preciso respeitar a indentação, pois
# ele que definirá em qual nivél o bloco se encontra.

# Caso a primeira condição não seja aceita, podemos estabelecer outra condição 
# utilizando elif.
if b < a:
    print('Não, b não é maior que a')
elif b > a:
    print('Sim, b é maior que a')
# Podemos utilizar quando if's e elif's que desejarmos. Podemos utilizar somente if ou 
# if combinado com elif

# A condição else serve para quando todas as condições anteriores forem falsas.  
if b < a:
    print('Não, b não é maior que a')
elif b == a:
    print('Não, b não é igual a a.')
else:
    print('Sim, b é maior que a')

# Podemos combinar if com elif e else, varios if's sem elif e sem else, ou podemos utilizar
# if combinado com else. Vai depender do tipo de condição exigida.

# Condição ternario para if
# Podemos simplicar a expressão if
if a > b: print('A é maior que b')

# Podemos simplificar a expressão if else 
# 2 condições
print('A') if a > b else print('B')
# 3 condições
print('A') if a > b else print('=') if a == b else print('B')

# O operador logico and, indica que a expressão é verdade se duas ou mais condições
# forem verdadeiras
a = 200
b = 33
c = 500
if a > b and c > a:
  print("Both conditions are True")

# O operador logico or indica que a expressão tem valor verdadeiro se apenas uma das condições
# for verdadeira.
if a > b or a > c:
  print("At least one of the conditions is True")

# Podemos aninhar if em cascata
if a > 10:
  print("Above ten,")
  if a > 20:
    print("and also above 20!")
  else:
    print("but not above 20.")

# As instruções em python não podem esta varias, ou seja, caso abra um if, else, função,
# while enfim, cada operação que requer um bloco especifico de codigo, precisa necessariamente
# ter instruções dentro dele. Caso descida passar para frente do codigo sem digitar nada, utilizamos
# a declaração pass, cria um bypass entre os trechos de codigos.
if b > a:
    pass