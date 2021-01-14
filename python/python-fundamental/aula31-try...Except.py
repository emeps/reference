# try este bloco permite testar um bloco de codigo para erros
# except permite lidar com o erro
# finally executa o codigo independentemente do resultaldo do try an except
# Quando ocorre um exceção, normalmente gera um erro e o try podem tratar esse erro
try:
  print(x)
except:
  print("An exception occurred")
# Quando o bloco try encontra um erro, o bloco exceptserá executado.
# Podemos chamar varias exceções quanto for necessario.
try:
  print(x)
except NameError:
  print("Variable x is not defined")
except:
  print("Something else went wrong")

# Else
# Podemos utilizar um else caso não encontre nenhum erro
try:
  print("Hello")
except:
  print("Something went wrong")
else:
  print("Nothing went wrong")

# finally
# Este bloco sempre será executado independente do erro dado.
try:
  print(x)
except:
  print("Something went wrong")
finally:
  print("The 'try except' is finished")
# Isso pode ser util para fechar objetos e limpar recursos.
try:
  f = open("demofile.txt")
  f.write("Lorum Ipsum")
except:
  print("Something went wrong when writing to the file")
finally:
  f.close()

#raise uma exceção
# Podemos enviar uma exceção se ocorrer um condição.
# Basta adicionar a palavrachave raise apos uma condição.
x = -1
if x < 0:
  raise Exception("Sorry, no numbers below zero")
# Podemos definir que tipo de erro deve ser gerado e o texto impresso.
