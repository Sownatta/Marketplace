const listAll = require("../../config/consultAll");
const listAllProducts = require("../../config/listAllProducts");
const consultById = require("../../config/consultById");
const listByCategory = require("../../config/listByCategory")
const deleteProduto = require("../../config/delete");
const insertProduto = require("../../config/insert");
const updateProduto = require("../../config/update");
const getProdutoUsuarioID = require("../../config/getProdutoUsuarioID");

exports.redirect = (req,res) => {
    res.redirect('/home');
};

exports.home = (req, res) => {
    res.render('layout', { body: '../views/home.ejs' });
};

exports.produto = async (req, res) => {
    const id = req.params.id;

    try {
        const produto = await consultById(id);
    
        if (produto) {
          res.render('layoutAlt', { body: '../views/produto.ejs', product: produto[0] });
        } else {
          res.status(404).send('Produto não encontrado.');
        }
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar o produto por ID.');
      }
};

exports.catalogo = async (req, res, next) => {
    try {
        const categorias = await listAll('categorias');

        let productList;

        if (req.query.categoria) {
            productList = await listByCategory(req.query.categoria);
        } else {
            productList = await listAllProducts();
        }

        res.render('layout', { body: '../views/catalogo.ejs',  productList, categorias });
    } catch (err) {
        res.status(500).send('Erro ao recuperar a lista de produtos.');
    }
};

exports.cadastrarProduto = (req, res, next) => {
    res.render('layout', { body: '../views/formProduto.ejs' })
}

exports.inserir = (req, res, next) => {
    const produto = {
        Nome: req.body.Nome,
        Estoque: req.body.Estoque,
        CategoriaID: req.body.CategoriaID,
        Preco: req.body.Preco,
        Descricao: req.body.Descricao,
        ImgURL: req.body.ImgURL,
        UsuarioID: req.session.usuario.ID
    };

    insertProduto('produtos', produto);
    res.redirect('/catalogo');
};

exports.atualizarProduto = (req, res) => {
    const id = req.params.id;

    res.render('layoutAlt', { body: '../views/formEdit.ejs', id })
}

exports.atualizar = (req, res, next) => {
    const id = req.params.id;
    const produto = {
        Nome: req.body.Nome,
        Estoque: req.body.Estoque,
        CategoriaID: req.body.CategoriaID,
        Preco: req.body.Preco,
        Descricao: req.body.Descricao,
        ImgURL: req.body.ImgURL,
        UsuarioID: req.body.UsuarioID
    };

    updateProduto(id, 'produtos', produto);

    res.send(`Produto com ID ${id} atualizado com sucesso!`);
};

exports.atualizarParcial = (req, res, next) => {
    const id = req.params.id;
    const dadosAtualizados = req.body;

    const produtoAtualizado = updateProduto(id, 'produtos', dadosAtualizados);

    if (produtoAtualizado) {
        res.send(produtoAtualizado);
    } else {
        res.status(404).send('Produto não encontrado.');
    }
};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    deleteProduto(id, 'produtos');
    res.send('Produto excluído com sucesso!');
};