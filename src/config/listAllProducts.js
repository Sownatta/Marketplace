async function listAllProducts() {
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./src/database.db');

    const sqlConsultaTodos = `SELECT produtos.*, categorias.Nome as CategoriaNome, usuarios.Nome as UsuarioNome FROM produtos
                             LEFT JOIN categorias ON produtos.CategoriaID = categorias.ID
                             LEFT JOIN usuarios ON produtos.UsuarioID = usuarios.ID`;

    try {
        const list = await new Promise((resolve, reject) => {
            db.all(sqlConsultaTodos, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.close();

        return list;
    } catch (err) {
        console.error(err);
        db.close();
        throw err;
    }
}

module.exports = listAllProducts;
