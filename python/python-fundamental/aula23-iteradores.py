# Um iterador é um objeto que contem um numero contavel de valores,e também é iterado, ou seja, pode percorrer todos os valores.
# Um iterador é um obejto que implementa o protocolo do iterador, que consiste nos metodos 
# __iter__() e __next__()

# Interator e Interable
# Listas, tuplas, dicionaries e sets são todos objetos iteraveis.
# Eles são containeres iteraveis dos quais voce pode obter um iterador
# Todos esse objetos tem um iter() metodo que é usado para obter um iterador.
lista = ['italia', 'Japão', 'india']
interador = iter(lista)
print(next(interador))
print(next(interador))
print(next(interador))

# Da para iterar strings também
mystr = "banana"
myit = iter(mystr)

print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))

# Looping por iterador
minhatupla = ('Carro', 'onibus', 'jaca')
for y in minhatupla:
    print(y)
mystr = "banana"
for x in mystr:
  print(x)

# Criando um iterador
class meusNumeros:
    def __iter__(self):
        self.a = 1
        return self
    def __next__(self):
        # x = self.a
        # self.a = self.a +1
        # return x 
        #Parando a iteração com o metodo StopIteration
        if self.a <= 100:
            x = self.a
            self.a = self.a +1
            return x 
        else:
            raise StopIteration

myclasse = meusNumeros()
myIterador = iter(myclasse)
for x in myIterador:
    print(x)
