const express = require('express');
const routes = express.Router();
const produtos = require('./app/controllers/produtos');
const usuarios = require('./app/controllers/usuarios')

//Rotas dos produtos
routes.get('/', produtos.redirect);
routes.get('/home', produtos.home);
routes.get('/catalogo', produtos.catalogo);
routes.get('/produto/:id', produtos.produto);
routes.post('/cadastrar-produto', produtos.inserir);
routes.put('/produto/:id', produtos.atualizar);
routes.patch('/produto/:id', produtos.atualizarParcial);
routes.delete('/produto/:id', produtos.delete);

//Rotas dos usuarios
routes.get('/usuarios', usuarios.listarUsuarios);
routes.get('/usuario/:id', usuarios.usuario);
/* routes.get('/usuario/login', usuarios.login);
routes.get('/usuario/logout', usuarios.logout); */
routes.post('/cadastrar-usuario', usuarios.cadastrar);
routes.put('/usuario/:id', usuarios.atualizarUsuario);
routes.patch('/usuario/:id', usuarios.attParcialUsuario);
routes.delete('/usuario/:id', usuarios.deletarUsuario);

module.exports = routes;