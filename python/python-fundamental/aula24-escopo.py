# Uma variavel esta disponivel apenas dentro da região em que foi criada. Isso chama de escopo.

#Escopo local
# Um variavel criada dentro da função ela tem o escopo local, ou seja, não vale chamar fora da função que o mesmo não existir.
def myfunc():
  x = 300
  print(x)
myfunc()

#Escopo global
# Uma variavel criada no corpo principal do codigo é um variavel global e pertence ao escopo global.
# Uma variavel no corpo principal esta disponival em qualquer escopo do codigo.
x = 300
def myfunc():
  print(x)
myfunc()
print(x)

# Podemos extrapolar o escopo local tornando um variavel local em um variavel global.
# Basta utilizar a palavra-chave global
def func():
    global x 
    x = 300
func()
print(x)
# Agora a variavel esta disponivel para qualquer lugar do codigo.
