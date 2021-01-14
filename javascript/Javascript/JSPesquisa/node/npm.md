npm é o gerenciador de pacotes padrão para Node.js.

Instalando todas as dependências
Se um projeto tiver um package.jsonarquivo, executando

>'npm install'

Instalando um único pacote
Você também pode instalar um pacote específico executando

>'npm install <package-name>'

Freqüentemente, você verá mais sinalizadores adicionados a este comando:

>'--save' <instala e adiciona a entrada às dependências do 'package.json' arquivo
>'--save-dev'<instala e adiciona a entrada ao 'package.json' arquivo devDependencies.

A diferença é principalmente que devDependencies geralmente são ferramentas de desenvolvimento, como uma biblioteca de teste, embora dependenciessejam agrupadas com o aplicativo em produção.

Atualizando pacotes
A atualização também é fácil, executando

>'npm update'

Atualização de um pacote especifico

>'npm update <package-name>'

Tarefas em execução
O arquivo package.json suporta um formato para especificar tarefas de linha de comando que podem ser executadas usando

>'npm run <task-name>'

{
  "scripts": {
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
  },
}

>'npm run start-dev'

Instalação de pacotes
Existem dois tipos de instalação de pacotes:
>global <npm install -g 'package-name'
>local <npm install 'package-name'

Para visualizar as versões mais recentes de todos os pacotes npm instalados
Local
>'npm list'
Global 
>'npm list -g' 
Para obter apenas seus pacotes de nível superior (basicamente, aqueles que você disse ao npm para instalar e listou no package.json.
>'npm list --depth=0'

Instalando versões especificas
Local
>'npm install package-name@version'
Global
>'npm install -g package-name@version'

Visualizar as verões disponivel
>'npm view package-name versions

Verificando a versão recente de modulos instalados (package.json)
>'npm outdated'

Para verificar a nova versão e atualizar para versão principal
>'npm install -g npm-check-updates'
Atualiza a versões no arquivo package.json e depois disso podemos utilizar
>'npm update'

Desinstalando pacotes no npm
Local
>'npm uninstall package-name'
Global
>'npm uninstall -g package-name'
passando -S ou --save remove a dependencia do package.json
passando -D ou --save-dev remove a dependencia do package.json
