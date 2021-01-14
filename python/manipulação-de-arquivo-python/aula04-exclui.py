# Para excluir um arquivo voce deve importar o modulo OS e executar os.remove()
import os
os.remove("demofile.txt")

# Verificando  seo arquivo existe
# Para evitar um erro, verifique sempre seo arquivo existe
import os
if os.path.exists("demofile.txt"):
    os.remove("demofile.txt")
else:
    print('The file does note exist')

# Excluir Pasta
import os 
os.rmdir('Myfolder')
# Você só popde remover pastas vazias