async function listUsersAll(){

    const sqlite3 = require('sqlite3').verbose();

    const db = new sqlite3.Database('./src/database.db');

    const sqlConsultaTodos = 'SELECT * FROM usuarios';

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
};

module.exports = listUsersAll;