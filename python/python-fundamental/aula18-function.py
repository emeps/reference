# Uma função é um bloco de codigo que só é executado quando é chamado.
# Podemos passar dados para um função e ele pode te retornar ou não dados
# Utilizamos a palavra-chave def para criar um função.
def my_function():
  print("Hello from a function")
# Chamando uma função
my_function()

# Argumentos
# As informações podem ser passada para funções como argumentos.
# Esse argumentos são especificado apois o nome da função entre parenteses e
# para adicionar mais de um argumento, basta separar por virgula

def my_function(fname):
  print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
my_function("Linus")

# Parametros é a variavel listada entre parenteses na definição da função.
# Argumento é o valor enviado para uma função quando ela é chamada.
# Um função deve ser chamada com o numero correto de argumentos.

# Argumentos arbitrarios *args
# Se não sabemos quantos argumentos serão passados para uma função, adicioe um * antes do nome 
# do parametro na definição da função.
# Faz como que a função receba um tupla de argumetnos e podera acessar os itens de acordo
def my_function(*kids):
  print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")

# Podemos enviar argumetnos com a sintaxe chave = valor
def my_function(child3, child2, child1):
  print("The youngest child is " + child3)

my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")

# Argumentos de palavras-chave arbitrárias, **kwargs
# Se voce não souber quantos argumentos de palavra-chave serão passados para sua função
# # adicione dois asteriscos: ** antes do nome do parametro na definição da função.
def my_function(**kid):
  print("His last name is " + kid["lname"])

my_function(fname = "Tobias", lname = "Refsnes")

# Valor de parametro padrão
# Podemos estebelecer um valor padrão para um função, caso quando chamada não precise
# especificar um argumento.
def my_function(country = "Norway"):
  print("I am from " + country)

my_function("Sweden")
my_function("India")
my_function()
my_function("Brazil")

# Podemos enviar qualquer tipo de dado viar argumento para um função
# Como exempo as listas.
def my_function(food):
  for x in food:
    print(x)

fruits = ["apple", "banana", "cherry"]
my_function(fruits)

# Return
# Podemos retornar valores de uma função para o escopo global ou para dentro de outra 
# função
def my_function(x):
  return 5 * x
print(my_function(3))

# Passagem
# Assim como em laços e condicionais, as funções não podem ficar vazias, logo utilizaremos a 
# palavra-chave pass
def minhaFunction():
    pass

# Recursão
# Recursão pode ser implementada em python, que é ato de chamar a propria função dentro do escopo dela
# isso significa que pode percorrer os dados apara chegar a um resultado.
def tri_recursion(k):
  if(k > 0):
    result = k + tri_recursion(k - 1)
    print(result)
  else:
    result = 0
  return result

print("\n\nRecursion Example Results")
tri_recursion(6)