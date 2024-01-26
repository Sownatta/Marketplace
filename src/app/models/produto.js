class Produto {

    constructor (Nome, Estoque, Categoria, Preco, Descricao, ImgURL) {
        Object.assign(this, { Nome, Estoque, Categoria, Preco, Descricao, ImgURL });
    }
    
}

module.exports = Produto;