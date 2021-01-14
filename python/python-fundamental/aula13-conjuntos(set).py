# Um conjunto é um coleção não ordenada e não indexada
thisset = {"apple", "banana", "cherry"}
print(thisset)
# Iten de acesso
# Não  podemos acessar um conjunto referind-se a um indice ou chave.
# Mas pode-se percorrer pelo laço for ou perguntar se o valor existe com in.
thisset = {"apple", "banana", "cherry"}
for x in thisset:
  print(x)
# Verificando
print("banana" in thisset)
# Não pode alterar os itens, mas pode adionar novos itens.
# Para adicionar UM item usa o metodo add().
thisset.add("orange")
print(thisset)
# Para adicionar um conjunto de 
thisset.update(["orange", "mango", "grapes"])
print(thisset)
# Obtendo o comprimento de um conjunto
print(len(thisset))
# Removendo um item de um conjunto
thisset.remove("banana")
# Se o item não exister gera um erro.
thisset.discard("banana")
# Seo item não existir não gera um erro.
# Podemos remover o ultimpo item adicionado.
x = thisset.pop()
# Pode usar o clear() para esvaziar o conjunto.
thisset.clear()
# Para excluir todo o conjuto.
del thisset

# Juntando dois conjuntos
# union() retornar um novo conjunto contendo todos os intens de ambos os conjuntos.
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}
set3 = set1.union(set2)
print(set3)

# update() insere os itens de um conjunto em outro.
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}
set1.update(set2)
print(set1)

# Construtor set()
# Podemos criar um set, ou conjunto utilizando a função set()
thisset = set(("py","barcelona", "psg"))
print(thisset)

# Outros metodos integrados para set:
# add()	            Adds an element to the set
# clear()	            Removes all the elements from the set
# copy()	            Returns a copy of the set
# difference()	    Returns a set containing the difference between two or more sets
# difference_update()	Removes the items in this set that are also included in another, specified set
# discard()	        Remove the specified item
# intersection()	    Returns a set, that is the intersection of two other sets
# intersection_update()	Removes the items in this set that are not present in other, specified set(s)
# isdisjoint()	    Returns whether two sets have a intersection or not
# issubset()	        Returns whether another set contains this set or not
# issuperset()	    Returns whether this set contains another set or not
# pop()	            Removes an element from the set
# remove()	        Removes the specified element
# symmetric_difference()	Returns a set with the symmetric differences of two sets
# symmetric_difference_update()	inserts the symmetric differences from this set and another
# union()	            Return a set containing the union of sets
# update()	        Update the set with the union of this set and others
