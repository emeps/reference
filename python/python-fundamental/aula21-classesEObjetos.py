# Python é um liguagem orientada a objetos.
# Criando um class
class MinhaClasse:
    x = 5
# Criando um objeto
# Chamando a classe criada
p1 = MinhaClasse()
print(p1.x)

# A função __init__()
# Os exemplos acima são a forma mais simples de criar classes e objetos, mas não uteis.
# Todas as classes possuem um função __init__() que sempre é executada qaundo a classe esta sendo iniciada.
# Tem basicamente a função de atribui valores as propriedades do objeto ou outras operações necessarias quando o objeto esta sendo criado.
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
p1 = Person('Python', 100)
print(p1.name, p1.age)
# Os obejtos podem conter metodos. Metodos em objetos são funções que pertencem ao objeto
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc()

# Parametro Self
# o self é uma referencia a instancia atual da classe e é usado para acessar variaveis que pertencem a classe
# Ele necessitamente não precisa ser nomeado com self, pode ter qualquer nome, mas obrigatoriamente deve ser o primeiro paramentro
# de qualquer função na classe:
class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print("Hello my name is " + abc.name)

p1 = Person("John", 36)
p1.myfunc()

# Modificando propriedades do objetos
p1.age = 40

# Excluindo uma propriedade do objeto
del p1.age

# Apagando obejtos
del p1

# Declaração de passagem 
# Class não podem estar vazias, mas quando necessitar não for utilizar no momento adicione a palavra-chave pass
# para evitar erros.
class pone:
    pass
