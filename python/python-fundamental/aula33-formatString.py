# format()
# esta função permite formatar partes selecionadas de um string
# Para controlar esse valores adicione marcadores de posição {} no texto
# e passe os valores a serem exibidos por meio da função format()
price = 49
txt = "The price is {} dollars"
print(txt.format(price))
# Podemos adicionar parametros dentro das chaves para especificar como converter o valor
txt = "The price is {:.2f} dollars"

# Valores multiplos
# Podemos passar qualquer quantidade de valores, basta declarar todas elas quando chamar o 
# metodo format()
quantity = 3
itemno = 567
price = 49
myorder = "I want {} pieces of item number {} for {:.2f} dollars."
print(myorder.format(quantity, itemno, price))

# Quando desejamos repetir um valor, podemos passsar o indice dos valores para
# ser exibidos em ordem
quantity = 3
itemno = 567
price = 49
myorder = "I want {0} pieces of item number {1} for {2:.2f} dollars."
print(myorder.format(quantity, itemno, price))
# Referindo mais de uma vez o mesmo valor
age = 36
name = "John"
txt = "His name is {1}. {1} is {0} years old."
print(txt.format(age, name))

# Podemos passar indices noemados também.
myorder = "I have a {carname}, it is a {model}."
print(myorder.format(carname = "Ford", model = "Mustang"))

# E por fim podemos escrever shorthand
bala = 'doce'
print(f"Esta bala é muito {bala}")