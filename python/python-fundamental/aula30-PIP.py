# PIP é um gerenciador de pacotes de Python
# Um pacote é todos os arquivos necessarios para um modulo
# Modulos são bibliotecas de codigos.

# Verificando se o PIP esta instalado
pip --version

# Baixando modulos
pip install camelcase

# Utilizando pacotes baixados
import camelcase
c = camelcase.CamelCase()
txt = 'hello world'
print(c.hump(txt))

# Removendo pacotes
pip unistall camelcase

# Listar pacotes
pip list
