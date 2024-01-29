const express = require('express');
const routes = express.Router();
const produtos = require('./app/controllers/produtos');
const usuarios = require('./app/controllers/usuarios');
const categorias = require('./app/controllers/categorias');
const { isAuthenticated } = require('./lib/routesAuthenticator');

//Rotas de categorias
routes.get('/categorias', categorias.categorias);
routes.post('/registrar-categoria', categorias.registroCategoria);
routes.put('/categoria/:id', categorias.attCategoria);
routes.patch('/categoria/:id', categorias.attCategoriaPart);
routes.delete('/categoria/:id', categorias.deletarCategoria);


//Rotas dos produtos
routes.get('/', produtos.redirect);
routes.get('/home', isAuthenticated, produtos.home);
routes.get('/catalogo', produtos.catalogo);
routes.get('/produto/:id', isAuthenticated, produtos.produto);
routes.post('/cadastrar-produto', produtos.inserir);
routes.put('/produto/:id', produtos.atualizar);
routes.patch('/produto/:id', isAuthenticated, produtos.atualizarParcial);
routes.delete('/produto/:id', produtos.delete);

//Rotas dos usuarios
routes.get('/usuarios', isAuthenticated, usuarios.listarUsuarios);
routes.get('/usuario/:id', isAuthenticated, usuarios.usuario);
routes.get('/login', usuarios.login);
routes.post('/login', usuarios.logged);
routes.get('/cadastrar-usuario', isAuthenticated, usuarios.cadastrar);
routes.post('/cadastrar-usuario', usuarios.cadastro);
routes.put('/usuario/:id', usuarios.atualizarUsuario);
routes.patch('/usuario/:id', isAuthenticated, usuarios.attParcialUsuario);
routes.delete('/usuario/:id', usuarios.deletarUsuario);

module.exports = routes;