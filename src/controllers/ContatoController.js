const knex = require('../database/conexao')

module.exports = {

    async index(req, res){
    const results = await knex('contatos').orderBy('id')

    return res.json(results)
    },


    async create(req, res, next){

        try {

            const { nome } = req.body
            const { email } = req.body
            const { telefone } = req.body
            const { data_nascimento } = req.body
            const { endereco } = req.body
            await knex('contatos').insert({ nome, email, telefone, data_nascimento, endereco })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },

    async update(req,res,next){
        try {
            const { id } = req.params
            const { nome } = req.body
            const { email } = req.body
            const { telefone } = req.body
            const { data_nascimento } = req.body
            const { endereco } = req.body

            await knex('contatos').update({ nome, email, telefone, data_nascimento, endereco })
            .where({id})

            return res.send()
        } catch (error) {
            next(error)
        }
    },

    async delete(req,res,next){

        try {
            
            const {id} = req.params

            await knex('contatos')
            .where({id})
            .del()

            return res.send()

        } catch (error) {
            next(error)
        }

    }
}