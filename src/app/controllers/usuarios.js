const path = require('path');
const cadastrarUsuario = require(path.join(__dirname, '..', '..', 'config', 'insert'));
const atualizarUsuario = require(path.join(__dirname, '..', '..', 'config', 'update'));
const deletarUsuario = require(path.join(__dirname, '..', '..', 'config', 'delete'));
const listUsersAll = require(path.join(__dirname, '..', '..', 'config', 'listUsersAll'));
const listUserById = require(path.join(__dirname, '..', '..', 'config', 'listUserById'));
const userLogin = require(path.join(__dirname, '..', '..', 'config', 'userLogin'));


exports.listarUsuarios = async (req, res) => {
    try {
        const userList = await listUsersAll();
        res.render('layout', { body: '../views/userList.ejs', userList });
    } catch (err) {
        res.status(500).send('Erro ao recuperar a lista de usuários.');
    }
};

exports.usuario = (req, res) => {
    const id = req.params.id;
    const usuario = listUserById(id);

    if (usuario) {
        res.send(usuario);
    } else {
        res.status(404).send('Usuário não encontrado.');
    }
};

exports.login = (req, res, next) => {
    res.render('layout', { body: '../views/formLogin.ejs' });
};

exports.logged = async (req, res, next) => {
    const Email = req.body.Email;
    const Senha = req.body.Senha;

    const usuario = await userLogin(Email, Senha);

    if (usuario) {
        req.session.usuario = {
            Email: Email,
            Senha: Senha,
            ID: usuario.ID
        };

        console.log('Usuário logado:', req.session.usuario.ID);

        res.cookie('nomeDoCookie', 'valorDoCookie', { maxAge: 900000, httpOnly: true });
        res.redirect('/catalogo');
    } else {
        res.redirect('/login');
    }
};

exports.cadastrar = (req, res) => {
    res.render('layout', { body: '../views/formUser.ejs' });
}

exports.cadastro = (req, res) => {
    const usuario = req.body;

    cadastrarUsuario('usuarios', usuario, (id) => {
        res.send(`Usuário com id ${id} cadastrado com sucesso!`);
    });
};

exports.atualizarUsuario = (req, res) => {
    const id = req.params.id;
    const usuario = {
        Nome: req.body.Nome,
        DataDeNascimento: req.body.DataDeNascimento,
        cpf: req.body.cpf,
        email: req.body.Email,
        senha: req.body.Senha
    };

    atualizarUsuario(id, 'usuarios', usuario);

    res.send(`Usuario com ID ${id} atualizado com sucesso!`);
};

exports.attParcialUsuario = (req, res) => {
    const id = req.params.id;
    const dadosAtualizados = req.body;

    const usuarioAtualizado = atualizarUsuario(id, 'usuarios', dadosAtualizados);

    if (usuarioAtualizado) {
        res.send(usuarioAtualizado);
    } else {
        res.status(404).send('Usuário não encontrado.');
    }
};

exports.deletarUsuario = (req, res) => {
    const id = req.params.id;
    deletarUsuario(id, 'usuarios');
    res.send('Usuário excluído com sucesso!');
};