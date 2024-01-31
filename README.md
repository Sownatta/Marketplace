![](https://ada-site-frontend.s3.sa-east-1.amazonaws.com/home/header-logo.svg)

# 🚀 Desafio Técnico: API para um marketplace.

Descrição
---
Projeto final do módulo 04 do bootcamp VemSerTech da AdaTech & iFood.

## Executando o código localmente

1. Certifique-se de possuir instalado o [Node.js LTS](https://nodejs.org/pt-br/download/) (versão de suporte de longo prazo)

```sh
winget install OpenJS.NodeJS.LTS
```
2. Abra a pasta onde está instalado o projeto e digite `cmd` na barra de endereço

```sh
cmd
```
3. Digite `npm run start`
```sh
npm run start
``` 

## 🌌 Projeto:

Você e sua equipe foram chamados para criar uma API para um marketplace de algum
tipo de produto a sua escolha, pode ser um marketplace de livros, carros e etc.

## 🛠 O que fazer:

1. Crie uma branch deste repositório na sua conta, desenvolva o código e, ao finalizar, realize um Pull Request com a descrição da sua integração.
2. Apresente o projeto ao P.O. (Pablo Juan)

## 📋 Requisitos do Projeto:

Sua api deve ter as seguintes funcionalidades:
- Cadastro de usuário.
- Login do usuário.
- Cadastro de produtos.
- Edição do produto.
- Exclusão do produto.
- Listagem de produtos de todos os usuários.

### Cadastro de usuário

- Deve receber o nome do usuario, o email e a senha.
- Deve retornar o id do usuario caso tenha sido salvo com sucesso.

### Login do usuário

- Deve receber o email e a senha.
- Deve retornar o token ou cookie de sessão do usuario para ele conseguir acessar as outras rotas.

### Cadastro de produtos

- Deve receber os dados de um produto, junto de sua categoria/tipo e foto do
produto.

### Exclusão do produto/ Edição do produto

- Apenas o usuario dono do produto, que deve poder editar/excluir ele.

### Listagem de produtos de todos os usuários

- Deve ser possivel filtrar os produtos de acordo com a categoria e/ou id do usuario.

### Regras das rotas

- Apenas as rotas de Cadastro de usuario, Login do usuário, Listagem de produtos de todos os usuários
- Adicione ou crie um middleware para logar todas requisições que chegarem.

### Observações

A persistencia dos dados pode ocorrer via JSON. Tera pontos extras quem realizar a integração com algum banco, seja relacional ou não.


## ⚙️ Requisitos Técnicos:

- Você pode usar Node, Express e um banco de dados de sua escolha para este projeto.
- ❌ Evite usar códigos externos desnecessários, e plágio.
- 📝 O código deve ser escrito de maneira clara e limpa, seguindo boas práticas de programação.

## 📅 Cronograma:

- Janeiro de 2024.
- Prazo final 29 de Janeiro de 2024.

## 🤖 Nosso Squad

### Wilson Rocha
- LinkedIn: [Wilson Rocha](https://www.linkedin.com/in/wilsonn-rocha/)
- GitHub: [Sownatta](https://github.com/Sownatta)

### Ícaro Santos
- LinkedIn: [Ícaro Santos](https://www.linkedin.com/in/santos-icaro/)