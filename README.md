## para poder utilizar deste projeto voce deve ter em sua máquina: nodejs, postgresql, git, postman e o npm

primeiramente precisamos ter este projeto em sua máquina você o conseguirá clonando, então, crie uma pasta em sua máquina local com o nome que desejar.

utilizaremos uma com o nome "clone", certifique-se de cria-lá
e entrar nela pelo seu CMD, ou ferramenta que preferir, caminhe até a sua pasta criada e execute o comando:
"git init" e aperte enter

![](/src/img/gitInit.PNG)


assim você poderá clonar o repositório com o comando:
"git clone https://github.com/vitor7001/Desafio_Backend.git" e apertando Enter em seguida

espere a clonagem terminar e prosseguiremos.

agora temos a pasta chamada "Desafio_Backend"

entre na mesma pelo CMD.

agora devemos instalar as bibliotecas que o projeto utiliza para seu funcionamento

utilize o comando "npm install" e aguarde o download das dependências do projeto

agora precisamos ter nossa base de dados

precisamos direcionar nosso projeto para o usuário que temos no computador
nesse projeto você pode encontrar o arquivo que configura essa conexão com o nome:
knexfile.js, certifique-se então de escrever o user e a password de acordo
com os seu user local

abra um novo CMD e entre no modo de desenvolvimento dos postgres
o comando que irei utilizar é
psql -U postgres

e após pressionar enter ele pedirá a senha para este user, digite a senha do seu user, substitua postgres pelo
seu user local

agora poderemos executar comandos psql no terminal!

digite então:
CREATE DATABASE desafio_backend;

para termos nossa base de dados

para nossa tabela iremos utilizar um arquivos que se encontra no projeto
o nome dele é 20200512223510_criar_tabela_contatos
mas o importante é que ele é uma migração que executa comando para a gente
no banco de dados, e ele é o responsável pela criação da nossa tabela
Para isso temos de executar essa migração, então, volte até o CMD que iniciamos a clonagem
do projeto, como ele já se encontrará na pasta exata precisamos somente executar o comando
que irá rodar as migrations
que é: 
npm knex migrate:latest

podemos então executar nosso projeto

Digite o comando 
npm start
e aperte a tecla enter

teremos então uma mensagem no console informando o sucesso da execução

poderemos então partir para o postman e testar nossos métodos.

na interface do postman clique em Import e seleciona a opção Link
copie este link: https://www.getpostman.com/collections/7c3ca825b57dadf2da4f
e cole na caixa e clique em continue.

será criada uma caixa com nossos métodos para serem utilizados

temos o básico de um crud: Buscar Todos os Contatos, Buscar um Contato pelo Id,
Criar Contato, Atualizar um Contato e Deletar um Contato Pelo Id

basta abrir o método que desejar e executá-lo, a resposta para suas requisições o próprio postman irá exibir
