# Arrays são usados para armazenar varios valores em uma unica variavel
cars = ["Ford", "Volvo", "BMW"]

# Acessando um elemento de uma array
cars[0]
cars [1] = 'McLaren'

# Comprimento de um array
# Te retorna o numero de elemento de uma array
x = len(cars)

# Looping 
# POdemos acessar todos os valores de elementos de um array
for x in cars:
    print(x)

# Adicionando elementos a um array atraves do append()
cars.append("Honda")

# Removendo um elemento de um array
position = 2
cars.pop(position)
# Ou
cars.remove('Volvo')

# Outros metodos para arrays
# append()	Adds an element at the end of the list
# clear()	    Removes all the elements from the list
# copy()	    Returns a copy of the list
# count()	    Returns the number of elements with the specified value
# extend()	Add the elements of a list (or any iterable), to the end of the current list
# index()	    Returns the index of the first element with the specified value
# insert()	Adds an element at the specified position
# pop()	    Removes the element at the specified position
# remove()	Removes the first item with the specified value
# reverse()	Reverses the order of the list
# sort()	    Sorts the list
