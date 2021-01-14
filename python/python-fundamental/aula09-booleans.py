# Os booleanos representa somente dois valores
# True ou False
# Utiliza muito quando precisa saber se uma expressão é verdadeira ou falsa.
# Sempre compara dois valores.
print(10 > 9) #true
print(10 == 9) #false
print(10 < 9) #false

# Quando iniciar um estrutura de condição if, sempre vai te retornar um dos dois valores.
# Podemos avaliar se uma expressão é True ou False pela função bool()
print(bool("Hello"))
print(bool(15))

# Boa parte dos valores são verdadeiros em python quando avaliados
# Exceto dados vazios, ou seja, sem espaço algum.
# zero também é avaliado com falso.
bool(False)
bool(None)
bool(0)
bool("")
bool(())
bool([])
bool({})
# Funções podem retornar valores booleanos
def myFunction() :
  return True

print(myFunction())

# Em Python existem muitas funções integradas que retornam um valor booleano.

