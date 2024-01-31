async function deletarRegistro(id, tabela) {

    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./src/database.db');

    const sqlExcluir = `DELETE FROM ${tabela} WHERE id = ?`;

    try {
        const delRegister = await new Promise((resolve, reject) => {
            db.run(sqlExcluir, id, function(err) {
                if (err) {
                    reject(err);
                    console.error(err.message);
                } else{
                    resolve(this.changes);
                }
            });
        });

        db.close();

        console.log(`Registros excluídos: ${delRegister}`);
    } catch (err) {
        console.error(err);
        db.close();
        throw err;
    }
}

module.exports = deletarRegistro;