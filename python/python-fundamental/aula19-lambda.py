# Uma função lambda é uma pequena função anonima
# Essa função deste tipo pode receber inumeros argumentos, mas só pode ter uma expressão.
# lambda argumentos: expressão
x = lambda a : a + 10
print(x(5))

y = lambda a , b: a * b
print(y(10,36))

# Essa função é muito bem eficiente quando utilizada com um função definida
def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)
print(mydoubler(11))
# Nesta função ele duplica o numero que vc envia
