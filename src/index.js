const express = require("express")
const routes = require('./routes.js')

const app = express()

app.use(express.json())
app.use(routes)


app.use((erro, req,res,next) =>{
    res.status(erros.status || 500)
    res.json({error: error.message})
})


app.listen(3333, () => console.log("Servidor iniciado!!"))   