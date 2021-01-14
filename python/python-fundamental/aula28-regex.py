# RegEx ou Expressão Regular é uma sequencia de caracteres que forma um padrão
# de pesquisa. Pode ser utilizado apra verificar se um string tem certos carac
# teres

#Modulo RegEx
# Python tem um pacote embutido para trabalhar com expressões regulares.

import re
txt = 'The rain in Pedro Canario'
x = re.search('^The.*Pedro$',txt)

# Funções RegEx
# findall	Returns a list containing all matches
# search	Returns a Match object if there is a match anywhere in the string
# split	    Returns a list where the string has been split at each match
# sub	    Replaces one or many matches with a string

# Metacaracteres
# []	A set of characters	                         "[a-m]"	
# \	Signals a special sequence (can also be 
# used to escape special characters)          	"\d"	
# .	Any character (except newline character)	"he..o"	
# ^	Starts with	                                "^hello"	
# $	Ends with	                                "world$"	
# *	Zero or more occurrences	                "aix*"	
# +	One or more occurrences	                    "aix+"	
# {}	Exactly the specified number of occurrences	"al{2}"	
# |	Either or	                                "falls|stays"	
# ()	Capture and group	

# Sequencia Especiais
# \A	Returns a match if the specified characters are at the beginning of the string	"\AThe"	
# \b	Returns a match where the specified characters are at the beginning or at the end of a word
# (the "r" in the beginning is making sure that the string is being treated as a "raw string")	r"\bain"
# r"ain\b"	
# \B	Returns a match where the specified characters are present, but NOT at the beginning (or at the end) of a word
# (the "r" in the beginning is making sure that the string is being treated as a "raw string")	r"\Bain"
# r"ain\B"	
# \d	Returns a match where the string contains digits (numbers from 0-9)	"\d"	
# \D	Returns a match where the string DOES NOT contain digits	"\D"	
# \s	Returns a match where the string contains a white space character	"\s"	
# \S	Returns a match where the string DOES NOT contain a white space character	"\S"	
# \w	Returns a match where the string contains any word characters (characters from a to Z, digits from 0-9, and the underscore _ character)	"\w"	
# \W	Returns a match where the string DOES NOT contain any word characters	"\W"	
# \Z	Returns a match if the specified characters are at the end of the string	"Spain\Z"

# Sets
# [arn]	Returns a match where one of the specified characters (a, r, or n) are present	
# [a-n]	Returns a match for any lower case character, alphabetically between a and n	
# [^arn]	Returns a match for any character EXCEPT a, r, and n	
# [0123]	Returns a match where any of the specified digits (0, 1, 2, or 3) are present	
# [0-9]	Returns a match for any digit between 0 and 9	
# [0-5][0-9]	Returns a match for any two-digit numbers from 00 and 59	
# [a-zA-Z]	Returns a match for any character alphabetically between a and z, lower case OR upper case	
# [+]	In sets, +, *, ., |, (), $,{} has no special meaning, so [+] means: return a match for any + character in the string

#findall()
# Retorna um lista contendo todas as correspondencias na ordem que são encontradas
x = re.findall("ai", txt)
print(x)

# search()
# Procura na string por um correspondencia e retorna um objeto se houver uma correpondencia
# Se houver mais de uma, somente a primeria é retornada
x = re.search("\s", txt)

#split()
# Retorna uma lista onde a string foi dividida em cada correspondencia
x = re.split('\s', txt)
print(x)
# Podemos controlar o numero de ocorrencias especificando maxsplit
x = re.split("\s", txt, 1)
print(x)

# sub()
# Função substitui as correspondencias pelo texto a sua escolha
x = re.sub("\s", "9", txt)
print(x)
# podemos controlar o número de substituições, especificando o countM
x = re.sub("\s", "9", txt, 2)
print(x)

# Match object
# É um objeto que contem informações sobre a pesquisa e o resultado.
# O objeto Match possui propriedades e métodos usados ​​para recuperar informações sobre a pesquisa e o resultado:
# .span()retorna uma tupla contendo as posições inicial e final da correspondência.
# .stringretorna a string passada para a função
# .group()retorna a parte da string onde havia uma correspondência
x = re.search(r'\bS\w+',txt)
print(x.span())
print(x.string)
print(x.group())
