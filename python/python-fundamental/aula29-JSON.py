# É sintaxe para armazenamento e troca de dados
# Podemos trabalhar em python com JSON utilizando o pacote json
import json

# json.loads()
# Este metodo analisará e converterar um string JSON para python.
# o seu retorno será dict
x =  '{ "name":"John", "age":30, "city":"New York"}'
# parse x:
y = json.loads(x)
# the result is a Python dictionary:
print(y["age"])

# json.dumps()
# Esta função permite converter dados de Python em JSON
# a Python object (dict):
x = {
  "name": "John",
  "age": 30,
  "city": "New York"
}
# convert into JSON:
y = json.dumps(x)
# the result is a JSON string:
print(y)

# POdemos converter os seguintes tipos:
# dict
# list
# tuple
# str
# int 
# float
# bool
# None
print(json.dumps({"name": "John", "age": 30}))
print(json.dumps(["apple", "bananas"]))
print(json.dumps(("apple", "bananas")))
print(json.dumps("hello"))
print(json.dumps(42))
print(json.dumps(31.76))
print(json.dumps(True))
print(json.dumps(False))
print(json.dumps(None))

# Equivalencia Python - JS
# dict	        Object
# list	        Array
# tuple	        Array
# str	        String
# int         	Number
# float	        Number
# True	        true
# False	        false
# None	        null
# Converter um string JSON não é muito facil de ler sem indentação e quabra de linha
# metodo do dumps para resolver isso
json.dumps(x,indent=4)
# Você também pode definir os separadores, o valor padrão é (",", ":"), o que significa usar uma vírgula e um espaço para separar cada objeto, e dois pontos e um espaço para separar as chaves dos valores
json.dumps(x, indent=4, separators=(". ", " = "))
# Podemos ordenar as chaves no resultado
# sort_keys determina se o resultado deve ser classificado ou não:
json.dumps(x, indent=4, sort_keys=True)