class Usuario {

    constructor (Nome, CPF, DataDeNascimento, Email, Senha) {
        Object.assign(this, { Nome, CPF, DataDeNascimento, Email, Senha });
    }
    
}

module.exports = Usuario;