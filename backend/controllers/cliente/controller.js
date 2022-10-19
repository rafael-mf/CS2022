const bd = require('../../config/bd');
const auth = require('../../auth');
require('dotenv').config({ path: require('find-config')('.env') });

exports.listarClientes = async (req, res) => {
    try {
        var knexQuery = `SELECT id_cliente, 
        nome,
        nascimento,
        email,
        documento,
        telefone,
        endereco
    FROM tbl_clientes`
        let result = (await bd.knex.raw(knexQuery))[0];

        result.forEach(e => {
            if (e.endereco) {
                e.endereco = JSON.parse(e.endereco);
                return e;
            }
        });

        return res.status(200).json({ status: true, dados: result });
    }
    catch (erro) {
        console.log(erro);
        delete erro.sql;
        delete erro.sqlMessage;
        return res.status(500).json({ status: false, error: erro });
    }
}

exports.buscarCliente = async (req, res) => {
    try {
        var cliente_id = req.params.id;

        var knexQuery = `SELECT id_cliente, 
        nome,
        nascimento,
        email,
        documento,
        telefone,
        endereco
    FROM tbl_clientes
        WHERE id_cliente = ${cliente_id}`
        let result = (await bd.knex.raw(knexQuery))[0];

        result.forEach(e => {
            if (e.endereco) {
                e.endereco = JSON.parse(e.endereco);
                return e;
            }
        });

        return res.status(200).json({ status: true, dados: result });
    }
    catch (erro) {
        console.log(erro);
        delete erro.sql;
        delete erro.sqlMessage;
        return res.status(500).json({ status: false, error: erro });
    }
}