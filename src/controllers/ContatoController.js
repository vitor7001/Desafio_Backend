const knex = require('../database/con')

module.exports = {

    async index(req, res){
    const results = await knex('contatos')

    return res.json(results)
    }
}