# Python tem dois comandos de loop:
# while e for

# O while é um loop onde executa um conjunto de instruções enquanto a condição for verdadeira.
i = 1
while i < 6:
    i+=1
# O while precisa de uma condição de partida, e um incremento, caso não tenha 
# pode não ocorrer while ou ocorrer infinitas vezes.

# Declaração break
# A declaração break permite parar um laço a qualquer momento, mesmo que seja verdadeira.
while i < 22555:
    if i == 4:
        break
    i += 1

# Declaração continue
# A declaração continue permite que a iteração atual se encerre e comece a proxima
while i < 6:
  i += 1
  if i == 3:
    continue
  print(i)

# declaração else
# Asim como no if, quando a condição não for verdadeira else executa, podemos fazer com 
# que quando a condição do while não for mais verdadeira execute um else para quando for falsa
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")