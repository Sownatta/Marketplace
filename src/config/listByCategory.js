async function listByCategory(categoria) {
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./src/database.db');

    const sqlConsultaPorCategoria = 'SELECT * FROM produtos WHERE Categoria = ?';

    try {
        const productList = await new Promise((resolve, reject) => {
            db.all(sqlConsultaPorCategoria, [categoria], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.close();

        return productList;
    } catch (err) {
        console.error(err);
        db.close();
        throw err;
    }
}

module.exports = listByCategory;