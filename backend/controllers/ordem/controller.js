const bd = require('../../config/bd');
const auth = require('../../auth');
require('dotenv').config({ path: require('find-config')('.env') });

exports.listarOrdens = async (req, res) => {
    try {
        let ano = new Date().getFullYear();
    
        if (req.params.ano) {
            ano = req.params.ano;
        }

        var knexQuery = `SELECT o.id_ordem, 
        o.data,
        o.endereco,
        o.envio,
        c.nome as cliente_nome,
        (SELECT SUM(it.valor) FROM tbl_item_ordem it WHERE it.id_ordem = o.id_ordem) as valor,
        Json_object('id_status', s.id_status, 'nome',
               s.nome,
               'prazo'
               , s.prazo)                                   AS status
    FROM tbl_ordem o
    LEFT JOIN tbl_ordem_status os ON os.id_ordem = o.id_ordem AND os.ativado = 1
    LEFT JOIN tbl_status s ON s.id_status = os.id_status
    LEFT JOIN tbl_cliente c ON c.id_cliente = o.id_cliente
    WHERE  YEAR(o.data) = ${ano}`
        let result = (await bd.knex.raw(knexQuery))[0];

        result.forEach(e => {
            e.status = JSON.parse(e.status);
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