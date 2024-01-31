class Produto {

    constructor (Nome, Estoque, CategoriaID, Preco, Descricao, ImgURL, UsuarioID) {
        Object.assign(this, { Nome, Estoque, CategoriaID, Preco, Descricao, ImgURL, UsuarioID });
    }
    
}

module.exports = Produto;