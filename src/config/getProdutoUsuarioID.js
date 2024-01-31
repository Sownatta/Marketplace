async function getProdutoUsuarioID (id){

    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./src/database.db');

    const sqlConsultaID = 'SELECT UsuarioID FROM produtos WHERE id = ?';

    try {
        const ID = await new Promise((resolve, reject) => {
            db.all(sqlConsultaID, [id], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.close();

        return ID;
    } catch (err) {
        console.error(err);
        db.close();
        throw err;
    }
}

module.exports = getProdutoUsuarioID;