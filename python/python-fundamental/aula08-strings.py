# Literias de strings
# Os literais de strings são colocados entre aspas simples ou aspas duplas.
print("hello")
print('hello')
# Podemos atribuir um string a uma variavel.
hello = 'hello world'
print(hello)
# Podemos atribuir um string multilinhas a uma variavel.
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)
# Podemos utilizar as aspas simples também.
# Quando as strings multilinhas não são atribuida a uma variavel, o interpretador
# do python não executa esse trecho, logo as aspas triplas pode ser usado para 
# insirir comentario no código.

# As strings tem comportamento semelhando as arrays, logo podemos acessar
# partes delas utilizando o mesmo principio para arrays
array = ['p','y','t','h','o','n']
strings = 'python'
print(array[0], strings[0]) # 'p'

# Com isso podemos fazer o fatiamento da strings, ou seja, pegar um pedaço 
# que queiramos. Quando ocorre o fatiamento ele retorna um nova array.
name = 'python'
print(name[2:4]) # logo os valores serão da posição dois até a posição 3 o quatro é excluido.

# Utilizando a indexação negativa, percorremos a string de trás para frente.
b = "Hello, World!"
print(b[-5:-2])

# Como feito em array, podemos também pegar o comprimento da string utilizando 
# a função len(), esta função retorna um inteiro indicando o tamanho da string.
a = "Hello, World!"
print(len(a))

# Conjunto de metodos de strings
# strip(): esse método remove qualquer espaço em branco do inico ou do final
a = " Hello, World! "
print(a.strip()) # returns "Hello, World!"

# lower(): retorna a string em minusculas
a = "Hello, World!"
print(a.lower())

# upper() método retornar a string em maiusculas
a = "Hello, World!"
print(a.upper())

# replace() método substitui uma string por outra string
a = "Hello, World!"
print(a.replace("H", "J"))

# split() método divide a string em substrings se encontrar instancias do separador
a = "Hello, World!"
print(a.split(",")) # returns ['Hello', ' World!']

# Verificação de strings
# Podemos verificar se um trecho ou qualquer dado esteja dentro de uma string
# utilizando in ou not in 
txt = "The rain in Spain stays mainly in the plain"
x = "ain" in txt
print(x)

txt = "The rain in Spain stays mainly in the plain"
x = "ain" not in txt
print(x) 

#Concatenação de Strings
# Para concatenar ou seja, juntar duas ou mais strings utiliza o operador mais +
a = "Hello"
b = "World"
c = a + b
print(c)

#Format Strings
# Não podemos combinar strings com numeros, mas podemos formata-lo
# A função format() pega os argumentos passado e formata e os coloca na string 
# onde os marcadores {} são.
age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))
# o format() aceita numeros ilimitados de argumentos.
# Podemos utilizar numeros caso queiramos repetir o mesmo marcador ou ordenar-los
quantity = 3
itemno = 567
price = 49.95
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
print(myorder.format(quantity, itemno, price))
# Podemos abreviar o format também, chamando sem precisar utilizar do metodo em si
nome = 'python'
print(f'meu no é {nome}')

#Caracteres de Fuga
# Podemos adicionar caracteres ilegais em strings, ou seja, caracateres de escape
texte = 'Nos somos \t champios'
# ou quando queremos adicionar aspas na strings \" texto entre aspas\"
txt = "We are the so-called \"Vikings\" from the north."
# \\ : backslash
# \' : aspas simples
# \n : nova linha
# \r : carriage return
# \t : Tab
# \b : backspace
# \f : Form Feed
# \ooo : Valor octal
# \xhh : valor hex

"""Outros metodos para Strings"""
# capitalize()	Converts the first character to upper case
# casefold()	    Converts string into lower case
# center()	    Returns a centered string
# count()         Returns the number of times a specified value occurs in a string
# encode()	    Returns an encoded version of the string
# endswith()	    Returns true if the string ends with the specified value
# expandtabs()	Sets the tab size of the string
# find()	        Searches the string for a specified value and returns the position of where it was found
# format()	    Formats specified values in a string
# format_map()	Formats specified values in a string
# index()	        Searches the string for a specified value and returns the position of where it was found
# isalnum()	    Returns True if all characters in the string are alphanumeric
# isalpha()	    Returns True if all characters in the string are in the alphabet
# isdecimal()	    Returns True if all characters in the string are decimals
# isdigit()	    Returns True if all characters in the string are digits
# isidentifier()	Returns True if the string is an identifier
# islower()	    Returns True if all characters in the string are lower case
# isnumeric() 	Returns True if all characters in the string are numeric
# isprintable()	Returns True if all characters in the string are printable
# isspace()	    Returns True if all characters in the string are whitespaces
# istitle()	    Returns True if the string follows the rules of a title
# isupper()	    Returns True if all characters in the string are upper case
# join()	        Joins the elements of an iterable to the end of the string
# ljust()	        Returns a left justified version of the string
# lower()	        Converts a string into lower case
# lstrip()	    Returns a left trim version of the string
# maketrans()	    Returns a translation table to be used in translations
# partition()	    Returns a tuple where the string is parted into three parts
# replace()	    Returns a string where a specified value is replaced with a specified value
# rfind()	        Searches the string for a specified value and returns the last position of where it was found
# rindex()	    Searches the string for a specified value and returns the last position of where it was found
# rjust()	        Returns a right justified version of the string
# rpartition()	Returns a tuple where the string is parted into three parts
# rsplit()	    Splits the string at the specified separator, and returns a list
# rstrip()	    Returns a right trim version of the string
# split()	        Splits the string at the specified separator, and returns a list
# splitlines()	Splits the string at line breaks and returns a list
# startswith()	Returns true if the string starts with the specified value
# strip()	        Returns a trimmed version of the string
# swapcase()	    Swaps cases, lower case becomes upper case and vice versa
# title()	        Converts the first character of each word to upper case
# translate()	    Returns a translated string
# upper()	        Converts a string into upper case
# zfill()	        Fills the string with a specified number of 0 values at the beginning