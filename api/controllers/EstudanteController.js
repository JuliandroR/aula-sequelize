//Automaticamente ele encontra o arquivo index.js dentro da pasta
const database = require('../models');

/**
 * CRUD
 */
 class EstudanteController {
    //async: espera resolver tudo dentro do método antes do envio da resposta
    static async pegaTodosOsEstudantes(req, res) {
        try {
            //await: aguarda até receber a resposta do BD
            const todosOsEstudantes = await database.Estudantes.findAll();
            return res.status(200).json(todosOsEstudantes);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = EstudanteController