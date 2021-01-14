# As variveis são containers para armazenar valores de dados.
# O python não tem comando para declarar uma variavel.
# Uma variavel é criada seguindo uma série de critérios para nomes e deve conter um valor.
from os import devnull


nome = "python"
idade = 10
# As variaveis não possuem tipo, ou seja, são de tipagem dinamica, isso quer dizer
# que ela pode assumir qualquer tipo em qualquer instante do codigo.
nome = 553623
idade = "Uma String aqui?"
"""
Os tipos de variaveis depende do seu uso, temos:
inteiros são numeros naturais
flutuantes são numeros reais
strings conjuento de caracteres
booleanos são valores logicos, true ou false
entre outros.
"""
# Os nomes de variaveis podem ser curtos ou descritivos mas devem seguir as seguintes regras
# O nome da varaivel deve começar com caracteres do tipo letra ou sublinhado
nome = "python"
_nome= "python"
# Um nome de variavel não deve começar com numero
# O nome de variavel pode conter apenas caracteres alfanumericos e sublinhados
# (Az, 0-9 e _)
nome2002 = "nome"
_nome553 = "castanha"
# Os nomes de variaveis em python seguem CASE Sensitive que nada mais é 
# os nomes se diferem quando se escreve com letras maiusculas ou minusculas
# Exemplos de nomes permitidos e não permitidos:
#Legal variable names:
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"
#Illegal variable names:
2myvar = "John"
my-var = "John"
my var = "John"
# Podemos atribuit valor a varias variaveis em uma unica linha 
x,y,z = "xis", "ipsolon", "zeê"
print(x)  #xis
print(y) #ipsolon
print(z) #zeê
#Podemos atributir o mesmo valor a variaas variaveis
x=y=z= "mesmo valor"
print(x) #mesmo valor
print(y) #mesmo valor
print(z) #mesmo valor
# A função print() em python permite imprimir varias saidas para variaveis, 
# basta separar por virgula
x = "Python"
print("Essa função pertence" + x)
print(x, y,z ) #Imprime os valores de x, y e z
# Podemos armazenar operações matematicas ou concatenação de strings dentro de
# uma variavel.
# Com strings
x = "vida"
z = "é bela"
variavel = x + z
print (variavel)
# Com numeros
x = 5
y = 10
print(x+y)
# NOTA: não é possivel combinar um numero com uma string. Salvo se o numero
# for escrito dentro de uma string.
# Variaveis globais
# São criadas fora de um função, ou seja, uma variavel global deve esta escrito
# no escopo principal. As varaiveis globais podem ser usadas por qualquer pessoa,
# tanto dentro quanto fora das funções.
x = "awesome" #variavel global
def myfunc():
  print("Python is " + x)
myfunc()
# Caso crie a variavel com o mesmo nome dentro da função, essa variavel se torna
# local e só será usada dentro da função declarante.
# Mas você pode criar um varaivel dentro de uma função e torna-la global, basta
# adicionar a palavra chave 'global' a variavel adquire niveis globais. 
def myfunc():
  global x
  x = "fantastic"
myfunc()
print("Python is " + x)
# Pode ser usada para alterar o escopo de uma variavel