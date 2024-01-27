async function userLogin (Email, Senha) {
    
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./src/database.db');

     try {
        sqlConsultaCad = 'SELECT ID, Nome FROM usuarios WHERE Email = ? AND Senha = ?';
        
        let verificador;

        const login = await new Promise((resolve, reject) => { db.get(sqlConsultaCad, [Email, Senha], (err, row) => {
            if (err) {
                reject(err);
            } else {
                verificador = row;

                resolve(row);
            }
        });

        });
        
        if(verificador){
            db.close();
            return true;
        }

        db.close();
        return false;
    } catch (err) {
        console.error(err);
        db.close();
        return false;
    }
 }

module.exports = userLogin;