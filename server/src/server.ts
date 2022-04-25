import * as express from 'express'

const app = express()

app.use(express.json())

let fs = require('fs')
let dados = JSON.parse(fs.readFileSync(__dirname + '/dados.json', () => { }).toString())

app.post('/endpoint', (request, response) => {
    let dado = request.body
    console.log(dado)
    let chave = Object.keys(dado)[0]
    dado = dado[chave]
    dados[chave] = dado
    fs.writeFileSync(__dirname + "/dados.json", JSON.stringify(dados))
    return response.json('SUCESSO')
})
app.get('/:texto', (request, response) => {
    let a = request.params.texto
    return response.json(a)
})
app.listen(3333);