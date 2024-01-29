const express = require('express');
const routes = express.Router();
const produtos = require('./app/controllers/produtos');
const usuarios = require('./app/controllers/usuarios')
const { isAuthenticated } = require('./lib/routesAuthenticator');


//Rotas dos produtos
routes.get('/', produtos.redirect);
routes.get('/home', isAuthenticated, produtos.home);
routes.get('/catalogo', produtos.catalogo);
routes.get('/produto/:id', isAuthenticated, produtos.produto);
routes.post('/cadastrar-produto', isAuthenticated, produtos.inserir);
routes.put('/produto/:id', isAuthenticated, produtos.atualizar);
routes.patch('/produto/:id', isAuthenticated, produtos.atualizarParcial);
routes.delete('/produto/:id', isAuthenticated, produtos.delete);

//Rotas dos usuarios
routes.get('/usuarios', isAuthenticated, usuarios.listarUsuarios);
routes.get('/usuario/:id', isAuthenticated, usuarios.usuario);
routes.get('/login', usuarios.login);
routes.post('/login', usuarios.logged);
//routes.get('/usuario/logout', usuarios.logout);
routes.get('/cadastrar-usuario', usuarios.cadastrar);
routes.post('/cadastrar-usuario', usuarios.cadastro);
routes.put('/usuario/:id', isAuthenticated, usuarios.atualizarUsuario);
routes.patch('/usuario/:id', isAuthenticated, usuarios.attParcialUsuario);
routes.delete('/usuario/:id', isAuthenticated, usuarios.deletarUsuario);

module.exports = routes;