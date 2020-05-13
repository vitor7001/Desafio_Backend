
exports.up = knex => knex.schema.createTable('contatos', table =>{
    table.increments('id')
    table.string('nome', 50).notNullable()
    table.string('email', 50).notNullable()
    table.integer('telefone').notNullable()
    table.date('data_nascimento').notNullable()
    table.string('endereco', 255).notNullable()
    
})

exports.down = knex => knex.schema.dropTable('contatos')
