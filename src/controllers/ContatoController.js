const knex = require('../database/conexao')



module.exports = {
    //metodo que retorna todos os contatos da tabela
    async index(req, res){

        try {

        const results = await knex('contatos').orderBy('id')

        return res.status(200).json(results)

            
        } catch (error) {
            const erro = new Error('Falha ao buscar contatos')
            erro.status = 404
            next(erro)
        }


    },

    //metodo que busca um contato pelo id
    async getById(req, res){

        try {
            const {id} = req.params
            const results = await knex('contatos').where({id})
            return res.status(200).json(results)
        } catch (error) {
            const erro = new Error('Falha ao buscar contato')
            erro.status = 404
            next(erro)
        }

    },

    //metodo que cria um contato
    async create(req, res, next){
            const { nome } = req.body
            const { email } = req.body
            const { telefone } = req.body
            const { data_nascimento } = req.body
            const { endereco } = req.body
            const result = await knex.insert([{ nome, email, telefone, data_nascimento, endereco }],
                 ['*']).into('contatos')
                 .then( result =>{
                     console.log(result[0].id)
                    res.status(201)
                    .header({local: `http:localhost/contatos/${result[0].id}`})
                    .type('application/json')
                    .json(result)
                    .send()
                 })
                 .catch(error => {
                    res.status(400).json({message: 'Bad request'}).send()
                 }) 

    },

    //metodo que atualiza um contato
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

            return res.status(204).send() 
        } catch (error) {
            const erro = new Error('Falha ao inserir contato')
            erro.status = 400
            next(erro)
        }
    },

    //metodo que deleta um contato
    async delete(req,res,next){
        try {
            const {id} = req.params

            await knex('contatos')
            .where({id})
            .del()

            return res.status(204).send()         
            
        } catch (error) {
            const erro = new Error('Falha ao deletar contato')
            erro.status = 400
            next(erro)
        }

    }

}