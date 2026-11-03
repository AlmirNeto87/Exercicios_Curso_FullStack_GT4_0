📝 Lista de Tarefas

Um projeto simples de gerenciamento de tarefas, desenvolvido com JavaScript, HTML e CSS, utilizando o JSON Server para simular uma API REST e armazenar as tarefas.

O objetivo do projeto é praticar conceitos de JavaScript, manipulação do DOM, requisições HTTP e operações CRUD.

🚀 Funcionalidades
Adicionar tarefas: Permite cadastrar novas tarefas com título, descrição e data.
Listar tarefas: Exibe todas as tarefas cadastradas.
Editar tarefas: Permite modificar as informações de uma tarefa existente.
Excluir tarefas: Possibilita remover tarefas da lista.
Pesquisar por título: Filtra as tarefas de acordo com o título informado.
Pesquisar por descrição: Permite localizar tarefas através de sua descrição.
Formatar datas: Exibe as datas no padrão brasileiro (DD/MM/AAAA).
🛠️ Tecnologias utilizadas
HTML5: Estrutura da aplicação.
CSS3: Estilização e organização visual.
JavaScript: Lógica da aplicação e manipulação do DOM.
Node.js: Ambiente de execução JavaScript.
Nodemon: Reinicialização automática durante o desenvolvimento.
JSON Server: Simulação de uma API REST para armazenamento e gerenciamento das tarefas.
Boxicons: Biblioteca de ícones utilizada na interface.
📦 Instalação

Antes de executar o projeto, é necessário ter instalado:

Node.js
npm
1. Clone o repositório
bash
git clone URL_DO_REPOSITORIO

2. Acesse a pasta do projeto
bash
cd nome-do-projeto

3. Instale as dependências
bash
npm install

▶️ Executando o projeto

Para iniciar o JSON Server:

bash
npm run server


Para iniciar o Nodemon:

bash
npm run dev


Observação: Execute os comandos em terminais separados, caso ambos estejam configurados no projeto.

🌐 API REST

O projeto utiliza o JSON Server para simular uma API REST, com os dados armazenados no arquivo db.json.

O endpoint utilizado para gerenciar as tarefas é:

text
http://localhost:3000/tarefas

Operações HTTP utilizadas
Método	Funcionalidade
GET	Buscar e listar tarefas
POST	Cadastrar novas tarefas
PUT	Atualizar tarefas existentes
DELETE	Excluir tarefas
📁 Estrutura do projeto
text
lista-de-tarefas/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── db.json
├── package.json
├── package-lock.json
└── README.md


Estrutura ilustrativa, que pode ser ajustada conforme a organização real dos arquivos.

📚 Conceitos praticados

Durante o desenvolvimento deste projeto, foram trabalhados conceitos importantes:

Manipulação do DOM.
Eventos JavaScript.
Funções e estruturas condicionais.
Arrays e métodos de iteração.
Template Strings.
Fetch API.
Promises e encadeamento de .then().
Requisições HTTP.
Operações CRUD.
Manipulação de formulários.
Integração com uma API REST.
👨‍💻 Autor

Desenvolvido por Antonio Almir

Projeto desenvolvido com o objetivo de praticar e aprimorar conhecimentos em desenvolvimento web e JavaScript.