function registrar(tabela, item, callback) {

    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./src/database.db');

    const colunas = Object.keys(item).join(', ');
    const valores = Array(Object.values(item).length).fill('?').join(', ');

    const sqlRegistrar = `INSERT INTO ${tabela} (${colunas}) VALUES (${valores})`;

    db.run(sqlRegistrar, Object.values(item), function(err) {
        if (err) {
            return console.error(err.message);
        }
        const id = this.lastID;
        console.log(`Registro inserido com ID: ${id}`)
        console.log(item);

        if (callback) {
            callback(id);
        }
    });
    
    db.close();
}

module.exports = registrar;