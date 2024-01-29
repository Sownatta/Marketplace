// CONSULTA POR ID
function consultById (id) {
    
    const sqlite3 = require('sqlite3').verbose();

    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./src/database.db');
        const sqlConsultaID = 'SELECT * FROM produtos WHERE id = ?';
    
        db.all(sqlConsultaID, [id], (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          db.close();
        });
      });
    }

module.exports = consultById;