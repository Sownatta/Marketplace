function listUserById (id) {
    
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./src/database.db');

    sqlConsultaID = 'SELECT * FROM usuarios WHERE id = ?';

    db.all(sqlConsultaID, [id], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row);
        });
    });

    db.close();
}

module.exports = listUserById;