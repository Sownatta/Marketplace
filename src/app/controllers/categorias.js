const listAll = require("../../config/consultAll");
const deleteCategoria = require("../../config/delete");
const insertCategoria = require("../../config/insert");
const updateCategoria = require("../../config/update");

exports.categorias = async (req, res) => {
    try {
        const categoryList = await listAll('categorias');
        res.render('layout', { body: '../views/categorias.ejs', categoryList });
    } catch (err) {
        res.status(500).send('Erro ao recuperar a lista de categorias.');
    }
}

exports.registroCategoria = (req, res, next) => {
    const categoria = { Nome: req.body.Nome };

    insertCategoria('categorias', categoria);
    res.send('Categoria inserida com sucesso!');
};

exports.attCategoria = (req, res, next) => {
    const id = req.params.id;
    const categoria = { Nome: req.body.Nome };

    updateCategoria(id, 'categorias', categoria);

    res.send(`Categoria com ID ${id} atualizada com sucesso!`);
};

exports.attCategoriaPart = (req, res, next) => {
    const id = req.params.id;
    const dadosAtualizados = req.body;

    const categoriaAtualizada = updateCategoria(id, 'categorias', dadosAtualizados);

    if (categoriaAtualizada) {
        res.send(categoriaAtualizada);
    } else {
        res.status(404).send('Categoria não encontrado.');
    }
};

exports.deletarCategoria = (req, res, next) => {
    const id = req.params.id;
    deleteCategoria(id, 'categorias');
    res.send('Categoria excluída com sucesso!');
};