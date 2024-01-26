function deletarRegistro(id, tabela) {

    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./src/database.db');

    const sqlExcluir = `DELETE FROM ${tabela} WHERE id = ?`;

    db.run(sqlExcluir, id, function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Registros excluídos: ${this.changes}`);
    });

    db.close();

}

module.exports = deletarRegistro;