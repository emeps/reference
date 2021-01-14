# A herança nos permite  definir um classe que  herda todos os metodos e propriedades de outra classe.
# Classe pai é a classe que esta sendo herdada. (classe base)
# Classe filha é a classe que vai herdar outra classe. (classe derivada)
# Classe Pai
class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

#Use the Person class to create an object, and then execute the printname method:
x = Person("John", "Doe")
x.printname()
# Classe filho
class Student(Person):
    pass
# Agora a classe student tem as mesma propriedades que a classe pai
x = Student("Mike", "Olsen")
x.printname()

# Adicionando a função __init__() na classe filha
# Quando adiciona esta função a classe filha ela perde todos os atribuitos da classe pai
# PAra manter a herança do pai, temos que chama o Pai dentro da filha
class Student(Person):
    def __init__(self,fname,lname):
        Person.__init__(fname, lname)

#  Função Super()
# Esta função fará com que a classe herde todos os metodos e propriedades do seu Pai
class Student(Person):
    def __init__(self,fname,lname):
        super().__init__(self,fname, lname)
# Ao usr a  super() vc não precisa usar o nome do elemento pai, ele herdara automaticamente os metodos e propriedades.

# Adicionando Propriedades 
class Student(Person):
  def __init__(self, fname, lname,year):
    super().__init__(fname, lname)
    self.graduationyear = year
x = Student("Mike", "Olsen", 2019)

# Adicionando metodos
class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year
  def welcome(self):
    print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)
a = Student('Emerson','Patryck','2025')
a.welcome()