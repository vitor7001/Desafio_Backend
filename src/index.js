const express = require("express")
const routes = require('./routes.js')

const app = express()

app.use(express.json())
app.use(routes)

//rota não existente
app.use((req,res,next) =>{
    const error = new Error('Não encontrado')
    error.status = 404
    next(error)
})

//Tratamento dos erros
app.use((error, req,res,next) =>{
    res.status(error.status || 500)
    res.json({error: error.message})
})


app.listen(3333, () => console.log("Servidor iniciado!!"))   