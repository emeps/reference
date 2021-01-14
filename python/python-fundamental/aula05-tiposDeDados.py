# Tipos de dados integrados
# As variaveis podem armazenar dados de diferentes tipos.
"""Tipos de texto"""
# str - (strings)
"""Tipos de numéricos"""
# int - (inteiros)
# float - (flutuantes)
# complex - (numeros complexos)
"""Tipos de sequência"""
# list - (listas ou arrays)
# tuple - (tuplas tipo arrays)
# range - (Intervalo)
"""Tipos de mapeamento"""
# dict - (dicionario)
"""Tipos de conjunto"""
# set - (Coleção de elementos unicos)
# frozenset - (Coleção de elementos imutaveis)
"""Tipos de booleano"""
# bool - (valores logicos)
"""Tipos de binário"""
# bytes, bytearray, memoryview

# Podemos obter o tipo de de dado de um varaivel atraves da função type()
x = 5
print(type(x))
# Definindo o tipo de dado de uma varaivel
x = "hello World" #string (str)
x = 10 #inteiro (int)
x = 10.5 #flutuante (float)
x = 1j #Complexo (complex)
x = ["Maça", "Cabeça", "Python"] #lista (list)
x = ("Maça", "Cabeça", "Python") #tupla (tuple)
x = range(6) #Intervalo
x = {"Maça":"blue", "Cabeça":"blue", "Python":"snake"} #dict
x = {"Maça", "Cabeça", "Python"}  #set
x = frozenset({"Maça", "Cabeça", "Python"}) #frozenset
x = True #booelano
x = b"hello" #bytes
x = bytearray(5) #bytearray
x = memoryview(bytes(5)) #memoryview

# Podemos especificar um tipo de dado especifico utilizando as funções construtoras
x = str("Hello World")	#str	
x = int(20)	#int	
x = float(20.5)	#float	
x = complex(1j)	#complex	
x = list(("apple", "banana", "cherry"))	#list	
x = tuple(("apple", "banana", "cherry"))	#tuple	
x = range(6)	#range	
x = dict(name="John", age=36)	#dict	
x = set(("apple", "banana", "cherry"))  #set	
x = frozenset(("apple", "banana", "cherry"))	#frozenset	
x = bool(5)	#bool	
x = bytes(5)	#bytes	
x = bytearray(5)	#bytearray	
x = memoryview(bytes(5))	#memoryview