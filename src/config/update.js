function atualizarRegistro(id, tabela, valores) {

    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./src/database.db');

    const colunas = Object.keys(valores).map(coluna => `${coluna} = ?`).join(', ');

    const sqlAtualizar = `UPDATE ${tabela} SET ${colunas} WHERE id = ?`;

    const parametros = [...Object.values(valores), id];

    //==> Executar update <==
    db.run(sqlAtualizar, parametros, function(err) {
        if (err) {
            return console.error(err.message);
        }

        console.log(`Registros atualizados: ${this.changes}`);
    });

    db.close();
}

module.exports = atualizarRegistro;