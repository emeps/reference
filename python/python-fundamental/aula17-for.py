# A loço for é utilizando quando sabemos o tamanho, ou a quantidade de loops que precisa
# ser feito.
# Com o loop podemos executar um conjunto de instruções, uma vez para cada Item
# em uma lista, tupla, conjunto etc.
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)

# Mesmo um string é um obejto iteravel e pode conter sequencia de caracteres
for x in " banana":
    print(x)

# Assim como no while o break tbm funciona
for x in fruits:
    print(x)
    if( x == lemon):
        break
# Assim como no while o continue tbm funciona
for x in fruits:
    print(x)
    if( x == lemon):
        continue

# Função range
# A função range() retorna uma sequencia de numeros do 0 a n-1, incrementando em 1
for x in range(4):
    print(x)
# Pode padrão o intervalo inicial começa em 0, mas podemos determinar o valor inicial passando 
# por parametro.
for x in range(2,4):
    print(x)
# POdemos também alterar o numero de incremento
for x in range(2,4,2):
    print(x)

# Podemos utilizar else, do mesmo modo em while e if
for x in range(6):
  print(x)
else:
  print("Finally finished!")

# Loops aninhados
# Para cada iteração do primeiro for, o segundo executa um ciclo de iterações
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]
for x in adj:
  for y in fruits:
    print(x, y)

# Declaração de passagem
for x in [0, 1, 2]:
  pass